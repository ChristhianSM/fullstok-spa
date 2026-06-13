import Feature from "../feature";
import styles from "./styles.module.css";

export type Feature = {
  id: number;
  imgSrc: string;
  title: string;
  descripion: string;
};

const features: Feature[] = [
  {
    id: 1,
    imgSrc: "/images/icons/truck.svg",
    title: "Entrega rápida",
    descripion:
      "Recibe tus productos en tiempo récord, directo a tu puerta, para que puedas disfrutar de ellos cuanto antes.",
  },
  {
    id: 2,
    imgSrc: "/images/icons/return.svg",
    title: "Satisfacción Garantizada",
    descripion:
      "Tu felicidad es nuestra prioridad. Si no estás 100% satisfecho, estamos aquí para ayudarte con cambios o devoluciones.",
  },
  {
    id: 3,
    imgSrc: "/images/icons/ribbon.svg",
    title: "Materiales de Alta Calidad",
    descripion:
      "Nos aseguramos de que todos nuestros productos estén hechos con materiales de la más alta calidad.",
  },
  {
    id: 4,
    imgSrc: "/images/icons/idea.svg",
    title: "Diseños Exclusivos",
    descripion:
      "Cada producto está diseñado pensando en los desarrolladores, con estilos únicos que no encontrarás en ningún otro lugar.",
  },
];

export const Features = () => {
  return (
    <section className={styles["features"]}>
      <div className="container">
        <h2 className={styles["features__title"]}>
          Nuestra Promesa de Calidad
        </h2>
        <div className={styles["features__grid"]}>
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
