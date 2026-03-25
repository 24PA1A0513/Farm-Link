/**
 * ============================================================
 *  FARMLINK — API LAYER
 *  Connected to Spring Boot backend at http://localhost:8080
 * ============================================================
 */

const API_BASE = 'http://localhost:3000/api';

// ─── Helper: build fetch options with Authorization header ───
function authHeaders(extraHeaders = {}) {
  const session = JSON.parse(localStorage.getItem('rm_session') || '{}');
  return {
    'Content-Type': 'application/json',
    ...(session.token ? { 'Authorization': 'Bearer ' + session.token } : {}),
    ...extraHeaders,
  };
}

async function apiCall(method, path, body = null) {
  const options = {
    method,
    headers: authHeaders(),
  };
  if (body) options.body = JSON.stringify(body);
  const res = await fetch(API_BASE + path, options);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message || 'API Error');
  }
  return res.status === 204 ? null : res.json();
}

// ─── AUTH ───────────────────────────────────────────────────

async function loginUser(data) {
  // POST /api/auth/login
  return apiCall('POST', '/auth/login', data);
}

async function registerUser(data) {
  // POST /api/auth/register
  return apiCall('POST', '/auth/register', data);
}

async function logoutUser() {
  // No server logout needed for stateless JWT
  // Just clear client-side session
}

// ─── PRODUCTS ───────────────────────────────────────────────

async function fetchProducts(filters = {}) {
  // GET /api/products?category=&search=
  const params = new URLSearchParams();
  if (filters.category && filters.category !== 'All') params.append('category', filters.category);
  if (filters.search) params.append('search', filters.search);
  const query = params.toString() ? '?' + params.toString() : '';
  return apiCall('GET', '/products' + query);
}

async function fetchProductById(productId) {
  // GET /api/products/{id}
  return apiCall('GET', `/products/${productId}`);
}

async function fetchFarmerProducts() {
  // GET /api/products/my-products
  return apiCall('GET', '/products/my-products');
}

async function addProduct(data) {
  // POST /api/products
  return apiCall('POST', '/products', data);
}

async function updateProduct(productId, data) {
  // PUT /api/products/{id}
  return apiCall('PUT', `/products/${productId}`, data);
}

async function deleteProduct(productId) {
  // DELETE /api/products/{id}
  return apiCall('DELETE', `/products/${productId}`);
}

// ─── CART ───────────────────────────────────────────────────

async function fetchCart() {
  // GET /api/cart
  return apiCall('GET', '/cart');
}

async function addToCart(productId, quantity = 1) {
  // POST /api/cart
  return apiCall('POST', '/cart', { productId, quantity });
}

async function updateCartItem(productId, quantity) {
  // PUT /api/cart/{productId}
  return apiCall('PUT', `/cart/${productId}`, { quantity });
}

async function removeFromCart(productId) {
  // DELETE /api/cart/{productId}
  return apiCall('DELETE', `/cart/${productId}`);
}

async function clearCart() {
  // DELETE /api/cart
  return apiCall('DELETE', '/cart');
}

// ─── ORDERS ─────────────────────────────────────────────────

async function checkoutOrder(paymentMethod = 'RAZORPAY') {
  // POST /api/orders/checkout
  return apiCall('POST', '/orders/checkout', { paymentMethod });
}

async function fetchOrders() {
  // GET /api/orders
  return apiCall('GET', '/orders');
}

async function fetchOrderById(orderId) {
  // GET /api/orders/{id}
  return apiCall('GET', `/orders/${orderId}`);
}

async function updateOrderStatus(orderId, status) {
  // PUT /api/orders/{id}/status
  return apiCall('PUT', `/orders/${orderId}/status`, { status });
}

// ─── REVIEWS ────────────────────────────────────────────────

async function addReview(productId, data) {
  // POST /api/products/{id}/reviews
  return apiCall('POST', `/products/${productId}/reviews`, data);
}

async function fetchReviews(productId) {
  // GET /api/products/{id}/reviews
  return apiCall('GET', `/products/${productId}/reviews`);
}

// ─── ADMIN ──────────────────────────────────────────────────

async function fetchAdminStats() {
  // GET /api/admin/stats
  return apiCall('GET', '/admin/stats');
}

async function fetchAllUsers() {
  // GET /api/admin/users
  return apiCall('GET', '/admin/users');
}

async function deleteUser(userId) {
  // DELETE /api/admin/users/{id}
  return apiCall('DELETE', `/admin/users/${userId}`);
}

async function fetchMonthlyData() {
  // GET /api/admin/analytics/monthly
  return apiCall('GET', '/admin/analytics/monthly');
}

async function fetchTopProducts() {
  // GET /api/admin/analytics/top-products
  return apiCall('GET', '/admin/analytics/top-products');
}

// ─── PAYMENT ────────────────────────────────────────────────

async function initiatePayment(amount) {
  return apiCall('POST', '/payments/initiate', { amount });
}

async function verifyPayment(data) {
  return apiCall('POST', '/payments/verify', data);
}


