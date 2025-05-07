'use client'

import { motion } from 'motion/react'

export default function WipeUpRight({
  children,
  tag: Tag = 'div',
  className,
  once = true,
  animateOn = 'whileInView',
  delay = 0,
  duration = 0.3,
  easing = 'ease-out',
  viewport = { once },
  ...props
}) {
  const MotionTag = motion(Tag)
  const initial = { clipPath: 'inset(100% 0% 0% 100%)' }
  const animate = {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      delay,
      duration,
      easing
    }
  }

  const animationProps = {
    initial,
    [animateOn]: animate,
    ...(animateOn === 'whileInView' ? { viewport } : {})
  }

  return (
    <MotionTag className={className} {...animationProps} {...props}>
      {children}
    </MotionTag>
  )
}
