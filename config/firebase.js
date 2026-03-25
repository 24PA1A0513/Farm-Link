const admin = require('firebase-admin');

// We will use serviceAccountKey.json for Firebase Admin SDK
// Make sure this file is placed in the project root by the user
let db;

try {
  const serviceAccount = require('../serviceAccountKey.json');
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  db = admin.firestore();
  console.log('Firebase Admin Initialized successfully.');
} catch (error) {
  console.error('Error initializing Firebase Admin. Did you provide serviceAccountKey.json?', error.message);
}

module.exports = { admin, db };
