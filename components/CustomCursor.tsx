"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom Cursor Component
 * Figma-style cursor with smooth following effect
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move dot immediately
      gsap.to(cursorDot, {
        x: mouseX - 4,
        y: mouseY - 4,
        duration: 0,
      });

      // Move circle with delay (following effect)
      gsap.to(cursor, {
        x: mouseX - 20,
        y: mouseY - 20,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Handle hover states
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Handle click states
    const handleMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          border: "2px solid #2563eb",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          transition: "opacity 0.3s",
        }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="cursor-dot"
        style={{
          position: "fixed",
          width: "8px",
          height: "8px",
          backgroundColor: "#f97316",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
