import { RefObject, useSyncExternalStore } from "react";

const useDomHeight = (ref: RefObject<HTMLElement>) => {
  return useSyncExternalStore(
    (callback) => {
      const observer = new ResizeObserver(callback);
      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    },
    () => ref.current?.clientHeight ?? 1
  );
};
