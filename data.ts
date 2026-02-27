
import { Product } from './types';

/**
 * GUIA DE MANUTENÇÃO DE FOTOS:
 * 
 * As fotos estão organizadas em pastas dentro de 'public/fotos/'.
 * Para que a foto apareça no site, salve o arquivo com o nome exato indicado abaixo.
 * 
 * Exemplo: Para o Combo Absolut, salve a foto como 'absolut-redbull.jpg' 
 * dentro da pasta 'public/fotos/combos/'.
 */
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Combo Absolut + Red Bull',
    description: '1L Vodka Absolut + 5 Latas de Red Bull + Balde de Gelo',
    price: 189.90,
    category: 'Combos',
    imageUrl: '/fotos/combos/absolut-redbull.jpg', // Salve em: public/fotos/combos/
    featured: true
  },
  {
    id: '2',
    name: 'Stella Artois Long Neck',
    description: 'Cerveja premium belga, puro malte (330ml)',
    price: 8.50,
    category: 'Cervejas',
    imageUrl: '/fotos/cervejas/stella-long-neck.jpg' // Salve em: public/fotos/cervejas/
  },
  {
    id: '3',
    name: 'Johnnie Walker Black Label',
    description: 'Whisky escocês 12 anos (1L)',
    price: 159.00,
    category: 'Destilados',
    imageUrl: '/fotos/destilados/black-label.jpg', // Salve em: public/fotos/destilados/
    featured: true
  },
  {
    id: '9',
    name: 'Essência Zomo Strong Mint',
    description: 'A clássica menta forte para seu narguile',
    price: 12.00,
    category: 'Tabacaria',
    imageUrl: '/fotos/tabacaria/zomo-mint.jpg' // Salve em: public/fotos/tabacaria/
  },
  {
    id: '10',
    name: 'Carvão Coco Brasil 1kg',
    description: 'Carvão de coco de alta duração para arguile',
    price: 35.00,
    category: 'Tabacaria',
    imageUrl: '/fotos/tabacaria/carvao-coco.jpg' // Salve em: public/fotos/tabacaria/
  },
  {
    id: '4',
    name: 'Vinho Tinto Casillero del Diablo',
    description: 'Cabernet Sauvignon Chileno (750ml)',
    price: 54.90,
    category: 'Vinhos',
    imageUrl: '/fotos/vinhos/casillero-diablo.jpg' // Salve em: public/fotos/vinhos/
  },
  {
    id: '5',
    name: 'Heineken 6-pack',
    description: 'Pacote com 6 latas (350ml cada)',
    price: 34.90,
    category: 'Cervejas',
    imageUrl: '/fotos/cervejas/heineken-6pack.jpg' // Salve em: public/fotos/cervejas/
  },
  {
    id: '7',
    name: 'Coca-Cola 2L',
    description: 'Refrigerante sabor original',
    price: 12.90,
    category: 'Não Alcoólicos',
    imageUrl: '/fotos/nao-alcoolicos/coca-2l.jpg' // Salve em: public/fotos/nao-alcoolicos/
  },
  {
    id: '11',
    name: 'Chocolate KitKat',
    description: 'Chocolate ao leite com wafer (41.5g)',
    price: 4.50,
    category: 'Doces',
    imageUrl: '/fotos/doces/kitkat.jpg' // Salve em: public/fotos/doces/
  },
  {
    id: '12',
    name: 'Batata Pringles Original',
    description: 'Batata frita crocante (114g)',
    price: 14.90,
    category: 'Salgados',
    imageUrl: '/fotos/salgados/pringles.jpg' // Salve em: public/fotos/salgados/
  }
];

export const CATEGORIES: { name: string; icon: string }[] = [
  { name: 'Combos', icon: '🔥' },
  { name: 'Cervejas', icon: '🍺' },
  { name: 'Tabacaria', icon: '💨' },
  { name: 'Destilados', icon: '🥃' },
  { name: 'Vinhos', icon: '🍷' },
  { name: 'Não Alcoólicos', icon: '🥤' },
  { name: 'Doces', icon: '🍫' },
  { name: 'Salgados', icon: '🍟' },
];
