import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useMenuAnimation = (
    isOpen: boolean
): {
    menuRef: React.RefObject<HTMLDivElement>;
} => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            if (menuRef.current) {
                const tl = gsap.timeline();

                if (isOpen) {
                    tl.to(menuRef.current, {
                        autoAlpha: 1,
                        scale: 1,
                        zIndex: 1000,
                        duration: 1,
                        ease: "power3.out",
                    });
                } else {
                    tl.to(menuRef.current, {
                        autoAlpha: 0,
                        scale: 0.95,
                        zIndex: -100,
                        duration: 0.3,
                        ease: "power3.in",
                        clearProps: "all",
                    });
                }
            }
        } catch (error: any | unknown) {
            console.log("There was an error with animation:", error);
        }
    }, [isOpen]);

    return { menuRef };
};