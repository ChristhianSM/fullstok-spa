import CategoryPage from "../category-page";
import Footer from "../footer";
import Header from "../header";
import HomePage from "../home-page";
import styles from "./styles.module.css";
import { Container } from "../ui";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className={styles.root}>
      <Header
        // user={{ email: "Christhian" }}
        cartItemsCount={10}
        className={styles["root__header"]}
      />
      <main className="root__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route
            path="*"
            element={
              <Container>
                <p>404 — Página no encontrada</p>
              </Container>
            }
          />
        </Routes>
      </main>
      <Footer className={styles["root__footer"]} />
    </div>
  );
}

export default App;
