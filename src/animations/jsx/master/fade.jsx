'use client'

import { motion } from 'motion/react'

const getOffset = (direction) => {
    switch (direction) {
        case 'up':
            return { y: 50 }
        case 'down':
            return { y: -50 }
        case 'left':
            return { x: 50 }
        case 'right':
            return { x: -50 }
        case 'up-right':
            return { x: -50, y: 50 }
        case 'up-left':
            return { x: 50, y: 50 }
        case 'down-right':
            return { x: -50, y: -50 }
        case 'down-left':
            return { x: 50, y: -50 }
        default:
            return { y: 50 }
    }
}

export default function Fade({
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

    const offset = getOffset(variant)

    const initial = { opacity: 0.1, ...offset }
    const animate = { opacity: 1, x: 0, y: 0, transition: { delay, duration, easing } }

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
