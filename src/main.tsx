import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
// import { Polimorfismo } from "./classes/polimorfismo/Polimorfismo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />,{/* <Polimorfismo /> */}
  </StrictMode>,
);
