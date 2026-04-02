// Product Types
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  benefits: string[];
  ingredients: string[];
  skinType: string[];
  createdAt: Date;
}

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
}

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  avatar?: string;
  createdAt: Date;
  address?: Address;
}

export interface Address {
  id: string;
  streetAddress: string;
  city: string;
  emirate: string;
  zipCode: string;
  country: string;
  phoneNumber: string;
}

// Order Types
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentMethod: "stripe" | "cod" | "bank_transfer";
  shippingAddress: Address;
  billingAddress: Address;
  createdAt: Date;
  updatedAt: Date;
  trackingNumber?: string;
}

// Review Types
export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  verified: boolean;
  helpful: number;
  createdAt: Date;
}

// Wishlist Types
export interface WishlistItem {
  id: string;
  userId: string;
  productId: string;
  product: Product;
  addedAt: Date;
}
