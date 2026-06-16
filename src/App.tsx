import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  MapPin, 
  PhoneCall, 
  Search, 
  Leaf, 
  Flame, 
  CupSoda, 
  Dessert, 
  MessageSquare, 
  Sparkles,
  UtensilsCrossed,
  Info,
  Cookie,
  IceCream,
  GlassWater
} from 'lucide-react';
import { FoodItem, CartItem } from './types';
import { MENU_ITEMS, RESTAURANT_INFO, CATEGORIES } from './data';
import FoodItemCard from './components/FoodItemCard';
import FloatingCart from './components/FloatingCart';
import InfoPanel from './components/InfoPanel';
import ContactForm from './components/ContactForm';

export default function App() {
  // Navigation & filtering state
  const [activeTab, setActiveTab] = useState<'menu' | 'info' | 'contact'>('menu');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietarySelection, setDietarySelection] = useState<'all' | 'veg' | 'non-veg'>('all');

  // Cart / Basket engine
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add Item to cart
  const handleAddToCart = (item: FoodItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  // Remove / Decrement from cart
  const handleRemoveFromCart = (item: FoodItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter(i => i.item.id !== item.id);
      }
      return prev.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity - 1 } : i);
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Direct single-item Quick Order trigger via WhatsApp redirect
  const handleDirectOrder = (item: FoodItem) => {
    const textMessage = 
      `*AURORA BISTRO — INSTANT ORDER*\n` +
      `---------------------------------\n` +
      `I would like to instantly order:\n` +
      `• *1 x* ${item.name} (*₹${item.price}*)\n` +
      `---------------------------------\n` +
      `_Please confirm this order. Thank you!_`;
    
    const cleanNumber = RESTAURANT_INFO.whatsappNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(textMessage)}`, '_blank', 'noopener,noreferrer');
  };

  // Computed filtered dishes list
  const filteredMenuItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // 1. Category Switch
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // 2. Veg & Non-veg toggle
      if (dietarySelection === 'veg' && !item.isVeg) {
        return false;
      }
      if (dietarySelection === 'non-veg' && item.isVeg) {
        return false;
      }
      // 3. Search Bar query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesName || matchesDesc;
      }
      return true;
    });
  }, [selectedCategory, dietarySelection, searchQuery]);

  // Derived sub-groupings for the Veg & Non-Veg section layout separation
  const vegItems = useMemo(() => filteredMenuItems.filter(item => item.isVeg), [filteredMenuItems]);
  const nonVegItems = useMemo(() => filteredMenuItems.filter(item => !item.isVeg), [filteredMenuItems]);

  const allCategories = useMemo(() => [
    { name: "All", filterKey: "all", icon: "🍽️" },
    ...CATEGORIES.map(cat => ({
      name: cat.name.replace('Gourmet ', '').replace('Soft ', '').replace(' Menu', ''),
      filterKey: cat.filterKey,
      icon: cat.icon === 'Sparkles' ? '✨' :
            cat.icon === 'Cookie' ? '🍪' :
            cat.icon === 'Flame' ? '🔥' :
            cat.icon === 'GlassWater' ? '🥤' :
            cat.icon === 'CupSoda' ? '🥤' :
            cat.icon === 'Dessert' ? '🍰' :
            cat.icon === 'IceCream' ? '🍦' : '🍽️'
    }))
  ], []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center py-0 sm:py-8 px-4 sm:px-8 font-sans antialiased text-slate-800">
      
      {/* LUXURY LEFT BRANDING SIDEBAR (VISIBLE ON DESKTOP ONLY) */}
      <div className="hidden lg:flex flex-col justify-between w-96 p-8 mr-12 select-none shrink-0 h-[80vh] max-h-[720px]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-accent-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-accent-600 uppercase tracking-widest block font-sans">EXPERIENCE</span>
              <h2 className="text-2xl font-serif font-black tracking-tight text-slate-900 leading-none mt-0.5">
                AURORA BISTRO
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-sans font-black uppercase text-slate-400 tracking-wider">
              Nungambakkam Chennai
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed font-semibold">
              Experience artisanal global culinary creations prepared fresh with organic, locally-sourced ingredients. Curated classical and heritage flavors.
            </p>
          </div>

          {/* MOCK SCAN QR SECTION */}
          <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xs flex items-center gap-4">
            <div className="w-16 h-16 bg-slate-55 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 p-1.5">
              {/* Sleek inline SVG QR mock with branding look */}
              <svg className="w-full h-full text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="2" y="2" width="6" height="6" rx="1" />
                <rect x="16" y="2" width="6" height="6" rx="1" />
                <rect x="2" y="16" width="6" height="6" rx="1" />
                <rect x="6" y="6" width="1" height="1" fill="currentColor" />
                <rect x="17" y="6" width="1" height="1" fill="currentColor" />
                <rect x="6" y="17" width="1" height="1" fill="currentColor" />
                <path d="M12 2v4M12 8h4M16 12v4M12 16h4M22 16v4M20 22h2M16 22H12M12 12V8M2 12h4" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-[9px] bg-amber-50 text-accent-600 px-2 py-0.5 rounded-md font-extrabold uppercase tracking-wider block w-max mb-1">
                SMART QR CODE
              </span>
              <p className="text-[11px] font-sans font-black text-slate-850 leading-tight">
                Scan for Instant Orders
              </p>
              <p className="text-[9.5px] text-slate-400 mt-1 font-semibold">
                Scan this screen with your smartphone camera to access on your phone.
              </p>
            </div>
          </div>
        </div>

        {/* Brand footer details */}
        <div className="text-[10px] text-slate-400 font-bold space-y-1 bg-slate-100/50 p-4 rounded-2xl border border-slate-200/30">
          <p>© 2026 Aurora Bistro & Socials</p>
          <p>Powered by QR Nest • Cross-Platform Verified</p>
        </div>
      </div>

      {/* 
        CENTRAL COMPACT MOBILE FRAMEWORK CONTAINER
        Acts like a real iOS/Android mock device screen centered on desktop,
        whilst running fully fluid and full-bleed on physical smartphone screens.
      */}
      <div className="w-full max-w-sm bg-white min-h-screen sm:min-h-[720px] sm:max-h-[92vh] sm:rounded-[40px] sm:shadow-2xl flex flex-col relative overflow-hidden border-0 sm:border-8 border-slate-900 shrink-0">
        
        {/* TOP STATUS BAR MOCK FOR EXTRA POLISH */}
        <div className="hidden sm:flex bg-white text-slate-400 min-h-[36px] px-8 items-center justify-between text-[11px] font-sans font-bold tracking-tight shrink-0">
          <span>9:41</span>
          <div className="flex gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-slate-150" />
            <div className="w-3.5 h-3.5 rounded-full bg-slate-150" />
          </div>
        </div>

        {/* APP HEADER */}
        <header className="bg-white px-5 pt-2 pb-4 border-b border-slate-50 flex flex-col gap-3 sticky top-0 z-30 shadow-[0_1px_10px_rgba(0,0,0,0.01)]">
          <div className="flex justify-between items-end">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <UtensilsCrossed className="w-5 h-5 text-accent-500" />
                <h1 className="font-sans font-extrabold tracking-tight text-xl text-slate-850 leading-none">
                  {RESTAURANT_INFO.name}
                </h1>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                {RESTAURANT_INFO.cuisine} • Chennai, TN
              </p>
            </div>
            
            {/* Quick open status */}
            <span className="text-[9px] bg-orange-100 text-accent-600 px-2.5 py-1 rounded-full font-extrabold uppercase tracking-wider">
              Open Now
            </span>
          </div>

          {/* Quick interactive utility if we are inside the Menu screen */}
          {activeTab === 'menu' && (
            <div className="flex flex-col gap-2.5 mt-1">
              {/* Keywords Search input */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent-500 focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-[9px] text-slate-400 bg-slate-200 rounded-full w-3.5 h-3.5 hover:bg-slate-350"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Redesigned 2-3 Row Category Grid (Without Scrolling) */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-50 p-1.5 rounded-2xl border border-slate-100/80">
                {allCategories.map((cat) => {
                  const isSelected = selectedCategory === cat.filterKey;
                  return (
                    <button
                      key={cat.filterKey}
                      onClick={() => setSelectedCategory(cat.filterKey)}
                      className={`py-1.5 px-1 rounded-xl flex flex-col items-center justify-center gap-1 transition-all text-center border ${
                        isSelected
                          ? 'bg-accent-500 text-white border-accent-500 shadow-md shadow-orange-100/40 font-extrabold scale-[1.02]'
                          : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-100/55 font-semibold'
                      }`}
                    >
                      <span className="text-sm leading-none">{cat.icon}</span>
                      <span className="text-[9px] font-sans tracking-tight leading-none uppercase">
                        {cat.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* MAIN BODY AREA */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: MENU SCREEN */}
            {activeTab === 'menu' && (
              <motion.div
                key="menu-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex-1 bg-white overflow-y-auto px-4 py-3.5 elegant-scrollbar pb-28 flex flex-col"
              >
                {/* Category Title & Summary */}
                <div className="mb-2">
                  <h2 className="text-sm font-sans font-black text-slate-850 tracking-tight uppercase">
                    {selectedCategory === 'all' ? 'All Masterpieces' : CATEGORIES.find(c => c.filterKey === selectedCategory)?.name}
                  </h2>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                    {filteredMenuItems.length} recipes found
                  </p>
                </div>

                {/* SUB-FILTER ICONS DOWN OF IT - VEG AND NON-VEG TOGGLES */}
                <div className="grid grid-cols-3 gap-1 bg-slate-100/60 p-1 rounded-xl border border-slate-200/40 mb-4 sticky top-0 z-10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                    <button
                      onClick={() => setDietarySelection('all')}
                      className={`py-1.5 rounded-lg text-[9px] font-sans font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all ${
                        dietarySelection === 'all'
                          ? 'bg-slate-850 text-white shadow-xs'
                          : 'text-slate-500 hover:bg-slate-100/50'
                      }`}
                    >
                      🍽️ All
                    </button>
                    <button
                      onClick={() => setDietarySelection('veg')}
                      className={`py-1.5 rounded-lg text-[9px] font-sans font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all ${
                        dietarySelection === 'veg'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : 'text-slate-500 hover:bg-slate-100/50'
                      }`}
                    >
                      🌱 Veg
                    </button>
                    <button
                      onClick={() => setDietarySelection('non-veg')}
                      className={`py-1.5 rounded-lg text-[9px] font-sans font-black uppercase tracking-wider flex items-center justify-center gap-1 transition-all ${
                        dietarySelection === 'non-veg'
                          ? 'bg-rose-50 text-rose-700 border border-rose-100'
                          : 'text-slate-500 hover:bg-slate-100/50'
                      }`}
                    >
                      🍗 Non-Veg
                    </button>
                  </div>

                  {filteredMenuItems.length > 0 ? (
                    <div className="space-y-6">
                      {/* Veg Section */}
                      {vegItems.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 border-b border-emerald-100/60 pb-1.5 pt-1">
                            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">🌱</span>
                            <h3 className="text-[10px] font-sans font-black uppercase tracking-wider text-emerald-750">
                              Vegetarian Choices ({vegItems.length})
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {vegItems.map((item) => {
                              const inCart = cartItems.find(i => i.item.id === item.id);
                              const quantity = inCart ? inCart.quantity : 0;
                              return (
                                <FoodItemCard
                                  key={item.id}
                                  item={item}
                                  quantityInCart={quantity}
                                  onAddToCart={() => handleAddToCart(item)}
                                  onRemoveFromCart={() => handleRemoveFromCart(item)}
                                  onDirectOrder={() => handleDirectOrder(item)}
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Non-Veg Section */}
                      {nonVegItems.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 border-b border-red-100/60 pb-1.5 pt-1">
                            <span className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs">🍗</span>
                            <h3 className="text-[10px] font-sans font-black uppercase tracking-wider text-red-750">
                              Non-Vegetarian Specialties ({nonVegItems.length})
                            </h3>
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {nonVegItems.map((item) => {
                              const inCart = cartItems.find(i => i.item.id === item.id);
                              const quantity = inCart ? inCart.quantity : 0;
                              return (
                                <FoodItemCard
                                  key={item.id}
                                  item={item}
                                  quantityInCart={quantity}
                                  onAddToCart={() => handleAddToCart(item)}
                                  onRemoveFromCart={() => handleRemoveFromCart(item)}
                                  onDirectOrder={() => handleDirectOrder(item)}
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-100 mt-4 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-350 flex items-center justify-center mx-auto">
                        <Search className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif font-bold text-slate-800 text-base">No dishes found</h4>
                      <p className="text-xs text-slate-500 leading-normal max-w-[240px] mx-auto">
                        We couldn't find matches for "{searchQuery}". Try browsing other filters.
                      </p>
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setDietarySelection('all');
                          setSelectedCategory('all');
                        }}
                        className="text-xs font-bold text-accent-500 hover:text-accent-600 underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  )}
              </motion.div>
            )}

            {/* VIEW 2: RESTAURANT DETAIL & MAPS SCREEN */}
            {activeTab === 'info' && (
              <motion.div
                key="info-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 overflow-y-auto elegant-scrollbar p-5 pb-28"
              >
                <InfoPanel />
              </motion.div>
            )}

            {/* VIEW 3: INQUIRIES & CONTACT SCREEN */}
            {activeTab === 'contact' && (
              <motion.div
                key="contact-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="flex-1 overflow-y-auto elegant-scrollbar p-5 pb-28"
              >
                <ContactForm />
              </motion.div>
            )}

          </AnimatePresence>
        </main>

        {/* PERSISTENT FLOATING BASKET OVERLAY */}
        {activeTab === 'menu' && (
          <FloatingCart
            cartItems={cartItems}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            onClearCart={handleClearCart}
          />
        )}

        {/* APP BOTTOM NAVIGATION BAR MOCK */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex items-center justify-between z-40 shadow-[0_-4px_16px_rgba(0,0,0,0.01)]">
          {/* Menu Button */}
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'menu' ? 'text-accent-500' : 'text-slate-400 hover:text-slate-650'
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Menu</span>
          </button>

          {/* Location & Info Button */}
          <button
            onClick={() => setActiveTab('info')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'info' ? 'text-accent-500' : 'text-slate-400 hover:text-slate-650'
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Info</span>
          </button>

          {/* Contact Inquiries Button */}
          <button
            onClick={() => setActiveTab('contact')}
            className={`flex flex-col items-center gap-1 text-[10px] font-bold tracking-wider uppercase transition-colors shrink-0 ${
              activeTab === 'contact' ? 'text-accent-500' : 'text-slate-400 hover:text-slate-650'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Contact</span>
          </button>
        </nav>

        {/* Home Indicator bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-100 rounded-full" />
      </div>
    </div>
  );
}
