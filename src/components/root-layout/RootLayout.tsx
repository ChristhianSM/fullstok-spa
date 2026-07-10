import styles from "./styles.module.css";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <div className={styles.root}>
      <Header
        user={{ email: "Christhian" }}
        className={styles["root__header"]}
      />
      <main className={styles["root-main"]}>
        <Outlet />
      </main>
      <Footer className={styles["root__footer"]} />
    </div>
  );
};
