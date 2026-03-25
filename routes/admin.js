const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const authMiddleware = require('../middleware/auth');

function adminOnly(req, res, next) {
  if (req.user.role !== 'Admin') return res.status(403).json({ message: 'Admin access required' });
  next();
}

// GET /api/admin/stats
router.get('/stats', authMiddleware, adminOnly, async (req, res) => {
  try {
    const [usersSnap, productsSnap, ordersSnap] = await Promise.all([
      db.collection('users').get(),
      db.collection('products').get(),
      db.collection('orders').get()
    ]);

    const orders = ordersSnap.docs.map(d => d.data());
    const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0);

    res.json({
      totalUsers: usersSnap.size,
      totalProducts: productsSnap.size,
      totalOrders: ordersSnap.size,
      totalRevenue
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch stats', error: err.message });
  }
});

// GET /api/admin/users
router.get('/users', authMiddleware, adminOnly, async (req, res) => {
  try {
    const snap = await db.collection('users').get();
    const users = snap.docs.map(doc => {
      const { password, ...rest } = doc.data();
      return { id: doc.id, ...rest };
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});

// DELETE /api/admin/users/:id
router.delete('/users/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    await db.collection('users').doc(req.params.id).delete();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user', error: err.message });
  }
});

// GET /api/admin/analytics/monthly
router.get('/analytics/monthly', authMiddleware, adminOnly, async (req, res) => {
  try {
    const snap = await db.collection('orders').get();
    const monthly = {};

    snap.docs.forEach(doc => {
      const order = doc.data();
      const date = new Date(order.createdAt);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      if (!monthly[key]) monthly[key] = { month: key, revenue: 0, orders: 0 };
      monthly[key].revenue += order.total || 0;
      monthly[key].orders += 1;
    });

    res.json(Object.values(monthly).sort((a, b) => a.month.localeCompare(b.month)));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch monthly analytics', error: err.message });
  }
});

// GET /api/admin/analytics/top-products
router.get('/analytics/top-products', authMiddleware, adminOnly, async (req, res) => {
  try {
    const snap = await db.collection('orders').get();
    const productMap = {};

    snap.docs.forEach(doc => {
      const order = doc.data();
      (order.items || []).forEach(item => {
        if (!productMap[item.productId]) {
          productMap[item.productId] = { name: item.name, totalSold: 0, revenue: 0 };
        }
        productMap[item.productId].totalSold += item.quantity;
        productMap[item.productId].revenue += item.price * item.quantity;
      });
    });

    const topProducts = Object.entries(productMap)
      .map(([id, data]) => ({ id, ...data }))
      .sort((a, b) => b.totalSold - a.totalSold)
      .slice(0, 10);

    res.json(topProducts);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch top products', error: err.message });
  }
});

module.exports = router;
