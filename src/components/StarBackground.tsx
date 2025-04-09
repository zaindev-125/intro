
import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stars = starsRef.current;
    if (!stars) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      stars.style.setProperty('--x', clientX.toString());
      stars.style.setProperty('--y', clientY.toString());
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={starsRef} className="stars fixed inset-0 z-0"></div>
      <div className="planet bg-purple-600 h-64 w-64 -top-20 -left-20"></div>
      <div className="planet bg-astro-sky h-96 w-96 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></div>
    </>
  );
};

export default StarBackground;
