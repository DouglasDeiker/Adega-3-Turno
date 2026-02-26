
import React from 'react';

interface EventsModalProps {
  onClose: () => void;
}

const EVENTS = [
  {
    id: 1,
    title: "Dia de Futebol",
    date: "Quartas e Domingos",
    time: "A partir das 16h",
    description: "Venha torcer pelo seu time com a cerveja mais gelada da região. Promoções especiais em combos durante os jogos!",
    icon: "⚽"
  },
  {
    id: 2,
    title: "Dia de Churrasco",
    date: "Sábados",
    time: "Das 11h às 18h",
    description: "O acompanhamento perfeito para o seu churrasco. Temos carvão, gelo e as melhores carnes e bebidas.",
    icon: "🔥"
  },
  {
    id: 3,
    title: "Noite do Arguile",
    date: "Sextas",
    time: "A partir das 20h",
    description: "Variedade de essências e carvão para sua sessão ser completa. O melhor preço da madrugada.",
    icon: "💨"
  }
];

const EventsModal: React.FC<EventsModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="p-8 md:p-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-serif italic mb-2">Eventos</h2>
              <div className="h-1 w-16 bg-[#FFD90F] rounded-full"></div>
            </div>
            <button onClick={onClose} className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
            {EVENTS.map(event => (
              <div key={event.id} className="group bg-white/5 border border-white/5 p-6 rounded-3xl hover:border-[#FFD90F]/30 transition-all">
                <div className="flex gap-6 items-start">
                  <div className="text-4xl bg-black/40 w-16 h-16 flex items-center justify-center rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-[#FFD90F] transition-colors">{event.title}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD90F] bg-[#FFD90F]/10 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>
                    <p className="text-[#FFD90F] text-xs font-bold mb-3 uppercase tracking-wider">{event.time}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
