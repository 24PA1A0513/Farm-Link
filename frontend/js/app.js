/**
 * FARMLINK — app.js
 *  MOCK DATA & THEME INIT
 */

// ─── THEME INIT ───────────────────────────────────────────────
function initTheme() {
  const isDark = localStorage.getItem('fl_theme') === 'dark' || (!localStorage.getItem('fl_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (isDark) document.documentElement.classList.add('dark-mode');
}
initTheme();

// ─── MOCK DATA ────────────────────────────────────────────────
const MOCK_PRODUCTS = [
  { id: 1, name: 'Organic Basmati Rice', category: 'Grains', price: 85, unit: 'kg', quantity: 500, rating: 4.8, reviews: 124, farmer: 'Ramesh Kumar', farmerId: 2, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80', description: 'Premium organic basmati rice grown without pesticides in the fertile fields of Punjab.' },
  { id: 2, name: 'Fresh Alphonso Mangoes', category: 'Fruits', price: 320, unit: 'dozen', quantity: 200, rating: 4.9, reviews: 87, farmer: 'Savita Patil', farmerId: 3, image: 'https://images.unsplash.com/photo-1601493700631-2851f4b46a16?w=400&q=80', description: 'World-famous Alphonso mangoes, hand-picked at peak ripeness from Ratnagiri orchards.' },
  { id: 3, name: 'Turmeric Powder', category: 'Spices', price: 180, unit: 'kg', quantity: 150, rating: 4.7, reviews: 63, farmer: 'Gopal Sharma', farmerId: 4, image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80', description: 'Pure sun-dried turmeric ground to fine powder, rich in curcumin.' },
  { id: 4, name: 'Farm Fresh Tomatoes', category: 'Vegetables', price: 45, unit: 'kg', quantity: 300, rating: 4.5, reviews: 98, farmer: 'Lakshmi Devi', farmerId: 5, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80', description: 'Freshly harvested vine-ripened tomatoes, perfect for cooking or salads.' },
  { id: 5, name: 'Raw Forest Honey', category: 'Dairy & Honey', price: 650, unit: 'kg', quantity: 80, rating: 4.9, reviews: 41, farmer: 'Arjun Singh', farmerId: 6, image: 'https://images.unsplash.com/photo-1607690424560-35d967d63f22?w=400&q=80', description: 'Unprocessed wildflower honey collected from Himalayan forest beehives.' },
  { id: 6, name: 'Whole Wheat Flour', category: 'Grains', price: 55, unit: 'kg', quantity: 600, rating: 4.6, reviews: 75, farmer: 'Ramesh Kumar', farmerId: 2, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80', description: 'Stone-ground whole wheat flour retaining all natural nutrients and bran.' },
  { id: 7, name: 'Green Chillies', category: 'Vegetables', price: 60, unit: 'kg', quantity: 120, rating: 4.3, reviews: 34, farmer: 'Savita Patil', farmerId: 3, image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80', description: 'Freshly harvested green chillies with vibrant colour and medium heat.' },
  { id: 8, name: 'Cold-Pressed Coconut Oil', category: 'Oils', price: 420, unit: 'litre', quantity: 90, rating: 4.8, reviews: 56, farmer: 'Meena Nair', farmerId: 7, image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=400&q=80', description: 'Virgin cold-pressed coconut oil extracted from fresh coconuts without heat.' },
  { id: 9, name: 'Pomegranate', category: 'Fruits', price: 140, unit: 'kg', quantity: 180, rating: 4.7, reviews: 49, farmer: 'Gopal Sharma', farmerId: 4, image: 'https://images.unsplash.com/photo-1552849397-1e133aaeff97?w=400&q=80', description: 'Sweet-tangy pomegranates bursting with antioxidant-rich arils.' },
  { id: 10, name: 'Coriander Seeds', category: 'Spices', price: 120, unit: 'kg', quantity: 200, rating: 4.5, reviews: 28, farmer: 'Arjun Singh', farmerId: 6, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80', description: 'Aromatic whole coriander seeds, sun-dried and hand-cleaned.' },
  { id: 11, name: 'Drumstick (Moringa)', category: 'Vegetables', price: 70, unit: 'bundle', quantity: 160, rating: 4.6, reviews: 22, farmer: 'Lakshmi Devi', farmerId: 5, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80', description: 'Fresh moringa drumsticks rich in iron, calcium and vitamins.' },
  { id: 12, name: 'A2 Cow Ghee', category: 'Dairy & Honey', price: 1200, unit: 'litre', quantity: 50, rating: 5.0, reviews: 93, farmer: 'Meena Nair', farmerId: 7, image: 'https://images.unsplash.com/photo-1631205793400-7ded8ac67736?w=400&q=80', description: 'Traditional bilona method A2 cow ghee — highest quality, golden in colour.' },
];

const MOCK_REVIEWS = {
  1: [{ id: 1, user: 'Ankit M.', rating: 5, comment: 'Excellent quality rice! Loved the aroma.', date: '2025-02-10' }, { id: 2, user: 'Priya R.', rating: 4, comment: 'Very fresh. Will buy again.', date: '2025-01-22' }],
  2: [{ id: 3, user: 'Rohan K.', rating: 5, comment: 'Best Alphonso mangoes I have tasted!', date: '2025-03-01' }],
  5: [{ id: 4, user: 'Sneha L.', rating: 5, comment: 'Pure and delicious. Dissolved instantly in warm water.', date: '2025-02-15' }],
};

const MOCK_ORDERS = [
  { id: 'ORD-2025-0041', date: '2025-03-01', status: 'Delivered', items: [{ productId: 1, name: 'Organic Basmati Rice', qty: 5, price: 85, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100&q=60' }, { productId: 5, name: 'Raw Forest Honey', qty: 1, price: 650, image: 'https://images.unsplash.com/photo-1607690424560-35d967d63f22?w=100&q=60' }], total: 1075 },
  { id: 'ORD-2025-0028', date: '2025-02-14', status: 'Shipped', items: [{ productId: 2, name: 'Fresh Alphonso Mangoes', qty: 2, price: 320, image: 'https://images.unsplash.com/photo-1601493700631-2851f4b46a16?w=100&q=60' }], total: 640 },
  { id: 'ORD-2025-0015', date: '2025-01-30', status: 'Processing', items: [{ productId: 12, name: 'A2 Cow Ghee', qty: 1, price: 1200, image: 'https://images.unsplash.com/photo-1631205793400-7ded8ac67736?w=100&q=60' }, { productId: 3, name: 'Turmeric Powder', qty: 2, price: 180, image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=100&q=60' }], total: 1560 },
];

const MOCK_ADMIN_STATS = { totalUsers: 1842, totalProducts: 348, totalOrders: 5629, revenue: 2847650 };
const MOCK_MONTHLY = [
  { month: 'Sep', orders: 310, revenue: 187400 }, { month: 'Oct', orders: 398, revenue: 241300 }, { month: 'Nov', orders: 462, revenue: 289700 }, { month: 'Dec', orders: 541, revenue: 378200 }, { month: 'Jan', orders: 489, revenue: 312500 }, { month: 'Feb', orders: 612, revenue: 421800 }, { month: 'Mar', orders: 534, revenue: 368000 },
];
const MOCK_TOP_PRODUCTS = [
  { name: 'A2 Cow Ghee', units: 342 }, { name: 'Alphonso Mangoes', units: 289 }, { name: 'Raw Forest Honey', units: 241 }, { name: 'Basmati Rice', units: 198 }, { name: 'Coconut Oil', units: 167 },
];

// ─── SESSION MANAGEMENT ───────────────────────────────────────
const Session = {
  get: () => { try { return JSON.parse(localStorage.getItem('rm_session')) || null; } catch { return null; } },
  set: (data) => localStorage.setItem('rm_session', JSON.stringify(data)),
  clear: () => localStorage.removeItem('rm_session'),
  isLoggedIn: () => !!Session.get(),
  role: () => { const s = Session.get(); return s ? s.role : null; },
};

// ─── CART MANAGEMENT ─────────────────────────────────────────
const CartStore = {
  items: [],
  load: async () => {
    if (!Session.isLoggedIn()) return;
    try {
      const c = await fetchCart();
      CartStore.items = c ? c.items : [];
      CartStore.updateBadge();
    } catch (e) { console.error('Cart load error', e); }
  },
  add: async (product, qty = 1) => {
    if (!requireAuth()) return;
    try {
      const c = await addToCart(product.id || product.productId, qty);
      CartStore.items = c ? c.items : [];
      CartStore.updateBadge();
      showToast(`${product.name} added to cart 🛒`, 'success');
    } catch (e) { showToast('Error adding to cart', 'error'); }
  },
  remove: async (productId) => {
    try {
      const c = await removeFromCart(productId);
      CartStore.items = c ? c.items : [];
      CartStore.updateBadge();
    } catch (e) { showToast('Error removing from cart', 'error'); }
  },
  updateQty: async (productId, qty) => {
    try {
      const c = await updateCartItem(productId, qty);
      CartStore.items = c ? c.items : [];
      CartStore.updateBadge();
    } catch (e) { showToast('Error updating cart', 'error'); }
  },
  total: () => CartStore.items.reduce((sum, i) => sum + i.price * i.qty, 0),
  count: () => CartStore.items.reduce((sum, i) => sum + i.qty, 0),
  clear: async () => {
    try {
      await clearCart();
      CartStore.items = [];
      CartStore.updateBadge();
    } catch (e) { console.error(e); }
  },
  updateBadge: () => {
    document.querySelectorAll('.cart-count').forEach(el => {
      const c = CartStore.count();
      el.textContent = c; el.style.display = c > 0 ? 'flex' : 'none';
    });
  },
};

// ─── TOAST NOTIFICATIONS ──────────────────────────────────────
function showToast(msg, type = 'success', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) { container = document.createElement('div'); container.className = 'toast-container'; document.body.appendChild(container); }
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || '🔔'}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('toast-exit'); setTimeout(() => toast.remove(), 300); }, duration);
}

// ─── STARS HELPER ─────────────────────────────────────────────
function renderStars(rating) {
  const full = Math.floor(rating), half = rating % 1 >= 0.5;
  let s = '★'.repeat(full);
  if (half) s += '½';
  s += '☆'.repeat(5 - Math.ceil(rating));
  return `<span class="stars">${'★'.repeat(full)}${'☆'.repeat(5 - full)}</span>`;
}

// ─── GUARD: redirect if not logged in ────────────────────────
function requireAuth() {
  if (!Session.isLoggedIn()) { window.location.href = 'index.html'; return false; }
  return true;
}

// ─── NAVBAR ──────────────────────────────────────────────────
function buildNavbar(activePage) {
  const user = Session.get();
  const cartCount = CartStore.count();
  return `
  <nav class="navbar">
    <div class="container">
      <a href="dashboard.html" class="nav-brand">
        <div class="logo-icon">🌾</div>
        FarmLink
      </a>
      <div class="nav-links">
        <a href="dashboard.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">Dashboard</a>
        <a href="marketplace.html" class="nav-link ${activePage === 'marketplace' ? 'active' : ''}">Marketplace</a>
        <a href="orders.html" class="nav-link ${activePage === 'orders' ? 'active' : ''}">My Orders</a>
        ${user?.role === 'Admin' ? '<a href="admin.html" class="nav-link ${activePage==="admin"?"active":""}">Admin</a>' : ''}
      </div>
      <div class="nav-actions">
        <button id="themeToggle" class="btn btn-ghost btn-sm btn-icon" onclick="toggleTheme()" title="Toggle Dark Mode" style="border:none;font-size:1.2rem;padding:4px">
          ${document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙'}
        </button>
        <a href="cart.html" class="cart-btn">
          🛒 Cart <span class="cart-count" style="display:${cartCount > 0 ? 'flex' : 'none'}">${cartCount}</span>
        </a>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="font-size:0.85rem;font-weight:600;color:var(--text-secondary);">${user?.name || 'Guest'}</div>
          <button onclick="handleLogout()" class="btn btn-ghost btn-sm">Logout</button>
        </div>
      </div>
    </div>
  </nav>`;
}

function handleLogout() {
  Session.clear(); CartStore.items = []; CartStore.updateBadge();
  showToast('Logged out successfully', 'info');
  setTimeout(() => window.location.href = 'index.html', 700);
}

// ─── THEME TOGGLE ─────────────────────────────────────────────
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark-mode');
  localStorage.setItem('fl_theme', isDark ? 'dark' : 'light');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.innerHTML = isDark ? '☀️' : '🌙';
}

// ─── PRODUCT CARD ─────────────────────────────────────────────
function renderProductCard(p, opts = {}) {
  const { showEdit = false, showDelete = false, onAddCart = true } = opts;
  return `
  <div class="product-card animate-in" data-id="${p.id}">
    <div class="product-img">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span style=font-size:3rem>🌿</span>'">
      <div class="product-img-overlay">
        <span class="badge badge-green">${p.category}</span>
      </div>
    </div>
    <div class="product-body">
      <div class="product-category">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-farmer">🧑‍🌾 ${p.farmer}</div>
      <div class="product-rating">
        ${renderStars(p.rating)}
        <span style="font-size:.82rem;font-weight:700;color:var(--text-primary)">${p.rating}</span>
        <div class="rating-count">(${p.reviews} reviews)</div>
      </div>
      <div class="product-stock ${p.quantity > 0 ? '' : 'out-of-stock'}">
        <span class="stock-dot"></span> 
        ${p.quantity > 0 ? `${p.quantity} ${p.unit} available` : 'Out of stock'}
      </div>
      <div class="product-footer">
        <div class="product-price">₹${p.price} <span>/ ${p.unit}</span></div>
        <div class="product-actions">
          ${showEdit ? `<button class="btn btn-ghost btn-sm" onclick="openEditModal(${p.id})">✏️ Edit</button>` : ''}
          ${showDelete ? `<button class="btn btn-danger btn-sm" onclick="handleDeleteProduct(${p.id})">🗑️</button>` : ''}
          ${onAddCart ? `<button class="btn btn-primary btn-sm" onclick="CartStore.add(${JSON.stringify(p).replace(/"/g, '&quot;')})">🛒 Add</button>` : ''}
        </div>
      </div>
    </div>
  </div>`;
}

// ─── PAGE: INDEX (Auth) ───────────────────────────────────────
function initIndexPage() {
  if (Session.isLoggedIn()) { window.location.href = 'dashboard.html'; return; }
  const tabs = document.querySelectorAll('.auth-tab');
  const forms = document.querySelectorAll('.auth-form');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  }));
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  generateParticles();
}

function generateParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 60 + 20;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;animation-duration:${Math.random() * 20 + 15}s;animation-delay:${Math.random() * 10}s;opacity:${Math.random() * 0.3 + 0.05}`;
    container.appendChild(p);
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  try {
    const res = await loginUser({ email, password });
    const formattedRole = res.role ? res.role.charAt(0).toUpperCase() + res.role.slice(1).toLowerCase() : res.role;
    Session.set({ name: res.name, email: res.email, role: formattedRole, token: res.token, id: res.id });
    showToast(`Welcome back, ${res.name}! 👋`, 'success');
    setTimeout(() => window.location.href = 'dashboard.html', 800);
  } catch (err) {
    showToast(err.message || 'Invalid email or password', 'error');
  }
}

async function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword') ? document.getElementById('regPassword').value : 'password123';
  const role = document.getElementById('regRole').value;
  if (!name || !email || !password || !role) { showToast('Please fill all fields', 'error'); return; }

  try {
    const res = await registerUser({ name, email, password, role });
    const formattedRole = res.role ? res.role.charAt(0).toUpperCase() + res.role.slice(1).toLowerCase() : res.role;
    Session.set({ name: res.name, email: res.email, role: formattedRole, token: res.token, id: res.id });
    showToast(`Account created! Welcome, ${res.name} 🎉`, 'success');
    setTimeout(() => window.location.href = 'dashboard.html', 800);
  } catch (err) {
    showToast(err.message || 'Registration failed', 'error');
  }
}

// ─── PAGE: DASHBOARD ──────────────────────────────────────────
function initDashboardPage() {
  if (!requireAuth()) return;
  const user = Session.get();
  document.getElementById('navbarMount').innerHTML = buildNavbar('dashboard');
  document.getElementById('userName').textContent = user.name;
  document.getElementById('userRole').textContent = user.role;
  document.getElementById('userRoleBadge').textContent = user.role;

  if (user.role === 'Farmer') renderFarmerDashboard();
  else if (user.role === 'Buyer') renderBuyerDashboard();
  else if (user.role === 'Admin') { window.location.href = 'admin.html'; }
  CartStore.updateBadge();
}

// FARMER DASHBOARD
let farmerProducts = [];

async function renderFarmerDashboard() {
  document.getElementById('farmerSection').classList.remove('hidden');
  document.getElementById('buyerSection').classList.add('hidden');
  try {
    farmerProducts = await fetchFarmerProducts();
  } catch (e) { console.error('Error fetching farmer products:', e); }
  renderFarmerProducts();
  // Update stats
  document.getElementById('statMyProducts').textContent = farmerProducts.length;
  document.getElementById('farmerProductCount').textContent = `${farmerProducts.length} Product${farmerProducts.length !== 1 ? 's' : ''}`;
  document.getElementById('farmerProductForm')?.addEventListener('submit', handleAddProduct);
}

// ─── FARMER TABS ──────────────────────────────────────────────
function switchFarmerTab(tab) {
  document.getElementById('farmerProductsTab').classList.toggle('hidden', tab !== 'products');
  document.getElementById('farmerOrdersTab').classList.toggle('hidden', tab !== 'orders');
  document.getElementById('tabProducts').classList.toggle('active', tab === 'products');
  document.getElementById('tabOrders').classList.toggle('active', tab === 'orders');
  if (tab === 'orders') loadFarmerOrders();
}

let farmerOrders = [];
async function loadFarmerOrders() {
  const container = document.getElementById('farmerOrdersList');
  if (!container) return;
  container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">Loading orders...</div>';
  try {
    farmerOrders = await fetchFarmerOrders();
    renderFarmerOrders(farmerOrders);
    document.getElementById('statMyOrders').textContent = farmerOrders.length;
    const revenue = farmerOrders.reduce((s,o) => s + (o.total || 0), 0);
    document.getElementById('statMyRevenue').textContent = '\u20B9' + revenue.toLocaleString();
  } catch (e) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><h3>No orders yet</h3><p>Orders for your products will appear here.</p></div>';
  }
}

function filterFarmerOrders(status) {
  const filtered = status === 'All' ? farmerOrders : farmerOrders.filter(o => o.status === status);
  renderFarmerOrders(filtered);
}

function renderFarmerOrders(orders) {
  const container = document.getElementById('farmerOrdersList');
  if (!container) return;
  if (!orders || !orders.length) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><h3>No orders found</h3><p>Orders for your products will appear here.</p></div>';
    return;
  }
  container.innerHTML = orders.map(o => `
    <div class="order-card animate-in">
      <div class="order-header">
        <div class="order-id"><strong>${o.id || 'Order'}</strong></div>
        <div style="font-size:.82rem;color:var(--text-muted)">📅 ${o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN') : '—'}</div>
        <span class="badge badge-${STATUS_COLORS[o.status] || 'gray'}">${o.status}</span>
        <div class="order-total">₹${o.total}</div>
      </div>
      <div class="order-body">
        <div class="order-items">
          ${(o.items || []).map(item => `
            <div class="order-item-row">
              <img src="${item.image || ''}" alt="${item.name}" style="width:44px;height:44px;border-radius:8px;object-fit:cover" onerror="this.outerHTML='<span class=img-placeholder>🌿</span>'">
              <div style="flex:1"><div style="font-weight:600">${item.name}</div><div style="color:var(--text-muted);font-size:.78rem">Qty: ${item.qty} \u00D7 \u20B9${item.price}</div></div>
              <div style="font-weight:700">\u20B9${item.qty * item.price}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>`).join('');
}

function renderFarmerProducts() {
  const container = document.getElementById('farmerProductsGrid');
  if (!container) return;
  if (!farmerProducts.length) {
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">📦</div><h3>No products yet</h3><p>Add your first product using the form above.</p></div>`;
    return;
  }
  container.innerHTML = farmerProducts.map(p => renderProductCard(p, { showEdit: true, showDelete: true, onAddCart: false })).join('');
  document.getElementById('farmerProductCount').textContent = `${farmerProducts.length} Product${farmerProducts.length !== 1 ? 's' : ''}`;
}

async function handleAddProduct(e) {
  e.preventDefault();
  const newProd = {
    name: document.getElementById('pName').value,
    category: document.getElementById('pCategory').value,
    price: parseFloat(document.getElementById('pPrice').value),
    unit: document.getElementById('pUnit')?.value || 'kg',
    quantity: parseInt(document.getElementById('pQty').value),
    image: document.getElementById('pImage').value || 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80',
    description: document.getElementById('pDesc').value
  };
  try {
    await addProduct(newProd);
    showToast('Product added successfully! 🌾', 'success');
    e.target.reset();
    renderFarmerDashboard();
  } catch (err) {
    showToast(err.message || 'Failed to add product', 'error');
  }
}

async function handleDeleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  try {
    await deleteProduct(id);
    showToast('Product deleted', 'info');
    renderFarmerDashboard();
  } catch (err) {
    showToast(err.message || 'Failed to delete product', 'error');
  }
}

function openEditModal(id) {
  const p = farmerProducts.find(x => x.id === id);
  if (!p) return;
  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('editPName').value = p.name;
  document.getElementById('editPPrice').value = p.price;
  document.getElementById('editPQty').value = p.quantity;
  document.getElementById('editProductId').value = id;
  document.getElementById('editModal').classList.remove('hidden');
}

function closeEditModal() { document.getElementById('editModal').classList.add('hidden'); }

async function handleEditProduct(e) {
  e.preventDefault();
  const id = document.getElementById('editProductId').value;
  const data = {
    name: document.getElementById('editPName').value,
    price: parseFloat(document.getElementById('editPPrice').value),
    quantity: parseInt(document.getElementById('editPQty').value),
    unit: document.getElementById('editPUnit')?.value
  };
  try {
    await updateProduct(id, data);
    closeEditModal();
    showToast('Product updated! ✅', 'success');
    renderFarmerDashboard();
  } catch (err) {
    showToast(err.message || 'Failed to update product', 'error');
  }
}

// BUYER DASHBOARD
let allProducts = [];

async function renderBuyerDashboard() {
  document.getElementById('buyerSection').classList.remove('hidden');
  document.getElementById('farmerSection').classList.add('hidden');
  try {
    allProducts = await fetchProducts();
    applyBuyerFilter();
    const el = document.getElementById('buyerProductCount');
    if (el) el.textContent = allProducts.length;
  } catch (e) { 
    console.error('Error fetching products:', e); 
    const grid = document.getElementById('buyerProductsGrid');
    if (grid) grid.innerHTML = `<div class="error-state">⚠️ Failed to load products. Is the backend running?</div>`;
  }
  // Load buyer order stats
  try {
    const orders = await fetchOrders();
    if (document.getElementById('buyerOrderCount')) document.getElementById('buyerOrderCount').textContent = orders.length;
    const delivered = orders.filter(o => o.status === 'DELIVERED').length;
    if (document.getElementById('buyerDeliveredCount')) document.getElementById('buyerDeliveredCount').textContent = delivered;
    const spent = orders.reduce((s, o) => s + (o.total || 0), 0);
    if (document.getElementById('buyerSpent')) document.getElementById('buyerSpent').textContent = '\u20B9' + spent.toLocaleString();
  } catch(e) {}
  document.getElementById('buyerSearch')?.addEventListener('input', handleBuyerSearch);
  document.getElementById('buyerCategory')?.addEventListener('change', handleBuyerFilter);
}

let buyerFilter = { search: '', category: 'All' };
function handleBuyerSearch(e) { buyerFilter.search = e.target.value; applyBuyerFilter(); }
function handleBuyerFilter(e) { buyerFilter.category = e.target.value; applyBuyerFilter(); }
function applyBuyerFilter() {
  let prods = allProducts;
  if (buyerFilter.category !== 'All') prods = prods.filter(p => p.category === buyerFilter.category);
  if (buyerFilter.search) prods = prods.filter(p => p.name.toLowerCase().includes(buyerFilter.search.toLowerCase()));
  const grid = document.getElementById('buyerProductsGrid');
  if (grid) grid.innerHTML = prods.slice(0, 6).map(p => renderProductCard(p)).join('');
}

// ─── PAGE: MARKETPLACE ────────────────────────────────────────
let mktProducts = [];

async function initMarketplacePage() {
  if (!requireAuth()) return;
  document.getElementById('navbarMount').innerHTML = buildNavbar('marketplace');
  try {
    mktProducts = await fetchProducts();
    renderMarketplace(mktProducts);
    renderCategoryPills(mktProducts);
  } catch (e) { 
    console.error('Marketplace Init Error:', e); 
    const grid = document.getElementById('mktGrid');
    const countEl = document.getElementById('mktCount');
    if (grid) grid.innerHTML = `<div class="empty-state"><h3>⚠️ Error Loading Products</h3><p>${e.message || 'The server might be down. Please ensure the backend is running at http://localhost:8080'}</p><button class="btn btn-primary mt-4" onclick="initMarketplacePage()">🔄 Try Again</button></div>`;
    if (countEl) countEl.textContent = 'Error loading products';
  }
  document.getElementById('mktSearch')?.addEventListener('input', handleMktSearch);
  document.getElementById('mktCategory')?.addEventListener('change', handleMktFilter);
  document.getElementById('mktSort')?.addEventListener('change', handleMktFilter);
  CartStore.updateBadge();
}

let mktFilters = { search: '', category: 'All', sort: 'default' };
function handleMktSearch(e) { mktFilters.search = e.target.value; applyMktFilter(); }
function handleMktFilter() { mktFilters.category = document.getElementById('mktCategory')?.value || 'All'; mktFilters.sort = document.getElementById('mktSort')?.value || 'default'; applyMktFilter(); }
function applyMktFilter() {
  let prods = [...mktProducts];
  if (mktFilters.category !== 'All') prods = prods.filter(p => p.category === mktFilters.category);
  if (mktFilters.search) prods = prods.filter(p => p.name.toLowerCase().includes(mktFilters.search.toLowerCase()) || p.farmer?.toLowerCase().includes(mktFilters.search.toLowerCase()));
  if (mktFilters.sort === 'price-asc') prods.sort((a, b) => a.price - b.price);
  else if (mktFilters.sort === 'price-desc') prods.sort((a, b) => b.price - a.price);
  else if (mktFilters.sort === 'rating') prods.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  renderMarketplace(prods);
}

function renderMarketplace(prods) {
  const grid = document.getElementById('mktGrid');
  if (!grid) return;
  document.getElementById('mktCount').textContent = `${prods.length} products`;
  if (!prods.length) { grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No products found</h3><p>Try different filters.</p></div>`; return; }
  grid.innerHTML = prods.map(p => renderProductCard(p)).join('');
}

function renderCategoryPills(prods = mktProducts) {
  const categories = ['All', ...new Set(prods.map(p => p.category))];
  const container = document.getElementById('categoryPills');
  if (!container) return;
  container.innerHTML = categories.map(c => `<span class="tag ${c === 'All' ? 'active' : ''}" onclick="filterByCategory('${c}',this)">${c}</span>`).join('');
}

function filterByCategory(cat, el) {
  document.querySelectorAll('#categoryPills .tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  mktFilters.category = cat;
  const select = document.getElementById('mktCategory');
  if (select) select.value = cat;
  applyMktFilter();
}

// ─── PAGE: CART ───────────────────────────────────────────────
function initCartPage() {
  if (!requireAuth()) return;
  document.getElementById('navbarMount').innerHTML = buildNavbar('cart');
  renderCart();
  CartStore.updateBadge();
}

function renderCart() {
  const items = CartStore.items;
  const container = document.getElementById('cartItems');
  const summaryContainer = document.getElementById('cartSummary');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><h3>Your cart is empty</h3><p>Browse the marketplace and add products.</p><a href="marketplace.html" class="btn btn-primary mt-4">Shop Now</a></div>`;
    if (summaryContainer) summaryContainer.innerHTML = '';
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="cart-item" id="ci-${item.id}">
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" onerror="this.parentElement.innerHTML='🌿'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">by ${item.farmer} · ₹${item.price}/${item.unit}</div>
      </div>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
        <div class="qty-val" id="qty-${item.id}">${item.qty}</div>
        <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
      </div>
      <div style="font-weight:800;font-size:1rem;color:var(--primary);min-width:70px;text-align:right" id="price-${item.id}">₹${item.price * item.qty}</div>
      <button class="btn btn-danger btn-sm btn-icon" onclick="removeItem(${item.id})" title="Remove">🗑️</button>
    </div>`).join('');

  updateCartSummary();
}

function changeQty(id, delta) {
  const items = CartStore.items;
  const item = items.find(i => i.id === id);
  if (!item) return;
  const newQty = item.qty + delta;
  if (newQty < 1) { if (confirm('Remove this item?')) { CartStore.remove(id); renderCart(); } return; }
  CartStore.updateQty(id, newQty);
  document.getElementById(`qty-${id}`).textContent = newQty;
  document.getElementById(`price-${id}`).textContent = `₹${item.price * newQty}`;
  updateCartSummary();
}

function removeItem(id) {
  CartStore.remove(id); renderCart();
  showToast('Item removed from cart', 'info');
}

function updateCartSummary() {
  const items = CartStore.items;
  const subtotal = CartStore.total();
  const delivery = subtotal > 500 ? 0 : 40;
  const total = subtotal + delivery;
  const el = document.getElementById('cartSummary');
  if (!el) return;
  el.innerHTML = `
    <div class="checkout-card">
      <h3>Order Summary</h3>
      <div style="margin:16px 0;display:flex;flex-direction:column;gap:8px;font-size:.9rem;opacity:.85">
        <div style="display:flex;justify-content:space-between"><span>Subtotal (${items.length} items)</span><span>₹${subtotal}</span></div>
        <div style="display:flex;justify-content:space-between"><span>Delivery</span><span>${delivery === 0 ? '<span style="color:#69f0ae">Free</span>' : '₹' + delivery}</span></div>
        <div style="height:1px;background:rgba(255,255,255,0.2);margin:8px 0"></div>
        <div style="display:flex;justify-content:space-between;font-weight:800;font-size:1.1rem"><span>Total</span><span>₹${total}</span></div>
      </div>
      <button class="razorpay-btn" onclick="handleCheckout(${total})">
        <span class="razorpay-logo">💳</span> Pay ₹${total} with Razorpay
      </button>
      <p style="text-align:center;font-size:.72rem;opacity:.6;margin-top:10px">Secured by Razorpay • SSL Encrypted</p>
    </div>`;
  document.getElementById('cartCount').textContent = `${items.length} item${items.length !== 1 ? 's' : ''}`;
}

async function handleCheckout(total) {
  try {
    const orderData = await initiatePayment(total);

    // Fallback if Razorpay SDK isn't loaded or real keys aren't added
    if (typeof Razorpay === 'undefined' || !orderData.key || orderData.key.includes('YOUR_KEY')) {
      showToast('Demo mode: Payment simulated successfully! 🎉', 'success');
      await checkoutOrder('RAZORPAY_DEMO');
      CartStore.clear();
      setTimeout(() => window.location.href = 'orders.html', 1500);
      return;
    }

    const options = {
      key: orderData.key,
      amount: orderData.amount, // from backend
      currency: orderData.currency,
      name: 'FarmLink',
      description: 'Farm Fresh Products',
      order_id: orderData.id,
      handler: async function (response) {
        try {
          await verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          });
          showToast('Payment successful! Order placed 🎉', 'success');
          await checkoutOrder('RAZORPAY');
          CartStore.clear();
          setTimeout(() => window.location.href = 'orders.html', 1200);
        } catch (e) {
          showToast('Payment verification failed', 'error');
        }
      },
      prefill: { name: Session.get()?.name, email: Session.get()?.email },
      theme: { color: '#2e7d32' },
    };

    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
      showToast('Payment failed: ' + response.error.description, 'error');
    });
    rzp.open();
  } catch (e) {
    showToast('Failed to initiate payment', 'error');
    console.error(e);
  }
}

// ─── PAGE: ORDERS ─────────────────────────────────────────────
let myOrders = [];

async function initOrdersPage() {
  if (!requireAuth()) return;
  document.getElementById('navbarMount').innerHTML = buildNavbar('orders');
  try {
    myOrders = await fetchOrders();
  } catch (e) { console.error('Error fetching orders:', e); }
  renderOrders(myOrders);
  CartStore.updateBadge();
  document.getElementById('orderStatusFilter')?.addEventListener('change', e => {
    const val = e.target.value;
    const filtered = val === 'All' ? myOrders : myOrders.filter(o => o.status === val);
    renderOrders(filtered);
  });
}

const STATUS_COLORS = { DELIVERED: 'green', SHIPPED: 'blue', PROCESSING: 'orange', CANCELLED: 'red', PENDING: 'orange' };
function renderOrders(orders) {
  const container = document.getElementById('ordersContainer');
  if (!container) return;
  if (!orders || !orders.length) { container.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><h3>No orders found</h3><p>Your orders will appear here.</p></div>`; return; }
  container.innerHTML = orders.map(o => `
    <div class="order-card animate-in">
      <div class="order-header">
        <div class="order-id"><strong>${o.id}</strong></div>
        <div style="font-size:.82rem;color:var(--text-muted)">📅 ${o.date}</div>
        <span class="badge badge-${STATUS_COLORS[o.status] || 'gray'}">${o.status}</span>
        <div class="order-total">₹${o.total}</div>
      </div>
      <div class="order-body">
        <div class="order-items">
          ${o.items.map(item => `
            <div class="order-item-row">
              <img src="${item.image}" alt="${item.name}" style="width:44px;height:44px;border-radius:8px;object-fit:cover" onerror="this.outerHTML='<span class=img-placeholder>🌿</span>'">
              <div style="flex:1"><div style="font-weight:600">${item.name}</div><div style="color:var(--text-muted);font-size:.78rem">Qty: ${item.qty} × ₹${item.price}</div></div>
              <div style="font-weight:700">₹${item.qty * item.price}</div>
            </div>`).join('')}
        </div>
      </div>
      <div class="order-footer">
        <div style="font-size:.82rem;color:var(--text-muted)">${o.items.length} item${o.items.length !== 1 ? 's' : ''}</div>
        <button class="btn btn-secondary btn-sm" onclick="openReviewModal(${o.items[0].productId},'${o.items[0].name}')">⭐ Write Review</button>
      </div>
    </div>`).join('');
}

// ─── REVIEW MODAL ─────────────────────────────────────────────
let selectedRating = 0;
function openReviewModal(productId, productName) {
  document.getElementById('reviewProductName').textContent = productName;
  document.getElementById('reviewProductId').value = productId;
  selectedRating = 0;
  renderInteractiveStars();
  document.getElementById('reviewModal').classList.remove('hidden');
}
function closeReviewModal() { document.getElementById('reviewModal').classList.add('hidden'); }
function renderInteractiveStars() {
  const container = document.getElementById('interactiveStars');
  if (!container) return;
  container.innerHTML = [1, 2, 3, 4, 5].map(i => `<span class="star ${i <= selectedRating ? 'active' : ''}" onclick="setRating(${i})" onmouseover="previewRating(${i})" onmouseout="renderInteractiveStars()">★</span>`).join('');
}
function setRating(n) { selectedRating = n; renderInteractiveStars(); }
function previewRating(n) {
  document.querySelectorAll('#interactiveStars .star').forEach((s, i) => s.classList.toggle('active', i < n));
}
async function submitReview() {
  const text = document.getElementById('reviewText').value;
  const productId = document.getElementById('reviewProductId').value;
  if (!selectedRating) { showToast('Please select a star rating', 'warning'); return; }

  try {
    await addReview(productId, { rating: selectedRating, comment: text });
    showToast('Review submitted! Thank you ⭐', 'success');
    closeReviewModal();
  } catch (e) {
    showToast(e.message || 'Failed to submit review', 'error');
  }
}

// ─── PAGE: ADMIN ──────────────────────────────────────────────
async function initAdminPage() {
  if (!requireAuth()) return;
  if (Session.role() !== 'Admin') { showToast('Access denied', 'error'); setTimeout(() => window.location.href = 'dashboard.html', 1000); return; }
  document.getElementById('navbarMount').innerHTML = buildNavbar('admin');
  const now = new Date().toLocaleTimeString('en-IN');
  const lastUpdated = document.getElementById('adminLastUpdated');
  if (lastUpdated) lastUpdated.textContent = 'Last updated: ' + now;

  // Load stats
  try {
    const stats = await fetchAdminStats();
    renderAdminStats(stats);
  } catch (e) { console.error('Failed to load stats', e); }

  // Load users
  try {
    adminUsersCache = await fetchAllUsers();
    renderUsersTable(adminUsersCache);
  } catch (e) { console.error('Failed to load users', e); }

  // Load admin orders
  try {
    adminOrdersCache = await fetchAdminOrders();
    renderAdminOrdersTable(adminOrdersCache);
  } catch (e) { console.error('Failed to load admin orders', e); }

  // Load admin products
  try {
    adminProductsCache = await fetchAdminProducts();
    renderAdminProductsTable(adminProductsCache);
  } catch (e) { console.error('Failed to load admin products', e); }

  renderAdminCharts();
  CartStore.updateBadge();

  // Build recent activity from orders
  const activityEl = document.getElementById('recentActivity');
  if (activityEl && adminOrdersCache.length) {
    activityEl.innerHTML = adminOrdersCache.slice(0,5).map(o => `
      <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:1.3rem">🛒</span>
        <div style="flex:1"><div style="font-weight:600;font-size:.88rem">Order ${o.id?.slice(-8) || ''}</div><div style="font-size:.75rem;color:var(--text-muted)">₹${o.total} · ${o.status}</div></div>
        <span style="font-size:.75rem;color:var(--text-muted)">${o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN') : ''}</span>
      </div>`).join('');
  }
}

function renderAdminStats(s) {
  if (!s) return;
  document.getElementById('statUsers').textContent = (s.totalUsers || 0).toLocaleString();
  document.getElementById('statProducts').textContent = (s.totalProducts || 0).toLocaleString();
  document.getElementById('statOrders').textContent = (s.totalOrders || 0).toLocaleString();
  document.getElementById('statRevenue').textContent = '₹' + (s.totalRevenue || s.revenue || 0).toLocaleString();
}

let adminUsersCache = [], adminOrdersCache = [], adminProductsCache = [];

function renderUsersTable(users) {
  const tbody = document.getElementById('usersTable');
  if (!tbody) return;
  if (!users || !users.length) { tbody.innerHTML = '<tr><td colspan="4">No users found.</td></tr>'; return; }
  tbody.innerHTML = users.map(u => `
    <tr>
      <td><strong>${u.name}</strong></td>
      <td>${u.email}</td>
      <td><span class="badge badge-${u.role === 'Farmer' ? 'green' : u.role === 'Admin' ? 'blue' : 'orange'}">${u.role}</span></td>
      <td><button class="btn btn-danger btn-sm" onclick="handleDeleteUser('${u.id}')">Delete</button></td>
    </tr>`).join('');
}

async function handleDeleteUser(id) {
  if (!confirm('Delete this user? This action cannot be undone.')) return;
  try {
    await deleteUser(id);
    showToast('User deleted', 'info');
    const users = await fetchAllUsers();
    renderUsersTable(users);
  } catch (e) {
    showToast(e.message || 'Failed to delete', 'error');
  }
}

function renderAdminCharts() {
  // Orders Chart
  const ordCtx = document.getElementById('ordersChart')?.getContext('2d');
  if (ordCtx) {
    new Chart(ordCtx, {
      type: 'bar',
      data: {
        labels: MOCK_MONTHLY.map(m => m.month),
        datasets: [{
          label: 'Orders',
          data: MOCK_MONTHLY.map(m => m.orders),
          backgroundColor: 'rgba(76,175,80,0.7)',
          borderColor: '#2e7d32',
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } } }
    });
  }

  // Revenue Chart
  const revCtx = document.getElementById('revenueChart')?.getContext('2d');
  if (revCtx) {
    new Chart(revCtx, {
      type: 'line',
      data: {
        labels: MOCK_MONTHLY.map(m => m.month),
        datasets: [{
          label: 'Revenue (₹)',
          data: MOCK_MONTHLY.map(m => m.revenue),
          fill: true,
          backgroundColor: 'rgba(76,175,80,0.12)',
          borderColor: '#4caf50',
          borderWidth: 3,
          pointBackgroundColor: '#2e7d32',
          pointRadius: 5,
          tension: 0.4,
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.05)' } }, x: { grid: { display: false } } } }
    });
  }

  // Top Products Chart
  const topCtx = document.getElementById('topProductsChart')?.getContext('2d');
  if (topCtx) {
    new Chart(topCtx, {
      type: 'doughnut',
      data: {
        labels: MOCK_TOP_PRODUCTS.map(p => p.name),
        datasets: [{
          data: MOCK_TOP_PRODUCTS.map(p => p.units),
          backgroundColor: ['#2e7d32', '#4caf50', '#66bb6a', '#81c784', '#a5d6a7'],
          borderWidth: 0,
          hoverOffset: 8,
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'right' } } }
    });
  }
}

// ─── ADMIN: Section Navigation ─────────────────────────────────
function showAdminSection(section, el) {
  const sections = ['overview','users','products','orders'];
  sections.forEach(s => {
    const sec = document.getElementById(`admin${s.charAt(0).toUpperCase()+s.slice(1)}Section`);
    if (sec) sec.classList.toggle('hidden', s !== section && s !== 'overview' ? true : s !== section);
  });
  // overview is always shown unless another section is open
  const overviewEl = document.getElementById('adminOverviewSection');
  if (overviewEl) overviewEl.classList.toggle('hidden', section !== 'overview');
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  const titles = { overview: 'Admin Dashboard 🛡️', users: 'User Management 👥', products: 'Product Management 🌾', orders: 'Order Management 📦' };
  const subs = { overview: 'Platform analytics and management overview', users: 'View and manage all registered users', products: 'View and delete product listings', orders: 'View and update order statuses' };
  const titleEl = document.getElementById('adminPageTitle');
  const subEl = document.getElementById('adminPageSubtitle');
  if (titleEl) titleEl.textContent = titles[section] || 'Admin';
  if (subEl) subEl.textContent = subs[section] || '';
}

// ─── ADMIN: Products Table ──────────────────────────────────────
function renderAdminProductsTable(products) {
  const tbody = document.getElementById('adminProductsTable');
  if (!tbody) return;
  if (!products || !products.length) { tbody.innerHTML = '<tr><td colspan="7">No products found.</td></tr>'; return; }
  tbody.innerHTML = products.map(p => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:8px"><img src="${p.image}" style="width:36px;height:36px;object-fit:cover;border-radius:6px" onerror="this.outerHTML='🌿'"><strong>${p.name}</strong></div></td>
      <td><span class="badge badge-green">${p.category}</span></td>
      <td>\u20B9${p.price}/${p.unit}</td>
      <td>${p.quantity}</td>
      <td>${p.farmerName || '—'}</td>
      <td>${p.rating ? '\u2605 ' + p.rating.toFixed(1) : '—'}</td>
      <td><button class="btn btn-danger btn-sm" onclick="handleAdminDeleteProduct('${p.id}')">🗑️ Delete</button></td>
    </tr>`).join('');
}

function filterAdminProducts(val) {
  const search = (val || document.getElementById('adminProdSearch')?.value || '').toLowerCase();
  const cat = document.getElementById('adminProdCategory')?.value || 'All';
  let p = adminProductsCache;
  if (cat !== 'All') p = p.filter(x => x.category === cat);
  if (search) p = p.filter(x => x.name.toLowerCase().includes(search) || (x.farmerName || '').toLowerCase().includes(search));
  renderAdminProductsTable(p);
}

async function handleAdminDeleteProduct(id) {
  if (!confirm('Delete this product? This will remove it from the marketplace.')) return;
  try {
    await deleteAdminProduct(id);
    adminProductsCache = adminProductsCache.filter(p => p.id !== id);
    renderAdminProductsTable(adminProductsCache);
    showToast('Product deleted', 'info');
  } catch (e) { showToast(e.message || 'Failed to delete', 'error'); }
}

// ─── ADMIN: Orders Table ─────────────────────────────────────────
function renderAdminOrdersTable(orders) {
  const tbody = document.getElementById('adminOrdersTable');
  if (!tbody) return;
  if (!orders || !orders.length) { tbody.innerHTML = '<tr><td colspan="6">No orders found.</td></tr>'; return; }
  tbody.innerHTML = orders.map(o => `
    <tr>
      <td><strong>${(o.id || '').slice(-10)}</strong></td>
      <td>${o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-IN') : '—'}</td>
      <td>${(o.items || []).length} item(s)</td>
      <td>\u20B9${o.total}</td>
      <td><span class="badge badge-${STATUS_COLORS[o.status] || 'gray'}">${o.status}</span></td>
      <td>
        <select class="filter-select" style="font-size:.78rem;padding:4px 8px" onchange="handleAdminStatusUpdate('${o.id}',this.value)">
          <option value="">Change...</option>
          <option value="PENDING">Pending</option>
          <option value="PROCESSING">Processing</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
      </td>
    </tr>`).join('');
}

function filterAdminOrders(status) {
  const filtered = status === 'All' ? adminOrdersCache : adminOrdersCache.filter(o => o.status === status);
  renderAdminOrdersTable(filtered);
}

async function handleAdminStatusUpdate(orderId, status) {
  if (!status) return;
  try {
    await updateAdminOrderStatus(orderId, status);
    const order = adminOrdersCache.find(o => o.id === orderId);
    if (order) order.status = status;
    renderAdminOrdersTable(document.getElementById('adminOrderStatusFilter')?.value === 'All' ? adminOrdersCache : adminOrdersCache.filter(o => o.status === document.getElementById('adminOrderStatusFilter').value));
    showToast(`Order status updated to ${status}`, 'success');
  } catch (e) { showToast(e.message || 'Failed to update status', 'error'); }
}

function filterUsersTable(val) {
  const search = (val || document.getElementById('userSearch')?.value || '').toLowerCase();
  const role = document.getElementById('userRoleFilter')?.value || 'All';
  let u = adminUsersCache;
  if (role !== 'All') u = u.filter(x => x.role === role);
  if (search) u = u.filter(x => x.name.toLowerCase().includes(search) || x.email.toLowerCase().includes(search));
  renderUsersTable(u);
}

// ─── PAGE: PROFILE ────────────────────────────────────────────────
function initProfilePage() {
  if (!requireAuth()) return;
  const user = Session.get();
  document.getElementById('navbarMount').innerHTML = buildNavbar('');
  document.getElementById('sidebarName').textContent = user.name;
  document.getElementById('sidebarRole').textContent = user.role;
  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileRole').textContent = user.role;
  document.getElementById('profileRoleBadge').textContent = user.role;
  document.getElementById('profileFormName').value = user.name;
  if (user.role !== 'Farmer') {
    document.getElementById('cropTypeGroup')?.classList.add('hidden');
  } else {
    document.getElementById('farmerStats')?.classList.remove('hidden');
    loadFarmerStats();
  }
  document.getElementById('profileForm')?.addEventListener('submit', handleSaveProfile);
  CartStore.updateBadge();
}

async function loadFarmerStats() {
  try {
    const prods = await fetchFarmerProducts();
    const el = document.getElementById('statMyProducts');
    if (el) el.textContent = prods.length;
    const avgRating = prods.length ? (prods.reduce((s,p) => s + (p.rating || 0), 0) / prods.length).toFixed(1) : '—';
    const ratingEl = document.getElementById('statMyRating');
    if (ratingEl) ratingEl.textContent = avgRating;
  } catch(e) {}
  try {
    const orders = await fetchFarmerOrders();
    const ordEl = document.getElementById('statMyOrders');
    if (ordEl) ordEl.textContent = orders.length;
    const rev = orders.reduce((s,o) => s + (o.total || 0), 0);
    const revEl = document.getElementById('statMyRevenue');
    if (revEl) revEl.textContent = '\u20B9' + rev.toLocaleString();
  } catch(e) {}
}

function handleSaveProfile(e) {
  e.preventDefault();
  const user = Session.get();
  user.name = document.getElementById('profileFormName').value;
  Session.set(user);
  showToast('Profile saved! \u2705', 'success');
}

function previewAvatar() {
  const url = document.getElementById('profilePhotoUrl')?.value;
  if (!url) return;
  const avatarEl = document.getElementById('profileAvatar');
  if (avatarEl) avatarEl.innerHTML = `<img src="${url}" style="width:80px;height:80px;border-radius:50%;object-fit:cover" onerror="this.outerHTML='👤'">`;
}

// ─── INIT ROUTER ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  if (Session.isLoggedIn() && document.body.dataset.page !== 'index') {
    await CartStore.load();
  }
  if (typeof I18n !== 'undefined') I18n.init();
  const page = document.body.dataset.page;
  if (page === 'index') initIndexPage();
  else if (page === 'dashboard') initDashboardPage();
  else if (page === 'marketplace') initMarketplacePage();
  else if (page === 'cart') initCartPage();
  else if (page === 'orders') initOrdersPage();
  else if (page === 'admin') initAdminPage();
  else if (page === 'profile') initProfilePage();
});
