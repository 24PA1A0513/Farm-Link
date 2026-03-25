require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ==========================================
// EJS Page Routes (Frontend Replacement)
// ==========================================

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/marketplace.html', (req, res) => {
  res.render('marketplace');
});

app.get('/dashboard.html', (req, res) => {
  res.render('dashboard');
});

app.get('/cart.html', (req, res) => {
  res.render('cart');
});

app.get('/orders.html', (req, res) => {
  res.render('orders');
});

app.get('/admin.html', (req, res) => {
  res.render('admin');
});

// For any other .html hits, try to map to EJS
app.get('/:page.html', (req, res) => {
  res.render(req.params.page);
});

// ==========================================
// API Routes Placeholder
// ==========================================
app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth', require('./routes/google-auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/admin', require('./routes/admin'));

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
