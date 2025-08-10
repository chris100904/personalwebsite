export const transition = { type: "spring", duration: 1.2, ease: "easeInOut" };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.3 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { type: "tween", duration: 0.4 },
  },
  animate: {
    opacity: 1,
    transition: { type: "tween", duration: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { type: "tween", duration: 0.4 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 8,
    stiffness: 50,
    restDelta: 0.001,
    duration: 0.6,
  },
};

export const cardAnimation = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    type: "spring",
    damping: 20,
    stiffness: 100,
    duration: 0.5,
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 12,
    stiffness: 100,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};
