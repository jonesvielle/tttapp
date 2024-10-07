import React, { useEffect, useRef, useState } from "react";

interface BounceInComponentProps {
  children: React.ReactNode;
  className?: string; // Optional className for additional styling
}

const SlideUpComponent: React.FC<BounceInComponentProps> = ({
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity ${
        isVisible ? "animate-slideUp" : "opacity-0" // Initially hidden
      } ${className}`} // Include any additional classes
    >
      {children}
    </div>
  );
};

export default SlideUpComponent;
