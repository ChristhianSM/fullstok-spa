import HeaderActions from "../header-actions";
import MainNav from "../main-nav";
import { Container, Separator } from "../ui";
import styles from "./styles.module.css";

type HeaderMainProps = {
  cartItemsCount: number;
  navigate: (to: string) => void;
};

export const HeaderMain = ({ cartItemsCount, navigate }: HeaderMainProps) => {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute("href")!);
  }

  return (
    <Container className={styles["header-main"]}>
      <div className={styles["header-main__top"]}>
        <a href="/" onClick={handleClick}>
          <img
            src="/images/fullstock-logo.svg"
            alt="FullStock inicio"
            width="128"
            height="32"
          />
        </a>
        <HeaderActions cartItemsCount={cartItemsCount} />
      </div>
      <Separator className={styles["header-main__separator"]} />
      <MainNav navigate={navigate} />
    </Container>
  );
};

export default HeaderMain;
