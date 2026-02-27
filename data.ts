
import { Product } from './types';

/**
 * GUIA DE MANUTENÇÃO DE FOTOS:
 * 
 * Para que as fotos apareçam, suba os arquivos nas pastas corretas dentro de 'public/fotos/'
 * com os nomes: combo1.jpg, cerveja1.jpg, destilado1.jpg, etc.
 */

/**
 * MUDANÇA DE PREÇOS E NOMES:
 * 
 * Para mudar o preço ou o nome de um produto específico, adicione o ID dele abaixo.
 * O ID segue o padrão: prefixo-numero (ex: combo-1, cerveja-5, doce-10)
 */
const CUSTOM_DATA: Record<string, { name?: string; price?: number; description?: string }> = {
  'combo-1': { name: 'Combo Especial Absolut', price: 150.00, description: '1L Absolut + 5 Red Bull' },
  'cerveja-1': { name: 'Heineken Long Neck', price: 12.00 },
  // Adicione mais aqui seguindo o modelo acima
};

const generateProducts = () => {
  const categories = [
    { name: 'Combos', prefix: 'combo', folder: 'combos' },
    { name: 'Cervejas', prefix: 'cerveja', folder: 'cervejas' },
    { name: 'Tabacaria', prefix: 'tabacaria', folder: 'tabacaria' },
    { name: 'Destilados', prefix: 'destilado', folder: 'destilados' },
    { name: 'Vinhos', prefix: 'vinho', folder: 'vinhos' },
    { name: 'Não Alcoólicos', prefix: 'nao-alcoolico', folder: 'nao-alcoolicos' },
    { name: 'Doces', prefix: 'doce', folder: 'doces' },
    { name: 'Salgados', prefix: 'salgado', folder: 'salgados' },
  ];

  const allProducts: Product[] = [];

  categories.forEach((cat) => {
    for (let i = 1; i <= 100; i++) {
      const id = `${cat.prefix}-${i}`;
      const custom = CUSTOM_DATA[id];

      allProducts.push({
        id: id,
        name: custom?.name || `${cat.name} #${i}`,
        description: custom?.description || `Qualidade garantida da Adega 3º Turno.`,
        price: custom?.price || 0.00,
        category: cat.name as any,
        imageUrl: `/fotos/${cat.folder}/${cat.prefix}${i}.jpg`,
        featured: i === 1 && cat.name === 'Combos'
      });
    }
  });

  return allProducts;
};

export const PRODUCTS: Product[] = generateProducts();

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
