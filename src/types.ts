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