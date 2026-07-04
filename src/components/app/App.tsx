import CategoryPage from "../category-page";
import Footer from "../footer";
import Header from "../header";
import HomePage from "../home-page";
import styles from "./styles.module.css";
import { Container } from "../ui";
import { useContext } from "react";
import { RouterContext } from "../router-provider";

function App() {
  const { path } = useContext(RouterContext)!;

  let page;
  if (path === "/") {
    page = <HomePage />;
  } else if (path.startsWith("/categories/")) {
    const slug = path.replace("/categories/", "");
    page = <CategoryPage categorySlug={slug} />;
  } else {
    page = (
      <Container>
        <p>404 - Página no encontrada</p>
      </Container>
    );
  }

  return (
    <div className={styles.root}>
      <Header
        user={{ email: "Christhian" }}
        cartItemsCount={10}
        className={styles["root__header"]}
      />
      <main className="root__main">{page}</main>
      <Footer className={styles["root__footer"]} />
    </div>
  );
}

export default App;
