import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check device type
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1024;
    if (isTouch || isSmallScreen) {
      cursor.style.display = 'none';
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      // Use clientX/clientY and translate3d to offload rendering directly to the GPU
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      cursor.style.display = 'block';
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = target.closest('button, a, [role="button"], input, select, textarea, .cursor-pointer, [onClick]');
      if (isInteractive) {
        cursor.classList.add('custom-cursor-hover');
      } else {
        cursor.classList.remove('custom-cursor-hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden lg:block"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: 'translate3d(-100px, -100px, 0)',
        display: 'none',
      }}
    />
  );
};
