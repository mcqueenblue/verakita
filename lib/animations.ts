import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GSAP animation configurations
 */
export const gsapConfig = {
  // Default ease
  ease: "power3.out",

  // Common durations
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
  },

  // Stagger settings for multiple elements
  stagger: {
    amount: 0.2,
    from: "start",
  },
};

/**
 * Fade up animation with GSAP
 * @param element - DOM element or selector
 * @param options - Animation options
 */
export const fadeUp = (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: gsapConfig.duration.normal,
    ease: gsapConfig.ease,
    ...options,
  });
};

/**
 * Fade in animation with GSAP
 */
export const fadeIn = (element: gsap.TweenTarget, options?: gsap.TweenVars) => {
  return gsap.from(element, {
    opacity: 0,
    duration: gsapConfig.duration.normal,
    ease: gsapConfig.ease,
    ...options,
  });
};

/**
 * Scale animation with GSAP
 */
export const scaleIn = (
  element: gsap.TweenTarget,
  options?: gsap.TweenVars
) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: gsapConfig.duration.normal,
    ease: gsapConfig.ease,
    ...options,
  });
};

/**
 * Create a scroll-triggered animation
 * @param element - Element to animate
 * @param animation - GSAP animation
 * @param scrollTriggerOptions - ScrollTrigger options
 */
export const scrollAnimation = (
  element: gsap.DOMTarget,
  animation: gsap.TweenVars,
  scrollTriggerOptions?: ScrollTrigger.Vars
) => {
  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...scrollTriggerOptions,
    },
  });
};

/**
 * Framer Motion variants for common animations
 */
export const motionVariants = {
  // Fade in from bottom
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  // Fade in
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Scale
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  // Slide from left
  slideLeft: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
  },

  // Slide from right
  slideRight: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  },

  // Stagger container
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Stagger item
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
};

/**
 * Framer Motion transition presets
 */
export const motionTransitions = {
  spring: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  },

  smooth: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1],
  },

  bounce: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10,
  },
};
