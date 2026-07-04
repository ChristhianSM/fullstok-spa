import { useEffect, useState, type ReactNode } from "react";
import { RouterContext } from "./routerContext";

type RouterProviderProps = {
  children: ReactNode;
};

export const RouterProvider = ({ children }: RouterProviderProps) => {
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

  return (
    <RouterContext.Provider value={{ navigate, path }}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;
