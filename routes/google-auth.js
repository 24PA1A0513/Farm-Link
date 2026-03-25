const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { admin, db } = require('../config/firebase');

const JWT_SECRET = process.env.JWT_SECRET || 'farmlink_secret_key';

/**
 * POST /api/auth/google
 * Verifies a Firebase ID token from Google Sign-In,
 * creates or retrieves the user in Firestore, and returns a JWT.
 */
router.post('/google', async (req, res) => {
  try {
    const { idToken } = req.body;
    if (!idToken) {
      return res.status(400).json({ message: 'idToken is required' });
    }

    // Verify the Firebase ID token using Admin SDK
    let decoded;
    try {
      decoded = await admin.auth().verifyIdToken(idToken);
    } catch (verifyErr) {
      return res.status(401).json({ message: 'Invalid Google token', details: verifyErr.message });
    }

    const { uid, email, name, picture } = decoded;

    // Check if user already exists in Firestore
    const userSnap = await db.collection('users').where('email', '==', email).get();

    let userId, userRole, userName;

    if (!userSnap.empty) {
      // Existing user
      const userDoc = userSnap.docs[0];
      userId = userDoc.id;
      userRole = userDoc.data().role || 'Buyer';
      userName = userDoc.data().name || name;
    } else {
      // New user — create with default role Buyer (they can change later)
      const newUser = {
        name: name || email.split('@')[0],
        email,
        role: 'Buyer',
        photoURL: picture || '',
        authProvider: 'google',
        googleUid: uid,
        createdAt: new Date().toISOString()
      };
      const docRef = await db.collection('users').add(newUser);
      userId = docRef.id;
      userRole = 'Buyer';
      userName = newUser.name;
    }

    // Issue JWT (same format as email/password login)
    const token = jwt.sign(
      { uid: userId, email, role: userRole, name: userName },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token, role: userRole, name: userName, userId });

  } catch (err) {
    console.error('Google auth error:', err);
    res.status(500).json({ message: 'Google authentication failed', error: err.message });
  }
});

module.exports = router;
