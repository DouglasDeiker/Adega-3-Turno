
import React from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#FFD90F]/20">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#FFD90F] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            {/* LOGO DA NAVBAR: Troque o link em 'src' abaixo */}
            <div className="w-14 h-14 rounded-full overflow-hidden border border-[#FFD90F]/30 shadow-lg">
              <img 
                src="/fotos/logo.jpg" 
                alt="Logo Adega 3º Turno" 
                className="w-full h-full object-cover scale-[1.4]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl tracking-tighter leading-none">Adega</span>
            <span className="text-[#FFD90F] font-black text-[10px] uppercase tracking-[0.3em] mt-1">3º Turno</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onCartClick}
            className="relative p-2 text-white hover:text-[#FFD90F] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-white text-black text-[10px] font-black px-1.5 py-0.5 rounded-full ring-2 ring-[#FFD90F]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
