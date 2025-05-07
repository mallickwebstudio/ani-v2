'use client'

import { motion } from 'motion/react'

export default function BounceDown({
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
  const initial = { y: -50 }
  const animate = { y: 0, transition: { type: 'spring', bounce: 0.5, delay, duration, easing } }

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
