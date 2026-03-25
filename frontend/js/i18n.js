/**
 * FARMLINK — i18n.js
 * Multilanguage support: English, Hindi (हिंदी), Tamil (தமிழ்)
 */

const TRANSLATIONS = {
  en: {
    // Nav
    'nav.dashboard': 'Dashboard',
    'nav.marketplace': 'Marketplace',
    'nav.myOrders': 'My Orders',
    'nav.admin': 'Admin',
    'nav.cart': 'Cart',
    'nav.logout': 'Logout',
    // Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.welcomeBack': 'Welcome back 👋',
    'auth.createAccount': 'Create Account 🌱',
    'auth.signIn': 'Sign In →',
    'auth.createBtn': 'Create Account →',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.fullName': 'Full Name',
    'auth.role': 'I am a...',
    'auth.farmer': '🧑‍🌾 Farmer — I want to sell my produce',
    'auth.buyer': '🛒 Buyer — I want to buy farm products',
    // Dashboard
    'dash.farmerTitle': 'Farmer Dashboard 🧑‍🌾',
    'dash.farmerSubtitle': 'Manage your products and track sales',
    'dash.buyerTitle': 'Welcome Back! 👋',
    'dash.buyerSubtitle': 'Discover fresh products from farmers near you',
    'dash.addProduct': '➕ Add New Product',
    'dash.myProducts': 'My Products',
    'dash.myOrders': 'My Orders',
    'dash.listProduct': '🌾 List Product',
    // Profile
    'profile.title': 'My Profile',
    'profile.save': 'Save Profile',
    'profile.phone': 'Phone Number',
    'profile.address': 'Address',
    'profile.bio': 'Bio / About',
    'profile.cropType': 'Crop Speciality',
    // Marketplace
    'mkt.title': 'Marketplace',
    'mkt.search': 'Search products, farmers...',
    'mkt.addToCart': '🛒 Add',
    'mkt.review': '⭐ Review',
    // Common
    'common.noProducts': 'No products found',
    'common.noOrders': 'No orders found',
    'common.loading': 'Loading...',
    'common.browseAll': 'Browse All →',
  },
  hi: {
    // Nav
    'nav.dashboard': 'डैशबोर्ड',
    'nav.marketplace': 'बाज़ार',
    'nav.myOrders': 'मेरे ऑर्डर',
    'nav.admin': 'एडमिन',
    'nav.cart': 'कार्ट',
    'nav.logout': 'लॉग आउट',
    // Auth
    'auth.login': 'लॉगिन',
    'auth.register': 'रजिस्टर',
    'auth.welcomeBack': 'वापस स्वागत है 👋',
    'auth.createAccount': 'खाता बनाएं 🌱',
    'auth.signIn': 'साइन इन करें →',
    'auth.createBtn': 'खाता बनाएं →',
    'auth.email': 'ईमेल पता',
    'auth.password': 'पासवर्ड',
    'auth.fullName': 'पूरा नाम',
    'auth.role': 'मैं हूँ...',
    'auth.farmer': '🧑‍🌾 किसान — मैं अपनी उपज बेचना चाहता हूँ',
    'auth.buyer': '🛒 खरीदार — मैं खेत के उत्पाद खरीदना चाहता हूँ',
    // Dashboard
    'dash.farmerTitle': 'किसान डैशबोर्ड 🧑‍🌾',
    'dash.farmerSubtitle': 'अपने उत्पाद और बिक्री प्रबंधित करें',
    'dash.buyerTitle': 'वापस स्वागत है! 👋',
    'dash.buyerSubtitle': 'पास के किसानों से ताज़े उत्पाद खोजें',
    'dash.addProduct': '➕ नया उत्पाद जोड़ें',
    'dash.myProducts': 'मेरे उत्पाद',
    'dash.myOrders': 'मेरे ऑर्डर',
    'dash.listProduct': '🌾 उत्पाद सूचीबद्ध करें',
    // Profile
    'profile.title': 'मेरी प्रोफ़ाइल',
    'profile.save': 'प्रोफ़ाइल सहेजें',
    'profile.phone': 'फोन नंबर',
    'profile.address': 'पता',
    'profile.bio': 'परिचय',
    'profile.cropType': 'फसल विशेषता',
    // Marketplace
    'mkt.title': 'बाज़ार',
    'mkt.search': 'उत्पाद, किसान खोजें...',
    'mkt.addToCart': '🛒 जोड़ें',
    'mkt.review': '⭐ समीक्षा',
    // Common
    'common.noProducts': 'कोई उत्पाद नहीं मिला',
    'common.noOrders': 'कोई ऑर्डर नहीं मिला',
    'common.loading': 'लोड हो रहा है...',
    'common.browseAll': 'सभी देखें →',
  },
  ta: {
    // Nav
    'nav.dashboard': 'டாஷ்போர்டு',
    'nav.marketplace': 'சந்தை',
    'nav.myOrders': 'என் ஆர்டர்கள்',
    'nav.admin': 'நிர்வாகி',
    'nav.cart': 'கார்ட்',
    'nav.logout': 'வெளியேறு',
    // Auth
    'auth.login': 'உள்நுழைவு',
    'auth.register': 'பதிவு செய்',
    'auth.welcomeBack': 'மீண்டும் வரவேற்கிறோம் 👋',
    'auth.createAccount': 'கணக்கு உருவாக்கு 🌱',
    'auth.signIn': 'உள்நுழைக →',
    'auth.createBtn': 'கணக்கு உருவாக்கு →',
    'auth.email': 'மின்னஞ்சல் முகவரி',
    'auth.password': 'கடவுச்சொல்',
    'auth.fullName': 'முழு பெயர்',
    'auth.role': 'நான்...',
    'auth.farmer': '🧑‍🌾 விவசாயி — என் விளைபொருட்களை விற்க விரும்புகிறேன்',
    'auth.buyer': '🛒 வாங்குவோர் — பண்ணை பொருட்கள் வாங்க விரும்புகிறேன்',
    // Dashboard
    'dash.farmerTitle': 'விவசாயி டாஷ்போர்டு 🧑‍🌾',
    'dash.farmerSubtitle': 'உங்கள் தயாரிப்புகள் மற்றும் விற்பனையை நிர்வகிக்கவும்',
    'dash.buyerTitle': 'மீண்டும் வரவேற்கிறோம்! 👋',
    'dash.buyerSubtitle': 'அருகிலுள்ள விவசாயிகளிடமிருந்து புதிய தயாரிப்புகளை கண்டறியுங்கள்',
    'dash.addProduct': '➕ புதிய தயாரிப்பு சேர்க்கவும்',
    'dash.myProducts': 'என் தயாரிப்புகள்',
    'dash.myOrders': 'என் ஆர்டர்கள்',
    'dash.listProduct': '🌾 தயாரிப்பை பட்டியலிடுக',
    // Profile
    'profile.title': 'என் சுயவிவரம்',
    'profile.save': 'சுயவிவரம் சேமி',
    'profile.phone': 'தொலைபேசி எண்',
    'profile.address': 'முகவரி',
    'profile.bio': 'அறிமுகம்',
    'profile.cropType': 'பயிர் சிறப்பு',
    // Marketplace
    'mkt.title': 'சந்தை',
    'mkt.search': 'தயாரிப்புகள், விவசாயிகளை தேடுங்கள்...',
    'mkt.addToCart': '🛒 சேர்',
    'mkt.review': '⭐ மதிப்பாய்வு',
    // Common
    'common.noProducts': 'தயாரிப்புகள் எதுவும் இல்லை',
    'common.noOrders': 'ஆர்டர்கள் எதுவும் இல்லை',
    'common.loading': 'ஏற்றுகிறது...',
    'common.browseAll': 'அனைத்தையும் காண →',
  }
};

// ─── Language Manager ────────────────────────────────────────────
const I18n = {
  current: localStorage.getItem('fl_lang') || 'en',

  t(key) {
    return (TRANSLATIONS[this.current] || TRANSLATIONS.en)[key] || key;
  },

  setLang(lang) {
    this.current = lang;
    localStorage.setItem('fl_lang', lang);
    this.applyTranslations();
  },

  applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    // Update lang toggle button text
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = { en: '🌐 EN', hi: '🌐 हिं', ta: '🌐 தமிழ்' }[this.current] || '🌐 EN';
  },

  init() {
    this.applyTranslations();
  }
};
