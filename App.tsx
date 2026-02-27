
import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, Category } from './types';
import { PRODUCTS, CATEGORIES } from './data';
import Navbar from './components/Navbar';
import AboutModal from './components/AboutModal';
import EventsModal from './components/EventsModal';
import DrinkPrepModal from './components/DrinkPrepModal';
import NewsModal from './components/NewsModal';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Tudo'>('Tudo');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [isDrinkPrepOpen, setIsDrinkPrepOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'Tudo' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const total = useMemo(() => cart.reduce((acc, item) => acc + item.price * item.quantity, 0), [cart]);

  const handleWhatsAppCheckout = () => {
    const phoneNumber = '5511964801205';
    const itemsList = cart.map(item => `${item.quantity}x ${item.name} (R$ ${(item.price * item.quantity).toFixed(2)})`).join('\n');
    const message = encodeURIComponent(
      `*Novo Pedido - Adega 3º Turno*\n\n` +
      `*Itens:*\n${itemsList}\n\n` +
      `*Total: R$ ${total.toFixed(2)}*\n\n` +
      `Olá! Gostaria de finalizar meu pedido.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pb-20 bg-black text-white">
      <Navbar 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
        {/* VÍDEO DE FUNDO DO TOPO */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-30 grayscale"
          >
            <source src="/videos/topo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl flex flex-col items-center">
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-[#FFD90F]/15 blur-[100px] rounded-full"></div>
            {/* LOGO DA ADEGA: Troque o link em 'src' para mudar o logo principal */}
            <div className="w-64 h-64 md:w-[400px] md:h-[400px] relative animate-floating flex items-center justify-center">
              <div className="absolute inset-0 bg-[#FFD90F]/20 blur-[80px] rounded-full"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#FFD90F]/30 relative z-10 shadow-[0_0_50px_rgba(255,217,15,0.2)]">
                <img 
                  src="/fotos/logo.jpg" 
                  alt="Adega 3º Turno Logo" 
                  className="w-full h-full object-cover scale-[1.4] relative"
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-[#FFD90F] font-black tracking-[0.6em] text-[10px] mb-12 uppercase">Delivery somente em Mogi das Cruzes • Taxa sob consulta via WhatsApp</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button 
              onClick={() => setIsDrinkPrepOpen(true)}
              className="w-full sm:w-auto px-12 py-5 bg-[#FFD90F] text-black font-black rounded-2xl hover:bg-[#ffe65c] transition-all transform hover:scale-105 shadow-[0_15px_40px_rgba(255,217,15,0.25)] uppercase tracking-[0.2em] text-xs text-center"
            >
              Preparo de bebidas
            </button>
            <button 
              onClick={() => setIsEventsOpen(true)}
              className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white hover:text-black transition-all transform hover:scale-105 uppercase tracking-[0.2em] text-xs text-center"
            >
              Eventos
            </button>
            <button 
              onClick={() => setIsNewsOpen(true)}
              className="w-full sm:w-auto px-12 py-5 bg-white/5 border border-[#FFD90F]/30 text-[#FFD90F] font-black rounded-2xl hover:bg-[#FFD90F] hover:text-black transition-all transform hover:scale-105 uppercase tracking-[0.2em] text-xs text-center"
            >
              Novidades
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="catalogo" className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex items-center gap-6">
            <div className="h-px bg-gradient-to-r from-[#FFD90F]/40 to-transparent flex-1"></div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* Barra de Busca - Agora no Topo */}
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Qual o desejo de hoje?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-white/5 rounded-2xl px-14 py-5 text-sm focus:outline-none focus:border-[#FFD90F] transition-all shadow-2xl placeholder:text-neutral-600"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-5 top-1/2 -translate-y-1/2 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex flex-col gap-4 w-full">
              {/* Botão Tudo - Grande e no Topo */}
              <button 
                onClick={() => setSelectedCategory('Tudo')}
                className={`w-full px-6 py-5 rounded-2xl transition-all text-[11px] font-black uppercase tracking-[0.4em] ${selectedCategory === 'Tudo' ? 'bg-[#FFD90F] text-black shadow-2xl shadow-[#FFD90F]/30 scale-[1.01]' : 'bg-neutral-900 border border-white/5 hover:border-[#FFD90F]/30'}`}
              >
                Tudo
              </button>
              
              {/* Outras Categorias - Grid Organizado */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name as Category)}
                    className={`px-4 py-4 rounded-2xl transition-all text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 border ${selectedCategory === cat.name ? 'bg-[#FFD90F] text-black border-[#FFD90F] shadow-lg shadow-[#FFD90F]/20' : 'bg-neutral-900 border-white/5 hover:border-[#FFD90F]/30'}`}
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="truncate">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="group bg-neutral-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#FFD90F]/40 transition-all duration-500 flex flex-col shadow-2xl"
            >
              <div className="aspect-[1/1] overflow-hidden relative">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {product.featured && (
                  <div className="absolute top-6 left-6 bg-[#FFD90F] text-black text-[9px] font-black px-3 py-1.5 rounded-full tracking-widest uppercase shadow-2xl">
                    🔥 Recomendado
                  </div>
                )}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8 text-center backdrop-blur-[2px]">
                   <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-[11px] font-medium text-neutral-300 leading-relaxed uppercase tracking-tighter">{product.description}</p>
                   </div>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] text-[#FFD90F] font-black uppercase tracking-[0.2em]">{product.category}</span>
                  <span className="text-lg font-black text-white">R$ {product.price.toFixed(2)}</span>
                </div>
                <h3 className="font-bold text-xl mb-6 leading-tight group-hover:text-[#FFD90F] transition-colors">{product.name}</h3>
                
                <button 
                  onClick={() => addToCart(product)}
                  className="mt-auto w-full py-4 bg-white/5 border border-white/5 rounded-[1.2rem] font-black text-[10px] hover:bg-white hover:text-black transition-all uppercase tracking-widest"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-40 space-y-8">
            <img src="https://i.ibb.co/37zX2C8/homer-placeholder.png" className="w-32 h-32 mx-auto grayscale opacity-20 animate-pulse" alt="" />
            <div className="space-y-2">
              <h3 className="text-3xl font-serif">D'oh! Não achamos nada.</h3>
              <p className="text-neutral-500 max-w-sm mx-auto text-sm">O estoque dessa categoria está vazio ou a busca falhou. Tente outro termo!</p>
            </div>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedCategory('Tudo');}}
              className="px-10 py-4 bg-[#FFD90F] text-black font-black rounded-2xl uppercase text-[10px] tracking-widest shadow-xl"
            >
              Resetar Tudo
            </button>
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-neutral-950 h-full flex flex-col shadow-2xl border-l border-[#FFD90F]/20">
            <div className="p-10 border-b border-white/5 flex items-center justify-between bg-black/50">
              <div className="flex items-center gap-4">
                {/* LOGO NO CARRINHO: Troque o link em 'src' abaixo */}
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#FFD90F]/30 shadow-lg">
                  <img src="/fotos/logo.jpg" className="w-full h-full object-cover scale-[1.4]" alt="" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif">Carrinho</h2>
                  <p className="text-[9px] text-[#FFD90F] font-black uppercase tracking-[0.2em]">Entrega Madrugada</p>
                </div>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-3 hover:bg-white/5 rounded-2xl transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center opacity-20 space-y-8">
                   <img src="https://i.ibb.co/37zX2C8/homer-placeholder.png" className="w-32 h-32 object-contain grayscale" alt="" />
                  <p className="font-serif text-xl italic">Sua sacola está vazia.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-6 group animate-in slide-in-from-right-4 duration-300">
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <img src={item.imageUrl} className="w-full h-full object-cover rounded-[1.5rem]" alt="" />
                      <div className="absolute -top-2 -left-2 bg-[#FFD90F] text-black text-[10px] font-black w-7 h-7 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-neutral-950">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 py-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg leading-tight group-hover:text-[#FFD90F] transition-colors">{item.name}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-neutral-700 hover:text-red-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-base font-black text-[#FFD90F] mb-6">R$ {(item.price * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center bg-black/50 rounded-2xl p-1.5 border border-white/5 w-fit">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center hover:text-[#FFD90F] transition-colors text-lg">-</button>
                        <span className="w-10 text-center text-xs font-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center hover:text-[#FFD90F] transition-colors text-lg">+</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-10 border-t border-white/5 bg-black/80 space-y-8">
                <div className="space-y-4">
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-500">
                    <span>Subtotal</span>
                    <span className="text-white">R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-500">
                    <span>Taxa de Entrega</span>
                    <span className="text-[#FFD90F]">Consultar via WhatsApp</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-4xl font-black border-t border-white/10 pt-8 font-serif">
                  <span>Total</span>
                  <span className="text-[#FFD90F]">R$ {total.toFixed(2)}</span>
                </div>
                
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-[#FFD90F] hover:bg-[#ffe65c] text-black font-black py-6 rounded-[2rem] transition-all shadow-[0_15px_40px_rgba(255,217,15,0.3)] uppercase tracking-[0.3em] text-[10px]"
                >
                  Finalizar no WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isAboutOpen && (
        <AboutModal onClose={() => setIsAboutOpen(false)} />
      )}

      {isEventsOpen && (
        <EventsModal onClose={() => setIsEventsOpen(false)} />
      )}

      {isDrinkPrepOpen && (
        <DrinkPrepModal onClose={() => setIsDrinkPrepOpen(false)} />
      )}

      {isNewsOpen && (
        <NewsModal onClose={() => setIsNewsOpen(false)} />
      )}

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-950 py-32 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-4xl text-center mb-16">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Horário</h4>
              <p className="text-sm font-medium">Terça a Domingo das 11h ás 22h</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Social</h4>
              <div className="flex justify-center gap-10">
                 <a href="https://www.instagram.com/adegaterceiroturno1?utm_source=qr&igsh=MWtrZ3V3ZWU1OXY0MQ%3D%3D" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group transition-all">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5 group-hover:border-[#E4405F]/50">
                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#E4405F]" xmlns="http://www.w3.org/2000/svg">
                       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                     </svg>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">Instagram</span>
                 </a>
                 <a href="https://wa.me/5511964801205" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group transition-all">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/5 group-hover:border-[#25D366]/50">
                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
                       <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.438-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                     </svg>
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">WhatsApp</span>
                 </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">Aviso</h4>
              <p className="text-[10px] font-medium text-neutral-500 italic">Venda proibida para menores de 18 anos.</p>
              <button 
                onClick={() => setIsAboutOpen(true)}
                className="mt-4 px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#FFD90F] hover:text-black transition-all"
              >
                Sobre
              </button>
            </div>
          </div>
          
          <div className="w-full max-w-4xl mt-20 pt-20 border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <div className="p-3 bg-[#FFD90F]/10 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFD90F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Localização</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Rua Aniz Tanuz Resek 260 - Conjunto Residencial Cocuera<br />
                  Mogi das Cruzes - SP, CEP 08793-020, Brasil
                </p>
              </div>
              
              <div className="w-full md:w-2/3 h-64 rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                {/* MAPA DE LOCALIZAÇÃO: Troque o link em 'src' abaixo pelo link de 'incorporar mapa' do Google Maps */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.344445354921!2d-46.1666666!3d-23.5222222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd8765432109b%3A0x1234567890abcdef!2sRua%20Aniz%20Tanuz%20Resek%2C%20260%20-%20Conj.%20Res.%20Cocuera%2C%20Mogi%20das%20Cruzes%20-%20SP%2C%2008793-020!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <p className="text-[9px] text-neutral-800 font-black uppercase tracking-widest mt-20">
            © 2026 Adega 3º Turno. para sua Casa.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
