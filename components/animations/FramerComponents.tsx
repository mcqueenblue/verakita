"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * AnimatedCard Component - Framer Motion Example
 *
 * A card component with hover animations and entrance effects
 * Demonstrates Framer Motion capabilities for UI micro-interactions
 *
 * @param children - Card content
 * @param delay - Entrance animation delay
 * @param className - Additional CSS classes
 *
 * @example
 * <AnimatedCard delay={0.2}>
 *   <h3>Card Title</h3>
 *   <p>Card content here</p>
 * </AnimatedCard>
 */
export function AnimatedCard({
  children,
  delay = 0,
  className,
  onClick,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "bg-white rounded-xl border border-zinc-200 p-6 cursor-pointer",
        "transition-shadow hover:shadow-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerContainer - Framer Motion Stagger Example
 *
 * Container that staggers the animation of its children
 * Each child appears one after another with a delay
 *
 * @example
 * <StaggerContainer>
 *   <StaggerItem><Card /></StaggerItem>
 *   <StaggerItem><Card /></StaggerItem>
 *   <StaggerItem><Card /></StaggerItem>
 * </StaggerContainer>
 */
export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem - Individual item for StaggerContainer
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FloatingCard - Card with floating animation
 *
 * Card that gently floats up and down
 * Great for feature highlights and CTAs
 */
export function FloatingCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "bg-white rounded-xl border border-zinc-200 p-6 shadow-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

/**
 * ExpandableCard - Card that expands on hover
 *
 * Card with expand/collapse animation and content reveal
 */
export function ExpandableCard({
  title,
  description,
  expandedContent,
  className,
}: {
  title: string;
  description: string;
  expandedContent: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={false}
      whileHover="expanded"
      className={cn(
        "bg-white rounded-xl border border-zinc-200 p-6 overflow-hidden",
        className
      )}
    >
      <motion.div>
        <h3 className="text-xl font-semibold text-zinc-800 mb-2">{title}</h3>
        <p className="text-zinc-600">{description}</p>
      </motion.div>

      <motion.div
        variants={{
          collapsed: { opacity: 0, height: 0, marginTop: 0 },
          expanded: { opacity: 1, height: "auto", marginTop: 16 },
        }}
        initial="collapsed"
        transition={{ duration: 0.3 }}
      >
        {expandedContent}
      </motion.div>
    </motion.div>
  );
}

/**
 * SlideIn - Component that slides in from a direction
 *
 * @param direction - Direction to slide from: 'left', 'right', 'top', 'bottom'
 */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
}) {
  const directionMap = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
  };

  return (
    <motion.div
      initial={{
        ...directionMap[direction],
        opacity: 0,
      }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * PulseButton - Button with pulse animation
 *
 * Button that pulses to draw attention
 * Great for primary CTAs
 */
export function PulseButton({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(37, 99, 235, 0.4)",
          "0 0 0 10px rgba(37, 99, 235, 0)",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 bg-brandBlue text-white font-semibold rounded-lg",
        "hover:bg-brandBlue-dark transition-colors",
        className
      )}
    >
      {children}
    </motion.button>
  );
}

/**
 * CountUp - Animated number counter
 *
 * Animates a number from 0 to target value
 */
export function CountUp({
  value,
  duration = 2,
  className,
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {count}
    </motion.span>
  );
}

/**
 * RotateOnHover - Element that rotates on hover
 */
export function RotateOnHover({
  children,
  degrees = 5,
  className,
}: {
  children: ReactNode;
  degrees?: number;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ rotate: degrees }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
