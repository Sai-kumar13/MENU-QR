import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, X, Trash2, Plus, Minus, MessageSquare } from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data';

interface FloatingCartProps {
  cartItems: CartItem[];
  onAddToCart: (item: CartItem['item']) => void;
  onRemoveFromCart: (item: CartItem['item']) => void;
  onClearCart: () => void;
}

export default function FloatingCart({
  cartItems,
  onAddToCart,
  onRemoveFromCart,
  onClearCart
}: FloatingCartProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  const totalQuantity = cartItems.reduce((acc, current) => acc + current.quantity, 0);
  const totalPrice = cartItems.reduce((acc, current) => acc + current.item.price * current.quantity, 0);

  if (totalQuantity === 0) return null;

  // Prepare and open WhatsApp prefilled order flow
  const handlePlaceOrder = () => {
    const tableStr = tableNumber.trim() ? `Table No: ${tableNumber.trim()}` : "Guest Dine-In / Walk-In Order";
    const instructionsStr = specialInstructions.trim() ? `\n*Note:* _${specialInstructions.trim()}_` : "";
    
    let itemsStr = '';
    cartItems.forEach(item => {
      itemsStr += `• *${item.quantity} x* ${item.item.name} (~₹${item.item.price * item.quantity}~)\n`;
    });

    const bodyEncoded = encodeURIComponent(
      `*AURORA BISTRO — ORDER REQUEST*\n` +
      `---------------------------------\n` +
      `*Order Type:* ${tableStr}\n\n` +
      `*Selected Items:*\n` +
      itemsStr +
      `---------------------------------\n` +
      `*Total Amount:* ₹${totalPrice}\n` +
      instructionsStr +
      `\n\n_Please confirm our order over the counter. Thank you!_`
    );

    const cleanNum = RESTAURANT_INFO.whatsappNumber.replace(/\D/g, ''); // format +91XXXXXX -> 91XXXXX safely
    window.open(`https://wa.me/${cleanNum}?text=${bodyEncoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* FLOATING MINI CART BADGE */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            className="fixed bottom-[88px] sm:bottom-8 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-xs"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-accent-500 hover:bg-accent-600 active:scale-95 transition-all text-white py-3 px-4 rounded-full flex items-center justify-between shadow-xl font-sans font-bold text-xs"
            >
              <div className="flex items-center gap-2">
                <div className="bg-white/15 p-1 rounded-full">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-[9.5px] text-accent-100 font-normal leading-none mb-0.5">
                    {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'} in basket
                  </span>
                  <span className="text-sm font-semibold">₹{totalPrice}</span>
                </div>
              </div>
              <span className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase">
                Basket <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FULL EXPANDED BOTTOM BASKET DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-55 flex items-end justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
            />

            {/* Content drawer container */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white w-full max-w-sm rounded-t-[32px] shadow-2xl relative z-10 flex flex-col justify-end max-h-[85vh] overflow-hidden border border-slate-100"
            >
              {/* Drawer Title Section */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-accent-500" />
                  <h3 className="font-sans font-bold text-slate-800 text-sm">Your Order Basket</h3>
                  <span className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full font-bold">
                    {totalQuantity}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={onClearCart}
                    className="text-slate-400 hover:text-red-500 hover:bg-slate-50 p-1 rounded-lg text-xs transition-colors flex items-center gap-1 focus:outline-none"
                    title="Clear All Items"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-slate-800 p-1 hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Items List Content Area */}
              <div className="p-5 overflow-y-auto flex-1 max-h-[35vh] space-y-3">
                {cartItems.map((cartItem) => (
                  <div
                    key={cartItem.item.id}
                    className="flex justify-between items-center gap-3 border-b border-slate-50 pb-2.5"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`w-2 h-2 rounded-full inline-block flex-shrink-0 ${cartItem.item.isVeg ? 'bg-veg-green' : 'bg-nonveg-red'}`} />
                        <h4 className="font-sans font-semibold text-slate-800 text-xs truncate">
                          {cartItem.item.name}
                        </h4>
                      </div>
                      <p className="text-slate-450 text-[10px] font-bold">₹{cartItem.item.price} each</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-slate-50 border border-slate-100/80 rounded-lg p-0.5">
                        <button
                          onClick={() => onRemoveFromCart(cartItem.item)}
                          className="p-1 hover:bg-slate-200 rounded text-slate-650 active:scale-90 transition-all"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="px-2 font-extrabold text-xs text-slate-900 min-w-[14px] text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => onAddToCart(cartItem.item)}
                          className="p-1 hover:bg-slate-200 rounded text-slate-650 active:scale-90 transition-all"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <span className="text-right text-xs font-extrabold text-slate-750 min-w-[50px]">
                        ₹{cartItem.item.price * cartItem.quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table / Details form fields */}
              <div className="bg-slate-50 p-5 border-t border-slate-100 space-y-3.5">
                <div className="flex gap-3">
                  <div className="w-2/5">
                    <label className="block text-[9px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Table / Seat
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. T4"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full bg-white border border-slate-205 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 rounded-lg px-2.5 py-1.5 text-xs text-slate-755 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[9px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Special Requests
                    </label>
                    <input
                      type="text"
                      placeholder="No onions, mild style, etc."
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      className="w-full bg-white border border-slate-205 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 rounded-lg px-2.5 py-1.5 text-xs text-slate-755 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subtotal summary block */}
                <div className="pt-1.5">
                  <div className="flex justify-between items-center text-[11px] text-slate-500 mb-1">
                    <span>Items Subtotal</span>
                    <span className="font-bold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-slate-500 mb-2">
                    <span>CGST & GST (approx)</span>
                    <span className="font-bold text-veg-green">Included</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-extrabold text-slate-900 border-t border-slate-200/50 pt-2">
                    <span>Amount Payable</span>
                    <span className="text-accent-600 text-sm">₹{totalPrice}</span>
                  </div>
                </div>

                {/* WhatsApp Place Order trigger */}
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-veg-green hover:bg-green-700 active:scale-[0.98] py-3 rounded-full text-white font-sans font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-1.5 transition-all text-center cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" /> Send Order Over WhatsApp
                </button>
                <p className="text-[9px] text-slate-400 text-center leading-normal">
                  Our system encodes this invoice automatically. Tap above to trigger WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
