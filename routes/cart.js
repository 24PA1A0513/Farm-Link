const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const authMiddleware = require('../middleware/auth');

// GET /api/cart
router.get('/', authMiddleware, async (req, res) => {
  try {
    const snap = await db.collection('carts')
      .where('userId', '==', req.user.uid)
      .get();

    const items = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cart', error: err.message });
  }
});

// POST /api/cart  — add item to cart or increase qty
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    if (!productId) return res.status(400).json({ message: 'productId is required' });

    // Fetch product details
    const productDoc = await db.collection('products').doc(productId).get();
    if (!productDoc.exists) return res.status(404).json({ message: 'Product not found' });
    const product = productDoc.data();

    // Check if already in cart
    const existing = await db.collection('carts')
      .where('userId', '==', req.user.uid)
      .where('productId', '==', productId)
      .get();

    if (!existing.empty) {
      const cartDoc = existing.docs[0];
      const newQty = cartDoc.data().quantity + parseInt(quantity);
      await cartDoc.ref.update({ quantity: newQty });
      return res.json({ id: cartDoc.id, ...cartDoc.data(), quantity: newQty });
    }

    const item = {
      userId: req.user.uid,
      productId,
      quantity: parseInt(quantity),
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl || '',
      unit: product.unit || 'kg',
      farmerName: product.farmerName || '',
      addedAt: new Date().toISOString()
    };

    const docRef = await db.collection('carts').add(item);
    res.status(201).json({ id: docRef.id, ...item });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add to cart', error: err.message });
  }
});

// PUT /api/cart/:productId  — update quantity
router.put('/:productId', authMiddleware, async (req, res) => {
  try {
    const { quantity } = req.body;
    const snap = await db.collection('carts')
      .where('userId', '==', req.user.uid)
      .where('productId', '==', req.params.productId)
      .get();

    if (snap.empty) return res.status(404).json({ message: 'Cart item not found' });
    await snap.docs[0].ref.update({ quantity: parseInt(quantity) });
    res.json({ id: snap.docs[0].id, quantity });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update cart', error: err.message });
  }
});

// DELETE /api/cart/:productId
router.delete('/:productId', authMiddleware, async (req, res) => {
  try {
    const snap = await db.collection('carts')
      .where('userId', '==', req.user.uid)
      .where('productId', '==', req.params.productId)
      .get();

    if (snap.empty) return res.status(404).json({ message: 'Cart item not found' });
    await snap.docs[0].ref.delete();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove cart item', error: err.message });
  }
});

// DELETE /api/cart  — clear entire cart
router.delete('/', authMiddleware, async (req, res) => {
  try {
    const snap = await db.collection('carts').where('userId', '==', req.user.uid).get();
    const batch = db.batch();
    snap.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Failed to clear cart', error: err.message });
  }
});

module.exports = router;
