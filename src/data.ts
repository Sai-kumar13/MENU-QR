import { FoodItem, RestaurantDetails, Category } from './types';

export const RESTAURANT_INFO: RestaurantDetails = {
  name: "AURORA BISTRO",
  tagline: "Fine Food & Socials",
  cuisine: "Global Multi-Cuisine",
  description: "Experience artisanal global culinary creations prepared with organic, locally-sourced ingredients. Curated from the best of coastal flavors, Continental classics, and Indian heritage dishes.",
  address: "12, Khader Nawaz Khan Rd, Nungambakkam, Chennai, Tamil Nadu 600006",
  googleMapsUrl: "https://maps.google.com/?q=Nungambakkam+Khader+Nawaz+Khan+Road+Chennai",
  phone: "+91 44 4890 2933",
  whatsappNumber: "+919876543210", // Pre-set restaurant business number format
  email: "hello@aurorabistro.com",
  hours: {
    weekdays: "11:30 AM — 11:00 PM (Mon - Thu)",
    weekends: "11:00 AM — Midnight (Fri - Sun)"
  }
};

export const CATEGORIES: Category[] = [
  { name: "Starters", filterKey: "starters", icon: "Sparkles" },
  { name: "Snacks", filterKey: "snacks", icon: "Cookie" },
  { name: "Main Course", filterKey: "maincourse", icon: "Flame" },
  { name: "Fresh Juices", filterKey: "juice", icon: "GlassWater" },
  { name: "Soft Drinks", filterKey: "softdrinks", icon: "CupSoda" },
  { name: "Drinks Menu", filterKey: "drinks", icon: "GlassWater" },
  { name: "Gourmet Desserts", filterKey: "desserts", icon: "Dessert" },
  { name: "Ice Creams", filterKey: "icecreams", icon: "IceCream" }
];

export const MENU_ITEMS: FoodItem[] = [
  // --- MAIN COURSE (VEG) ---
  {
    id: "v1",
    name: "Classic Paneer Tikka Masala",
    category: "maincourse",
    price: 340,
    description: "Creamy clay tandoor-roasted cottage cheese cubes simmered in a spiced rich onion-tomato gravy with mixed capsicum.",
    image_url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    spicyLevel: 2,
    preparationTime: "15 mins",
    calories: 440
  },
  {
    id: "v2",
    name: "Hass Avocado & Citrus Salad",
    category: "maincourse",
    price: 240,
    description: "Fresh buttery avocados, seasonal organic salad greens, cherry tomatoes, cucumber, dressed with honey citrus vinaigrette.",
    image_url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "10 mins",
    calories: 220
  },
  {
    id: "v3",
    name: "Margherita Basil Pizza",
    category: "maincourse",
    price: 320,
    description: "Traditional thin sourdough crust blanketed in slow-cooked san marzano tomato coulis, fresh pull-mozzarela and aromatic sweet basil leaves.",
    image_url: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    spicyLevel: 0,
    preparationTime: "18 mins",
    calories: 680
  },
  {
    id: "v4",
    name: "Double Cheese Garlic Bread",
    category: "maincourse",
    price: 195,
    description: "Toasted artisan sourdough baguette spread with rich roasted garlic-herb butter and loaded with gooey melted stringy mozzarella.",
    image_url: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    spicyLevel: 1,
    preparationTime: "8 mins",
    calories: 290
  },
  {
    id: "v5",
    name: "Dal Makhani Royal",
    category: "maincourse",
    price: 280,
    description: "Creamy slow-cooked black lentils simmered overnight on low charcoal embers with fresh butter, spices, and fresh dairy cream.",
    image_url: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    spicyLevel: 1,
    preparationTime: "12 mins",
    calories: 360
  },

  // --- MAIN COURSE (NON-VEG) ---
  {
    id: "nv1",
    name: "Bistro Truffle Butter Chicken",
    category: "maincourse",
    price: 360,
    description: "Smoked tandoor-roasted chicken tikka simmered gently in a velvety premium tomato, cream, cashew butter gravy with a hint of truffle oil.",
    image_url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    isPopular: true,
    spicyLevel: 2,
    preparationTime: "15 mins",
    calories: 590
  },
  {
    id: "nv2",
    name: "Lemon Herb Grilled Salmon",
    category: "maincourse",
    price: 580,
    description: "Thick Atlantic salmon steak grill-seared, served with a velvet bed of buttery skin-on mashed potatoes and crisp steamed green asparagus.",
    image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    spicyLevel: 0,
    preparationTime: "22 mins",
    calories: 490
  },
  {
    id: "nv3",
    name: "Gourmet Aged Beef Burger",
    category: "maincourse",
    price: 340,
    description: "Juicy handcrafted pan-sizzled tender beef patty, mature cheddar cheese, sliced tomato, iceberg lettuce, and truffle-aioli on toasted buttery brioche.",
    image_url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    isPopular: true,
    spicyLevel: 1,
    preparationTime: "12 mins",
    calories: 740
  },
  {
    id: "nv4",
    name: "Awadhi Dum Mutton Biryani",
    category: "maincourse",
    price: 460,
    description: "Fragrant premium Basmati rice slow dum-cooked with tender, succulent grass-fed goat meat slices infused with exotic saffron and mint leaves.",
    image_url: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    isPopular: true,
    spicyLevel: 2,
    preparationTime: "20 mins",
    calories: 680
  },
  {
    id: "st5",
    name: "Southern Hot Fried Wings",
    category: "starters",
    price: 270,
    description: "Golden buttermilk crumb-coated deep-fried chicken wings glazed in our hot red-pepper spice sauce, served with cold farmhouse herb dip.",
    image_url: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    spicyLevel: 3,
    preparationTime: "10 mins",
    calories: 410
  },
  {
    id: "st6",
    name: "Grilled Awadhi Lamb Kebab",
    category: "starters",
    price: 390,
    description: "Premium minced lamb slow-kneaded with Royal spices and minced garlic, hand-pressed onto skewers and fire-grilled until extraordinarily smoky.",
    image_url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    isPopular: true,
    spicyLevel: 2,
    preparationTime: "16 mins",
    calories: 480
  },

  // --- FRESH JUICES ---
  {
    id: "ju1",
    name: "Cold-Pressed Valencia Orange Juice",
    category: "juice",
    price: 130,
    description: "100% natural, freshly cold-pressed sweet Valencia orange fruit juice served chilled with pulp bits and no added sugars.",
    image_url: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "4 mins",
    calories: 120
  },
  {
    id: "ju2",
    name: "Fresh Emerald Watermelon Juice",
    category: "juice",
    price: 110,
    description: "Juicy organic watermelon flesh blended cold with sprigs of fresh mint and a pinch of black salt.",
    image_url: "https://images.unsplash.com/photo-1589733901241-5e514c27b55a?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "3 mins",
    calories: 90
  },
  {
    id: "ju3",
    name: "Ruby Pomegranate Juice",
    category: "juice",
    price: 160,
    description: "Freshly squeezed ruby-red pomegranate pearls, loaded with antioxidants, presenting a perfect blend of sweet and tart flavors.",
    image_url: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "5 mins",
    calories: 140
  },

  // --- DRINKS ---
  {
    id: "d1",
    name: "Cool Mint Lime Mojito",
    category: "drinks",
    price: 150,
    description: "Ultra-refreshing blend of freshly pressed key lime juice, hand-slapped fresh mint leaves, unrefined sugar syrup, and fizzy double-carbonated soda.",
    image_url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    spicyLevel: 0,
    preparationTime: "5 mins",
    calories: 120
  },
  {
    id: "d2",
    name: "Iced Hazelnut Pour Latte",
    category: "drinks",
    price: 180,
    description: "Bold shot of cold double-infused single-origin Arabica espresso, creamy chilled whole milk, and organic sweet toasted hazelnut nectar.",
    image_url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "5 mins",
    calories: 145
  },
  {
    id: "d3",
    name: "Creamy Alphonso Mango Lassi",
    category: "drinks",
    price: 160,
    description: "Satin-smooth thick curd recipe whipped with fresh sweet golden Alphonso mango nectar pulp, aromatic cardamom dust, and saffron shreds.",
    image_url: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "6 mins",
    calories: 210
  },
  {
    id: "d4",
    name: "Thick Passion Fruit Iced Tea",
    category: "drinks",
    price: 140,
    description: "Gourmet loose-leaf Nilgiri black tea brewed slow, shaken cold with natural passion fruit extract, lemon juice, and served over crushed raw ice.",
    image_url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "4 mins",
    calories: 90
  },

  // --- DESSERTS ---
  {
    id: "ds1",
    name: "Molten Dark Chocolate Lava",
    category: "desserts",
    price: 220,
    description: "Freshly-baked dark single-origin chocolate sponge cake filled with a gooey flowing core of warm chocolate ganache, side-served with sweet vanilla cream.",
    image_url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "12 mins",
    calories: 390
  },
  {
    id: "ds2",
    name: "New York Raspberry Cheesecake",
    category: "desserts",
    price: 240,
    description: "Classic dense and velvet-smooth baked cream cheese cake layer sitting snug on a butter-graham golden crust, drizzled with home-cooked sweet raspberries.",
    image_url: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "5 mins",
    calories: 450
  },
  {
    id: "ds3",
    name: "Artisan Saffron Pistachio Kulfi",
    category: "desserts",
    price: 160,
    description: "Rich traditional frozen milk dessert slowly hand-churned till caramelized, loaded with freshly crushed roasted pistachios and pure Kashmiri saffron.",
    image_url: "https://images.unsplash.com/photo-1501443715940-a53b68750f07?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "4 mins",
    calories: 180
  },
  {
    id: "ds4",
    name: "Classico Espresso Tiramisu",
    category: "desserts",
    price: 210,
    description: "Fluffy savoiardi ladyfinger cookies drenched in robust freshly-drawn espresso, blanketed with velvet sweetened whipped mascarpone, dusted with rich cocoa.",
    image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "4 mins",
    calories: 320
  },
  // --- STARTERS ---
  {
    id: "st1",
    name: "Chilli Paneer Dry",
    category: "starters",
    price: 240,
    description: "Wok-tossed battered cottage cheese chunks with crunchy capsicum, green chillies, and a savory dark soy glaze.",
    image_url: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    spicyLevel: 2,
    preparationTime: "10 mins",
    calories: 290
  },
  {
    id: "st2",
    name: "Crispy Lotus Stem",
    category: "starters",
    price: 210,
    description: "Thinly sliced lotus root stems fried crispy, tossed in sweet chilli honey and garnished with toasted sesame seeds.",
    image_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    spicyLevel: 1,
    preparationTime: "8 mins",
    calories: 180
  },
  {
    id: "st3",
    name: "Schezwan Chicken Lollipop",
    category: "starters",
    price: 280,
    description: "Crispy tandoori style chicken drumettes tossed with fiery schezwan seasoning, served with hot garlic dipping sauce.",
    image_url: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    isPopular: true,
    spicyLevel: 3,
    preparationTime: "12 mins",
    calories: 330
  },
  {
    id: "st4",
    name: "Crispy Pepper Salt Prawns",
    category: "starters",
    price: 340,
    description: "Plump ocean prawns tossed in toasted rock salt, cracked black pepper, fresh scallions, and golden fried garlic.",
    image_url: "https://images.unsplash.com/photo-1559737607-3f0559b5ed93?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    spicyLevel: 1,
    preparationTime: "11 mins",
    calories: 240
  },
  // --- SNACKS ---
  {
    id: "sn1",
    name: "Truffle Cheese French Fries",
    category: "snacks",
    price: 180,
    description: "Golden crispy skin-on potato fries drizzled with white truffle oil, grated parmesan cheese, and fine chopped fresh parsley.",
    image_url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "6 mins",
    calories: 310
  },
  {
    id: "sn2",
    name: "Vada Pav Sliders (2 Pcs)",
    category: "snacks",
    price: 150,
    description: "Classic street-style spiced potato dumpling slider served inside buttered soft bun with hot garlic chutney & roasted green chillies.",
    image_url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    spicyLevel: 2,
    preparationTime: "7 mins",
    calories: 350
  },
  {
    id: "sn3",
    name: "Chicken Keema Samosa",
    category: "snacks",
    price: 190,
    description: "Crispy golden triangular pastry pockets stuffed with slow-cooked spiced minced chicken, fresh mint, and coriander.",
    image_url: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=600",
    isVeg: false,
    spicyLevel: 2,
    preparationTime: "8 mins",
    calories: 280
  },
  {
    id: "sn4",
    name: "Crispy Corn & Cheese Balls",
    category: "snacks",
    price: 160,
    description: "Melt-in-mouth golden croquettes filled with sweet corn kernels and a blend of cheddar and mozzarella cheeses.",
    image_url: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "8 mins",
    calories: 260
  },
  // --- SOFT DRINKS ---
  {
    id: "sd1",
    name: "Fresh Lime Soda",
    category: "softdrinks",
    price: 95,
    description: "Squeezed fresh lime juice combined with chilled soda water, served sweet, salted, or mixed to your preference.",
    image_url: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "3 mins",
    calories: 80
  },
  {
    id: "sd2",
    name: "Ginger Ale Brew",
    category: "softdrinks",
    price: 120,
    description: "Chilled premium carbonated beverages infused with spicy natural cold-pressed ginger root extract and zero preservatives.",
    image_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "3 mins",
    calories: 90
  },
  {
    id: "sd3",
    name: "Classic Cola Fizz",
    category: "softdrinks",
    price: 85,
    description: "The evergreen refreshing fizzy carbonated cola served ice-cold with a fresh slice of lemon.",
    image_url: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "2 mins",
    calories: 120
  },
  // --- ICE CREAMS ---
  {
    id: "ic1",
    name: "Vanilla Bean Madagascar",
    category: "icecreams",
    price: 140,
    description: "Rich, premium slow-churned dairy ice cream infused with real Madagascar vanilla bean specks.",
    image_url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "3 mins",
    calories: 160
  },
  {
    id: "ic2",
    name: "Double Chocolate Fudge",
    category: "icecreams",
    price: 160,
    description: "Deep Belgian chocolate ice cream swirled with thick dark chocolate fudge ribbon and crunchy brownie crumble.",
    image_url: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    preparationTime: "3 mins",
    calories: 220
  },
  {
    id: "ic3",
    name: "Exotic Mango Sorbet (Vegan)",
    category: "icecreams",
    price: 150,
    description: "Refreshing dairy-free, creamy sorbet prepared with pure 100% premium Alphonso mangoes and lemon hints.",
    image_url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600",
    isVeg: true,
    isPopular: true,
    preparationTime: "3 mins",
    calories: 110
  }
];
