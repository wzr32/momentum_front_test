export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RaitingType;
};

export type RaitingType = {
  rate: number;
  count: number;
};
