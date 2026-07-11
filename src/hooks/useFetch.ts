import { useEffect, useState, type DependencyList } from "react";
import type { Status } from "../types";

export function useFetch<T>(fetcher: () => Promise<T>, deps: DependencyList) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    async function runEffect() {
      try {
        setData(await fetcher());
        setStatus("success");
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    }

    runEffect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, status };
}
