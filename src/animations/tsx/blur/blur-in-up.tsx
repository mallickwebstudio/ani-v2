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

export default function BlurInUp({
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
  const initial = { filter: 'blur(10px)', opacity: 0, y: 40 }
  const animate = {
    filter: 'blur(0px)',
    y: 0,
    opacity: 1,
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
