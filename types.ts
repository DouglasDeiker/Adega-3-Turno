
export type Category = 'Cervejas' | 'Vinhos' | 'Destilados' | 'Combos' | 'Narguile' | 'Não Alcoólicos' | 'Petiscos';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserLocation {
  lat: number;
  lng: number;
  address?: string;
}

export interface AIResponse {
  message: string;
  recommendations?: string[];
}
