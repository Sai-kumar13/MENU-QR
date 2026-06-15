import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    setIsSending(true);

    const whatsappText = 
      `*AURORA BISTRO — VISITOR INQUIRY*\n` +
      `---------------------------------\n` +
      `*Guest Name:* ${name.trim()}\n` +
      `*Contact Phone:* ${phone.trim()}\n\n` +
      `*Message:*\n${message.trim()}\n` +
      `---------------------------------`;

    const encodedText = encodeURIComponent(whatsappText);
    const cleanNum = RESTAURANT_INFO.whatsappNumber.replace(/\D/g, '');
    
    // Slight artificial delay for UX feel, then open redirect
    setTimeout(() => {
      window.open(`https://wa.me/${cleanNum}?text=${encodedText}`, '_blank', 'noopener,noreferrer');
      setIsSending(false);
      // reset fields
      setName('');
      setPhone('');
      setMessage('');
    }, 600);
  };

  return (
    <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-xs">
      <h2 className="text-lg font-sans font-extrabold text-slate-800 mb-1">Leave a Message</h2>
      <p className="text-slate-500 text-xs mb-5">
        Have reservation requests or special requests? Send us a WhatsApp message directly here.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Guest Name */}
        <div>
          <label className="block text-slate-400 text-[10px] font-sans font-bold uppercase tracking-wider mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full bg-slate-50 border border-slate-150 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 rounded-xl px-3 py-2.5 text-xs text-slate-750 focus:outline-none transition-colors"
          />
        </div>

        {/* Guest Phone */}
        <div>
          <label className="block text-slate-400 text-[10px] font-sans font-bold uppercase tracking-wider mb-1">
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +91 98765 43210"
            className="w-full bg-slate-50 border border-slate-155 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 rounded-xl px-3 py-2.5 text-xs text-slate-750 focus:outline-none transition-colors"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-slate-400 text-[10px] font-sans font-bold uppercase tracking-wider mb-1">
            Message Details *
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="We would like to book a table for 4 guests on Friday evening..."
            className="w-full bg-slate-50 border border-slate-155 focus:border-accent-500 focus:ring-1 focus:ring-accent-500 rounded-xl px-3 py-2.5 text-xs text-slate-750 focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-sans font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
        >
          {isSending ? (
            <span>Preparing chat...</span>
          ) : (
            <>
              Send via WhatsApp <Send className="w-3 h-3" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
