import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useBurgerButtonAnimation = (
  isOpen: boolean
): {
  firstLine: React.RefObject<HTMLSpanElement>;
  secondLine: React.RefObject<HTMLSpanElement>;
  thirdLine: React.RefObject<HTMLSpanElement>;
} => {
  const firstLine = useRef<HTMLSpanElement>(null);
  const secondLine = useRef<HTMLSpanElement>(null);
  const thirdLine = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (firstLine.current && secondLine.current && thirdLine.current) {
      gsap.set([firstLine.current, thirdLine.current], {
        transformOrigin: "50% 50%",
      });

      const openTl = gsap
        .timeline({ paused: true })
        .to(firstLine.current, { y: 0, rotation: 45, duration: 0.3 })
        .to(thirdLine.current, { y: -16, rotation: -45, duration: 0.3 }, "<")
        .to(secondLine.current, { scaleX: 0, duration: 0.2 }, "<0.1");

      const closeTl = gsap
        .timeline({ paused: true })
        .to(firstLine.current, { y: 0, rotation: 0, duration: 0.3 })
        .to(thirdLine.current, { y: 0, rotation: 0, duration: 0.3 }, "<")
        .to(secondLine.current, { scaleX: 1, duration: 0.2 }, "<0.1");

      if (isOpen) {
        openTl.play();
      } else {
        closeTl.play();
      }

      return () => {
        openTl.kill();
        closeTl.kill();
      };
    }
  }, [isOpen]);

  return { firstLine, secondLine, thirdLine };
};
