import { useEffect, useState } from "react";
import CategoryPage from "../category-page";
import Footer from "../footer";
import Header from "../header";
import HomePage from "../home-page";
import styles from "./styles.module.css";
import { Container } from "../ui";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname);
    }

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(to: string) {
    window.history.pushState(null, "", to);
    setPath(to);
  }

  let page;
  if (path === "/") {
    page = <HomePage navigate={navigate} />;
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
        navigate={navigate}
      />
      <main className="root__main">{page}</main>
      <Footer className={styles["root__footer"]} navigate={navigate} />
    </div>
  );
}

export default App;
