import { MotionValue, useSpring, useTransform } from 'framer-motion';
import { isMobile } from 'react-device-detect';

export const useTransformX = (
  value: MotionValue<number>,
  distance: number,
  index: number,
  length: number,
  isMobile: boolean,
) => {
  const distVal: number = ((length - 1) / 2 - index) * -distance;
  const spring = { mass: 0.4, stiffness: 200, damping: 40, restDelta: .001, restSpeed: 20 }
  const scrollSpring = useSpring(value, spring)
  return useTransform(scrollSpring, [.5, .9], [`${isMobile ? 0 : distVal}%`, '0%']);
}

export const useTransformY = (
  value: MotionValue<number>,
  distance: number,
  index: number,
  isMobile: boolean,
) => {
  const distVal: number = (index) * distance;
  const spring = { mass: 0.4, stiffness: 200, damping: 40, restDelta: .001, restSpeed: 20 }
  const scrollSpring = useSpring(value, spring)
  return useTransform(scrollSpring, [.5, .9], [`${isMobile ? distVal : 0}%`, '0%']);
}

export const useYPosition = (value: MotionValue<number>) => {
  const spring = {
    mass: 0.3,
    stiffness: 190,
    damping: 28,
    restDelta: 0.0001,
    restSpeed: 20
  };
  const springMobile = {
    mass: 0.3,
    stiffness: 190,
    damping: 28,
    restDelta: 0.0001,
    restSpeed: 20,
    overshootClamping: true, // Сглаживание перелетов
  };
  const scrollY = useSpring(value, spring);
  const scrollYMobile = useSpring(value, springMobile);
  // const mobile = useTransform(
  //   scrollYMobile,
  //   [0, 0.33333, 1],
  //   ['0%', '0%', '200%']
  // );
  // const desktop = useTransform(
  //   scrollY,
  //   [0, 0.33333, 1],
  //   ['0%', '0%', '200%']
  // );
  return useTransform(
    scrollYMobile,
    [0, 0.33333, 1],
    ['0%', '0%', '200%']
  );
}