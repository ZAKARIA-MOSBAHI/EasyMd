import { useEffect, useRef, useState } from "react";

export function useResize(initial = 50, min = 30, max = 70) {
  const [leftWidth, setLeftWidth] = useState(initial);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      let percent = ((e.clientX - rect.left) / rect.width) * 100;

      percent = Math.max(min, Math.min(max, percent));
      setLeftWidth(percent);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    globalThis.addEventListener("mouseup", handleMouseUp);
    return () => {
      globalThis.removeEventListener("mousemove", handleMouseMove);
      globalThis.removeEventListener("mouseup", handleMouseUp);
    };
  }, [min, max]);

  const startDragging = () => {
    isDragging.current = true;
  };

  return {
    containerRef,
    leftWidth,
    startDragging,
  };
}
