'use client'

import { motion, MotionProps } from 'motion/react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type ZoomVariant =
  | 'in' | 'out'
  | 'in-up' | 'in-down' | 'in-left' | 'in-right'
  | 'out-up' | 'out-down' | 'out-left' | 'out-right'

type ZoomProps = {
  children: React.ReactNode
  variant?: ZoomVariant
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

const getZoomOffsets = (type: ZoomVariant): { scale: number; x?: number; y?: number } => {
  switch (type) {
    case 'in':
      return { scale: 0.5 }
    case 'out':
      return { scale: 1.5 }
    case 'in-up':
      return { scale: 0.5, y: 50 }
    case 'in-down':
      return { scale: 0.5, y: -50 }
    case 'in-left':
      return { scale: 0.5, x: 50 }
    case 'in-right':
      return { scale: 0.5, x: -50 }
    case 'out-up':
      return { scale: 1.5, y: 50 }
    case 'out-down':
      return { scale: 1.5, y: -50 }
    case 'out-left':
      return { scale: 1.5, x: 50 }
    case 'out-right':
      return { scale: 1.5, x: -50 }
    default:
      return { scale: 0.5 }
  }
}

export default function Zoom({
  children,
  variant = 'in',
  tag: Tag = 'div',
  className,
  once = true,
  animateOn = 'whileInView',
  delay = 0,
  duration = 0.3,
  easing = 'ease-out',
  viewport = { once },
  ...props
}: ZoomProps) {
  const MotionTag = motion(Tag)
  const offset = getZoomOffsets(variant)

  const initial = { ...offset }
  const animate = {
    scale: 1,
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
