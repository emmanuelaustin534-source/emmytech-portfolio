"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ end, suffix = "", duration = 2 }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const el = numberRef.current;
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          el.textContent = Math.floor(obj.val) + suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [end, suffix, duration]);

  return <span ref={numberRef}>0{suffix}</span>;
}
