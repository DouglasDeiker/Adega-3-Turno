
import React from 'react';

interface DrinkPrepModalProps {
  onClose: () => void;
}

const DrinkPrepModal: React.FC<DrinkPrepModalProps> = ({ onClose }) => {
  /**
   * GUIA DE MANUTENÇÃO DE VÍDEOS (ARQUIVOS PRÓPRIOS):
   * 1. Coloque seus vídeos na pasta 'public/videos/'
   * 2. No campo 'url', use o caminho: '/videos/nome-do-seu-video.mp4'
   * 3. Você também pode usar links diretos da internet.
   */
  const videos = [
    {
      title: "Nossa Adega #1",
      url: "/videos/WhatsApp Video 2026-01-30 at 14145.mp4",
      description: "Conheça nossa estrutura e variedade."
    },
    {
      title: "Destaque da Semana",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.33.16.mp4",
      description: "Os produtos mais pedidos do momento."
    },
    {
      title: "Preparo de Drinks #1",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.33.20.mp4",
      description: "Confira como preparamos os melhores combos da região."
    },
    {
      title: "Preparo de Drinks #2",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.33.25.mp4",
      description: "Dicas de mixologia para sua madrugada ser inesquecível."
    },
    {
      title: "Nossa Adega #2",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.33.50.mp4",
      description: "Um pouco do nosso estoque e cuidado com seus produtos."
    },
    {
      title: "Ambiente e Energia",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.33.51111.mp4",
      description: "A vibração do 3º Turno."
    },
    {
      title: "Combos Exclusivos #1",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.0044444.mp4",
      description: "Montagem dos nossos combos especiais."
    },
    {
      title: "Combos Exclusivos #2",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.004578544.mp4",
      description: "Qualidade e rapidez na entrega."
    },
    {
      title: "Variedade de Bebidas",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.02855854458.mp4",
      description: "Tudo o que você precisa para sua festa."
    },
    {
      title: "Gelada de Verdade",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.0457457.mp4",
      description: "Cervejas e destilados na temperatura ideal."
    },
    {
      title: "Novidades no Estoque",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.06875758875.mp4",
      description: "Sempre trazendo o melhor para você."
    },
    {
      title: "Bastidores",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.42.mp4",
      description: "O trabalho não para para garantir sua entrega rápida."
    },
    {
      title: "Atendimento Rápido",
      url: "/videos/WhatsApp Video 2026-01-30 at 18.34.494747.mp4",
      description: "Nossa equipe pronta para te atender."
    }
  ];

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
            <h2 className="text-4xl font-serif mb-4 italic">Preparo de Bebidas</h2>
            <div className="h-1 w-20 bg-[#FFD90F] rounded-full"></div>
            <p className="mt-6 text-neutral-400">Assista aos nossos vídeos e aprenda a preparar seus drinks como um profissional.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map((video, index) => (
              <div key={index} className="space-y-4 group">
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/5 bg-neutral-900 relative">
                  {/* PLAYER DE VÍDEO LOCAL */}
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
            <h4 className="text-lg font-serif italic mb-2">Quer ver algum preparo específico?</h4>
            <p className="text-sm text-neutral-400">Mande sua sugestão no nosso WhatsApp!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkPrepModal;
