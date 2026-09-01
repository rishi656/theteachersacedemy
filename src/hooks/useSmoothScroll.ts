import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // If it's a mobile/touch-screen device, bypass LERP to keep high-performance native touch scroll
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;

    const handleWheel = (e: WheelEvent) => {
      // Don't intercept scroll if modifier keys are held or scroll was already prevented
      if (e.ctrlKey || e.metaKey || e.shiftKey || e.defaultPrevented) return;

      // Capture scroll delta (reduced speed multiplier 0.82 for buttery smooth control)
      targetY += e.deltaY * 0.82;

      // Clamp target scroll within page boundaries
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      e.preventDefault();

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      // Linear interpolation momentum multiplier (0.075 for soft/buttery ease transitions)
      const ease = 0.075;
      currentY += (targetY - currentY) * ease;

      window.scrollTo(0, currentY);

      // Continue animating if we haven't reached close proximity to target
      if (Math.abs(targetY - currentY) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        isMoving = false;
      }
    };

    // Passive must be false so e.preventDefault() works cleanly
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};
