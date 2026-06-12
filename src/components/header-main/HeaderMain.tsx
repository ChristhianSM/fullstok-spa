import HeaderActions from "../header-actions";
import MainNav from "../main-nav";
import styles from "./styles.module.css";

type HeaderMainProps = {
  cartItemsCount: number;
};

export const HeaderMain = ({ cartItemsCount }: HeaderMainProps) => {
  return (
    <div className={`container ${styles["header-main"]}`}>
      <div className={styles["header-main__top"]}>
        <a href="/">
          <img
            src="/images/fullstock-logo.svg"
            alt="FullStock inicio"
            width="128"
            height="32"
          />
        </a>
        <HeaderActions cartItemsCount={cartItemsCount} />
      </div>
      <div className={`separator ${styles["header-main__separator"]}`}></div>
      <MainNav />
    </div>
  );
};

export default HeaderMain;
