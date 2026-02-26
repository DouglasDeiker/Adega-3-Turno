
import React from 'react';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl bg-neutral-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="absolute top-8 right-8 z-10">
          <button onClick={onClose} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-[85vh] md:h-auto max-h-[90vh] overflow-y-auto custom-scrollbar">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            {/* FOTO DA SEÇÃO SOBRE: Troque o link em 'src' abaixo */}
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000" 
              alt="Adega 3º Turno" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent md:bg-gradient-to-r"></div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-10 md:p-16 space-y-10">
            <div>
              <h2 className="text-4xl font-serif mb-4 italic">Nossa Trajetória</h2>
              <div className="h-1 w-20 bg-[#FFD90F] rounded-full"></div>
            </div>

            <div className="space-y-6 text-neutral-400 leading-relaxed text-sm md:text-base">
              <p>
                A Adega 3º Turno nasceu de um sonho e da determinação de oferecer o melhor para os "corujas" da madrugada. O que começou como um pequeno balcão, hoje se tornou referência em Mogi das Cruzes.
              </p>
              <p>
                Nossa história é marcada pelo compromisso com a qualidade e pela paixão em servir. O dono, sempre presente, construiu cada degrau dessa jornada com foco na satisfação de quem busca conveniência sem abrir mão do estilo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
