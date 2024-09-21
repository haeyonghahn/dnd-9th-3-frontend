import { useSyncExternalStore } from "react";

export const useDomWidth = (element: HTMLDivElement | null) => {
  return useSyncExternalStore(
    (callback) => {
      const observer = new ResizeObserver(callback);
      if (element) observer.observe(element);

      return () => observer.disconnect();
    },
    () => {
      if (!element) {
        return 1;
      }
      const style = window.getComputedStyle(element);
      const marginLeft = parseFloat(style.marginLeft);
      const marginRight = parseFloat(style.marginRight);
      const totalWidth = element.clientWidth + marginLeft + marginRight;
      return totalWidth;
    }
  );
};
