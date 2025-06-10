export interface Product {
  id: number;
  name: string;
  default_attributes: {
    id: number;
    name: string;
    value: string;
  }[];
  brands: {
    id: number;
    name: string;
    slug: string; // TODO: add slug
  }[];
  price: number;
  regular_price: number;
  sale_price?: number;
  images: {
    id: number;
    src: string;
    alt: string;
  }[];
  slug: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  stock_status: string;
  stock_quantity: number;
  rating_count: number;
  average_rating: number;
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  attributes: {
    id: number;
    name: string;
    position: number;
    visible: boolean;
    variation: boolean;
    options: string[];
  }[];
  variations: {
    id: number;
    name: string;
    price: number;
    regular_price: number;
    sale_price: number;
  }[];
}

export interface User {
  id: string;
  image: string;
  email: string;
  name: string;
  role: string;
}
