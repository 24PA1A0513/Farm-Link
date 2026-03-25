const express = require('express');
const router = express.Router();
const { db } = require('../config/firebase');
const authMiddleware = require('../middleware/auth');

// GET /api/products  (optional ?category= &search=)
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = db.collection('products');

    if (category && category !== 'All') {
      query = query.where('category', '==', category);
    }

    const snap = await query.get();
    let products = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    if (search) {
      const s = search.toLowerCase();
      products = products.filter(p =>
        p.name?.toLowerCase().includes(s) ||
        p.description?.toLowerCase().includes(s)
      );
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err.message });
  }
});

// GET /api/products/my-products  (farmer's own products)
router.get('/my-products', authMiddleware, async (req, res) => {
  try {
    const snap = await db.collection('products').where('farmerId', '==', req.user.uid).get();
    const products = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch farmer products', error: err.message });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const doc = await db.collection('products').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ message: 'Product not found' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch product', error: err.message });
  }
});

// POST /api/products
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, description, price, category, stock, imageUrl, unit } = req.body;
    if (!name || !price || !category) {
      return res.status(400).json({ message: 'Name, price, and category are required' });
    }
    const product = {
      name,
      description: description || '',
      price: parseFloat(price),
      category,
      stock: parseInt(stock) || 0,
      imageUrl: imageUrl || '',
      unit: unit || 'kg',
      farmerId: req.user.uid,
      farmerName: req.user.name,
      createdAt: new Date().toISOString()
    };
    const docRef = await db.collection('products').add(product);
    res.status(201).json({ id: docRef.id, ...product });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add product', error: err.message });
  }
});

// PUT /api/products/:id
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const docRef = db.collection('products').doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) return res.status(404).json({ message: 'Product not found' });
    if (doc.data().farmerId !== req.user.uid && req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    await docRef.update({ ...req.body, updatedAt: new Date().toISOString() });
    res.json({ id: req.params.id, ...req.body });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
});

// DELETE /api/products/:id
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const docRef = db.collection('products').doc(req.params.id);
    const doc = await docRef.get();
    if (!doc.exists) return res.status(404).json({ message: 'Product not found' });
    if (doc.data().farmerId !== req.user.uid && req.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden' });
    }
    await docRef.delete();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
});

// GET /api/products/:id/reviews
router.get('/:id/reviews', async (req, res) => {
  try {
    const snap = await db.collection('products').doc(req.params.id).collection('reviews').orderBy('createdAt', 'desc').get();
    const reviews = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reviews', error: err.message });
  }
});

// POST /api/products/:id/reviews
router.post('/:id/reviews', authMiddleware, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = {
      rating: parseInt(rating),
      comment,
      userId: req.user.uid,
      userName: req.user.name,
      createdAt: new Date().toISOString()
    };
    const docRef = await db.collection('products').doc(req.params.id).collection('reviews').add(review);
    res.status(201).json({ id: docRef.id, ...review });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add review', error: err.message });
  }
});

module.exports = router;
