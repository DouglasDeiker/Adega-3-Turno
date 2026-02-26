
import { Product } from './types';

/**
 * GUIA DE MANUTENÇÃO DE FOTOS:
 * Para trocar a foto de um produto:
 * 1. Se a foto estiver na pasta 'public/fotos', use: imageUrl: '/fotos/nome-da-foto.jpg'
 * 2. Se a foto for um link da internet, cole o link completo entre aspas.
 */
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Combo Absolut + Red Bull',
    description: '1L Vodka Absolut + 5 Latas de Red Bull + Balde de Gelo',
    price: 189.90,
    category: 'Combos',
    imageUrl: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=400',
    featured: true
  },
  {
    id: '2',
    name: 'Stella Artois Long Neck',
    description: 'Cerveja premium belga, puro malte (330ml)',
    price: 8.50,
    category: 'Cervejas',
    imageUrl: 'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Johnnie Walker Black Label',
    description: 'Whisky escocês 12 anos (1L)',
    price: 159.00,
    category: 'Destilados',
    imageUrl: 'https://images.unsplash.com/photo-1527281400828-ac737aefa5ad?auto=format&fit=crop&q=80&w=400',
    featured: true
  },
  {
    id: '9',
    name: 'Essência Zomo Strong Mint',
    description: 'A clássica menta forte para seu narguile',
    price: 12.00,
    category: 'Narguile',
    imageUrl: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '10',
    name: 'Carvão Coco Brasil 1kg',
    description: 'Carvão de coco de alta duração para arguile',
    price: 35.00,
    category: 'Narguile',
    imageUrl: 'https://images.unsplash.com/photo-1621266450073-d866a0149959?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Vinho Tinto Casillero del Diablo',
    description: 'Cabernet Sauvignon Chileno (750ml)',
    price: 54.90,
    category: 'Vinhos',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    name: 'Heineken 6-pack',
    description: 'Pacote com 6 latas (350ml cada)',
    price: 34.90,
    category: 'Cervejas',
    imageUrl: 'https://images.unsplash.com/photo-1613531390494-08013890886c?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '7',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante sabor original',
    price: 12.90,
    category: 'Não Alcoólicos',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400'
  }
];

export const CATEGORIES: { name: string; icon: string }[] = [
  { name: 'Combos', icon: '🔥' },
  { name: 'Cervejas', icon: '🍺' },
  { name: 'Narguile', icon: '💨' },
  { name: 'Destilados', icon: '🥃' },
  { name: 'Vinhos', icon: '🍷' },
  { name: 'Não Alcoólicos', icon: '🥤' },
];
