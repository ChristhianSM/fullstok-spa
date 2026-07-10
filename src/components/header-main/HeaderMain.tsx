import { Link } from "react-router";
import HeaderActions from "../header-actions";
import MainNav from "../main-nav";
import { Container, Separator } from "../ui";
import styles from "./styles.module.css";

export const HeaderMain = () => {
  return (
    <Container className={styles["header-main"]}>
      <div className={styles["header-main__top"]}>
        <Link to="/" role="logo">
          <img
            src="/images/fullstock-logo.svg"
            alt="FullStock inicio"
            width="128"
            height="32"
          />
        </Link>
        <HeaderActions />
      </div>
      <Separator className={styles["header-main__separator"]} />
      <MainNav />
    </Container>
  );
};

export default HeaderMain;
