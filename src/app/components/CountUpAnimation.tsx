import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
  addedString?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  target,
  duration = 2000,
  addedString = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
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

  useEffect(() => {
    if (isVisible) {
      const start = performance.now(); // Start time
      const end = start + duration; // End time
      const increment = Math.ceil(target / (duration / 100)); // Calculate increment

      const countInterval = (currentTime: number) => {
        if (currentTime < end) {
          setCount((prevCount) => Math.min(prevCount + increment, target)); // Increment count
          requestAnimationFrame(countInterval); // Call next frame
        } else {
          setCount(target); // Ensure we reach the target
        }
      };

      requestAnimationFrame(countInterval); // Start the counting
    }
  }, [isVisible, target, duration]);

  return (
    <div ref={ref} className="flex flex-row  text-center md:text-start">
      {count}
      {addedString}
    </div>
  );
};

export default CountUp;
