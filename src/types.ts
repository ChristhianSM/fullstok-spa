export type Category = {
  id: number;
  title: string;
  slug: string;
  imgSrc: string;
  alt: string | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  imgSrc: string;
  price: number;
  description: string;
  features: string[];
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CartItem = {
  id: number;
  quantity: number;
  lineTotal: number;
  product: {
    id: number;
    title: string;
    slug: string;
    price: number;
    imgSrc: number;
  }
}

export type Cart = {
  id: number;
  items:  CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
