'use client'

import { motion } from 'motion/react'

export default function FlipHorizontal({
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
  const initial = { rotateY: -90 }
  const animate = { rotateX: 0, rotateY: 0, rotateZ: 0, transition: { delay, duration, easing } }

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
