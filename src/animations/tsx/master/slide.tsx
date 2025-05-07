'use client'

import { motion, MotionProps } from 'motion/react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type SlideVariant =
  | 'up' | 'down' | 'left' | 'right'
  | 'up-right' | 'up-left' | 'down-right' | 'down-left'

type Props = {
  children: React.ReactNode
  variant?: SlideVariant
  tag?: ElementType
  className?: string
  once?: boolean
  animateOn?: 'whileHover' | 'whileTap' | 'whileDrag' | 'whileFocus' | 'whileInView'
  delay?: number
  duration?: number
  easing?: string
  viewport?: {
    once?: boolean
    margin?: string
    amount?: number
  }
} & ComponentPropsWithoutRef<'div'>

const offsetMap: Record<SlideVariant, { x?: number; y?: number }> = {
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
}: Props) {
  const MotionTag = motion(Tag)

  const initial = { ...offsetMap[variant] }
  const animate = {
    x: 0,
    y: 0,
    transition: { delay, duration, easing },
  }

  const animationProps: MotionProps = {
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
