/**
 * ReLeaf - Eco-Friendly & Biodegradable Living
 * Master Application Script (Router, Store, UI Logic, Tracking Simulation)
 * Pure Vanilla JavaScript (No external frameworks)
 */

// ============================================================================
// 1. Database: 12 Eco-Friendly, Biodegradable Products
// ============================================================================
const PRODUCTS_DATA = [
  {
    id: 'bamboo-toothbrush',
    name: 'Bamboo Charcoal Toothbrush (Set of 4)',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    reviewsCount: 184,
    ecoTag: '100% Biodegradable',
    badge: 'Bestseller',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Ergonomically sculpted from sustainably harvested wild Moso bamboo, infused with activated charcoal bristles for naturally whiter teeth and zero bathroom plastic.',
    images: {
      front: 'assets/images/bamboo-toothbrush/front.jpg',
      inUse: 'assets/images/bamboo-toothbrush/in-use.jpg',
      material: 'assets/images/bamboo-toothbrush/material.jpg',
      packaging: 'assets/images/bamboo-toothbrush/packaging.jpg'
    },
    madeFrom: '100% organically grown Moso Bamboo handle, BPA-free plant-derived castor oil bristles infused with Japanese Binchotan activated charcoal, non-toxic mineral ink numbering.',
    howToUse: [
      'Rinse gently before initial use and brush normally with your favorite toothpaste.',
      'Store upright in an open ceramic holder or well-ventilated dry area.',
      'Dentists recommend replacing your toothbrush every 3 months.'
    ],
    ecoImpact: {
      plasticSaved: '48g Plastic Avoided',
      biodegradesIn: '180 Days in Soil',
      co2Saved: '110g CO2 Offset'
    },
    careDisposal: 'When replacing, simply use pliers to snap off the bristles for standard recycling. Bury the bamboo handle directly in your home compost heap or garden soil where it returns to the earth in 6 months.'
  },
  {
    id: 'compost-waste-bin',
    name: 'Odour-Lock Countertop Compost Bin',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    price: 1299,
    originalPrice: 1699,
    rating: 4.8,
    reviewsCount: 96,
    ecoTag: 'Home Compostable Hub',
    badge: 'Trending',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'A stylish Scandinavian-inspired 4-litre kitchen countertop compost caddy with dual charcoal filters that trap odors while you collect organic food scraps.',
    images: {
      front: 'assets/images/compost-waste-bin/front.jpg',
      inUse: 'assets/images/compost-waste-bin/in-use.jpg',
      material: 'assets/images/compost-waste-bin/material.jpg',
      packaging: 'assets/images/compost-waste-bin/packaging.jpg'
    },
    madeFrom: 'Recycled spun stainless steel body, FSC-certified solid bamboo lid, dual activated coconut shell charcoal filters, and brass carry handle.',
    howToUse: [
      'Keep conveniently on your kitchen counter or under the sink.',
      'Deposit daily fruit rinds, vegetable peels, coffee grounds, and eggshells.',
      'Empty into your outdoor composter or community garden weekly.'
    ],
    ecoImpact: {
      plasticSaved: '140g Plastic Waste Stopped',
      biodegradesIn: 'Diverts 180kg Scraps/Year',
      co2Saved: '320kg Methane Prevented'
    },
    careDisposal: 'Wash the stainless steel bin with warm soapy water. Charcoal filter lasts 4-6 months and can be buried in compost; steel can be recycled infinitely.'
  },
  {
    id: 'beeswax-wraps',
    name: 'Organic Beeswax Food Wraps (Pack of 3)',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    price: 449,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 230,
    ecoTag: 'Zero Plastic Cling',
    badge: 'Top Rated',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Natural self-adhesive breathable food wraps that replace single-use plastic cling wrap. Keeps bread, cheese, herbs, and cut fruits fresher for longer.',
    images: {
      front: 'assets/images/beeswax-wraps/front.jpg',
      inUse: 'assets/images/beeswax-wraps/in-use.jpg',
      material: 'assets/images/beeswax-wraps/material.jpg',
      packaging: 'assets/images/beeswax-wraps/packaging.jpg'
    },
    madeFrom: 'GOTS-certified 100% organic cotton, harvested pesticide-free beeswax, tree damar resin, and cold-pressed organic jojoba oil.',
    howToUse: [
      'Use the natural warmth of your hands to mold the wrap around bowls or food items.',
      'As it cools within seconds, it creates a gentle breathable protective seal.',
      'Wash with cool water and mild biodegradable soap; air dry flat.'
    ],
    ecoImpact: {
      plasticSaved: '100m Cling Wrap Saved',
      biodegradesIn: '100% Backyard Compostable',
      co2Saved: '95g CO2 Saved'
    },
    careDisposal: 'Lasts for 150+ uses with regular care. When worn after 12-18 months, slice into strips and place directly into your compost pile or use as a natural camping firestarter.'
  },
  {
    id: 'jute-bag',
    name: 'Handwoven Pure Golden Jute Tote Bag',
    category: 'bags',
    categoryLabel: 'Bags',
    price: 399,
    originalPrice: 549,
    rating: 4.8,
    reviewsCount: 142,
    ecoTag: 'Artisanal Handloom',
    badge: 'Eco Hero',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Crafted by rural Bengal artisans using 100% golden jute fibers with reinforced herringbone cotton webbing handles. Strong enough to hold 18 kg of market groceries.',
    images: {
      front: 'assets/images/jute-bag/front.jpg',
      inUse: 'assets/images/jute-bag/in-use.jpg',
      material: 'assets/images/jute-bag/material.jpg',
      packaging: 'assets/images/jute-bag/packaging.jpg'
    },
    madeFrom: '100% unbleached natural golden jute yarn, unbleached heavy cotton webbing straps, wooden toggle button, stitched with organic cotton thread.',
    howToUse: [
      'Your everyday companion for farmer markets, library books, picnics, or laptop commute.',
      'Comfortable shoulder drop length with double-stitched base for heavy items.'
    ],
    ecoImpact: {
      plasticSaved: '300+ Polybags Avoided',
      biodegradesIn: '100% Soil Biodegradable',
      co2Saved: '240g CO2 Avoided'
    },
    careDisposal: 'Spot clean with a damp cloth and air dry in shade. If heavily soiled, hand wash gently in lukewarm water. Naturally decomposes completely in soil.'
  },
  {
    id: 'coconut-scrubber',
    name: 'Coconut Coir Dish Scrubbers (Pack of 5)',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    price: 199,
    originalPrice: 279,
    rating: 4.7,
    reviewsCount: 118,
    ecoTag: 'Upcycled Coconut Fiber',
    badge: 'Zero Waste',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Tough on stubborn baked grease yet naturally non-scratch on non-stick cookware and cast iron. Made from upcycled coconut husk fibers bonded with natural rubber.',
    images: {
      front: 'assets/images/coconut-scrubber/front.jpg',
      inUse: 'assets/images/coconut-scrubber/in-use.jpg',
      material: 'assets/images/coconut-scrubber/material.jpg',
      packaging: 'assets/images/coconut-scrubber/packaging.jpg'
    },
    madeFrom: '100% natural upcycled coconut husk coir bristles, bonded with natural tree latex, and stitched with cotton twine.',
    howToUse: [
      'Wet scrubber thoroughly and lather with dishwashing soap or herbal cake.',
      'Scrub cookware, kitchen sinks, or tile countertops.',
      'Rinse clean and hang or place on a dry soap dish after use.'
    ],
    ecoImpact: {
      plasticSaved: '15 Synthetic Sponges',
      biodegradesIn: '90 Days in Soil',
      co2Saved: '65g CO2 Offset'
    },
    careDisposal: 'Dries fast and resists bacterial odor. Fully compostable in household soil at the end of its multi-month lifespan.'
  },
  {
    id: 'neem-comb',
    name: 'Herbal Neem Wood Anti-Static Hair Comb',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    price: 249,
    originalPrice: 349,
    rating: 4.9,
    reviewsCount: 312,
    ecoTag: 'Medicinal Neem Wood',
    badge: 'Popular',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Hand-carved from seasoned Indian medicinal Neem (Azadirachta indica) wood. Naturally antimicrobial, detangles without static electricity or hair breakage.',
    images: {
      front: 'assets/images/neem-comb/front.jpg',
      inUse: 'assets/images/neem-comb/in-use.jpg',
      material: 'assets/images/neem-comb/material.jpg',
      packaging: 'assets/images/neem-comb/packaging.jpg'
    },
    madeFrom: 'Solid sustainably harvested Indian Neem timber, hand-finished with cold-pressed virgin neem seed oil.',
    howToUse: [
      'Gently comb through dry or damp hair starting from hair ends working upwards.',
      'The smooth rounded wooden teeth massage scalp acupoints and stimulate blood circulation.'
    ],
    ecoImpact: {
      plasticSaved: '32g Plastic Saved',
      biodegradesIn: 'Fully Biodegradable Timber',
      co2Saved: '50g CO2 Stored'
    },
    careDisposal: 'Do not soak in water for extended periods. Wipe clean with a dry cloth or apply a droplet of coconut oil once a month to nourish the wood.'
  },
  {
    id: 'copper-planter',
    name: 'Artisanal Pure Copper & Clay Seed Pod Planter',
    category: 'garden',
    categoryLabel: 'Garden',
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviewsCount: 64,
    ecoTag: 'Natural Terracotta & Metal',
    badge: 'Artisan Crafted',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'An elegant hand-beaten pure copper rim set into breathable porous terracotta clay. Ideal for indoor succulents, bonsai, herbs, and table foliage.',
    images: {
      front: 'assets/images/copper-planter/front.jpg',
      inUse: 'assets/images/copper-planter/in-use.jpg',
      material: 'assets/images/copper-planter/material.jpg',
      packaging: 'assets/images/copper-planter/packaging.jpg'
    },
    madeFrom: 'High-fire porous natural river clay (Terracotta) and solid hand-hammered recycled copper collar with natural drainage hole.',
    howToUse: [
      'Add a layer of gravel at the bottom for optimal aeration, then fill with rich potting compost.',
      'Plant your favorite indoor plants, snake plants, or fresh mint and basil.',
      'Terracotta naturally breathes, preventing root rot.'
    ],
    ecoImpact: {
      plasticSaved: '80g Plastic Nursery Pots',
      biodegradesIn: '100% Earth-Derived Minerals',
      co2Saved: '130g CO2 Avoided'
    },
    careDisposal: 'Copper will gracefully age into a vintage patina over years or can be polished with lemon and salt to restore golden shine.'
  },
  {
    id: 'sisal-soap-pouch',
    name: 'Natural Sisal Fiber Exfoliating Soap Pouch',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    price: 179,
    originalPrice: 249,
    rating: 4.6,
    reviewsCount: 88,
    ecoTag: 'Agave Sisal Fiber',
    badge: 'Value Pack',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Woven from natural Agave sisal plant fibers. Place your soap bar or small soap remnants inside for rich frothy lather and gentle skin micro-exfoliation.',
    images: {
      front: 'assets/images/sisal-soap-pouch/front.jpg',
      inUse: 'assets/images/sisal-soap-pouch/in-use.jpg',
      material: 'assets/images/sisal-soap-pouch/material.jpg',
      packaging: 'assets/images/sisal-soap-pouch/packaging.jpg'
    },
    madeFrom: '100% natural Sisal (Agave sisalana) spun twine, wooden bead stopper, and unbleached cotton drawstring.',
    howToUse: [
      'Insert whole soap bar or collected soap slivers inside.',
      'Wet under shower and rub between hands to create generous velvety foam.',
      'Hang by the drawstring to air dry quickly between showers.'
    ],
    ecoImpact: {
      plasticSaved: '6 Plastic Loofahs / Year',
      biodegradesIn: '60 Days in Soil',
      co2Saved: '40g CO2 Offset'
    },
    careDisposal: 'Hang to dry after each shower to prevent mildew. 100% compostable with organic green waste at end of life.'
  },
  {
    id: 'areca-dinnerware',
    name: 'Areca Palm Leaf Dinnerware Set (Pack of 25)',
    category: 'kitchen',
    categoryLabel: 'Kitchen',
    price: 549,
    originalPrice: 749,
    rating: 4.9,
    reviewsCount: 156,
    ecoTag: 'Naturally Fallen Leaves',
    badge: 'Party Ready',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Sturdy, heat-resistant, and 100% biodegradable plates crafted solely from naturally shed Areca palm sheaths without cutting a single tree.',
    images: {
      front: 'assets/images/areca-dinnerware/front.jpg',
      inUse: 'assets/images/areca-dinnerware/in-use.jpg',
      material: 'assets/images/areca-dinnerware/material.jpg',
      packaging: 'assets/images/areca-dinnerware/packaging.jpg'
    },
    madeFrom: '100% naturally fallen Areca Palm (Areca catechu) leaf sheaths, cleaned with fresh spring water and steam-pressed into shape. No glues, binders, or wax linings.',
    howToUse: [
      'Perfect for eco-weddings, house parties, catering, and outdoor barbecues.',
      'Microwave safe up to 2 minutes and freezer safe.',
      'Holds hot curries, soups, and greasy items without leaking or bending.'
    ],
    ecoImpact: {
      plasticSaved: '25 Heavy Plastic / Styrofoam Plates',
      biodegradesIn: '45-60 Days in Garden Soil',
      co2Saved: '280g CO2 Avoided'
    },
    careDisposal: 'Single-use or wipe clean for light dry snacks. After dining, toss directly into your compost heap where they transform into nutrient-rich soil humus.'
  },
  {
    id: 'loofah-sponge',
    name: 'Natural Egyptian Loofah Body Sponge Trio',
    category: 'bathroom',
    categoryLabel: 'Bathroom',
    price: 329,
    originalPrice: 449,
    rating: 4.8,
    reviewsCount: 104,
    ecoTag: 'Grown from Gourds',
    badge: 'Spa Essential',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Sun-dried natural vine gourds (Luffa aegyptiaca) that expand in warm water to provide an invigorating dermatological spa scrub.',
    images: {
      front: 'assets/images/loofah-sponge/front.jpg',
      inUse: 'assets/images/loofah-sponge/in-use.jpg',
      material: 'assets/images/loofah-sponge/material.jpg',
      packaging: 'assets/images/loofah-sponge/packaging.jpg'
    },
    madeFrom: '100% whole dried vegetable sponge gourd, unbleached cotton hanging loop.',
    howToUse: [
      'Submerge in warm water for 1-2 minutes until soft and pliable.',
      'Apply soap bar and massage body with circular uplifting motions.',
      'Squeeze out excess water and hang to air dry in a breezy spot.'
    ],
    ecoImpact: {
      plasticSaved: '3 Synthetic Nylon Bath Puffs',
      biodegradesIn: '30-45 Days in Soil',
      co2Saved: '70g CO2 Avoided'
    },
    careDisposal: 'Sanitize every two weeks in boiling water. When worn after 2-3 months, shred and bury in garden soil or plant pots as organic aeration.'
  },
  {
    id: 'mesh-produce-bags',
    name: 'Organic Cotton Mesh Grocery Bags (Set of 6)',
    category: 'bags',
    categoryLabel: 'Bags',
    price: 499,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 178,
    ecoTag: 'GOTS Organic Cotton',
    badge: 'Zero Waste Kit',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'Tare-weight tagged breathable mesh bags in Small, Medium, and Large. Keeps refrigerated produce fresh without sweating in plastic.',
    images: {
      front: 'assets/images/mesh-produce-bags/front.jpg',
      inUse: 'assets/images/mesh-produce-bags/in-use.jpg',
      material: 'assets/images/mesh-produce-bags/material.jpg',
      packaging: 'assets/images/mesh-produce-bags/packaging.jpg'
    },
    madeFrom: '100% unbleached GOTS-certified organic cotton knit mesh, cotton drawstring with natural wooden toggle bead.',
    howToUse: [
      'Take to supermarket or vegetable vendor instead of tear-off plastic bags.',
      'Cashier can tare weight using the woven fabric tag.',
      'Store directly in refrigerator crisper drawer for optimal ventilation.'
    ],
    ecoImpact: {
      plasticSaved: '500+ Thin Plastic Bags / Year',
      biodegradesIn: '100% Biodegradable Fabric',
      co2Saved: '350g CO2 Offset'
    },
    careDisposal: 'Machine wash in cold water on gentle cycle and hang dry. Can be reused for many years; completely compostable at end of lifespan.'
  },
  {
    id: 'shampoo-bar',
    name: 'Rosemary & Tea Tree Herbal Solid Shampoo Bar',
    category: 'personal-care',
    categoryLabel: 'Personal Care',
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviewsCount: 221,
    ecoTag: 'Zero Bottle Waste',
    badge: 'Plastic Free',
    stockStatus: 'In Stock • Dispatches in 24h',
    description: 'An ultra-concentrated 80g cold-pressed botanical shampoo bar that equals 3 plastic shampoo bottles. Strengthens scalp and fights dandruff with pure herbal oils.',
    images: {
      front: 'assets/images/shampoo-bar/front.jpg',
      inUse: 'assets/images/shampoo-bar/in-use.jpg',
      material: 'assets/images/shampoo-bar/material.jpg',
      packaging: 'assets/images/shampoo-bar/packaging.jpg'
    },
    madeFrom: 'Saponified Virgin Coconut Oil, Raw Shea Butter, Rosemary Extract, Pure Australian Tea Tree Essential Oil, Shikakai & Reetha extracts, French Green Clay. No sulfates, parabens, or synthetic fragrance.',
    howToUse: [
      'Wet hair thoroughly and rub the bar directly between palms or over hair to create rich botanical suds.',
      'Massage scalp thoroughly with fingertips and rinse clean with water.',
      'Allow bar to dry completely on a draining soap dish.'
    ],
    ecoImpact: {
      plasticSaved: '3 Plastic Shampoo Bottles',
      biodegradesIn: 'Zero Runoff Environmental Harm',
      co2Saved: '420g CO2 in Transport'
    },
    careDisposal: 'Travel-friendly recyclable aluminum tin included. The soap bar leaves zero residue; the tin can be repurposed indefinitely for jewelry, pills, or spices.'
  }
];

// Sample past tracking orders for demo lookups
const SAMPLE_ORDERS = {
  'RL-2026-8942': {
    orderId: 'RL-2026-8942',
    date: '12 Oct 2026, 04:30 PM',
    statusStep: 3, // Out for delivery
    recipient: 'Arjun Mehta',
    phone: '+91 98765 43210',
    address: 'Flat 402, Green Meadows, Indiranagar, Bengaluru, Karnataka - 560038',
    courier: 'ReLeaf Eco-Express Fleet (EV Unit #BLR-402)',
    items: [
      { id: 'bamboo-toothbrush', quantity: 2 },
      { id: 'beeswax-wraps', quantity: 1 }
    ],
    carbonSavedKg: '0.42 kg CO2 Offset',
    plasticSavedGrams: '148g Plastic Prevented'
  },
  'RL-2026-3105': {
    orderId: 'RL-2026-3105',
    date: '10 Oct 2026, 11:15 AM',
    statusStep: 4, // Delivered
    recipient: 'Priya Sharma',
    phone: '+91 98201 12345',
    address: 'B-12, Palm Residency, Bandra West, Mumbai, Maharashtra - 400050',
    courier: 'ReLeaf Eco-Express Fleet (EV Unit #MUM-105)',
    items: [
      { id: 'compost-waste-bin', quantity: 1 },
      { id: 'coconut-scrubber', quantity: 2 }
    ],
    carbonSavedKg: '1.2 kg CO2 Offset',
    plasticSavedGrams: '280g Plastic Prevented'
  }
};

// ============================================================================
// 2. Application State & Storage Engine
// ============================================================================
const AppState = {
  cart: [],
  wishlist: [],
  recentViewed: [],
  lastOrder: null,
  activeFilter: 'all',
  searchQuery: '',
  activeSort: 'popular',
  appliedCoupon: null,
  simulatedPaymentMode: 'success', // 'success' or 'failure'
  selectedPaymentTab: 'upi',

  // Tracking Simulation state
  currentTrackingOrder: null,
  trackingStepIndex: 1, // 0: Ordered, 1: Packed, 2: Shipped, 3: Out for Delivery, 4: Delivered
  trackingIntervalId: null,
  isTrackingSimPlaying: true,

  init() {
    try {
      this.cart = JSON.parse(localStorage.getItem('releaf_cart')) || [];
      this.wishlist = JSON.parse(localStorage.getItem('releaf_wishlist')) || [];
      this.recentViewed = JSON.parse(localStorage.getItem('releaf_recent_viewed')) || [];
      this.lastOrder = JSON.parse(localStorage.getItem('releaf_last_order')) || null;
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  },

  saveCart() {
    localStorage.setItem('releaf_cart', JSON.stringify(this.cart));
    updateCartUIBadges();
  },

  saveWishlist() {
    localStorage.setItem('releaf_wishlist', JSON.stringify(this.wishlist));
    updateWishlistUIBadges();
  },

  saveRecentViewed() {
    localStorage.setItem('releaf_recent_viewed', JSON.stringify(this.recentViewed));
  },

  saveLastOrder(order) {
    this.lastOrder = order;
    localStorage.setItem('releaf_last_order', JSON.stringify(order));
  }
};

// ============================================================================
// 3. Indian Rupee Formatter & Utilities
// ============================================================================
const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
});

function formatPrice(amount) {
  return inrFormatter.format(amount);
}

function getProductById(id) {
  return PRODUCTS_DATA.find(p => p.id === id);
}

// Toast Notifications System (Replaces alert popups)
function showToast(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;

  const iconSvg = type === 'error'
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-body">${message}</div>
    <button class="toast-dismiss" aria-label="Dismiss">&times;</button>
  `;

  toast.querySelector('.toast-dismiss').addEventListener('click', () => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    setTimeout(() => toast.remove(), 250);
  });

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      setTimeout(() => toast.remove(), 250);
    }
  }, duration);
}

// Cart Badge Bounce Animation
function triggerCartBounce() {
  const cartIcon = document.getElementById('cartActionBtn');
  if (cartIcon) {
    cartIcon.classList.remove('cart-bouncing');
    void cartIcon.offsetWidth; // Force repaint
    cartIcon.classList.add('cart-bouncing');
  }
}

function updateCartUIBadges() {
  const badge = document.getElementById('headerCartCount');
  const count = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function updateWishlistUIBadges() {
  const badge = document.getElementById('headerWishlistCount');
  const count = AppState.wishlist.length;
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// ============================================================================
// 4. Single-Page Hash Router
// ============================================================================
function handleRouting() {
  const hash = window.location.hash || '#home';

  // Highlight active nav item
  document.querySelectorAll('.nav-link').forEach(link => {
    const targetHash = link.getAttribute('href');
    if (targetHash === hash || (hash.startsWith('#catalog') && targetHash === '#catalog') || (hash.startsWith('#product') && targetHash === '#catalog')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Hide all views first
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.remove('active-view');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Route dispatch
  if (hash === '' || hash === '#' || hash === '#home') {
    document.getElementById('viewLanding').classList.add('active-view');
  } else if (hash === '#catalog') {
    document.getElementById('viewLanding').classList.add('active-view');
    setTimeout(() => {
      const catalogEl = document.getElementById('catalogSection');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else if (hash.startsWith('#product/')) {
    const productId = hash.replace('#product/', '');
    renderProductDetailView(productId);
    document.getElementById('viewProductDetail').classList.add('active-view');
  } else if (hash === '#cart' || hash === '#checkout') {
    renderCartAndCheckoutView();
    document.getElementById('viewCartCheckout').classList.add('active-view');
    if (hash === '#checkout') {
      setTimeout(() => {
        const checkoutForm = document.getElementById('checkoutFormCard');
        if (checkoutForm) checkoutForm.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  } else if (hash.startsWith('#tracking')) {
    const parts = hash.split('/');
    const orderIdParam = parts[1] || (AppState.lastOrder ? AppState.lastOrder.orderId : 'RL-2026-8942');
    renderOrderTrackingView(orderIdParam);
    document.getElementById('viewOrderTracking').classList.add('active-view');
  } else if (hash === '#contact') {
    document.getElementById('viewLanding').classList.add('active-view');
    setTimeout(() => {
      const footerEl = document.getElementById('siteFooter');
      if (footerEl) footerEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    // Default fallback
    document.getElementById('viewLanding').classList.add('active-view');
  }
}

// ============================================================================
// 5. Page 1: Landing & Catalog Logic
// ============================================================================
function renderProductGrid() {
  const gridContainer = document.getElementById('productsGrid');
  if (!gridContainer) return;

  // Filter products by category
  let filtered = PRODUCTS_DATA.filter(p => {
    if (AppState.activeFilter === 'all') return true;
    return p.category === AppState.activeFilter;
  });

  // Filter by search query
  if (AppState.searchQuery.trim() !== '') {
    const q = AppState.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.ecoTag.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Sort products
  if (AppState.activeSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.activeSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.activeSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else {
    // default 'popular' / featured
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  const resultsCountEl = document.getElementById('catalogResultsCount');
  if (resultsCountEl) {
    resultsCountEl.textContent = `Showing ${filtered.length} sustainable ${filtered.length === 1 ? 'item' : 'items'}`;
  }

  // Empty Search State
  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-state-box" style="grid-column: 1 / -1;">
        <svg class="empty-state-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          <line x1="8" y1="11" x2="14" y2="11"></line>
        </svg>
        <h3>No Earth-friendly products found</h3>
        <p style="color: var(--color-charcoal-muted); max-width: 400px;">
          We couldn't find any items matching "${AppState.searchQuery}". Try searching for bamboo, jute, scrubbers, or clear your filters.
        </p>
        <button class="btn-secondary" id="btnResetSearch">Reset Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('btnResetSearch');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        AppState.searchQuery = '';
        AppState.activeFilter = 'all';
        const searchInput = document.getElementById('catalogSearchInput');
        if (searchInput) searchInput.value = '';
        document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
        document.querySelector('.category-chip[data-category="all"]').classList.add('active');
        renderProductGrid();
      });
    }
    return;
  }

  // Render cards
  gridContainer.innerHTML = filtered.map(product => {
    const isWishlisted = AppState.wishlist.includes(product.id);
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="card-image-box">
          <div class="skeleton-box"></div>
          <span class="card-eco-tag">${product.ecoTag}</span>
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Add to Wishlist" title="Save to Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <img src="${product.images.front}" alt="${product.name}" loading="lazy" onload="this.previousElementSibling.previousElementSibling.previousElementSibling.classList.add('loaded')">
          <button class="card-quick-view-btn" data-id="${product.id}">Quick View</button>
        </div>

        <div class="card-content">
          <span class="card-category">${product.categoryLabel}</span>
          <h3 class="card-title">${product.name}</h3>

          <div class="card-rating-row">
            <div class="stars-wrapper">
              ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 !== 0 ? '½' : ''}
            </div>
            <span><strong>${product.rating}</strong> (${product.reviewsCount})</span>
          </div>

          <div class="card-price-row">
            <span class="current-price">${formatPrice(product.price)}</span>
            <span class="original-price">${formatPrice(product.originalPrice)}</span>
            <span class="discount-pill">${discount}% OFF</span>
          </div>

          <div class="card-actions">
            <button class="btn-primary btn-add-to-cart" data-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach card event listeners
  gridContainer.querySelectorAll('.product-card').forEach(card => {
    const id = card.getAttribute('data-id');

    // Click card navigates to Product Detail
    card.addEventListener('click', (e) => {
      if (e.target.closest('.card-wishlist-btn') || e.target.closest('.btn-add-to-cart') || e.target.closest('.card-quick-view-btn')) {
        return; // Don't navigate if clicked child actions
      }
      window.location.hash = `#product/${id}`;
    });

    // Wishlist Toggle
    const wishBtn = card.querySelector('.card-wishlist-btn');
    if (wishBtn) {
      wishBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(id, wishBtn);
      });
    }

    // Quick View
    const quickViewBtn = card.querySelector('.card-quick-view-btn');
    if (quickViewBtn) {
      quickViewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuickViewModal(id);
      });
    }

    // Add to Cart
    const addBtn = card.querySelector('.btn-add-to-cart');
    if (addBtn) {
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(id, 1, addBtn);
      });
    }
  });
}

// Wishlist Toggle Helper
function toggleWishlist(productId, buttonEl) {
  const idx = AppState.wishlist.indexOf(productId);
  const product = getProductById(productId);

  if (idx > -1) {
    AppState.wishlist.splice(idx, 1);
    if (buttonEl) {
      buttonEl.classList.remove('active');
      buttonEl.querySelector('svg').setAttribute('fill', 'none');
    }
    showToast(`Removed "${product ? product.name : 'Item'}" from wishlist`, 'info');
  } else {
    AppState.wishlist.push(productId);
    if (buttonEl) {
      buttonEl.classList.add('active');
      buttonEl.querySelector('svg').setAttribute('fill', 'currentColor');
    }
    showToast(`Added "${product ? product.name : 'Item'}" to wishlist!`, 'success');
  }

  AppState.saveWishlist();
}

// Add to Cart Helper with visual feedback
function addToCart(productId, quantity = 1, buttonEl = null) {
  const product = getProductById(productId);
  if (!product) return;

  const existing = AppState.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    AppState.cart.push({ id: productId, quantity: quantity });
  }

  AppState.saveCart();
  triggerCartBounce();

  // Button tick animation feedback
  if (buttonEl) {
    const originalText = buttonEl.innerHTML;
    buttonEl.classList.add('added-success');
    buttonEl.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>Added ✓</span>
    `;
    setTimeout(() => {
      buttonEl.classList.remove('added-success');
      buttonEl.innerHTML = originalText;
    }, 1400);
  }

  showToast(`Added ${quantity}x "${product.name}" to cart!`, 'success');
}

// Quick View Modal
function openQuickViewModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const modalImg = document.getElementById('qvModalImage');
  const modalContent = document.getElementById('qvModalContent');

  if (!modal || !modalImg || !modalContent) return;

  modalImg.src = product.images.front;
  modalImg.alt = product.name;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  modalContent.innerHTML = `
    <span class="stock-status-pill">${product.stockStatus}</span>
    <h2 style="font-size: 1.6rem; margin: 0.2rem 0;">${product.name}</h2>
    <div class="card-rating-row">
      <div class="stars-wrapper">★ ★ ★ ★ ★</div>
      <span><strong>${product.rating}</strong> (${product.reviewsCount} reviews)</span>
    </div>
    <div class="detail-price-box" style="padding: 0.6rem 0;">
      <span class="detail-current-price">${formatPrice(product.price)}</span>
      <span class="detail-original-price">${formatPrice(product.originalPrice)}</span>
      <span class="discount-pill">${discount}% OFF</span>
    </div>
    <p style="color: var(--color-charcoal-muted); font-size: 0.92rem; line-height: 1.5;">${product.description}</p>
    <div style="background: var(--color-sea-green-light); padding: 0.75rem 1rem; border-radius: var(--radius-sm); font-size: 0.85rem; color: var(--color-sea-green);">
      <strong>🌿 Eco Impact:</strong> ${product.ecoImpact.plasticSaved} • ${product.ecoImpact.biodegradesIn}
    </div>
    <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
      <button class="btn-primary" id="qvAddToCartBtn" style="flex: 1;">Add to Cart</button>
      <a href="#product/${product.id}" class="btn-secondary" id="qvViewDetailLink" style="flex: 1; text-align: center;">Full Details</a>
    </div>
  `;

  document.getElementById('qvAddToCartBtn').addEventListener('click', () => {
    addToCart(product.id, 1);
    closeQuickViewModal();
  });

  document.getElementById('qvViewDetailLink').addEventListener('click', () => {
    closeQuickViewModal();
  });

  modal.classList.add('visible');
}

function closeQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('visible');
}

// Animated Eco-Impact Counter on Home Page
function initEcoStatsCounter() {
  const statsSection = document.getElementById('ecoImpactStrip');
  if (!statsSection) return;

  let hasRun = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasRun) {
      hasRun = true;
      document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 1800;
        const stepTime = 20;
        const totalSteps = duration / stepTime;
        const stepIncrement = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
          current += stepIncrement;
          if (current >= target) {
            counter.textContent = target.toLocaleString('en-IN') + (counter.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString('en-IN') + (counter.getAttribute('data-suffix') || '');
          }
        }, stepTime);
      });
    }
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

// ============================================================================
// 6. Page 2: Product Detail View Logic
// ============================================================================
function renderProductDetailView(productId) {
  const product = getProductById(productId);
  const container = document.getElementById('productDetailContent');
  if (!container) return;

  if (!product) {
    container.innerHTML = `
      <div class="empty-state-box">
        <h3>Product Not Found</h3>
        <p>The product you are looking for does not exist or has been discontinued.</p>
        <a href="#catalog" class="btn-primary">Back to Catalog</a>
      </div>
    `;
    return;
  }

  // Record into recently viewed
  if (!AppState.recentViewed.includes(product.id)) {
    AppState.recentViewed.unshift(product.id);
    if (AppState.recentViewed.length > 6) AppState.recentViewed.pop();
    AppState.saveRecentViewed();
  }

  const isWishlisted = AppState.wishlist.includes(product.id);
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  container.innerHTML = `
    <!-- Breadcrumb -->
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <a href="#home">Home</a>
      <span class="separator">/</span>
      <a href="#catalog">Catalog</a>
      <span class="separator">/</span>
      <span style="text-transform: capitalize;">${product.categoryLabel}</span>
      <span class="separator">/</span>
      <span style="color: var(--color-charcoal); font-weight: 500;">${product.name}</span>
    </nav>

    <div class="product-detail-layout">
      <!-- Gallery Column -->
      <div class="gallery-container">
        <div class="gallery-main-viewport" id="galleryMainBox">
          <img id="detailMainImage" src="${product.images.front}" alt="${product.name} - Front View" loading="eager">
        </div>

        <div class="gallery-thumbnails-strip" id="galleryThumbnails">
          <button class="gallery-thumbnail-btn active" data-src="${product.images.front}" title="Front Angle">
            <img src="${product.images.front}" alt="${product.name} Thumbnail Front">
          </button>
          <button class="gallery-thumbnail-btn" data-src="${product.images.inUse}" title="In-Use Lifestyle">
            <img src="${product.images.inUse}" alt="${product.name} Thumbnail In-Use">
          </button>
          <button class="gallery-thumbnail-btn" data-src="${product.images.material}" title="Material Close-Up">
            <img src="${product.images.material}" alt="${product.name} Thumbnail Material">
          </button>
          <button class="gallery-thumbnail-btn" data-src="${product.images.packaging}" title="Eco-Packaging">
            <img src="${product.images.packaging}" alt="${product.name} Thumbnail Packaging">
          </button>
        </div>
      </div>

      <!-- Info & Purchase Column -->
      <div class="product-info-col">
        <div class="detail-badge-row">
          <span class="card-eco-tag" style="position: static;">${product.ecoTag}</span>
          <span class="stock-status-pill">${product.stockStatus}</span>
        </div>

        <h1 class="detail-product-title">${product.name}</h1>

        <div class="detail-rating-row">
          <div class="stars-wrapper" style="font-size: 1.1rem;">★ ★ ★ ★ ★</div>
          <span><strong>${product.rating}</strong> (${product.reviewsCount} verified reviews)</span>
        </div>

        <div class="detail-price-box">
          <span class="detail-current-price">${formatPrice(product.price)}</span>
          <span class="detail-original-price">${formatPrice(product.originalPrice)}</span>
          <span class="discount-pill">${discount}% OFF</span>
          <span class="detail-tax-notice">Taxes included • 100% Plastic-Free Packaging</span>
        </div>

        <p style="color: var(--color-charcoal-muted); line-height: 1.7; font-size: 1.05rem;">
          ${product.description}
        </p>

        <!-- Product Accordions: Made From, Uses, Eco Impact, Care & Disposal -->
        <div class="detail-accordions-group">
          <!-- Accordion 1: Made From -->
          <div class="accordion-item open">
            <button class="accordion-header">
              <span>🌿 Made From (Natural Materials)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="accordion-body">
              ${product.madeFrom}
            </div>
          </div>

          <!-- Accordion 2: Uses / How to use -->
          <div class="accordion-item">
            <button class="accordion-header">
              <span>📖 Uses & How to Use</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="accordion-body">
              <ul style="list-style: disc; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.4rem;">
                ${product.howToUse.map(step => `<li>${step}</li>`).join('')}
              </ul>
            </div>
          </div>

          <!-- Accordion 3: Eco Impact -->
          <div class="accordion-item">
            <button class="accordion-header">
              <span>🌍 Eco Impact Measurable Metrics</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="accordion-body">
              <div class="eco-impact-metric-grid">
                <div class="metric-card">
                  <span class="metric-val">${product.ecoImpact.plasticSaved}</span>
                  <span class="metric-lbl">Plastic Diverted</span>
                </div>
                <div class="metric-card">
                  <span class="metric-val">${product.ecoImpact.biodegradesIn}</span>
                  <span class="metric-lbl">Soil Breakdown</span>
                </div>
                <div class="metric-card">
                  <span class="metric-val">${product.ecoImpact.co2Saved}</span>
                  <span class="metric-lbl">Carbon Neutralized</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Accordion 4: Care & Disposal -->
          <div class="accordion-item">
            <button class="accordion-header">
              <span>♻️ Care & Zero-Waste Disposal</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="accordion-body">
              ${product.careDisposal}
            </div>
          </div>
        </div>

        <!-- Quantity Stepper & CTAs -->
        <div class="detail-cta-row">
          <div class="quantity-stepper">
            <button class="stepper-btn" id="detailQtyMinus" aria-label="Decrease quantity">−</button>
            <input type="number" id="detailQtyInput" class="stepper-input" value="1" min="1" max="20" readonly>
            <button class="stepper-btn" id="detailQtyPlus" aria-label="Increase quantity">+</button>
          </div>

          <button class="btn-primary" id="detailAddToCartBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span>Add to Cart</span>
          </button>

          <button class="btn-secondary" id="detailBuyNowBtn">
            <span>Buy Now</span>
          </button>

          <button class="btn-icon card-wishlist-btn ${isWishlisted ? 'active' : ''}" id="detailWishlistBtn" style="position: static; width: 48px; height: 48px;" aria-label="Save to Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Related Products -->
    <section class="related-products-section">
      <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">You May Also Like</h2>
      <div class="products-grid" id="relatedProductsGrid"></div>
    </section>
  `;

  // Gallery switching logic
  const mainImg = document.getElementById('detailMainImage');
  const mainBox = document.getElementById('galleryMainBox');
  const thumbBtns = document.querySelectorAll('.gallery-thumbnail-btn');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const newSrc = btn.getAttribute('data-src');
      mainImg.style.opacity = '0';
      setTimeout(() => {
        mainImg.src = newSrc;
        mainImg.style.opacity = '1';
      }, 150);
    });
  });

  // Hover Zoom Effect
  if (mainBox && mainImg) {
    mainBox.addEventListener('mousemove', (e) => {
      const rect = mainBox.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
      mainImg.style.transform = 'scale(1.75)';
    });
    mainBox.addEventListener('mouseleave', () => {
      mainImg.style.transformOrigin = 'center center';
      mainImg.style.transform = 'scale(1)';
    });
  }

  // Accordion Toggles
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('open');
    });
  });

  // Quantity stepper
  const qtyInput = document.getElementById('detailQtyInput');
  document.getElementById('detailQtyMinus').addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) qtyInput.value = val - 1;
  });
  document.getElementById('detailQtyPlus').addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val < 20) qtyInput.value = val + 1;
  });

  // Add to Cart
  const addBtn = document.getElementById('detailAddToCartBtn');
  addBtn.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(product.id, qty, addBtn);
  });

  // Buy Now (Adds to cart & routes directly to checkout)
  document.getElementById('detailBuyNowBtn').addEventListener('click', () => {
    const qty = parseInt(qtyInput.value) || 1;
    addToCart(product.id, qty);
    window.location.hash = '#checkout';
  });

  // Wishlist button
  const wishBtn = document.getElementById('detailWishlistBtn');
  wishBtn.addEventListener('click', () => {
    toggleWishlist(product.id, wishBtn);
  });

  // Render "You May Also Like"
  renderRelatedProducts(product);
}

function renderRelatedProducts(currentProduct) {
  const container = document.getElementById('relatedProductsGrid');
  if (!container) return;

  const related = PRODUCTS_DATA
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  container.innerHTML = related.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="card-image-box">
        <span class="card-eco-tag">${p.ecoTag}</span>
        <img src="${p.images.front}" alt="${p.name}" loading="lazy">
      </div>
      <div class="card-content">
        <span class="card-category">${p.categoryLabel}</span>
        <h3 class="card-title">${p.name}</h3>
        <div class="card-price-row">
          <span class="current-price">${formatPrice(p.price)}</span>
          <span class="original-price">${formatPrice(p.originalPrice)}</span>
        </div>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      window.location.hash = `#product/${id}`;
    });
  });
}

// ============================================================================
// 7. Page 3: Cart & Checkout View Logic
// ============================================================================
function renderCartAndCheckoutView() {
  const cartListContainer = document.getElementById('cartItemsList');
  const summarySubtotal = document.getElementById('summarySubtotal');
  const summaryShipping = document.getElementById('summaryShipping');
  const summaryDiscount = document.getElementById('summaryDiscount');
  const summaryDiscountRow = document.getElementById('summaryDiscountRow');
  const summaryTotal = document.getElementById('summaryTotal');
  const checkoutItemsCount = document.getElementById('cartItemsCountTitle');

  if (!cartListContainer) return;

  if (AppState.cart.length === 0) {
    cartListContainer.innerHTML = `
      <div class="empty-state-box">
        <svg class="empty-state-illustration" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          <path d="M12 9l2 2 4-4"></path>
        </svg>
        <h3>Your Cart is Light as a Leaf</h3>
        <p style="color: var(--color-charcoal-muted); max-width: 380px;">
          You don't have any eco-friendly essentials in your cart yet. Discover our zero-waste biodegradable catalog!
        </p>
        <a href="#catalog" class="btn-primary" style="margin-top: 0.5rem;">Explore Sustainable Catalog</a>
      </div>
    `;

    if (summarySubtotal) summarySubtotal.textContent = formatPrice(0);
    if (summaryShipping) summaryShipping.textContent = formatPrice(0);
    if (summaryTotal) summaryTotal.textContent = formatPrice(0);
    if (checkoutItemsCount) checkoutItemsCount.textContent = 'Shopping Cart (0 items)';
    return;
  }

  // Calculate Subtotals
  let subtotal = 0;
  cartListContainer.innerHTML = AppState.cart.map(cartItem => {
    const product = getProductById(cartItem.id);
    if (!product) return '';

    const itemTotal = product.price * cartItem.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item-row" data-id="${product.id}">
        <div class="cart-item-thumb">
          <img src="${product.images.front}" alt="${product.name}">
        </div>
        <div class="cart-item-info">
          <a href="#product/${product.id}" class="cart-item-title">${product.name}</a>
          <span style="font-size: 0.8rem; color: var(--color-sea-green); font-weight: 500;">🌿 ${product.ecoTag}</span>
          <div class="cart-item-price">${formatPrice(product.price)} each</div>
        </div>
        <div class="cart-item-actions">
          <div class="quantity-stepper" style="padding: 0.1rem 0.35rem;">
            <button class="stepper-btn cart-qty-minus" data-id="${product.id}" aria-label="Decrease quantity">−</button>
            <input type="number" class="stepper-input" value="${cartItem.quantity}" readonly>
            <button class="stepper-btn cart-qty-plus" data-id="${product.id}" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn-icon btn-remove-item" data-id="${product.id}" aria-label="Remove item" title="Remove from cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Shipping Calculation: Free on orders >= 499, else 49
  const shipping = subtotal >= 499 ? 0 : 49;

  // Coupon discount calculation
  let discountAmount = 0;
  if (AppState.appliedCoupon) {
    discountAmount = Math.round((subtotal * AppState.appliedCoupon.discountPercent) / 100);
  }

  const grandTotal = Math.max(0, subtotal + shipping - discountAmount);

  // Update Summary UI
  if (summarySubtotal) summarySubtotal.textContent = formatPrice(subtotal);
  if (summaryShipping) {
    summaryShipping.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
  }

  if (summaryDiscountRow && summaryDiscount) {
    if (AppState.appliedCoupon) {
      summaryDiscountRow.style.display = 'flex';
      summaryDiscount.textContent = `- ${formatPrice(discountAmount)} (${AppState.appliedCoupon.code})`;
    } else {
      summaryDiscountRow.style.display = 'none';
    }
  }

  if (summaryTotal) summaryTotal.textContent = formatPrice(grandTotal);

  const totalItemsCount = AppState.cart.reduce((s, i) => s + i.quantity, 0);
  if (checkoutItemsCount) {
    checkoutItemsCount.textContent = `Shopping Cart (${totalItemsCount} ${totalItemsCount === 1 ? 'item' : 'items'})`;
  }

  // Update Place Order button text
  const placeOrderBtn = document.getElementById('btnPlaceOrder');
  if (placeOrderBtn) {
    placeOrderBtn.innerHTML = `<span>Place Order (${formatPrice(grandTotal)})</span>`;
  }

  // Attach Cart Controls Listeners
  cartListContainer.querySelectorAll('.cart-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = AppState.cart.find(i => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          AppState.cart = AppState.cart.filter(i => i.id !== id);
        }
        AppState.saveCart();
        renderCartAndCheckoutView();
      }
    });
  });

  cartListContainer.querySelectorAll('.cart-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = AppState.cart.find(i => i.id === id);
      if (item && item.quantity < 20) {
        item.quantity += 1;
        AppState.saveCart();
        renderCartAndCheckoutView();
      }
    });
  });

  cartListContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const product = getProductById(id);
      AppState.cart = AppState.cart.filter(i => i.id !== id);
      AppState.saveCart();
      renderCartAndCheckoutView();
      showToast(`Removed "${product ? product.name : 'Item'}" from cart`, 'info');
    });
  });
}

// Coupon Logic (e.g. ECO10 for 10% off, RELEAF20 for 20% off)
function handleApplyCoupon() {
  const input = document.getElementById('couponInput');
  const tag = document.getElementById('couponAppliedTag');
  if (!input) return;

  const code = input.value.trim().toUpperCase();

  if (code === 'ECO10') {
    AppState.appliedCoupon = { code: 'ECO10', discountPercent: 10 };
    showToast('Coupon "ECO10" applied! You saved 10% on your eco order.', 'success');
  } else if (code === 'RELEAF20') {
    AppState.appliedCoupon = { code: 'RELEAF20', discountPercent: 20 };
    showToast('Special Coupon "RELEAF20" applied! 20% discount granted.', 'success');
  } else {
    showToast('Invalid coupon code. Try "ECO10" for 10% off.', 'error');
    return;
  }

  if (tag) {
    tag.style.display = 'flex';
    tag.innerHTML = `
      <span>🌱 <strong>${code}</strong> Applied (${AppState.appliedCoupon.discountPercent}% Off)</span>
      <button id="btnRemoveCoupon" style="color: var(--color-terracotta); margin-left: 0.5rem; font-weight: bold;">✕</button>
    `;
    document.getElementById('btnRemoveCoupon').addEventListener('click', () => {
      AppState.appliedCoupon = null;
      tag.style.display = 'none';
      input.value = '';
      renderCartAndCheckoutView();
      showToast('Coupon removed.', 'info');
    });
  }

  renderCartAndCheckoutView();
}

// Payment Methods Selection Tab Switcher
function initPaymentModes() {
  const tabs = document.querySelectorAll('.payment-tab-btn');
  const panels = document.querySelectorAll('.payment-subpanel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const mode = tab.getAttribute('data-mode');
      AppState.selectedPaymentTab = mode;

      const activePanel = document.getElementById(`panel-${mode}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  // Simulation mode toggle (Success vs Failure)
  const btnSimSuccess = document.getElementById('simSuccessBtn');
  const btnSimFailure = document.getElementById('simFailureBtn');

  if (btnSimSuccess && btnSimFailure) {
    btnSimSuccess.addEventListener('click', () => {
      AppState.simulatedPaymentMode = 'success';
      btnSimSuccess.classList.add('success-active');
      btnSimFailure.classList.remove('failure-active');
      showToast('Test mode: Payment will simulate SUCCESS', 'info');
    });

    btnSimFailure.addEventListener('click', () => {
      AppState.simulatedPaymentMode = 'failure';
      btnSimFailure.classList.add('failure-active');
      btnSimSuccess.classList.remove('success-active');
      showToast('Test mode: Payment will simulate FAILURE (declined)', 'info');
    });
  }

  // Format Card Number input mask
  const cardInput = document.getElementById('cardNumInput');
  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
      e.target.value = val;
    });
  }

  // Format Card Expiry mask MM/YY
  const cardExp = document.getElementById('cardExpiryInput');
  if (cardExp) {
    cardExp.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 2) {
        val = val.substring(0, 2) + '/' + val.substring(2);
      }
      e.target.value = val;
    });
  }
}

// Checkout Form Validation & Submission
function handleCheckoutSubmit(e) {
  e.preventDefault();

  if (AppState.cart.length === 0) {
    showToast('Your cart is empty. Add products before checkout!', 'error');
    return;
  }

  // Gather Fields
  const nameInput = document.getElementById('custName');
  const emailInput = document.getElementById('custEmail');
  const phoneInput = document.getElementById('custPhone');
  const addressInput = document.getElementById('custAddress');
  const cityInput = document.getElementById('custCity');
  const stateInput = document.getElementById('custState');
  const pincodeInput = document.getElementById('custPincode');

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.input-control').forEach(inp => inp.classList.remove('input-error'));

  // 1. Full Name (min 3 chars)
  if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
    nameInput.classList.add('input-error');
    isValid = false;
  }

  // 2. Email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('input-error');
    isValid = false;
  }

  // 3. Indian Phone: 10 digits starting with 6-9
  const phoneRegex = /^[6-9]\d{9}$/;
  const cleanPhone = phoneInput.value.replace(/\D/g, '');
  if (!phoneRegex.test(cleanPhone)) {
    phoneInput.classList.add('input-error');
    isValid = false;
  }

  // 4. Address & City
  if (!addressInput.value.trim()) {
    addressInput.classList.add('input-error');
    isValid = false;
  }
  if (!cityInput.value.trim()) {
    cityInput.classList.add('input-error');
    isValid = false;
  }
  if (!stateInput.value.trim()) {
    stateInput.classList.add('input-error');
    isValid = false;
  }

  // 5. Indian Pincode: 6 digits starting with 1-9
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  if (!pincodeRegex.test(pincodeInput.value.trim())) {
    pincodeInput.classList.add('input-error');
    isValid = false;
  }

  // 6. Payment method specific validation
  if (AppState.selectedPaymentTab === 'upi') {
    const upiInput = document.getElementById('upiIdInput');
    if (!upiInput.value.trim() || !upiInput.value.includes('@')) {
      upiInput.classList.add('input-error');
      isValid = false;
    }
  } else if (AppState.selectedPaymentTab === 'card') {
    const cardNum = document.getElementById('cardNumInput');
    const cardExp = document.getElementById('cardExpiryInput');
    const cardCvv = document.getElementById('cardCvvInput');
    if (cardNum.value.replace(/\s/g, '').length !== 16) {
      cardNum.classList.add('input-error');
      isValid = false;
    }
    if (cardExp.value.length !== 5) {
      cardExp.classList.add('input-error');
      isValid = false;
    }
    if (cardCvv.value.length < 3) {
      cardCvv.classList.add('input-error');
      isValid = false;
    }
  }

  if (!isValid) {
    showToast('Please correct the highlighted fields before proceeding.', 'error');
    return;
  }

  // Hide any previous failure banner
  const failureBanner = document.getElementById('paymentFailureBanner');
  if (failureBanner) failureBanner.style.display = 'none';

  // Process Simulated Payment
  const placeOrderBtn = document.getElementById('btnPlaceOrder');
  placeOrderBtn.disabled = true;
  placeOrderBtn.innerHTML = `
    <span class="sim-pulse-indicator"></span>
    <span>Authorizing payment securely...</span>
  `;

  setTimeout(() => {
    placeOrderBtn.disabled = false;

    // Check Simulated Outcome
    if (AppState.simulatedPaymentMode === 'failure') {
      // Payment Failure Flow
      if (failureBanner) {
        failureBanner.style.display = 'block';
        failureBanner.scrollIntoView({ behavior: 'smooth' });
      }
      placeOrderBtn.innerHTML = `<span>Place Order</span>`;
      showToast('Payment declined by issuing bank (Simulation).', 'error');
    } else {
      // Payment Success Flow
      const generatedOrderId = 'RL-2026-' + Math.floor(1000 + Math.random() * 9000);
      const orderDate = new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const totalItems = AppState.cart.reduce((s, i) => s + i.quantity, 0);

      const newOrder = {
        orderId: generatedOrderId,
        date: orderDate,
        statusStep: 1, // 'Packed in eco-packaging'
        recipient: nameInput.value.trim(),
        phone: '+91 ' + cleanPhone,
        address: `${addressInput.value.trim()}, ${cityInput.value.trim()}, ${stateInput.value.trim()} - ${pincodeInput.value.trim()}`,
        courier: 'ReLeaf Eco-Express Fleet (EV Unit #EV-' + Math.floor(100 + Math.random() * 900) + ')',
        items: [...AppState.cart],
        carbonSavedKg: (totalItems * 0.28).toFixed(2) + ' kg CO2 Offset',
        plasticSavedGrams: (totalItems * 75) + 'g Plastic Prevented'
      };

      // Save order
      AppState.saveLastOrder(newOrder);

      // Clear Cart
      AppState.cart = [];
      AppState.appliedCoupon = null;
      AppState.saveCart();

      // Launch Confetti & Leaves!
      launchCelebration();

      // Show Order Confirmation Modal
      showOrderConfirmation(newOrder);
    }
  }, 1800);
}

// Celebration Leaves & Confetti Effect
function launchCelebration() {
  const canvas = document.getElementById('celebrationCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#2E8B57', '#44b677', '#D2796B', '#F5F5DC', '#FAF8F2', '#a8d5ba'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.5) * 14 - 3,
      size: Math.random() * 9 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 10,
      alpha: 1,
      isLeaf: Math.random() > 0.4
    });
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeCount = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.rotation += p.vRotation;
      p.alpha -= 0.009;

      if (p.alpha > 0) {
        activeCount++;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.isLeaf) {
          // Draw leaf shape
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.quadraticCurveTo(p.size, 0, 0, p.size);
          ctx.quadraticCurveTo(-p.size, 0, 0, -p.size);
          ctx.fill();
        } else {
          // Confetti rectangle
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        }
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  animate();
}

// Confirmation Modal Display
function showOrderConfirmation(order) {
  const overlay = document.getElementById('orderConfirmationOverlay');
  const detailsBox = document.getElementById('orderSuccessDetails');
  if (!overlay || !detailsBox) return;

  detailsBox.innerHTML = `
    <div style="background: var(--color-beige); padding: 1rem; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem;">
      <p><strong>Order ID:</strong> <span style="color: var(--color-sea-green); font-weight: bold;">${order.orderId}</span></p>
      <p><strong>Recipient:</strong> ${order.recipient}</p>
      <p><strong>Deliver To:</strong> ${order.address}</p>
      <p><strong>Eco Fleet:</strong> ${order.courier}</p>
      <p style="color: var(--color-sea-green); margin-top: 0.4rem;"><strong>🌱 Earth Impact:</strong> ${order.plasticSavedGrams} & ${order.carbonSavedKg}</p>
    </div>
  `;

  document.getElementById('btnGoToTracking').onclick = () => {
    overlay.classList.remove('visible');
    window.location.hash = `#tracking/${order.orderId}`;
  };

  document.getElementById('btnContinueShopping').onclick = () => {
    overlay.classList.remove('visible');
    window.location.hash = '#catalog';
  };

  overlay.classList.add('visible');
}

// ============================================================================
// 8. Page 4: Order Tracking View Logic & Animated Timeline Simulation
// ============================================================================
function renderOrderTrackingView(orderId) {
  const container = document.getElementById('trackingViewContainer');
  const trackingInput = document.getElementById('trackingLookupInput');
  if (!container) return;

  if (trackingInput) trackingInput.value = orderId;

  // Find order in sample orders or last placed order
  let order = SAMPLE_ORDERS[orderId];
  if (!order && AppState.lastOrder && AppState.lastOrder.orderId === orderId) {
    order = AppState.lastOrder;
  }

  if (!order) {
    // Fallback default
    order = {
      orderId: orderId || 'RL-2026-8942',
      date: '12 Oct 2026, 02:45 PM',
      statusStep: 2,
      recipient: 'Eco Conscious Shopper',
      phone: '+91 98765 43210',
      address: '74 Lotus Boulevard, Whitefield, Bengaluru, Karnataka - 560066',
      courier: 'ReLeaf Eco-Express Fleet (EV Unit #EV-550)',
      items: [
        { id: 'bamboo-toothbrush', quantity: 1 },
        { id: 'jute-bag', quantity: 1 }
      ],
      carbonSavedKg: '0.48 kg CO2 Offset',
      plasticSavedGrams: '190g Plastic Prevented'
    };
  }

  AppState.currentTrackingOrder = order;
  AppState.trackingStepIndex = order.statusStep || 2;

  renderTrackingTimelineUI();
  startTrackingLiveSimulation();
}

function renderTrackingTimelineUI() {
  const order = AppState.currentTrackingOrder;
  if (!order) return;

  const currentStep = AppState.trackingStepIndex; // 0 to 4
  const steps = [
    { title: 'Ordered', subtitle: 'Order Verified' },
    { title: 'Packed', subtitle: '100% Plastic-Free' },
    { title: 'Shipped', subtitle: 'EV Dispatched' },
    { title: 'Out for Delivery', subtitle: 'Courier Arriving' },
    { title: 'Delivered', subtitle: 'Zero Waste Handover' }
  ];

  // Update progress bar width
  const progressFill = document.getElementById('timelineProgressFill');
  if (progressFill) {
    const percentage = (currentStep / (steps.length - 1)) * 90;
    progressFill.style.width = `${percentage}%`;
  }

  // Update milestone nodes
  const stepsContainer = document.getElementById('timelineStepsRow');
  if (stepsContainer) {
    stepsContainer.innerHTML = steps.map((s, idx) => {
      let stateClass = '';
      if (idx < currentStep) stateClass = 'completed';
      else if (idx === currentStep) stateClass = 'active';

      const icon = idx < currentStep
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

      return `
        <div class="timeline-step ${stateClass}">
          <div class="step-node">${icon}</div>
          <div>
            <div class="step-title">${s.title}</div>
            <div class="step-subtitle">${s.subtitle}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Update tracking details card
  const detailsCard = document.getElementById('trackingOrderDetailsCard');
  if (detailsCard) {
    const statusTitles = ['Order Placed', 'Packed in Eco-Kraft Paper', 'In Transit via Electric Fleet', 'Out for Delivery Today', 'Delivered with 0% Plastic!'];

    detailsCard.innerHTML = `
      <div class="tracking-header-bar">
        <div>
          <span style="font-size: 0.82rem; color: var(--color-charcoal-muted); text-transform: uppercase;">Tracking Number</span>
          <h2 style="font-size: 1.8rem; color: var(--color-sea-green);">${order.orderId}</h2>
        </div>
        <div style="text-align: right;">
          <span class="stock-status-pill" style="font-size: 0.9rem; padding: 0.4rem 1rem;">
            ${statusTitles[currentStep]}
          </span>
          <div style="font-size: 0.85rem; color: var(--color-charcoal-muted); margin-top: 0.35rem;">
            Placed on ${order.date}
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-top: 1.75rem;">
        <div>
          <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem;">Recipient & Address</h4>
          <p style="font-size: 0.9rem; color: var(--color-charcoal-muted); line-height: 1.5;">
            <strong>${order.recipient}</strong> (${order.phone})<br>
            ${order.address}
          </p>
        </div>

        <div>
          <h4 style="font-size: 0.95rem; margin-bottom: 0.4rem;">Logistics Partner</h4>
          <p style="font-size: 0.9rem; color: var(--color-charcoal-muted); line-height: 1.5;">
            <strong>${order.courier}</strong><br>
            Estimated Delivery: <strong>Today by 07:00 PM</strong><br>
            <span style="color: var(--color-sea-green); font-weight: 500;">✓ 100% Carbon-Neutral Journey</span>
          </p>
        </div>
      </div>

      <div style="margin-top: 2rem;">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.85rem;">Items in this Parcel</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${order.items.map(it => {
            const prod = getProductById(it.id);
            if (!prod) return '';
            return `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--color-beige-light); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-beige-dark);">
                <div style="display: flex; align-items: center; gap: 0.85rem;">
                  <img src="${prod.images.front}" alt="${prod.name}" style="width: 44px; height: 44px; object-fit: cover; border-radius: var(--radius-xs);">
                  <div>
                    <span style="font-weight: 600; font-size: 0.92rem;">${prod.name}</span>
                    <span style="font-size: 0.8rem; color: var(--color-charcoal-muted); display: block;">Qty: ${it.quantity}</span>
                  </div>
                </div>
                <span style="font-weight: bold; color: var(--color-sea-green);">${formatPrice(prod.price * it.quantity)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Carbon & Plastic Saved Fact Card -->
      <div class="carbon-saved-fact-card">
        <div class="carbon-icon-badge">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
        </div>
        <div>
          <h4 style="font-size: 1.1rem; color: var(--color-sea-green); margin-bottom: 0.25rem;">
            Carbon & Plastic Saved with this Order
          </h4>
          <p style="font-size: 0.9rem; color: var(--color-charcoal); line-height: 1.5;">
            You eliminated <strong>${order.plasticSavedGrams}</strong> from landfills and neutralized <strong>${order.carbonSavedKg}</strong> through our electric delivery vehicle route. 1 mangrove sapling was planted in Sundarbans in your honor!
          </p>
        </div>
      </div>
    `;
  }
}

// Live Simulation Engine (Auto-advances every 4 seconds)
function startTrackingLiveSimulation() {
  if (AppState.trackingIntervalId) {
    clearInterval(AppState.trackingIntervalId);
  }

  AppState.trackingIntervalId = setInterval(() => {
    if (!AppState.isTrackingSimPlaying) return;

    if (AppState.trackingStepIndex < 4) {
      AppState.trackingStepIndex += 1;
      renderTrackingTimelineUI();
      const stepNames = ['Ordered', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
      showToast(`Tracking Update: Status moved to "${stepNames[AppState.trackingStepIndex]}"!`, 'info');
    } else {
      // Loop or stop
      AppState.trackingStepIndex = 4;
      renderTrackingTimelineUI();
    }
  }, 4500);
}

function setupTrackingControls() {
  const playBtn = document.getElementById('btnTrackingToggleSim');
  const nextBtn = document.getElementById('btnTrackingNextStep');
  const resetBtn = document.getElementById('btnTrackingResetStep');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      AppState.isTrackingSimPlaying = !AppState.isTrackingSimPlaying;
      playBtn.textContent = AppState.isTrackingSimPlaying ? 'Pause Live Sim ⏸' : 'Resume Live Sim ▶';
      showToast(AppState.isTrackingSimPlaying ? 'Live simulation resumed' : 'Live simulation paused', 'info');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (AppState.trackingStepIndex < 4) {
        AppState.trackingStepIndex += 1;
        renderTrackingTimelineUI();
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      AppState.trackingStepIndex = 0;
      renderTrackingTimelineUI();
      showToast('Timeline reset to Step 1: "Ordered"', 'info');
    });
  }

  // Lookup form
  const lookupForm = document.getElementById('trackingLookupForm');
  if (lookupForm) {
    lookupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = document.getElementById('trackingLookupInput').value.trim();
      if (val) {
        window.location.hash = `#tracking/${val}`;
      }
    });
  }

  // Sample order chips
  document.querySelectorAll('.sample-order-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const orderId = chip.getAttribute('data-order');
      window.location.hash = `#tracking/${orderId}`;
    });
  });
}

// ============================================================================
// 9. Interactive Plastic Footprint Calculator (Home Page)
// ============================================================================
function initEcoFootprintCalculator() {
  const slider = document.getElementById('footprintSlider');
  const personsDisplay = document.getElementById('footprintPersonsDisplay');
  const plasticAvoidedDisplay = document.getElementById('footprintPlasticKg');
  const co2AvoidedDisplay = document.getElementById('footprintCo2Kg');

  if (!slider) return;

  function update() {
    const persons = parseInt(slider.value) || 1;
    if (personsDisplay) personsDisplay.textContent = `${persons} ${persons === 1 ? 'Person' : 'People'}`;
    const plasticSaved = (persons * 14.8).toFixed(1);
    const co2Saved = (persons * 36.2).toFixed(1);
    if (plasticAvoidedDisplay) plasticAvoidedDisplay.textContent = `${plasticSaved} kg`;
    if (co2AvoidedDisplay) co2AvoidedDisplay.textContent = `${co2Saved} kg`;
  }

  slider.addEventListener('input', update);
  update();
}

// ============================================================================
// 10. Initialization & Global DOM Listeners
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize State
  AppState.init();

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.getElementById('siteHeader');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileClose = document.getElementById('mobileDrawerClose');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (mobileClose && mobileDrawer) {
    mobileClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // Category chips filtering
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.activeFilter = chip.getAttribute('data-category');
      renderProductGrid();
    });
  });

  // Live search input
  const searchInput = document.getElementById('catalogSearchInput');
  const searchClear = document.getElementById('catalogSearchClear');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value;
      if (searchClear) {
        searchClear.classList.toggle('visible', e.target.value.length > 0);
      }
      renderProductGrid();
    });
  }

  if (searchClear && searchInput) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      AppState.searchQuery = '';
      searchClear.classList.remove('visible');
      renderProductGrid();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.activeSort = e.target.value;
      renderProductGrid();
    });
  }

  // Quick View Modal Close
  const qvModal = document.getElementById('quickViewModal');
  const qvCloseBtn = document.getElementById('qvModalClose');
  if (qvCloseBtn) {
    qvCloseBtn.addEventListener('click', closeQuickViewModal);
  }
  if (qvModal) {
    qvModal.addEventListener('click', (e) => {
      if (e.target === qvModal) closeQuickViewModal();
    });
  }

  // Checkout Form Submission
  const checkoutForm = document.getElementById('checkoutForm');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
  }

  // Coupon apply button
  const couponBtn = document.getElementById('btnApplyCoupon');
  if (couponBtn) {
    couponBtn.addEventListener('click', handleApplyCoupon);
  }

  // Payment failure retry button
  const retryBtn = document.getElementById('btnRetryPayment');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      const failureBanner = document.getElementById('paymentFailureBanner');
      if (failureBanner) failureBanner.style.display = 'none';
      AppState.simulatedPaymentMode = 'success';
      const simSuccess = document.getElementById('simSuccessBtn');
      const simFailure = document.getElementById('simFailureBtn');
      if (simSuccess && simFailure) {
        simSuccess.classList.add('success-active');
        simFailure.classList.remove('failure-active');
      }
      showToast('Switched to payment SUCCESS simulation. Click Place Order to retry.', 'info');
    });
  }

  // Initialize features
  initPaymentModes();
  setupTrackingControls();
  initEcoFootprintCalculator();
  initEcoStatsCounter();

  // Render initial components
  updateCartUIBadges();
  updateWishlistUIBadges();
  renderProductGrid();

  // Setup Hash Router
  window.addEventListener('hashchange', handleRouting);
  handleRouting();
});
