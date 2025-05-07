'use client'

import { motion, MotionProps } from 'motion/react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type FadeUpLeftProps = {
  children: React.ReactNode
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

export default function FadeUpLeft({
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
}: FadeUpLeftProps) {
  const MotionTag = motion(Tag)

  const initial = { opacity: 0.1, x: 50, y: 50 }
  const animate = { opacity: 1, x: 0, y: 0, transition: { delay, duration, easing } }

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
