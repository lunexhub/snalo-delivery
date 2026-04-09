export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface Store {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  tags: string[];
  products: Product[];
  area?: string;
}

export const deliveryAreas = [
  "Bronkhorstspruit",
  "Erasmus",
  "Culturapark",
  "Vesterpark",
  "Riamarpark",
  "Masada",
  "eZithobeni",
];

export const categories = [
  { id: "all", label: "All", icon: "🏪" },
  { id: "fast-food", label: "Fast Food", icon: "🍔" },
  { id: "restaurant", label: "Restaurants", icon: "🍽️" },
  { id: "grocery", label: "Groceries", icon: "🛒" },
  { id: "bakery", label: "Bakery", icon: "🥐" },
  { id: "drinks", label: "Drinks", icon: "🥤" },
  { id: "pharmacy", label: "Pharmacy", icon: "💊" },
];

export const stores: Store[] = [
  // ─── Fast Food ──────────────────────────────────
  {
    id: "kfc",
    name: "KFC Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=400&fit=crop",
    category: "fast-food",
    rating: 4.3,
    deliveryTime: "20-35 min",
    deliveryFee: 25,
    tags: ["Chicken", "Family Meals"],
    area: "Bronkhorstspruit",
    products: [
      { id: "kfc-1", name: "Streetwise Two", description: "2 pieces chicken, chips & roll", price: 54.90, image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop", category: "Streetwise" },
      { id: "kfc-2", name: "Zinger Burger", description: "Spicy crumbed fillet burger with lettuce & mayo", price: 59.90, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop", category: "Burgers" },
      { id: "kfc-3", name: "8-Piece Bucket", description: "8 pieces original recipe chicken", price: 169.90, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=300&fit=crop", category: "Buckets" },
      { id: "kfc-4", name: "Dunked Wings (6)", description: "6 spicy dunked wings", price: 49.90, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=300&fit=crop", category: "Wings" },
      { id: "kfc-5", name: "Wrapstar", description: "Chicken wrap with salad & dressing", price: 44.90, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=300&fit=crop", category: "Wraps" },
      { id: "kfc-6", name: "Coleslaw (Large)", description: "Creamy KFC coleslaw", price: 29.90, image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=300&h=300&fit=crop", category: "Sides" },
    ],
  },
  {
    id: "mcdonalds",
    name: "McDonald's Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
    category: "fast-food",
    rating: 4.2,
    deliveryTime: "15-30 min",
    deliveryFee: 25,
    tags: ["Burgers", "McFlurry"],
    area: "Bronkhorstspruit",
    products: [
      { id: "mc-1", name: "Big Mac", description: "Two beef patties, special sauce, lettuce, pickles", price: 64.90, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop", category: "Burgers" },
      { id: "mc-2", name: "McChicken", description: "Crumbed chicken fillet with lettuce & mayo", price: 44.90, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=300&fit=crop", category: "Burgers" },
      { id: "mc-3", name: "Large Fries", description: "Golden crispy fries", price: 34.90, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop", category: "Sides" },
      { id: "mc-4", name: "McFlurry Oreo", description: "Soft serve with Oreo cookie pieces", price: 39.90, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop", category: "Desserts" },
      { id: "mc-5", name: "Chicken McNuggets (9)", description: "9 crispy chicken nuggets", price: 69.90, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop", category: "Chicken" },
    ],
  },
  {
    id: "dominos",
    name: "Domino's Pizza Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop",
    category: "fast-food",
    rating: 4.4,
    deliveryTime: "25-40 min",
    deliveryFee: 20,
    tags: ["Pizza", "Pasta"],
    area: "Bronkhorstspruit",
    products: [
      { id: "dom-1", name: "Mega Meaty", description: "Pepperoni, salami, bacon, ground beef & mozzarella", price: 99.90, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop", category: "Pizza" },
      { id: "dom-2", name: "Hawaiian", description: "Ham & pineapple on a tomato base", price: 79.90, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop", category: "Pizza" },
      { id: "dom-3", name: "Margherita", description: "Classic tomato & mozzarella", price: 69.90, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=300&fit=crop", category: "Pizza" },
      { id: "dom-4", name: "Chicken Wings (8)", description: "BBQ or hot sauce wings", price: 59.90, image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300&h=300&fit=crop", category: "Sides" },
      { id: "dom-5", name: "Choc Lava Cake", description: "Warm chocolate lava cake", price: 39.90, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop", category: "Desserts" },
    ],
  },
  {
    id: "steers",
    name: "Steers Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop",
    category: "fast-food",
    rating: 4.5,
    deliveryTime: "20-35 min",
    deliveryFee: 25,
    tags: ["Flame-Grilled", "Burgers"],
    area: "Bronkhorstspruit",
    products: [
      { id: "st-1", name: "King Steer Burger", description: "Flame-grilled beef, cheese, lettuce, tomato", price: 74.90, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop", category: "Burgers" },
      { id: "st-2", name: "Wacky Wednesday Burger", description: "Classic burger at a special price", price: 39.90, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=300&fit=crop", category: "Burgers" },
      { id: "st-3", name: "Rib Burger", description: "Flame-grilled rib patty with BBQ sauce", price: 69.90, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=300&fit=crop", category: "Burgers" },
      { id: "st-4", name: "Hand-Cut Chips (Large)", description: "Crispy hand-cut chips", price: 34.90, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop", category: "Sides" },
    ],
  },
  {
    id: "nandos",
    name: "Nando's Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&h=400&fit=crop",
    category: "restaurant",
    rating: 4.6,
    deliveryTime: "25-40 min",
    deliveryFee: 30,
    tags: ["Peri-Peri", "Chicken"],
    area: "Bronkhorstspruit",
    products: [
      { id: "nan-1", name: "Quarter Chicken & Chips", description: "Flame-grilled PERi-PERi chicken with chips", price: 79.90, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=300&h=300&fit=crop", category: "Chicken" },
      { id: "nan-2", name: "Half Chicken & 2 Sides", description: "Half chicken with choice of 2 sides", price: 129.90, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop", category: "Chicken" },
      { id: "nan-3", name: "Chicken Wrap", description: "Grilled chicken breast in a tortilla", price: 69.90, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&h=300&fit=crop", category: "Wraps" },
      { id: "nan-4", name: "Espetada", description: "Chicken breast on a stick, flame-grilled", price: 89.90, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop", category: "Chicken" },
    ],
  },
  {
    id: "debonairs",
    name: "Debonairs Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    category: "fast-food",
    rating: 4.1,
    deliveryTime: "25-40 min",
    deliveryFee: 20,
    tags: ["Pizza", "Triple Decker"],
    area: "Bronkhorstspruit",
    products: [
      { id: "deb-1", name: "Triple Decker", description: "Three layers of pizza with cheese & toppings", price: 109.90, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop", category: "Pizza" },
      { id: "deb-2", name: "Something Meaty", description: "Loaded with bacon, salami & ground beef", price: 89.90, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop", category: "Pizza" },
      { id: "deb-3", name: "Crammed Crust", description: "Stuffed crust pizza with cheese & polony", price: 99.90, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=300&h=300&fit=crop", category: "Pizza" },
    ],
  },

  // ─── Grocery ────────────────────────────────────
  {
    id: "shoprite",
    name: "Shoprite Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=400&fit=crop",
    category: "grocery",
    rating: 4.3,
    deliveryTime: "30-50 min",
    deliveryFee: 35,
    tags: ["Groceries", "Household"],
    area: "Bronkhorstspruit",
    products: [
      { id: "sr-1", name: "White Bread (700g)", description: "Sasko or Albany white bread", price: 16.99, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop", category: "Bakery" },
      { id: "sr-2", name: "Full Cream Milk (2L)", description: "Clover or Parmalat full cream milk", price: 34.99, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop", category: "Dairy" },
      { id: "sr-3", name: "Eggs (18 Large)", description: "Large free-range eggs", price: 59.99, image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&h=300&fit=crop", category: "Dairy" },
      { id: "sr-4", name: "Chicken Braai Pack (2kg)", description: "Mixed chicken portions", price: 89.99, image: "https://images.unsplash.com/photo-1604503468506-a8da13d82571?w=300&h=300&fit=crop", category: "Meat" },
      { id: "sr-5", name: "Sunflower Oil (2L)", description: "Cooking sunflower oil", price: 54.99, image: "https://images.unsplash.com/photo-1474979266404-7eaacdc4d22a?w=300&h=300&fit=crop", category: "Pantry" },
      { id: "sr-6", name: "Rice (2kg)", description: "Tastic or Spekko long grain rice", price: 39.99, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop", category: "Pantry" },
    ],
  },
  {
    id: "picknpay",
    name: "Pick n Pay Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    category: "grocery",
    rating: 4.5,
    deliveryTime: "30-50 min",
    deliveryFee: 35,
    tags: ["Fresh", "Smart Shopper"],
    area: "Bronkhorstspruit",
    products: [
      { id: "pnp-1", name: "Bananas (per kg)", description: "Fresh ripe bananas", price: 17.99, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=300&fit=crop", category: "Fruit & Veg" },
      { id: "pnp-2", name: "Mince Meat (500g)", description: "Lean beef mince", price: 64.99, image: "https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=300&h=300&fit=crop", category: "Meat" },
      { id: "pnp-3", name: "Cheddar Cheese (400g)", description: "PnP mature cheddar", price: 59.99, image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=300&fit=crop", category: "Dairy" },
      { id: "pnp-4", name: "Potatoes (2kg)", description: "Fresh washed potatoes", price: 29.99, image: "https://images.unsplash.com/photo-1518977676601-b53f82ber630?w=300&h=300&fit=crop", category: "Fruit & Veg" },
      { id: "pnp-5", name: "Maize Meal (5kg)", description: "White Star or Iwisa super maize meal", price: 59.99, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop", category: "Pantry" },
    ],
  },
  {
    id: "local-supermarket",
    name: "Bronkies Local Supermarket",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&h=400&fit=crop",
    category: "grocery",
    rating: 4.0,
    deliveryTime: "20-35 min",
    deliveryFee: 20,
    tags: ["Local", "Affordable"],
    area: "eZithobeni",
    products: [
      { id: "loc-1", name: "White Bread", description: "Albany Superior white bread", price: 16.99, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop", category: "Bakery" },
      { id: "loc-2", name: "Milk (1L)", description: "Full cream long life milk", price: 18.99, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop", category: "Dairy" },
      { id: "loc-3", name: "Sugar (2.5kg)", description: "White refined sugar", price: 44.99, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop", category: "Pantry" },
      { id: "loc-4", name: "Cooking Oil (750ml)", description: "Sunflower cooking oil", price: 29.99, image: "https://images.unsplash.com/photo-1474979266404-7eaacdc4d22a?w=300&h=300&fit=crop", category: "Pantry" },
    ],
  },

  // ─── Drinks ──────────────────────────────────────
  {
    id: "liquor-store",
    name: "Tops at Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
    category: "drinks",
    rating: 4.2,
    deliveryTime: "20-35 min",
    deliveryFee: 25,
    tags: ["Beverages", "Cold Drinks"],
    area: "Bronkhorstspruit",
    products: [
      { id: "top-1", name: "Castle Lager (6-pack)", description: "6 x 330ml cans", price: 89.99, image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=300&h=300&fit=crop", category: "Beer" },
      { id: "top-2", name: "Coca-Cola (2L)", description: "Classic Coca-Cola", price: 24.99, image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop", category: "Soft Drinks" },
      { id: "top-3", name: "Savanna Dry (6-pack)", description: "6 x 330ml bottles", price: 109.99, image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300&h=300&fit=crop", category: "Cider" },
      { id: "top-4", name: "Water (6 x 500ml)", description: "Still spring water pack", price: 29.99, image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300&h=300&fit=crop", category: "Water" },
    ],
  },

  // ─── Bakery ──────────────────────────────────────
  {
    id: "bakery",
    name: "Bronkies Bakery",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&h=400&fit=crop",
    category: "bakery",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: 20,
    tags: ["Fresh Bread", "Cakes"],
    area: "Culturapark",
    products: [
      { id: "bk-1", name: "Vetkoek (6)", description: "Traditional SA fried dough, pack of 6", price: 29.99, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop", category: "Traditional" },
      { id: "bk-2", name: "Melktert", description: "Classic South African milk tart", price: 49.99, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop", category: "Cakes" },
      { id: "bk-3", name: "Koeksisters (6)", description: "Syrupy twisted doughnuts", price: 34.99, image: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=300&h=300&fit=crop", category: "Traditional" },
      { id: "bk-4", name: "Birthday Cake", description: "Custom decorated sponge cake", price: 199.99, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop", category: "Cakes" },
    ],
  },

  // ─── Pharmacy ────────────────────────────────────
  {
    id: "clicks",
    name: "Clicks Bronkhorstspruit",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop",
    category: "pharmacy",
    rating: 4.4,
    deliveryTime: "25-40 min",
    deliveryFee: 25,
    tags: ["Pharmacy", "Health"],
    area: "Bronkhorstspruit",
    products: [
      { id: "cl-1", name: "Panado Tablets (24)", description: "Paracetamol 500mg pain relief", price: 29.99, image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=300&h=300&fit=crop", category: "Medicine" },
      { id: "cl-2", name: "Vitamin C (30 tablets)", description: "1000mg effervescent tablets", price: 59.99, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop", category: "Vitamins" },
      { id: "cl-3", name: "Plasters (20 pack)", description: "Assorted waterproof plasters", price: 24.99, image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=300&h=300&fit=crop", category: "First Aid" },
    ],
  },
];
