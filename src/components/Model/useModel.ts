'use client'

import { useCallback, useEffect, useState } from "react";

export function useModel(){
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const startResizing = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsResizing(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const newWidth = width + (e.clientX - startX);
      const newHeight = height + (e.clientY - startY);
      setWidth(newWidth);
      setHeight(newHeight);
      setStartX(e.clientX);
      setStartY(e.clientY);
    }
  }, [isResizing, startX, startY, width, height]);

  // Adiciona event listeners de resize
  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', resize);
      window.addEventListener('mouseup', stopResizing);
    } else {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    }
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [isResizing, resize, stopResizing]);

  return {
    startResizing,
    width,
    height
  }
}