import React, { ComponentPropsWithoutRef, ComponentType, ElementType, ReactNode } from "react";

export type AnimationCategory = {
    slug: string;
    title: string;
    href: string;
    isActive?: boolean;
    animationType?: "text";
    animations: Animation[];
};


export type Animation = {
    slug: string;
    title: string;
    href: string;
    jsxFilepath: string;
    tsxFilepath: string;
    description?: string;
    animation: AnimationsProps;
    variant?: string[]
};

export type BoxAnimationProps = {
    children: ReactNode;
    // variant?: string[]
    tag?: ElementType;
    className?: string;
    once?: boolean;
    animateOn?: 'whileHover' | 'whileTap' | 'whileDrag' | 'whileFocus' | 'whileInView';
    delay?: number;
    duration?: number;
    easing?: string;
    viewport?: {
        once?: boolean;
        margin?: string;
        amount?: number;
    }
} & ComponentPropsWithoutRef<'div'>


export type TextAnimationProps = {
    children?: ReactNode;
    text?: string;
    key: number;
};

export type TextAnimation = {
    text: string | string[];
    el?: keyof React.JSX.IntrinsicElements;
    className?: string;
    once?: boolean;
    repeatDelay?: number;
};

export type AnimationsProps = ComponentType<BoxAnimationProps>
    | ComponentType<TextAnimationProps>