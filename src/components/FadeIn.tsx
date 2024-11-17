import { useState, useEffect, ReactNode } from "react";

interface FadeInFromBottomProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
}

const FadeInFromBottom: React.FC<FadeInFromBottomProps> = ({
  children,
  delay = 0,
  duration = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInFromBottom;
