
import React from 'react';

interface NewsModalProps {
  onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ onClose }) => {
  /**
   * GUIA DE MANUTENÇÃO DE VÍDEOS DE NOVIDADES:
   * Para adicionar novos vídeos, basta subir o arquivo na pasta 'public/videos/'
   * com o nome 'novidade1.mp4', 'novidade2.mp4', etc.
   */
  const videos = Array.from({ length: 100 }, (_, i) => ({
    title: `Novidade #${i + 1}`,
    url: `/videos/novidade${i + 1}.mp4`,
    description: `Fique por dentro das últimas novidades da Adega 3º Turno.`
  }));

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl bg-neutral-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="absolute top-8 right-8 z-10">
          <button onClick={onClose} className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-10 md:p-16 h-[85vh] overflow-y-auto custom-scrollbar">
          <div className="mb-12">
            <h2 className="text-4xl font-serif mb-4 italic">Novidades</h2>
            <div className="h-1 w-20 bg-[#FFD90F] rounded-full"></div>
            <p className="mt-6 text-neutral-400">Confira os novos produtos e promoções que acabaram de chegar.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map((video, index) => (
              <div key={index} className="space-y-4 group">
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 relative">
                  <video 
                    src={video.url}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div>
                  <h3 className="text-xl font-serif italic text-white group-hover:text-[#FFD90F] transition-colors">{video.title}</h3>
                  <p className="text-sm text-neutral-500 mt-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-10 bg-white/5 rounded-[2rem] border border-white/5 text-center">
            <h4 className="text-lg font-serif italic mb-2">Quer saber mais sobre algum item?</h4>
            <p className="text-sm text-neutral-400">Chame a gente no WhatsApp agora mesmo!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
