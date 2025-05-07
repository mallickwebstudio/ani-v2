'use client'

import { motion, MotionProps } from 'motion/react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

type FlipVariant = 'vertical' | 'horizontal' | 'diagonal'

type Props = {
  children: React.ReactNode
  variant?: FlipVariant
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
}: Props) {
  const MotionTag = motion(Tag)

  let initial: MotionProps['initial']
  let animate: MotionProps['animate']

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
