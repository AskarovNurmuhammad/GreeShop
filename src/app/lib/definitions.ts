export type Order = {
  id?: string;
  user_id: number;
  location: string;
  phone: string;
  status: "OPEN" | "PROGRESS" | "CLOSE";
  total_price: number;
  created_at: string;
  products: Product[];
};

export type User = {
  id?: number;
  name: string;
  email: string;
  password?: string;
  role: "USER" | "ADMIN";
  orders: Order[];
};

export type Cotegory = {
  id: number;
  name: string;
  status: string;
};

export type Product = {
  id?: number;
  name: string;
  cotegory: string;
  description: string;
  price: string;
  images: string[];
  quantity: string;
  status: "published" | "draft";
};
