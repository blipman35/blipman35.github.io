import { useEffect, useRef } from 'react';

// Create a single IntersectionObserver instance
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeIn');
        observer.unobserve(entry.target);
      }
    });
  },
  { 
    threshold: 0.1,
    rootMargin: '50px' // Start animation slightly before element comes into view
  }
);

const useScrollAnimation = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
};

export default useScrollAnimation;