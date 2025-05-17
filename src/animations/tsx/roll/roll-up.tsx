'use client'

import { motion } from 'motion/react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type Props = {
  children: React.ReactNode
  tag?: ElementType
  className?: string
  once?: boolean
  animateOn?:  'whileHover' | 'whileTap' | 'whileDrag' | 'whileFocus' | 'whileInView'
  delay?: number
  duration?: number
  easing?: string
  viewport?: {
    once?: boolean
    margin?: string
    amount?: number
  }
} & ComponentPropsWithoutRef<'div'>

export default function RollUp({
  children,
  tag: Tag = 'div',
  className,
  once = false,
  animateOn = 'whileInView',
  delay = 0,
  duration = 0.6,
  easing = 'ease-in-out',
  viewport = { once },
  ...props
}: Props) {
  const MotionTag = motion(Tag)
  const initial = { rotate: -180, y: 50 }
  const animate = {
    rotate: 0,
    x: 0,
    y: 0,
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
