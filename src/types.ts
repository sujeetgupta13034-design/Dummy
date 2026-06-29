export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women' | 'accessories' | 'footwear' | 'seasonal';
  image: string;
  colors: string[];
  sizes: string[];
  features: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  likes: number;
  comments: BlogComment[];
}

export interface BlogComment {
  id: string;
  name: string;
  date: string;
  text: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export type ActiveTab = 'home' | 'about' | 'products' | 'blog' | 'contact';
