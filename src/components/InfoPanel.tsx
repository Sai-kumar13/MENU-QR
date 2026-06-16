import { MapPin, Phone, Mail, Clock, Compass, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data';

export default function InfoPanel() {
  const handleCall = () => {
    window.location.href = `tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`;
  };

  const handleOpenMap = () => {
    window.open(RESTAURANT_INFO.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* RESTAURANT BRIEF CARD */}
      <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-xs">
        <h2 className="text-lg font-sans font-extrabold text-slate-800 mb-2">
          About {RESTAURANT_INFO.name}
        </h2>
        <p className="text-slate-500 text-[10px] tracking-widest uppercase font-bold mb-3 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-accent-500" /> {RESTAURANT_INFO.cuisine}
        </p>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
          {RESTAURANT_INFO.description}
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-6">
          {/* Timings */}
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Kitchen Timings
              </h4>
              <p className="text-slate-700 text-xs leading-relaxed">{RESTAURANT_INFO.hours.weekdays}</p>
              <p className="text-slate-700 text-xs leading-relaxed">{RESTAURANT_INFO.hours.weekends}</p>
            </div>
          </div>

          {/* Quick service characteristics */}
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                Dining & Hygiene
              </h4>
              <p className="text-slate-700 text-xs leading-relaxed">
                Contactless digital checkout. Handcrafted fresh ingredients prepared dynamically on checkout. Beautiful modern dining hall at Nungambakkam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION & CUSTOM MAP COMPONENT */}
      <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-xs">
        <h2 className="text-lg font-sans font-extrabold text-slate-800 mb-4">Location & Contact</h2>
        
        {/* Map Box */}
        <div className="relative w-full h-48 bg-slate-50 rounded-2xl overflow-hidden mb-4 border border-slate-100 group">
          {/* Mock Map graphics with CSS grids to look highly stylized and artistic */}
          <div className="absolute inset-0 opacity-80 grid grid-cols-6 grid-rows-4 pointer-events-none p-1">
            <div className="border-r border-b border-slate-200 bg-slate-50" />
            <div className="border-r border-b border-slate-200 bg-slate-50" />
            <div className="border-r border-b border-slate-300 bg-orange-100/40" />
            <div className="border-r border-b border-slate-200 bg-slate-50" />
            <div className="border-r border-b border-slate-200 bg-slate-50" />
            <div className="border-b border-slate-200 bg-slate-50" />

            <div className="border-r border-b border-slate-200 bg-slate-50" />
            {/* Mock central green park */}
            <div className="col-span-2 row-span-2 border border-emerald-100/40 bg-emerald-100/10 rounded-lg m-2 relative">
              <span className="absolute inset-x-0 bottom-1 text-[8px] text-center text-emerald-700/60 font-medium">Anderson Park</span>
            </div>
            <div className="border-r border-b border-slate-300 bg-slate-100" />
            <div className="border-r border-b border-slate-200 bg-slate-100/30" />
            <div className="border-b border-slate-200 bg-slate-50" />

            <div className="border-r border-b border-slate-200 bg-slate-100" />
            <div className="border-r border-b border-slate-300 bg-slate-50" />
            <div className="border-r border-b border-slate-200 bg-slate-50" />
            <div className="border-b border-slate-200 bg-slate-50" />

            <div className="col-span-6 bg-slate-200/20 border-t-2 border-dashed border-slate-300/40 relative h-full flex items-center pl-8">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Khader Nawaz Khan Rd</span>
            </div>
          </div>

          {/* Central Location Pin Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            {/* Glowing ripple */}
            <div className="absolute top-4 w-6 h-6 bg-accent-500/20 rounded-full animate-ping" />
            <div className="bg-accent-500 text-white p-2.5 rounded-full shadow-lg border border-accent-400 relative">
              <MapPin className="w-4 h-4 fill-accent-100" />
            </div>
            <div className="bg-slate-900 text-white text-[9px] font-sans font-bold px-2 py-0.5 rounded-md mt-1.5 whitespace-nowrap shadow-xs">
              Aurora Bistro
            </div>
          </div>

          {/* Table index metrics */}
          <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2 py-1 rounded-lg shadow-xs border border-slate-100 text-[9px] text-slate-500 font-bold max-w-[200px] leading-tight">
            Nungambakkam High Rd
          </div>
        </div>

        {/* Contacts details list */}
        <div className="space-y-3.5 mb-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-[18px] h-[18px] text-slate-400 mt-0.5 shrink-0" />
            <p className="text-slate-600 text-xs leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-[18px] h-[18px] text-slate-400 shrink-0" />
            <p className="text-slate-600 text-xs font-bold">{RESTAURANT_INFO.phone}</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-[18px] h-[18px] text-slate-400 shrink-0" />
            <p className="text-slate-600 text-xs">{RESTAURANT_INFO.email}</p>
          </div>
        </div>

        {/* Navigation Action Buttons Row */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleOpenMap}
            className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
          >
            Directions <ExternalLink className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={handleCall}
            className="py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 font-sans font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            Call Desk <Phone className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
