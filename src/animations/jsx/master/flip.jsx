'use client'

import { motion } from 'motion/react'

export default function Flip({
  children,
  variant = 'vertical',
  tag: Tag = 'div',
  className,
  once = true,
  animateOn = 'whileInView',
  delay = 0,
  duration = 0.3,
  easing = 'ease-in-out',
  viewport = { once },
  ...props
}) {
  const MotionTag = motion(Tag)

  let initial;
  let animate;

  if (variant === 'horizontal') {
    initial = { rotateY: 90 }
    animate = {
      rotateY: 0,
      transition: { delay, duration, easing },
    }
  } else if (variant === 'diagonal') {
    initial = { rotateX: 90, rotateY: 90 }
    animate = {
      rotateX: 0,
      rotateY: 0,
      transition: { delay, duration, easing },
    }
  } else {
    // vertical (default)
    initial = { rotateX: 90 }
    animate = {
      rotateX: 0,
      transition: { delay, duration, easing },
    }
  }

  const animationProps = {
    initial,
    [animateOn]: animate,
    ...(animateOn === 'whileInView' ? { viewport } : {}),
  }

  return (
    <MotionTag className={className} {...animationProps} {...props}>
      {children}
    </MotionTag>
  )
}
