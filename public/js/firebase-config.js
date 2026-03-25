/**
 * FarmLink — Firebase Client Configuration
 * ==========================================
 * Replace the values below with your own Firebase project config.
 *
 * Where to find this:
 * Firebase Console → Project Settings → General → Your apps → SDK setup and configuration → Config
 */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (client SDK)
firebase.initializeApp(firebaseConfig);

// ─── Google Sign-In ────────────────────────────────────────────
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('email');
  provider.addScope('profile');

  try {
    // Show loading state
    document.querySelectorAll('.btn-google').forEach(b => b.classList.add('google-loading'));

    const result = await firebase.auth().signInWithPopup(provider);
    const idToken = await result.user.getIdToken();

    // Send ID token to our Express backend
    const res = await fetch('/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Google sign-in failed on server');
    }

    const data = await res.json();

    // Save session (same format as email/password login)
    localStorage.setItem('rm_session', JSON.stringify({
      token: data.token,
      role: data.role,
      name: data.name,
      userId: data.userId
    }));

    // Redirect based on role
    if (data.role === 'Admin') window.location.href = '/admin.html';
    else window.location.href = '/dashboard.html';

  } catch (err) {
    console.error('Google Sign-In Error:', err);
    // Show toast or alert via the existing app.js toast system
    if (typeof showToast === 'function') {
      showToast(err.message || 'Google sign-in failed. Try again.', 'error');
    } else {
      alert(err.message || 'Google sign-in failed. Please try again.');
    }
  } finally {
    document.querySelectorAll('.btn-google').forEach(b => b.classList.remove('google-loading'));
  }
}
