import styles from "./styles.module.css";
import type { Feature as FeatureType } from "../features";

type FeatureProps = {
  feature: FeatureType;
};

export const Feature = ({ feature }: FeatureProps) => {
  const { imgSrc, title, descripion } = feature;
  return (
    <div className={styles["feature"]}>
      <img src={imgSrc} alt={title} className={styles["feature__icon"]} />
      <h3 className={styles["feature__title"]}>{title}</h3>
      <p className={styles["feature__description"]}>{descripion}</p>
    </div>
  );
};

export default Feature;
