
export type Category = 'Cervejas' | 'Vinhos' | 'Destilados' | 'Combos' | 'Tabacaria' | 'Não Alcoólicos' | 'Petiscos' | 'Doces' | 'Salgados';

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
