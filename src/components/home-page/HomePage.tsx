// import styles from "./styles.module.css";

import Categories from "../categories";
import Features from "../features";
import Hero from "../hero";

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

const categories: Category[] = [
  {
    id: 1,
    title: "Polos",
    slug: "polos",
    imgSrc: "/images/polos.jpg",
    alt: "Polos",
    description:
      "Polos exclusivos con diseños que todo desarrollador querrá lucir. Ideales para llevar el código a donde vayas.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "Tazas",
    slug: "tazas",
    imgSrc: "/images/tazas.jpg",
    alt: "Tazas",
    description:
      "Tazas que combinan perfectamente con tu café matutino y tu pasión por la programación. ¡Empieza el día con estilo!",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Stickers",
    slug: "stickers",
    imgSrc: "/images/stickers.jpg",
    alt: "Stickers",
    description:
      "Personaliza tu espacio de trabajo con nuestros stickers únicos y muestra tu amor por el desarrollo web.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <Features />
    </>
  );
};

export default HomePage;
