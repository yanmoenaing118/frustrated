import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const cache = new Map();

export default function useFakeFetch(URL) {
  const location = useLocation();
  let cacheKey = location.key + URL;
  let cached = cache.get(cacheKey);

  const [data, setData] = useState(() => {
    return cached || null;
  });

  const [state, setState] = useState(() => {
    return cached ? "done" : "loading";
  });

  useEffect(() => {
    if (state === "loading") {
      let controller = new AbortController();
      fetch(URL, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => {
          if (controller.aborted) return;
          cache.set(cacheKey, data);
          setData(data);
        });
      return () => controller.abort();
    }
  }, [state, cacheKey]);

  useEffect(() => {
    setState("loading");
  }, [URL]);

  return data;
}
