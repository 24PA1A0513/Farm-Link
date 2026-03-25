/**
 * ============================================================
 *  FARMLINK — Firebase Configuration
 *  Project: farmlink-c9671
 * ============================================================
 */

// Firebase SDK imports (via CDN compat modules loaded in HTML)
// This file initializes the Firebase app and exports shared instances.

const firebaseConfig = {
  apiKey: "AIzaSyA2kk7UH-sJj4qW7dv3j4VRENkUmM2DZog",
  authDomain: "farmlink-c9671.firebaseapp.com",
  projectId: "farmlink-c9671",
  storageBucket: "farmlink-c9671.firebasestorage.app",
  messagingSenderId: "8238233638",
  appId: "1:8238233638:web:971ce70d3c2ad503abcee7"
};

// Initialize Firebase (guard against double-initialization)
try {
  if (typeof firebase !== 'undefined' && !firebase.apps?.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully ✅");
  } else if (typeof firebase !== 'undefined' && firebase.apps?.length) {
    // Already initialized
  }
} catch (err) {
  console.error("Firebase init error:", err);
}

/**
 * Firebase Auth helper — listen for auth state changes.
 * This is available globally for use by app.js / api.js.
 */
function getFirebaseAuth() {
  if (typeof firebase === 'undefined') return null;
  return firebase.auth();
}

/**
 * Firebase Firestore helper.
 */
function getFirestore() {
  if (typeof firebase === 'undefined') return null;
  return firebase.firestore();
}

/**
 * Firebase Storage helper.
 */
function getFirebaseStorage() {
  if (typeof firebase === 'undefined') return null;
  return firebase.storage();
}
