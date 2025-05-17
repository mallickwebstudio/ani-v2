import { AnimationCategory } from "@/types";

import Fade from "@/animations/tsx/master/fade";
import Zoom from "@/animations/tsx/master/zoom";
import Flip from "@/animations/tsx/master/flip";
import Bounce from "@/animations/tsx/master/bounce";
import Slide from "@/animations/tsx/master/slide";

import FadeUp from "@/animations/tsx/fade/fade-up";
import FadeDown from "@/animations/tsx/fade/fade-down";
import FadeRight from "@/animations/tsx/fade/fade-right";
import FadeLeft from "@/animations/tsx/fade/fade-left";
import FadeUpRight from "@/animations/tsx/fade/fade-up-right";
import FadeUpLeft from "@/animations/tsx/fade/fade-up-left";
import FadeDownRight from "@/animations/tsx/fade/fade-down-right";
import FadeDownLeft from "@/animations/tsx/fade/fade-down-left";

import ZoomIn from "@/animations/tsx/zoom/zoom-in";
import ZoomOut from "@/animations/tsx/zoom/zoom-out";
import ZoomInUp from "@/animations/tsx/zoom/zoom-in-up";
import ZoomInDown from "@/animations/tsx/zoom/zoom-in-down";
import ZoomInLeft from "@/animations/tsx/zoom/zoom-in-left";
import ZoomInRight from "@/animations/tsx/zoom/zoom-in-right";
import ZoomOutUp from "@/animations/tsx/zoom/zoom-out-up";
import ZoomOutDown from "@/animations/tsx/zoom/zoom-out-down";
import ZoomOutLeft from "@/animations/tsx/zoom/zoom-out-left";
import ZoomOutRight from "@/animations/tsx/zoom/zoom-out-right";

import FlipVertical from "@/animations/tsx/flip/flip-vertical";
import FlipHorizontal from "@/animations/tsx/flip/flip-horizontal";
import FlipDiagonal from "@/animations/tsx/flip/flip-diagonal";

import BounceUp from "@/animations/tsx/bounce/bounce-up";
import BounceDown from "@/animations/tsx/bounce/bounce-down";
import BounceRight from "@/animations/tsx/bounce/bounce-right";
import BounceLeft from "@/animations/tsx/bounce/bounce-left";
import BounceUpRight from "@/animations/tsx/bounce/bounce-up-right";
import BounceUpLeft from "@/animations/tsx/bounce/bounce-up-left";
import BounceDownRight from "@/animations/tsx/bounce/bounce-down-right";
import BounceDownLeft from "@/animations/tsx/bounce/bounce-down-left";

import SlideUp from "@/animations/tsx/slide/slide-up";
import SlideDown from "@/animations/tsx/slide/slide-down";
import SlideRight from "@/animations/tsx/slide/slide-right";
import SlideLeft from "@/animations/tsx/slide/slide-left";
import SlideUpLeft from "@/animations/tsx/slide/slide-up-left";
import SlideDownLeft from "@/animations/tsx/slide/slide-down-left";
import SlideUpRight from "@/animations/tsx/slide/slide-up-right";
import SlideDownRight from "@/animations/tsx/slide/slide-down-right";

import WipeUp from "@/animations/tsx/wipe/wipe-up";
import WipeDown from "@/animations/tsx/wipe/wipe-down";
import WipeLeft from "@/animations/tsx/wipe/wipe-left";
import WipeRight from "@/animations/tsx/wipe/wipe-right";
import WipeUpRight from "@/animations/tsx/wipe/wipe-up-right";
import WipeUpLeft from "@/animations/tsx/wipe/wipe-up-left";
import WipeDownRight from "@/animations/tsx/wipe/wipe-down-right";
import WipeDownLeft from "@/animations/tsx/wipe/wipe-down-left";

import SpinClockwise from "@/animations/tsx/spin/spin-clockwise";
import SpinAntiClockwise from "@/animations/tsx/spin/spin-anti-clockwise";
import SpinX from "@/animations/tsx/spin/spin-x";
import SpinY from "@/animations/tsx/spin/spin-y";
import SpinZ from "@/animations/tsx/spin/spin-z";

import Swing from "@/animations/tsx/swing/swing";
import SwingX from "@/animations/tsx/swing/swing-x";
import SwingY from "@/animations/tsx/swing/swing-y";
import SwingZ from "@/animations/tsx/swing/swing-z";
import SkewDiagonal from "@/animations/tsx/skew/skew-diagonal";
import SkewDiagonalReverse from "@/animations/tsx/skew/skew-diagonal-reverse";
import SkewX from "@/animations/tsx/skew/skew-x";
import SkewY from "@/animations/tsx/skew/skew-y";
import RollUp from "@/animations/tsx/roll/roll-up";
import RollDown from "@/animations/tsx/roll/roll-down";
import RollRight from "@/animations/tsx/roll/roll-right";
import RollLeft from "@/animations/tsx/roll/roll-left";
import RollIn from "@/animations/tsx/roll/roll-in";
import RollOut from "@/animations/tsx/roll/roll-out";
import BlurIn from "@/animations/tsx/blur/blur-in";
import BlurInUp from "@/animations/tsx/blur/blur-in-up";
import BlurInDown from "@/animations/tsx/blur/blur-in-down";
import BlurInLeft from "@/animations/tsx/blur/blur-in-left";
import BlurInRight from "@/animations/tsx/blur/blur-in-right";


// import FadingText from "@/animations/tsx/letter-by-letter/fading-text";

export const masterAnimations: AnimationCategory[] = [
    {
        slug: "master",
        title: "Master",
        href: "/animations/master",
        animations: [
            {
                slug: "fade",
                title: "Fade",
                href: "/animations/master#fade",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/master/fade.tsx",
                variant: ['up', 'down', 'right', 'left', 'up-right', 'up-left', 'down-right', 'down-left'],
                animation: Fade
            },
            {
                slug: "zoom",
                title: "Zoom",
                href: "/animations/master#zoom",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/master/zoom.tsx",
                variant: ['in', 'out', 'in-up', 'in-down', 'in-left', 'in-right', 'out-up', 'out-down', 'out-left', 'out-right'],
                animation: Zoom
            },
            {
                slug: "flip",
                title: "Flip",
                href: "/animations/master#flip",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/master/flip.tsx",
                variant: ['vertical', 'horizontal', 'diagonal'],
                animation: Flip
            },
            {
                slug: "bounce",
                title: "Bounce",
                href: "/animations/master#bounce",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/master/bounce.tsx",
                variant: ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'],
                animation: Bounce
            },
            {
                slug: "slide",
                title: "Slide",
                href: "/animations/master#slide",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/master/slide.tsx",
                variant: ['up', 'down', 'left', 'right', 'up-right', 'up-left', 'down-right', 'down-left'],
                animation: Slide
            }
        ],
    },
]

export const boxAnimations: AnimationCategory[] = [
    {
        slug: "fade",
        title: "Fade",
        href: "/animations/fade",
        animations: [
            {
                slug: "fade-up",
                title: "Fade Up",
                href: "/animations/fade#fade-up",
                jsxFilepath: "src/animations/jsx/fade/fade-up.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-up.tsx",
                animation: FadeUp
            },
            {
                slug: "fade-down",
                title: "Fade Down",
                href: "/animations/fade#fade-down",
                jsxFilepath: "src/animations/jsx/fade/fade-down.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-down.tsx",
                animation: FadeDown
            },
            {
                slug: "fade-right",
                title: "Fade Right",
                href: "/animations/fade#fade-right",
                jsxFilepath: "src/animations/jsx/fade/fade-right.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-right.tsx",
                animation: FadeRight
            },
            {
                slug: "fade-left",
                title: "Fade Left",
                href: "/animations/fade#fade-left",
                jsxFilepath: "src/animations/jsx/fade/fade-left.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-left.tsx",
                animation: FadeLeft
            },
            {
                slug: "fade-up-right",
                title: "Fade Up Right",
                href: "/animations/fade#fade-up-right",
                jsxFilepath: "src/animations/jsx/fade/fade-up-right.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-up-right.tsx",
                animation: FadeUpRight
            },
            {
                slug: "fade-up-left",
                title: "Fade Up Left",
                href: "/animations/fade#fade-up-left",
                jsxFilepath: "src/animations/jsx/fade/fade-up-left.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-up-left.tsx",
                animation: FadeUpLeft
            },
            {
                slug: "fade-down-right",
                title: "Fade Down Right",
                href: "/animations/fade#fade-down-right",
                jsxFilepath: "src/animations/jsx/fade/fade-down-right.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-down-right.tsx",
                animation: FadeDownRight
            },
            {
                slug: "fade-down-left",
                title: "Fade Down Left",
                href: "/animations/fade#fade-down-left",
                jsxFilepath: "src/animations/jsx/fade/fade-down-left.jsx",
                tsxFilepath: "src/animations/tsx/fade/fade-down-left.tsx",
                animation: FadeDownLeft
            },
        ],
    },
    {
        slug: "zoom",
        title: "Zoom",
        href: "/animations/zoom",
        animations: [
            {
                slug: "zoom-in",
                title: "Zoom In",
                href: "/animations/zoom#zoom-in",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in.tsx",
                animation: ZoomIn
            },
            {
                slug: "zoom-out",
                title: "Zoom Out",
                href: "/animations/zoom#zoom-out",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out.tsx",
                animation: ZoomOut
            },
            {
                slug: "zoom-in-up",
                title: "Zoom In Up",
                href: "/animations/zoom#zoom-in-up",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-up.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-up.tsx",
                animation: ZoomInUp
            },
            {
                slug: "zoom-in-down",
                title: "Zoom In Down",
                href: "/animations/zoom#zoom-in-down",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-down.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-down.tsx",
                animation: ZoomInDown
            },
            {
                slug: "zoom-in-left",
                title: "Zoom In Left",
                href: "/animations/zoom#zoom-in-left",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-left.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-left.tsx",
                animation: ZoomInLeft
            },
            {
                slug: "zoom-in-right",
                title: "Zoom In Right",
                href: "/animations/zoom#zoom-in-right",
                jsxFilepath: "src/animations/jsx/zoom/zoom-in-right.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-in-right.tsx",
                animation: ZoomInRight
            },
            {
                slug: "zoom-out-up",
                title: "Zoom Out Up",
                href: "/animations/zoom#zoom-out-up",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-up.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-up.tsx",
                animation: ZoomOutUp
            },
            {
                slug: "zoom-out-down",
                title: "Zoom Out Down",
                href: "/animations/zoom#zoom-out-down",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-down.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-down.tsx",
                animation: ZoomOutDown
            },
            {
                slug: "zoom-out-left",
                title: "Zoom Out Left",
                href: "/animations/zoom#zoom-out-left",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-left.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-left.tsx",
                animation: ZoomOutLeft
            },
            {
                slug: "zoom-out-right",
                title: "Zoom Out Right",
                href: "/animations/zoom#zoom-out-right",
                jsxFilepath: "src/animations/jsx/zoom/zoom-out-right.jsx",
                tsxFilepath: "src/animations/tsx/zoom/zoom-out-right.tsx",
                animation: ZoomOutRight
            },
        ]
    },
    {
        slug: "flip",
        title: "Flip",
        href: "/animations/flip",
        animations: [
            {
                slug: "flip-vertical",
                title: "Flip Vertical",
                href: "/animations/flip#flip-vertical",
                jsxFilepath: "src/animations/jsx/flip/flip-vertical.jsx",
                tsxFilepath: "src/animations/tsx/flip/flip-vertical.tsx",
                animation: FlipVertical,
            },
            {
                slug: "flip-horizontal",
                title: "Flip Horizontal",
                href: "/animations/flip#flip-horizontal",
                jsxFilepath: "src/animations/jsx/flip/flip-horizontal.jsx",
                tsxFilepath: "src/animations/tsx/flip/flip-horizontal.tsx",
                animation: FlipHorizontal,
            },
            {
                slug: "flip-diagonal",
                title: "Flip Diagonal",
                href: "/animations/flip#flip-diagonal",
                jsxFilepath: "src/animations/jsx/flip/flip-diagonal.jsx",
                tsxFilepath: "src/animations/tsx/flip/flip-diagonal.tsx",
                animation: FlipDiagonal,
            },
        ],
    },
    {
        slug: "bounce",
        title: "Bounce",
        href: "/animations/bounce",
        animations: [
            {
                slug: "bounce-up",
                title: "Bounce Up",
                href: "/animations/bounce#bounce-up",
                jsxFilepath: "src/animations/jsx/bounce/bounce-up.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-up.tsx",
                animation: BounceUp,
            },
            {
                slug: "bounce-down",
                title: "Bounce Down",
                href: "/animations/bounce#bounce-down",
                jsxFilepath: "src/animations/jsx/bounce/bounce-down.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-down.tsx",
                animation: BounceDown,
            },
            {
                slug: "bounce-right",
                title: "Bounce Right",
                href: "/animations/bounce#bounce-right",
                jsxFilepath: "src/animations/jsx/bounce/bounce-right.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-right.tsx",
                animation: BounceRight,
            },
            {
                slug: "bounce-left",
                title: "Bounce Left",
                href: "/animations/bounce#bounce-left",
                jsxFilepath: "src/animations/jsx/bounce/bounce-left.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-left.tsx",
                animation: BounceLeft,
            },
            {
                slug: "bounce-up-right",
                title: "Bounce Up Right",
                href: "/animations/bounce#bounce-up-right",
                jsxFilepath: "src/animations/jsx/bounce/bounce-up-right.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-up-right.tsx",
                animation: BounceUpRight,
            },
            {
                slug: "bounce-up-left",
                title: "Bounce Up Left",
                href: "/animations/bounce#bounce-up-left",
                jsxFilepath: "src/animations/jsx/bounce/bounce-up-left.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-up-left.tsx",
                animation: BounceUpLeft,
            },
            {
                slug: "bounce-down-right",
                title: "Bounce Down Right",
                href: "/animations/bounce#bounce-down-right",
                jsxFilepath: "src/animations/jsx/bounce/bounce-down-right.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-down-right.tsx",
                animation: BounceDownRight,
            },
            {
                slug: "bounce-down-left",
                title: "Bounce Down Left",
                href: "/animations/bounce#bounce-down-left",
                jsxFilepath: "src/animations/jsx/bounce/bounce-down-left.jsx",
                tsxFilepath: "src/animations/tsx/bounce/bounce-down-left.tsx",
                animation: BounceDownLeft,
            },
        ],
    },
    {
        slug: "slide",
        title: "Slide",
        href: "/animations/slide",
        animations: [
            {
                slug: "slide-up",
                title: "Slide Up",
                href: "/animations/slide#slide-up",
                jsxFilepath: "src/animations/jsx/slide/slide-up.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-up.tsx",
                animation: SlideUp
            },
            {
                slug: "slide-down",
                title: "Slide Down",
                href: "/animations/slide#slide-down",
                jsxFilepath: "src/animations/jsx/slide/slide-down.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-down.tsx",
                animation: SlideDown
            },
            {
                slug: "slide-right",
                title: "Slide Right",
                href: "/animations/slide#slide-right",
                jsxFilepath: "src/animations/jsx/slide/slide-right.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-right.tsx",
                animation: SlideRight
            },
            {
                slug: "slide-left",
                title: "Slide Left",
                href: "/animations/slide#slide-left",
                jsxFilepath: "src/animations/jsx/slide/slide-left.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-left.tsx",
                animation: SlideLeft
            },
            {
                slug: "slide-up-right",
                title: "Slide Up Right",
                href: "/animations/slide#slide-up-right",
                jsxFilepath: "src/animations/jsx/slide/slide-up-right.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-up-right.tsx",
                animation: SlideUpRight
            },
            {
                slug: "slide-up-left",
                title: "Slide Up Left",
                href: "/animations/slide#slide-up-left",
                jsxFilepath: "src/animations/jsx/slide/slide-up-left.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-up-left.tsx",
                animation: SlideUpLeft
            },
            {
                slug: "slide-down-right",
                title: "Slide Down Right",
                href: "/animations/slide#slide-down-right",
                jsxFilepath: "src/animations/jsx/slide/slide-down-right.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-down-right.tsx",
                animation: SlideDownRight
            },
            {
                slug: "slide-down-left",
                title: "Slide Down Left",
                href: "/animations/slide#slide-down-left",
                jsxFilepath: "src/animations/jsx/slide/slide-down-left.jsx",
                tsxFilepath: "src/animations/tsx/slide/slide-down-left.tsx",
                animation: SlideDownLeft
            },
        ]
    },
    {
        slug: "wipe",
        title: "Wipe",
        href: "/animations/wipe",
        animations: [
            {
                slug: "wipe-up",
                title: "Wipe Up",
                href: "/animations/wipe#wipe-up",
                jsxFilepath: "src/animations/jsx/wipe/wipe-up.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-up.tsx",
                animation: WipeUp,
            },
            {
                slug: "wipe-down",
                title: "Wipe Down",
                href: "/animations/wipe#wipe-down",
                jsxFilepath: "src/animations/jsx/wipe/wipe-down.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-down.tsx",
                animation: WipeDown,
            },
            {
                slug: "wipe-left",
                title: "Wipe Left",
                href: "/animations/wipe#wipe-left",
                jsxFilepath: "src/animations/jsx/wipe/wipe-left.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-left.tsx",
                animation: WipeLeft,
            },
            {
                slug: "wipe-right",
                title: "Wipe Right",
                href: "/animations/wipe#wipe-right",
                jsxFilepath: "src/animations/jsx/wipe/wipe-right.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-right.tsx",
                animation: WipeRight,
            },
            {
                slug: "wipe-up-right",
                title: "Wipe  Up Right",
                href: "/animations/wipe#wipe-up-right",
                jsxFilepath: "src/animations/jsx/wipe/wipe-up-right.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-up-right.tsx",
                animation: WipeUpRight,
            },
            {
                slug: "wipe-up-left",
                title: "Wipe  Up Left",
                href: "/animations/wipe#wipe-up-left",
                jsxFilepath: "src/animations/jsx/wipe/wipe-up-left.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-up-left.tsx",
                animation: WipeUpLeft,
            },
            {
                slug: "wipe-down-right",
                title: "Wipe  Down Right",
                href: "/animations/wipe#wipe-down-right",
                jsxFilepath: "src/animations/jsx/wipe/wipe-down-right.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-down-right.tsx",
                animation: WipeDownRight,
            },
            {
                slug: "wipe-down-left",
                title: "Wipe  Down Left",
                href: "/animations/wipe#wipe-down-left",
                jsxFilepath: "src/animations/jsx/wipe/wipe-down-left.jsx",
                tsxFilepath: "src/animations/tsx/wipe/wipe-down-left.tsx",
                animation: WipeDownLeft,
            },
        ],
    },
    {
        slug: "spin",
        title: "Spin",
        href: "/animations/spin",
        animations: [
            {
                slug: "spin-clockwise",
                title: "Spin Clockwise",
                href: "/animations/spin#spin-clockwise",
                jsxFilepath: "src/animations/jsx/spin/spin-clockwise.jsx",
                tsxFilepath: "src/animations/tsx/spin/spin-clockwise.tsx",
                animation: SpinClockwise,
            },
            {
                slug: "spin-anti-clockwise",
                title: "Spin Anti Clockwise",
                href: "/animations/spin#spin-anti-clockwise",
                jsxFilepath: "src/animations/jsx/spin/spin-anti-clockwise.jsx",
                tsxFilepath: "src/animations/tsx/spin/spin-anti-clockwise.tsx",
                animation: SpinAntiClockwise,
            },
            {
                slug: "spin-x",
                title: "Spin X",
                href: "/animations/spin#spin-x",
                jsxFilepath: "src/animations/jsx/spin/spin-x.jsx",
                tsxFilepath: "src/animations/tsx/spin/spin-x.tsx",
                animation: SpinX,
            },
            {
                slug: "spin-y",
                title: "Spin Y",
                href: "/animations/spin#spin-y",
                jsxFilepath: "src/animations/jsx/spin/spin-y.jsx",
                tsxFilepath: "src/animations/tsx/spin/spin-y.tsx",
                animation: SpinY,
            },
            {
                slug: "spin-z",
                title: "Spin Z",
                href: "/animations/spin#spin-x",
                jsxFilepath: "src/animations/jsx/spin/spin-z.jsx",
                tsxFilepath: "src/animations/tsx/spin/spin-z.tsx",
                animation: SpinZ,
            },
        ]
    },
    {
        slug: "swing",
        title: "Swing",
        href: "/animations/swing",
        animations: [
            {
                slug: "swing",
                title: "Swing",
                href: "/animations/swing#swing",
                jsxFilepath: "src/animations/jsx/swing/swing.jsx",
                tsxFilepath: "src/animations/tsx/swing/swing.tsx",
                animation: Swing,
            },
            {
                slug: "swing-x",
                title: "Swing X",
                href: "/animations/swing#swing-x",
                jsxFilepath: "src/animations/jsx/swing/swing-x.jsx",
                tsxFilepath: "src/animations/tsx/swing/swing-x.tsx",
                animation: SwingX,
            },
            {
                slug: "swing-y",
                title: "Swing Y",
                href: "/animations/swing#swing-y",
                jsxFilepath: "src/animations/jsx/swing/swing-y.jsx",
                tsxFilepath: "src/animations/tsx/swing/swing-y.tsx",
                animation: SwingY,
            },
            {
                slug: "swing-z",
                title: "Swing Z",
                href: "/animations/swing#swing-z",
                jsxFilepath: "src/animations/jsx/swing/swing-z.jsx",
                tsxFilepath: "src/animations/tsx/swing/swing-z.tsx",
                animation: SwingZ,
            },
        ]
    },
    {
        slug: "skew",
        title: "Skew",
        href: "/animations/skew",
        animations: [
            {
                slug: "skew-diagonal",
                title: "Skew Diagonal",
                href: "/animations/skew#skew-diagonal",
                jsxFilepath: "src/animations/jsx/skew/skew-diagonal.jsx",
                tsxFilepath: "src/animations/tsx/skew/skew-diagonal.tsx",
                animation: SkewDiagonal,
            },
            {
                slug: "skew-diagonal-reverse",
                title: "Skew Diagonal Reverse",
                href: "/animations/skew#skew-diagonal-reverse",
                jsxFilepath: "src/animations/jsx/skew/skew-diagonal-reverse.jsx",
                tsxFilepath: "src/animations/tsx/skew/skew-diagonal-reverse.tsx",
                animation: SkewDiagonalReverse,
            },
            {
                slug: "skew-x",
                title: "Skew X",
                href: "/animations/skew#skew-x",
                jsxFilepath: "src/animations/jsx/skew/skew-x.jsx",
                tsxFilepath: "src/animations/tsx/skew/skew-x.tsx",
                animation: SkewX,
            },
            {
                slug: "skew-y",
                title: "Skew Y",
                href: "/animations/skew#skew-y",
                jsxFilepath: "src/animations/jsx/skew/skew-y.jsx",
                tsxFilepath: "src/animations/tsx/skew/skew-y.tsx",
                animation: SkewY,
            },
        ]
    },
    {
        slug: "roll",
        title: "Roll",
        href: "/animations/roll",
        animations: [
            {
                slug: "roll-up",
                title: "Roll Up",
                href: "/animations/roll#roll-up",
                jsxFilepath: "src/animations/jsx/roll/roll-up.jsx",
                tsxFilepath: "src/animations/tsx/roll/roll-up.tsx",
                animation: RollUp,
            },
            {
                slug: "roll-down",
                title: "Roll Down",
                href: "/animations/roll#roll-down",
                jsxFilepath: "src/animations/jsx/roll/roll-down.jsx",
                tsxFilepath: "src/animations/tsx/roll/roll-down.tsx",
                animation: RollDown,
            },
            {
                slug: "roll-right",
                title: "Roll Right",
                href: "/animations/roll#roll-right",
                jsxFilepath: "src/animations/jsx/roll/roll-right.jsx",
                tsxFilepath: "src/animations/tsx/roll/roll-right.tsx",
                animation: RollRight,
            },
            {
                slug: "roll-left",
                title: "Roll Left",
                href: "/animations/roll#roll-left",
                jsxFilepath: "src/animations/jsx/roll/roll-left.jsx",
                tsxFilepath: "src/animations/tsx/roll/roll-left.tsx",
                animation: RollLeft,
            },
            {
                slug: "roll-in",
                title: "Roll In",
                href: "/animations/roll#roll-in",
                jsxFilepath: "src/animations/jsx/roll/roll-in.jsx",
                tsxFilepath: "src/animations/tsx/roll/roll-in.tsx",
                animation: RollIn,
            },
            {
                slug: "roll-out",
                title: "Roll Out",
                href: "/animations/roll#roll-out",
                jsxFilepath: "src/animations/jsx/roll/roll-out.jsx",
                tsxFilepath: "src/animations/tsx/roll/roll-out.tsx",
                animation: RollOut,
            },
        ]
    },
    {
        slug: "blur",
        title: "Blur",
        href: "/animations/blur",
        animations: [
            {
                slug: "blur-in",
                title: "Blur In",
                href: "/animations/blur#blur-in",
                jsxFilepath: "src/animations/jsx/blur/blur-in.jsx",
                tsxFilepath: "src/animations/tsx/blur/blur-in.tsx",
                animation: BlurIn,
            },
            {
                slug: "blur-in-up",
                title: "Blur In Up",
                href: "/animations/blur#blur-in-up",
                jsxFilepath: "src/animations/jsx/blur/blur-in-up.jsx",
                tsxFilepath: "src/animations/tsx/blur/blur-in-up.tsx",
                animation: BlurInUp,
            },
            {
                slug: "blur-in-down",
                title: "Blur In Down",
                href: "/animations/blur#blur-in-down",
                jsxFilepath: "src/animations/jsx/blur/blur-in-down.jsx",
                tsxFilepath: "src/animations/tsx/blur/blur-in-down.tsx",
                animation: BlurInDown,
            },
            {
                slug: "blur-in-right",
                title: "Blur In Right",
                href: "/animations/blur#blur-in-right",
                jsxFilepath: "src/animations/jsx/blur/blur-in-right.jsx",
                tsxFilepath: "src/animations/tsx/blur/blur-in-right.tsx",
                animation: BlurInRight,
            },
            {
                slug: "blur-in-left",
                title: "Blur In Left",
                href: "/animations/blur#blur-in-left",
                jsxFilepath: "src/animations/jsx/blur/blur-in-left.jsx",
                tsxFilepath: "src/animations/tsx/blur/blur-in-left.tsx",
                animation: BlurInLeft,
            },
        ]
    }
]

export const textAnimations: AnimationCategory[] = [
    {
        slug: "text-animation",
        title: "Text Animation",
        href: "/animations/text-animation",
        animationType: "text",
        animations: []
        // animations: [
        //     {
        //         slug: "fading-text",
        //         title: "Fading text",
        //         href: "/animations/letter-by-letter#fading-text",
        //         jsxFilepath: "src/animations/jsx/letter-by-letter/fading-text.jsx",
        //         tsxFilepath: "src/animations/tsx/letter-by-letter/fading-text.tsx",
        //         animation: FadingText
        //     },
        // ]
    },
]

export const allAnimations = [
    ...masterAnimations,
    ...boxAnimations,
    ...textAnimations
]




export const datas = [
    {
        slug: "assets",
        href: "assets",
        title: "Assets",
        category: [
            {
                slug: "colors",
                href: "colors",
                title: "Colors",
                cards: [
                    {
                        id: "0w2wasw6b",
                        name: "Colorhunt",
                        description: "Color Palettes for Designers and Artists",
                        href: "https://colorhunt.co/",
                        thumbnail: "https://i.imgur.com/VxgpHTM.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "ruogcuz0c",
                        name: "Coolors",
                        description: "The super fast color palettes generator!",
                        href: "https://coolors.co/",
                        thumbnail: "https://i.imgur.com/O76a9Ip.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "dt476cml4",
                        name: "Paletton",
                        description: "Choose or create Custom colours palettes",
                        href: "https://paletton.com/",
                        thumbnail: "https://i.imgur.com/Hu8JeTq.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "bg2oj6bfq",
                        name: "Gradienthunt",
                        description: "Gradients for Designers and Artists",
                        href: "https://gradienthunt.com/",
                        thumbnail: "https://i.imgur.com/JSkvAfV.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "o26k1iftz",
                        name: "Webgradients",
                        description: "Free collection of 180 linear gradients",
                        href: "https://webgradients.com/",
                        thumbnail: "https://i.imgur.com/Rc4dolC.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "7bx6xytr9",
                        name: "cssgradient",
                        description: "CSS Gradient is a designstripe project that lets you create free gradient backgrounds for your website",
                        href: "https://cssgradient.io/",
                        thumbnail: "https://i.imgur.com/DUJ3uc8.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "6o7m27wb6",
                        name: "uxpro Colors",
                        description: "Library of colour generating tool",
                        href: "https://uxpro.cc/toolbox/visual-design/colors/",
                        thumbnail: "https://i.imgur.com/ElRBoGG.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "o425063tn",
                        name: "colorable",
                        description: "Contrasting text and background color",
                        href: "https://colorable.jxnblk.com/",
                        thumbnail: "https://i.imgur.com/qH95KN8.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "myovtu1a3",
                        name: "Imagecolorpicker",
                        description: "Pick color from image.",
                        href: "https://imagecolorpicker.com/en",
                        thumbnail: "https://i.imgur.com/00EKJDh.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "gacszmi1x",
                        name: "realtimecolors",
                        description: "Visualize Your Colors & Fonts On a Real Site.",
                        href: "https://www.realtimecolors.com/?colors=130e01-fffaeb-ff8400-fff5d6-cf4307&fonts=Poppins-Poppins",
                        thumbnail: "https://i.imgur.com/KF1lYMD.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "bq2jnls1m",
                        name: "aicolors",
                        description: "Generate palettes from a text prompt.",
                        href: "https://aicolors.co/",
                        thumbnail: "https://i.imgur.com/n4tUAbH.jpeg",
                        tag: "Free"
                    },
                ]
            },
            {
                slug: "fonts",
                href: "fonts",
                title: "Fonts",
                cards: [
                    {
                        id: "25zmfqadf",
                        name: "Google Fonts",
                        description: "Tons of free downloadable fonts that are ready to use through links",
                        href: "https://fonts.google.com/",
                        thumbnail: "https://i.imgur.com/2SHOq2y.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "b1ratuq1f",
                        name: "fontesk",
                        description: "Gives inspiration on what suits your need.",
                        href: "https://fontesk.com/",
                        thumbnail: "https://i.imgur.com/qDpJ3Co.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "w1i4mvrym",
                        name: "fontjoy",
                        description: "Let you check which pair of font will fit together",
                        href: "https://fontjoy.com/",
                        thumbnail: "https://i.imgur.com/VwJ8y7Z.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "mfddzwytx",
                        name: "typescale",
                        description: "A Visual Type Scale",
                        href: "https://typescale.com/",
                        thumbnail: "https://i.imgur.com/BIK1HEs.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "qka6z5hng",
                        name: "fluid-typography",
                        description: "Create text that scales with the window size",
                        href: "https://fluid-typography.netlify.app/",
                        thumbnail: "https://i.imgur.com/pKQGum0.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "ni9oiolpd",
                        name: "font-style-matcher",
                        description: "Create text that scales with the window size",
                        href: "https://meowni.ca/font-style-matcher/",
                        thumbnail: "https://i.imgur.com/Jwknk0M.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "2otqc8skj",
                        name: "fontpair",
                        description: "Create text that scales with the window size",
                        href: "https://www.fontpair.co/",
                        thumbnail: "https://i.imgur.com/qgcBuJH.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "q5ur59bsu",
                        name: "fontsquirrel webfont-generator",
                        description: "https://www.fontsquirrel.com/tools/webfont-generator",
                        href: "https://www.fontsquirrel.com/tools/webfont-generator",
                        thumbnail: "https://i.imgur.com/0hFPyR1.png",
                        tag: "Free"
                    },
                    {
                        id: "jc4xdzkc5",
                        name: "cssfontstack",
                        description: "A complete collection of web safe CSS font stacks. ",
                        href: "https://www.cssfontstack.com/",
                        thumbnail: "https://i.imgur.com/x96CxzA.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "k82bdns32",
                        name: "fontshare",
                        description: "A complete collection of web safe CSS font stacks.",
                        href: "https://fontshare.com/",
                        thumbnail: "https://i.imgur.com/8n6zLTK.png",
                        tag: "Free"
                    },
                ]
            },
            {
                slug: "logo",
                href: "logo",
                title: "Logo",
                cards: [
                    {
                        id: "lh1e3hagf",
                        name: "logo",
                        description: "Create Logo in just few steps",
                        href: "https://logo.com/",
                        thumbnail: "https://i.imgur.com/jMIX6P6.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "9u3x9xayq",
                        name: "freelogodesign",
                        description: "Create Logo in just few steps",
                        href: "https://www.freelogodesign.org/",
                        thumbnail: "https://i.imgur.com/RGWsbXi.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "jxduhg7tb",
                        name: "looka",
                        description: "Create Logo in just few steps",
                        href: "https://looka.com/onboarding",
                        thumbnail: "https://i.imgur.com/uoxntqI.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "26v38ecix",
                        name: "brandcrowd",
                        description: "Create Custom Text Logo in just few steps",
                        href: "https://www.brandcrowd.com/",
                        thumbnail: "https://i.imgur.com/YU1xLQb.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "4s4fq465i",
                        name: "designevo",
                        description: "Create Custom Logos - free logo maker",
                        href: "https://www.designevo.com/",
                        thumbnail: "https://i.imgur.com/7ch8cU5.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "7cj71vphf",
                        name: "logolab",
                        description: "Put your logo to the test and find out where it succeeds and where improvements could be made.",
                        href: "https://logolab.app/home",
                        thumbnail: "https://i.imgur.com/YdRoz9O.jpeg",
                        tag: "Freemium"
                    },
                ]
            },
            {
                slug: "favicon",
                href: "favicon",
                title: "Favicon",
                cards: [
                    {
                        id: "me8ndmuhg",
                        name: "favicon",
                        description: "Generate favicon for your website",
                        href: "https://favicon.io/",
                        thumbnail: "https://i.imgur.com/YNHltKd.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "0w85fwgm6",
                        name: "realfavicongenerator",
                        description: "Generate favicon for your website",
                        href: "https://realfavicongenerator.net/",
                        thumbnail: "https://i.imgur.com/Wu32qJp.jpeg",
                        tag: "Free"
                    },
                ]
            },
            {
                slug: "ai-tools",
                href: "ai-tools",
                title: "AI Tools",
                cards: [
                    {
                        id: "1xgefvyov",
                        name: "ChatGPT",
                        description: "For text content",
                        href: "https://openai.com/blog/chatgpt",
                        thumbnail: "https://i.imgur.com/sy0cJCR.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "xuiqqqdhd",
                        name: "Jasper",
                        description: "Create amazing web content or Anything 10X faster with Jasper AI.",
                        href: "https://www.jasper.ai/",
                        thumbnail: "https://i.imgur.com/1h1Hphx.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "gsjjl2yfr",
                        name: "letsenhance",
                        description: "Image enhancer & upscaler",
                        href: "https://letsenhance.io/",
                        thumbnail: "https://i.imgur.com/8LNoH41.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "jcqzgx2um",
                        name: "futurepedia",
                        description: "The Largest AI Tools Directory ",
                        href: "https://www.futurepedia.io/",
                        thumbnail: "https://i.imgur.com/f75whRi.jpeg",
                        tag: "Freemium"
                    },
                ]
            },
        ]
    },
    {
        slug: "images",
        href: "images",
        title: "Images",
        category: [
            {
                slug: "inspiration",
                href: "inspiration",
                title: "Inspiration",
                cards: [
                    {
                        id: "qw5immq7f",
                        name: "Dribbble",
                        description: "Source of Inspiration",
                        href: "https://dribbble.com/",
                        thumbnail: "https://i.imgur.com/wusIfed.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "dcb1k5bdf",
                        name: "UI8",
                        description: "curated design resources to speed up your creative workflow.",
                        href: "https://ui8.net/",
                        thumbnail: "https://i.imgur.com/d4bwHh8.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "o8lccr705",
                        name: "Freebiesupply",
                        description: "Free Sketch App UI Kits",
                        href: "https://freebiesupply.com/free-sketch-ui-kits/",
                        thumbnail: "https://i.imgur.com/WyUmGgK.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "4zn25dtw6",
                        name: "Manypixels",
                        description: "royalty-free illustrations to power up your designs",
                        href: "https://www.manypixels.co/gallery",
                        thumbnail: "https://i.imgur.com/QbVidpn.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "6o349lm02",
                        name: "savee",
                        description: "Inspiration",
                        href: "https://savee.it/",
                        thumbnail: "https://i.imgur.com/sbMBORi.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "0o6uyt5hl",
                        name: "awwwards",
                        description: "Follow what's brand new in digital design.",
                        href: "https://www.awwwards.com/",
                        thumbnail: "https://i.imgur.com/NPpLTTp.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "4fsz8d075",
                        name: "darkmodedesign",
                        description: "Beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.",
                        href: "https://www.darkmodedesign.com/",
                        thumbnail: "https://i.imgur.com/PNABNEa.png",
                        tag: "Freemium"
                    },
                    {
                        id: "cpc9rbjnw",
                        name: "mobbin",
                        description: "Discover real-world design inspiration.",
                        href: "https://mobbin.com/",
                        thumbnail: "https://i.imgur.com/QIz4eQ3.png",
                        tag: "Freemium"
                    },
                    {
                        id: "8n0ninqrn",
                        name: "muzli search",
                        description: "The Web-Wide Search engine for design inspiration",
                        href: "https://search.muz.li/",
                        thumbnail: "https://i.imgur.com/dOKK3Zd.png",
                        tag: "Freemium"
                    },
                    {
                        id: "tl19c0a7d",
                        name: "refero desing",
                        description: "Design Research Companion.",
                        href: "https://refero.design/",
                        thumbnail: "https://i.imgur.com/nl4To0O.png",
                        tag: "Freemium"
                    },
                ]
            },
            {
                slug: "free-stock-image",
                href: "free-stock-image",
                title: "Free Stock Image",
                cards: [
                    {
                        id: "iv4pdx9uj",
                        name: "Pexels",
                        description: "Free stock photography",
                        href: "https://www.pexels.com/",
                        thumbnail: "https://i.imgur.com/Aw4mZR9.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "lmcgw3wps",
                        name: "Unsplash",
                        description: "Free stock photography",
                        href: "https://unsplash.com/",
                        thumbnail: "https://i.imgur.com/1YyiMTw.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "7gj7k165t",
                        name: "Shutterstock",
                        description: "stock photography",
                        href: "https://www.shutterstock.com/",
                        thumbnail: "https://i.imgur.com/9KbeUR9.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "vb2fr7s9a",
                        name: "Pixabay",
                        description: "Free stock photography",
                        href: "https://pixabay.com/",
                        thumbnail: "https://i.imgur.com/jZWiR6C.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "vfu9hfszr",
                        name: "pngwing",
                        description: "Transparent background png images for designers",
                        href: "https://www.pngwing.com/",
                        thumbnail: "https://i.imgur.com/qM4FdU4.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "llbg5aofd",
                        name: "Remove bg",
                        description: "Remove background from images",
                        href: "https://www.remove.bg/",
                        thumbnail: "https://i.imgur.com/2qxux9s.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "fnbrgo2vp",
                        name: "Unscreen",
                        description: "Remove background from video",
                        href: "https://www.unscreen.com/",
                        thumbnail: "https://i.imgur.com/SEdR66q.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "ott1yhmxr",
                        name: "codeimage",
                        description: "download code image",
                        href: "https://app.codeimage.dev/",
                        thumbnail: "https://i.imgur.com/GTInqVw.jpeg",
                        tag: "Free"
                    },
                ]
            },
            {
                slug: "illustrations",
                href: "illustrations",
                title: "Illustrations",
                cards: [
                    {
                        id: "usvp336b4",
                        name: "Themeisle",
                        description: "images and vectors published on Themeisle can be used for free.",
                        href: "https://themeisle.com/illustrations//",
                        thumbnail: "https://i.imgur.com/YnYfBhf.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "1vvdoupjg",
                        name: "Undraw",
                        description: "Browse to find the images that fit your needs and click to download.",
                        href: "https://undraw.co/illustrations",
                        thumbnail: "https://i.imgur.com/ahuQ8Pw.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "j5mfijw9f",
                        name: "Illustration",
                        description: "Beautiful, unique illustrations and icons.",
                        href: "https://illustation.io/",
                        thumbnail: "https://i.imgur.com/uIcGhUQ.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "b259c9o9w",
                        name: "Drawkit",
                        description: "Your reliable source for all things creative.",
                        href: "https://www.drawkit.com/",
                        thumbnail: "https://i.imgur.com/BAHc0RM.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "phb5y5gzx",
                        name: "Icons8",
                        description: "Free vector and 3D illustrations that just look professional.",
                        href: "https://icons8.com/illustrations",
                        thumbnail: "https://i.imgur.com/Tb86HAl.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "ntolkc2tk",
                        name: "Humaaans",
                        description: "Mix-&-match illustrations of people with a design library.",
                        href: "https://www.humaaans.com/",
                        thumbnail: "https://i.imgur.com/8ZbJAvh.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "230q9urrp",
                        name: "designstripe",
                        description: "Social media assets in an instant.",
                        href: "https://designstripe.com/",
                        thumbnail: "https://i.imgur.com/nnwI9X7.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "101ilxo9n",
                        name: "storyset",
                        description: "Awesome free customizable illustrations for your next project.",
                        href: "https://storyset.com/",
                        thumbnail: "https://i.imgur.com/9e9yCXL.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "ls8v315vl",
                        name: "glazestock",
                        description: "Free illustrations, for everything.",
                        href: "https://www.glazestock.com/",
                        thumbnail: "https://i.imgur.com/77Vx05m.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "idj4tmc6m",
                        name: "illlustrations",
                        description: "Open source illustrations kit.",
                        href: "https://illlustrations.co/",
                        thumbnail: "https://i.imgur.com/NoktCiS.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "lui8rf5wc",
                        name: "flexiple",
                        description: "Royalty free Vector Illustrations for Commercial Use.",
                        href: "https://scale.flexiple.com/illustrations/",
                        thumbnail: "https://i.imgur.com/QwWcN7z.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "p46czt3lq",
                        name: "weareskribbl",
                        description: "A Human Story in Every Pixel.",
                        href: "https://weareskribbl.com/",
                        thumbnail: "https://i.imgur.com/LIi7PET.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "i4c0v7y9q",
                        name: "openpeeps",
                        description: "A hand-drawn illustration library.",
                        href: "https://www.openpeeps.com/",
                        thumbnail: "https://i.imgur.com/stg5Jic.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "8s4gao940",
                        name: "illustrations",
                        description: "Free SVG Illustrations.",
                        href: "https://lukaszadam.com/illustrations",
                        thumbnail: "https://i.imgur.com/zyOgKZ5.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "o2qmr6j8v",
                        name: "creattie",
                        description: "Curated animation & illustration sets for professional designs",
                        href: "https://creattie.com/",
                        thumbnail: "https://i.imgur.com/DC8PDOQ.png",
                        tag: "Freemium"
                    },
                    {
                        id: "9zmfmvvjj",
                        name: "seeklogo",
                        description: "600000+ logo png images, vector brand logos and logo templates!",
                        href: "https://seeklogo.com/",
                        thumbnail: "https://i.imgur.com/qKyx2EM.png",
                        tag: "Freemium"
                    },
                    {
                        id: "jiw8blvtm",
                        name: "pictographic",
                        description: "The Largest Illustration Sets On Earth",
                        href: "https://www.pictographic.io/",
                        thumbnail: "https://i.imgur.com/hd370Bl.png",
                        tag: "Freemium"
                    },
                    {
                        id: "nyiqg929x",
                        name: "pixels market",
                        description: "Download 15,000+ free illustrations to power up your designs",
                        href: "https://pixels.market/",
                        thumbnail: "https://i.imgur.com/EYYj0SV.png",
                        tag: "Freemium"
                    },
                ]
            },
            {
                slug: "icons",
                href: "icons",
                title: "Icons",
                cards: [
                    {
                        id: "0cnqbwuuh",
                        name: "lucide dev",
                        description: "Beautiful & consistent customizable icons",
                        href: "https://lucide.dev/",
                        thumbnail: "https://i.imgur.com/qh2w5mH.jpeg",
                        tag: "free"
                    },
                    {
                        id: "krjcccgz9",
                        name: "Bootstrap Icons",
                        description: "Free, high quality, open source icon library with over 2,000 icons.",
                        href: "https://icons.getbootstrap.com/",
                        thumbnail: "https://i.imgur.com/6yTrz0y.jpeg",
                        tag: "free"
                    },
                    {
                        id: "leoljbln9",
                        name: "Google Icons",
                        description: "Material Symbols are our newest icons consolidating over 3,062 glyphs in a single font file with a wide range of design variants.",
                        href: "https://fonts.google.com/icons",
                        thumbnail: "https://i.imgur.com/4GlsPhn.jpeg",
                        tag: "free"
                    },
                    {
                        id: "v6nj6k56e",
                        name: "Iionic",
                        description: "Open source icons. Lovingly hand-crafted.",
                        href: "https://ionic.io/ionicons",
                        thumbnail: "https://i.imgur.com/6aB7410.jpeg",
                        tag: "free"
                    },
                    {
                        id: "uzwm2kh2v",
                        name: "Remixicon",
                        description: "Open-source neutral-style system symbols elaborately crafted for designers and developers.",
                        href: "https://remixicon.com/",
                        thumbnail: "https://i.imgur.com/yw9C1wh.jpeg",
                        tag: "free"
                    },
                    {
                        id: "qhrz40a7h",
                        name: "Line Awesome",
                        description: "Swap Font Awesome for modern line icons in one line of code.",
                        href: "https://icons8.com/line-awesome",
                        thumbnail: "https://i.imgur.com/rRFt0Sz.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "nrbdlhefq",
                        name: "Fontawesome",
                        description: "The easiest way to get icons on your website is with a Kit.",
                        href: "https://fontawesome.com/icons",
                        thumbnail: "https://i.imgur.com/R8aD5Ns.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "wq6nkzxy1",
                        name: "Flaticon",
                        description: "Download Free Icons and Stickers for your projects. Images made by and for designers in PNG, SVG, EPS, PSD and CSS formats.",
                        href: "https://www.flaticon.com/",
                        thumbnail: "https://i.imgur.com/UXqc1PM.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "jkt5ll0j8",
                        name: "Lordicon",
                        description: "Lordicon is a powerful library of carefully crafted animated icons, ready to use in digital products, presentations, or videos!",
                        href: "https://lordicon.com/",
                        thumbnail: "https://i.imgur.com/jqJfAsx.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "biy26emgx",
                        name: "Iconfinder",
                        description: "Millions of graphics for your design projects. Created by independent designers.",
                        href: "https://www.iconfinder.com",
                        thumbnail: "https://i.imgur.com/cHqGv6W.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "y85m3yfgz",
                        name: "Svgrepo",
                        description: "Search, explore and edit the best-fitting free icons or vectors for your projects using a wide variety vector library.",
                        href: "https://www.svgrepo.com/",
                        thumbnail: "https://i.imgur.com/6aqKrMy.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "0qavs00rj",
                        name: "Iconscout",
                        description: "Curated SVGs, Vector Icons, Illustrations, 3D Graphics, and Lottie Animations. Over 10,000+ new assets added every day. Integrated plugins, tools, editors, and more.",
                        href: "https://iconscout.com/",
                        thumbnail: "https://i.imgur.com/9iuVzt9.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "vvxpzk57n",
                        name: "Heroicons",
                        description: "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.",
                        href: "https://heroicons.com/",
                        thumbnail: "https://i.imgur.com/9M5MVs7.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "b82rky7c8",
                        name: "icons8",
                        description: "Icons, illustrations, photos, music, and design tools.",
                        href: "https://icons8.com/",
                        thumbnail: "https://i.imgur.com/8us9fB3.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "y55qz0eh8",
                        name: "Freeicons",
                        description: "The largest collections of Premium and Free icons.",
                        href: "https://freeicons.io/",
                        thumbnail: "https://i.imgur.com/nJUjJ7o.jpeg",
                        tag: "Freemium"
                    },
                    {
                        id: "kvp20a0br",
                        name: "uxwing",
                        description: "Well Optimized free SVG and PNG icons that can use on interface design & Web and Application development.",
                        href: "https://uxwing.com/",
                        thumbnail: "https://i.imgur.com/9M5MVs7.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "ynni1j9g1",
                        name: "feathericons",
                        description: "Simply beautiful open source icons.",
                        href: "https://feathericons.com/",
                        thumbnail: "https://i.imgur.com/sJ6bsHb.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "86tf7me07",
                        name: "iconsvg",
                        description: "Quick customizable icons for your projects.",
                        href: "https://iconsvg.xyz/",
                        thumbnail: "https://i.imgur.com/uYDnipM.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "id3elon87",
                        name: "phosphoricons",
                        description: "flexible icon family for interfaces, diagrams, presentations — whatever, really.",
                        href: "https://phosphoricons.com/",
                        thumbnail: "https://i.imgur.com/4rHUFyL.png",
                        tag: "Free"
                    },
                    {
                        id: "vayas16ka",
                        name: "iconduck",
                        description: "273,858 free open source icons & illustrations",
                        href: "https://iconduck.com/",
                        thumbnail: "https://i.imgur.com/B4plQ0u.png",
                        tag: "Free"
                    },
                ]
            },
            {
                slug: "svg",
                href: "svg",
                title: "SVG",
                cards: [
                    {
                        id: "jrxflxu1u",
                        name: "adobe svg overter",
                        description: "Animate svg",
                        href: "https://www.adobe.com/express/feature/image/convert/svg",
                        thumbnail: "https://i.imgur.com/J1vaJfF.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "h7ayvxcxr",
                        name: "svgator",
                        description: "Animate svg",
                        href: "https://www.svgator.com/",
                        thumbnail: "https://i.imgur.com/W3KJQVT.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "z258xcsnm",
                        name: "svgartista",
                        description: "Animate svg",
                        href: "https://svgartista.net/",
                        thumbnail: "https://i.imgur.com/muTUFsc.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "ay12bq84u",
                        name: "svgartista",
                        description: "Preview svg on a canvas and get code for it",
                        href: "https://www.svgviewer.dev/",
                        thumbnail: "https://i.imgur.com/QS5Vjag.png",
                        tag: "Free"
                    },
                ]
            },
            {
                slug: "image-editor",
                href: "image-editor",
                title: "Image Editor",
                cards: [
                    {
                        id: "p3aw6sa1s",
                        name: "photopea",
                        description: "Free Online Photo Editor",
                        href: "https://www.photopea.com/",
                        thumbnail: "https://i.imgur.com/rpsXYKc.png",
                        tag: "Free"
                    },
                    {
                        id: "vfpjvl8ag",
                        name: "Figma",
                        description: "The collaborative interface desingn tool",
                        href: "https://www.figma.com/",
                        thumbnail: "https://i.imgur.com/r4z0VA0.png",
                        tag: "Freemium"
                    },
                    {
                        id: "q20wwk86h",
                        name: "whimsical",
                        description: "Tools designed to keep product teams aligned",
                        href: "https://whimsical.com/",
                        thumbnail: "https://i.imgur.com/yIcGfk1.png",
                        tag: "Freemium"
                    },
                ]
            },
            {
                slug: "others",
                href: "others",
                title: "Others",
                cards: [
                    {
                        id: "m6tc1o931",
                        name: "Squoosh",
                        description: "Reduce Image Size",
                        href: "https://squoosh.app/",
                        thumbnail: "https://i.imgur.com/Tn1ApI7.jpeg",
                        tag: "Free"
                    },
                    {
                        id: "00gihyu1g",
                        name: "tinypng",
                        description: "Smart AVIF, WebP, PNG and JPEG Compression for Faster Websites",
                        href: "https://tinypng.com/",
                        thumbnail: "https://i.imgur.com/llHp5kC.png",
                        tag: "Free"
                    },
                ]
            },
        ]
    },
]