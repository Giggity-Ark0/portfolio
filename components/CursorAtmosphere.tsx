"use client";

import { useEffect, useRef } from "react";

export default function CursorAtmosphere() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;

      glow.style.transform = `translate(${currentX - 160}px, ${currentY - 160}px)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div
        ref={glowRef}
        className="absolute w-[320px] h-[320px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(165, 140, 255, 0.06) 0%, rgba(99, 102, 241, 0.03) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
