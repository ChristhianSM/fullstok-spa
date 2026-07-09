import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./components/app";
// import App from "./classes/layoutCompartido/App";
// import App from "./components/app";
// import Details from "./classes/customHooks/Details";
// import { App } from "./classes/useContext/App";
// import { Polimorfismo } from "./classes/polimorfismo/Polimorfismo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <Details /> */}
    {/* <App /> */}
  </StrictMode>,
);
