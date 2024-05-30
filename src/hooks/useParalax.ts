import { useScroll, useSpring, useTransform } from 'framer-motion';
import React from 'react';
import { springOurTarget } from '@/helpers/animation';

/**
 * Pass a `stiffness`, `damping` and `force` parameters, which controls animation of the parallax.
 *
 * @param ref
 * @param stiffness - Stiffness of the spring. Higher values will create more sudden movement. Defaults to `250`.
 * @param damping - Strength of opposing force. If set to 0, spring will oscillate indefinitely. Defaults to `20`.
 * @param force - Force of divergence between elements. Defaults to `45`.
 * @returns `primaryX, primaryY` - `x` and `y` to pass to `style` prop of the top element.
 *          `secondaryX, secondaryY` - `x` and `y` to pass to `style` prop of the bottom element.
 *          `onMouseMoveHandler` - function to pass to `onMouseMove` prop to parent element of top and bottom elements.
 *          `onMouseLeaveHandler` - function to pass to `onMouseLeave` prop to parent element of top and bottom elements.
 *
 * @public
 */


export const useParallax = (ref: React.RefObject<HTMLElement>, stiffness = 250, damping = 20, force = 45) => {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });
  // dunno how to reduce this repeating code, might figure it out later
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: ref,
    offset: ['start end', 'end start']
  });
  const scrollYMobile = useSpring(scrollYProgress, springOurTarget);
  const primaryMobY =  useTransform(scrollYMobile, [0,1], ['20%', '-20%']);
  const primaryX = useTransform(x, (event) => event / force);
  const primaryY = useTransform(y, (event) => event / force);
  const secondaryX = useTransform(x, (event) => event / -force);
  const secondaryY = useTransform(y, (event) => event / -force);

  const onMouseMoveHandler = (event: React.MouseEvent) => {
    let isMobile = window.innerWidth < 1200
    if(!isMobile) {
      x.set(event.clientX - window.innerWidth / 2);
      y.set(event.clientY - window.innerWidth / 2);
    }
  };

  const onMouseLeaveHandler = () => {
    x.set(0);
    y.set(0);
  };

  return {
    primaryMobY,
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler
  };
};
