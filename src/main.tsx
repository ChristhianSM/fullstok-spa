import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import RouterProvider from "./components/router-provider";
// import { App } from "./classes/useContext/App";
// import { Polimorfismo } from "./classes/polimorfismo/Polimorfismo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
    {/* <App /> */}
  </StrictMode>,
);
