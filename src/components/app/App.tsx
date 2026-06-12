import Footer from "../footer";
import Header from "../header";
import HomePage from "../home-page";
import styles from "./styles.module.css";

function App() {
  return (
    <div className={styles.root}>
      <Header
        user={{ email: "Christhian" }}
        cartItemsCount={10}
        className={styles["root__header"]}
      />
      <main className="root__main">
        <HomePage />
      </main>
      <Footer className={styles["root__footer"]} />
    </div>
  );
}

export default App;
