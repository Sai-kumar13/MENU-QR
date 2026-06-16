import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Star, Flame, Plus, Minus, ArrowRight, ShoppingCart } from 'lucide-react';
import { FoodItem } from '../types';

interface FoodItemCardProps {
  key?: string | number;
  item: FoodItem;
  quantityInCart: number;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  onDirectOrder: () => void;
}

export default function FoodItemCard({
  item,
  quantityInCart,
  onAddToCart,
  onRemoveFromCart,
  onDirectOrder
}: FoodItemCardProps) {
  const { name, price, description, image_url, isVeg, isPopular, spicyLevel, preparationTime, calories } = item;
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Classic Indian standard Veg/Non-veg mark symbol
  const VegBadge = () => (
    <div 
      className={`w-3.5 h-3.5 border border-2 rounded-xs flex items-center justify-center flex-shrink-0 ${
        isVeg ? 'border-veg-green' : 'border-nonveg-red'
      }`}
      title={isVeg ? "Vegetarian" : "Non-Vegetarian"}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${isVeg ? 'bg-veg-green' : 'bg-nonveg-red'}`} />
    </div>
  );

  return (
    <>
      {/* SLEEK HORIZONTAL MENU CARD */}
      <motion.div
        layoutId={`card-container-${item.id}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="bg-white border border-slate-100 rounded-[24px] p-3 flex gap-3.5 shadow-xs hover:shadow-md transition-all active:scale-[0.99]"
      >
        {/* Left Side: Solid 24/24 square image container with overlay indicators */}
        <div 
          onClick={() => setIsDetailOpen(true)}
          className="w-24 h-24 bg-slate-50 rounded-2xl overflow-hidden shrink-0 relative cursor-pointer group"
        >
          <img
            src={image_url}
            alt={name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-305 group-hover:scale-105"
          />
          
          {/* Top category/veg badge overlapping image */}
          <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-xs p-0.5 rounded-md shadow-xs pointer-events-none">
            <VegBadge />
          </div>

          {isPopular && (
            <div className="absolute bottom-1 right-1 bg-amber-500 text-white text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded-sm flex items-center gap-0.5 shadow-sm pointer-events-none">
              <Star className="w-2 h-2 fill-current" /> BEST
            </div>
          )}
        </div>

        {/* Right Side: Flex details with proper vertical constraints */}
        <div className="flex-1 flex flex-col justify-between min-w-0">
          <div onClick={() => setIsDetailOpen(true)} className="cursor-pointer group">
            <div className="flex justify-between items-start gap-1">
              <h3 className="text-sm font-bold text-slate-800 group-hover:text-accent-500 transition-colors">
                {name}
              </h3>
              <span className="text-sm font-extrabold text-slate-900 whitespace-nowrap">
                ₹{price}
              </span>
            </div>
            
            <p className="text-[10px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
              {description}
            </p>

            {/* Preparation time & calories chips */}
            <div className="flex items-center gap-2 mt-1.5 text-[9px] font-bold text-slate-400">
              {preparationTime && (
                <span className="flex items-center gap-0.5">
                  <Clock className="w-2.5 h-2.5 text-slate-300" /> {preparationTime}
                </span>
              )}
              {calories && <span>• {calories} Cal</span>}
              {spicyLevel !== undefined && spicyLevel > 0 && (
                <span className="text-red-500 font-extrabold">
                  • {'🌶️'.repeat(spicyLevel)}
                </span>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="flex justify-between items-center mt-2.5 gap-2">
            
            {/* Left Action: Cart controls (Compact format) */}
            <div className="flex-1 max-w-[110px]">
              {quantityInCart === 0 ? (
                <button
                  type="button"
                  onClick={onAddToCart}
                  className="w-full py-1.5 px-2 bg-slate-50 hover:bg-accent-50 active:scale-95 border border-slate-100 hover:border-accent-200 text-slate-600 hover:text-accent-600 font-sans font-bold text-[10px] rounded-lg transition-all flex items-center justify-center gap-1"
                >
                  <Plus className="w-3 h-3" /> Add Basket
                </button>
              ) : (
                <div className="flex items-center justify-between bg-accent-50/80 border border-accent-100 text-accent-800 font-bold text-[11px] rounded-lg overflow-hidden p-0.5">
                  <button
                    type="button"
                    onClick={onRemoveFromCart}
                    className="p-1 hover:bg-accent-100 rounded text-accent-750 active:scale-90 transition-transform focus:outline-none"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-1 text-slate-900 font-extrabold text-xs">{quantityInCart}</span>
                  <button
                    type="button"
                    onClick={onAddToCart}
                    className="p-1 hover:bg-accent-100 rounded text-accent-750 active:scale-90 transition-transform focus:outline-none"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Right Action: Quick Direct Whatsapp Checkout */}
            <button
              onClick={onDirectOrder}
              className="bg-veg-green text-white px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1 hover:bg-green-700 active:scale-95 transition-all shadow-xs shrink-0"
            >
              {/* Built-in simple WhatsApp icon placeholder */}
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.163 1.417 4.934 1.417 5.303 0 9.619-4.317 9.621-9.619.001-2.568-1-4.982-2.821-6.803-1.821-1.822-4.234-2.823-6.8-2.823-5.303 0-9.621 4.319-9.623 9.62-.001 1.774.475 3.509 1.374 5.081l-1.035 3.784 3.875-1.017z"/>
              </svg>
              ORDER
            </button>

          </div>
        </div>
      </motion.div>

      {/* DETAILED DIALOG MODAL */}
      <AnimatePresence>
        {isDetailOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            <motion.div
              layoutId={`card-detail-modal-${item.id}`}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white w-full sm:max-w-md rounded-t-[32px] sm:rounded-3xl overflow-hidden shadow-2xl relative z-10 max-h-[85vh] sm:max-h-auto overflow-y-auto flex flex-col border border-slate-100"
            >
              {/* Cover Image */}
              <div className="relative h-64 sm:h-52 w-full bg-slate-50">
                <img
                  src={image_url}
                  alt={name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Back / Close button */}
                <button
                  onClick={() => setIsDetailOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-900/55 text-white flex items-center justify-center hover:bg-slate-900/75 transition-colors focus:outline-none text-xs font-bold"
                >
                  ✕
                </button>

                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-lg shadow-xs flex items-center gap-1.5 font-sans font-bold text-[10px] text-slate-800">
                  <VegBadge />
                  <span>{isVeg ? 'VEG' : 'NON-VEG'}</span>
                </div>
              </div>

              {/* Core Info Details card body */}
              <div className="p-6">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h2 className="text-lg font-serif font-bold text-slate-800">{name}</h2>
                  <span className="text-lg font-extrabold text-accent-600 shrink-0">₹{price}</span>
                </div>

                <div className="flex flex-wrap gap-2 my-3">
                  {preparationTime && (
                    <div className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Prep: {preparationTime}
                    </div>
                  )}
                  {calories && (
                    <div className="bg-slate-50 border border-slate-100 text-slate-600 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <span>🔥 {calories} Cal</span>
                    </div>
                  )}
                  {spicyLevel !== undefined && spicyLevel > 0 && (
                    <div className="bg-red-50 border border-red-100 text-red-700 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-current text-red-500" /> Spicy Lvl {spicyLevel}
                    </div>
                  )}
                  {isPopular && (
                    <div className="bg-orange-50 border border-orange-100 text-orange-850 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current text-orange-500" /> Guest Favorite
                    </div>
                  )}
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {description}
                </p>

                {/* Counter Add on modal */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-t border-b border-slate-100 py-3.5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Add to basket</span>
                    
                    <div className="flex items-center bg-slate-100 rounded-xl overflow-hidden p-0.5">
                      <button
                        type="button"
                        onClick={onRemoveFromCart}
                        disabled={quantityInCart === 0}
                        className="p-1.5 hover:bg-slate-200 disabled:opacity-40 rounded-lg text-slate-700 active:scale-95 transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-extrabold text-sm text-slate-900 w-8 text-center">{quantityInCart}</span>
                      <button
                        type="button"
                        onClick={onAddToCart}
                        className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-700 active:scale-95 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Immediate WhatsApp Outcast */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => {
                        onDirectOrder();
                        setIsDetailOpen(false);
                      }}
                      className="flex-1 py-3 bg-veg-green hover:bg-green-700 active:scale-[0.98] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-transform shadow-sm"
                    >
                      Instant Order via WhatsApp <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
