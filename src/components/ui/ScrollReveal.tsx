"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  disabled?: boolean;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  stagger = false,
  disabled = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(disabled);

  useEffect(() => {
    if (disabled) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px 40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [disabled]);

  useEffect(() => {
    if (!visible) return;

    const el = ref.current;
    if (!el) return;

    const markDone = (event: TransitionEvent) => {
      if (event.target !== el) return;
      el.classList.add("motion-reveal--done");
    };

    el.addEventListener("transitionend", markDone);
    return () => el.removeEventListener("transitionend", markDone);
  }, [visible]);

  const style =
    delay > 0
      ? ({ "--motion-reveal-delay": `${delay}ms` } as CSSProperties)
      : undefined;

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reveal",
        stagger && "motion-reveal-stagger",
        visible && "motion-reveal--visible",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}
