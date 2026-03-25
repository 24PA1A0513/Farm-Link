const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const authMiddleware = require('../middleware/auth');

// POST /api/orders/checkout
router.post('/checkout', authMiddleware, async (req, res) => {
  try {
    const cartSnap = await db.collection('carts').where('userId', '==', req.user.uid).get();
    if (cartSnap.empty) return res.status(400).json({ message: 'Cart is empty' });

    const items = cartSnap.docs.map(doc => doc.data());
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = {
      userId: req.user.uid,
      userName: req.user.name,
      items,
      total,
      status: 'PENDING',
      paymentMethod: req.body.paymentMethod || 'RAZORPAY',
      createdAt: new Date().toISOString()
    };

    const orderRef = await db.collection('orders').add(order);

    // Clear cart
    const batch = db.batch();
    cartSnap.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();

    res.status(201).json({ id: orderRef.id, ...order });
  } catch (err) {
    res.status(500).json({ message: 'Checkout failed', error: err.message });
  }
});

// GET /api/orders
router.get('/', authMiddleware, async (req, res) => {
  try {
    let query = db.collection('orders');
    if (req.user.role !== 'Admin') {
      query = query.where('userId', '==', req.user.uid);
    }
    const snap = await query.orderBy('createdAt', 'desc').get();
    const orders = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
  }
});

// GET /api/orders/:id
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const doc = await db.collection('orders').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ message: 'Order not found' });
    const order = doc.data();
    if (order.userId !== req.user.uid && req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    res.json({ id: doc.id, ...order });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch order', error: err.message });
  }
});

// PUT /api/orders/:id/status
router.put('/:id/status', authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== 'Admin' && req.user.role !== 'Farmer') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    const { status } = req.body;
    await db.collection('orders').doc(req.params.id).update({ status, updatedAt: new Date().toISOString() });
    res.json({ message: 'Order status updated', status });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update order status', error: err.message });
  }
});

module.exports = router;
