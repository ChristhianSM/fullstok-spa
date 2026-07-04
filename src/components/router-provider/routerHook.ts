import { useContext } from "react";
import { RouterContext } from "./routerContext";

export function useRouterContext() {
  const context = useContext(RouterContext);
  
    if (!context) {
      throw new Error("No deberias mover este componente fuera del provider");
    }

  return context;
}

export function useLocation() {
  return useRouterContext().path;
}

export function useNavigation() {
  return useRouterContext().navigate;
}