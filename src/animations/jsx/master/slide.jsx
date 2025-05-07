'use client'

import { motion } from 'motion/react'

const offsetMap = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: 50 },
  right: { x: -50 },
  'up-right': { x: -50, y: 50 },
  'up-left': { x: 50, y: 50 },
  'down-right': { x: 50, y: -50 },
  'down-left': { x: -50, y: -50 },
}

export default function Slide({
  children,
  variant = 'up',
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

  const initial = { ...offsetMap[variant] }
  const animate = {
    x: 0,
    y: 0,
    transition: { delay, duration, easing },
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
