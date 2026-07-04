import { Toolbar } from "./Toolbar";
import { CountProvider } from "./CountProvider";

export const App = () => {
  return (
    <CountProvider>
      <div>
        <h1>Contador</h1>
        <Toolbar />
      </div>
    </CountProvider>
  );
};
