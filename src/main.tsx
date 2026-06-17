import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app";
import { Appv3 } from "./Appv3";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Appv3 /> */}
    <App />
  </StrictMode>,
);
