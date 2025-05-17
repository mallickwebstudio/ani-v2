'use client'

import { motion } from 'motion/react'
import { useMemo, ElementType } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type AnimationProps<T extends ElementType> = {
  children: ReactNode;
  tag?: T;
  className?: string;
  once?: boolean;
  animateOn?: 'whileHover' | 'whileTap' | 'whileDrag' | 'whileFocus' | 'whileInView';
  repeat?: number;
  delay?: number;
  duration?: number;
  easing?: string | number[];
  stagger?: number;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
} & ComponentPropsWithoutRef<T>;

export default function SnowRingText<T extends ElementType = 'span'>({
  children,
  tag,
  className,
  once = false,
  animateOn = 'whileInView',
  repeat = 0,
  delay = 0,
  duration = 1,
  easing = 'ease-in-out',
  stagger = 0.05,
  viewport = { once },
  ...props
}: AnimationProps<T>) {
  const Tag = tag || 'span';
  const MotionTag = motion(Tag as ElementType);

  const letters = useMemo(() => `${children}`.split(''), [children]);

  return (
    <MotionTag className={className} {...props}>
      {letters.map((char, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotate: 90,
            filter: 'blur(4px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            filter: 'blur(0px)',
            transition: {
              delay: delay + i * stagger,
              duration,
              easing,
              repeat,
            },
          }}
          {...(animateOn === 'whileInView'
            ? { whileInView: { opacity: 1 }, viewport }
            : { [animateOn]: { opacity: 1 } })}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </MotionTag>
  );
}
