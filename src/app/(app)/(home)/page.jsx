"use client";
import SnowRingText from "@/animations/tsx/text/snow-ring-text";
import SparkleText from "@/components/other/sparkle-text";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

const defaultList = [
  "UI/UX Designer",
  "Content Writer",
  "Video Editor",
  "Digital Marketer",
  "SEO Specialist",
  "Illustrator",
  "Animator",
  "Photographer",
  "Copywriter",
  "Data Scientist",
  "App Developer",
  "Social Media Manager",
  "Product Designer",
  "3D Artist",
  "Brand Strategist",
  "Email Marketer",
  "Voiceover Artist",
  "Game Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Cybersecurity Expert",
  "Cloud Architect",
  "AI/ML Specialist",
  "Technical Writer",
  "Virtual Assistant",
];


const items = [
  {
    name: "snow-ring",
    description: "Text appears with a circular, snowy sparkle effect."
  },
  {
    name: "gold-dust",
    description: "Text emerges with a sparkling golden dust trail."
  },
  {
    name: "typing-cursor",
    description: "Simulates typing with a blinking cursor."
  },
  {
    name: "typewriter",
    description: "Characters appear one by one like a typewriter."
  },
  {
    name: "laser-cut",
    description: "Sharp laser-like slicing effect reveals text."
  },
  {
    name: "blur",
    description: "Text fades in/out with a blur transition."
  }, ,
  {
    name: "starlight",
    description: "A glowing star effect animates over the text."
  },
  {
    name: "zoom-in",
    description: "Text scales up from small to normal size."
  },
  {
    name: "zoom-out",
    description: "Text scales down from large to normal size."
  },
  {
    name: "inhale",
    description: "Text shrinks then expands as if breathing in."
  },
  {
    name: "leap",
    description: "Text jumps up and lands in place."
  },
  {
    name: "open",
    description: "Text animates as if unfolding or opening from a central point."
  },
  {
    name: "soundwave",
    description: "Letters animate like an audio waveform effect."
  },
  {
    name: "flipping",
    description: "Text flips into view from a horizontal or vertical axis."
  },
  {
    name: "fade-in",
    description: "Smooth transition where text fades into view."
  },
  {
    name: "glow",
    description: "Text gradually lights up with a glowing edge."
  },
  {
    name: "fly-in",
    description: "Text flies in from a specific direction."
  },
  {
    name: "random-rise",
    description: "Letters rise up at random intervals."
  },
  {
    name: "float-down",
    description: "Text gently floats downward into place."
  },
  {
    name: "wipe-right",
    description: "Text is revealed with a wiping motion from left to right."
  },
  {
    name: "land-rise",
    description: "Text pops up from below as if landing."
  },
  {
    name: "blur-out",
    description: "Text disappears with a blur effect."
  },
  {
    name: "popup",
    description: "Text suddenly pops into view."
  },
  {
    name: "glow-in",
    description: "Text appears with a soft glowing transition."
  },
  {
    name: "bounce",
    description: "Text enters with a bouncing motion."
  },
  {
    name: "random-bounce",
    description: "Letters bounce individually at random timings."
  },
  {
    name: "growth",
    description: "Text expands in size like its growing."
  },
  {
    name: "retro-typer",
    description: "Retro typewriter style with sound and flicker."
  },
  {
    name: "rebound",
    description: "Text comes in, bounces slightly, then settles."
  },
  {
    name: "background-slide-in",
    description: "Background moves in behind static or animated text."
  },
  {
    name: "flash-gather",
    description: "Text forms with a bright flash followed by clustering effect."
  },
  {
    name: "fold-open",
    description: "Text unfolds like a paper or door."
  },
  {
    name: "wobble",
    description: "Text shakes side to side before stabilizing."
  },
  {
    name: "bouncing-letters",
    description: "Each letter bounces individually."
  },
  {
    name: "random-typewriter",
    description: "Letters appear in random order like a glitchy typewriter."
  },
  {
    name: "squeeze",
    description: "Text compresses vertically or horizontally before settling."
  },
  {
    name: "wave-bumper-car",
    description: "Text letters move like bumper cars on a wave path."
  },
  {
    name: "dissolve-down",
    description: "Text dissolves into particles and fades downward."
  },
  {
    name: "wave-in",
    description: "Text flows in with a smooth wave effect."
  },
  {
    name: "flip-in",
    description: "Text flips onto screen from one direction."
  },
  {
    name: "roll-in",
    description: "Text rolls into view like a wheel."
  },
  {
    name: "flicker",
    description: "Text flashes intermittently like a broken neon sign."
  },
  {
    name: "karaoke",
    description: "Highlight moves over text like a karaoke sing-along."
  },
  {
    name: "glitch",
    description: "Text distorts briefly with a digital glitch effect."
  },
  {
    name: "stand-up",
    description: "Text pops up vertically as if standing up from a base."
  },
]


export default function Page() {
  const [item, setItem] = useState(defaultList[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setAnimate(true); // Start shrinking animation
      setTimeout(() => {
        // Update item and reset animation
        index = (index + 1) % defaultList.length;
        setItem(defaultList[index]);
        setAnimate(false);
      }, 500); // Match the shrinking animation duration
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="size-full flex justify-center items-center">
      <div className="mx-auto md:max-w-md">
        <h1 className="text-center h2 md:h1">
          Curated Websites For
          <br />

          <span className="sr-only">
            {defaultList.map(item => (
              <span key={item + "HomeHero"}>{item},</span>
            ))}
          </span>
          <span
            className={cn("mx-auto block -my-3 py-4 w-fit rounded transition-all duration-500 text-nowrap overflow-hidden",
              animate ? "w-0" : "w-full"
            )}
          >
            <span
              className={cn("px-2 transition-all duration-500 overflow-hidden",
                animate ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )}
            >
              <SparkleText text={item} />
            </span>
          </span>
        </h1>
        <div className="flex-center">
          <Link className={buttonVariants()} href="/animations/fade">
            Browse Now
          </Link>
        </div>

        {/* <SnowRingText>
          Hello Brother
        </SnowRingText> */}

        {/* <div className="">
          {items.map((item, i) => (
            <div className="" key={item.name + i}>
              <pre>
                I’m building a text animation library in React/Next.js using Motion.dev.
                <br />
                generate me text animation {item.name}-({item.description}) . with props
                <br />


                ```ts
                <br />
                type AnimationProps = n{"{"}
                <br />
                children: React.ReactNode;
                <br />
                tag?: keyof React.JSX.IntrinsicElements;
                <br />
                className?: string;
                <br />
                once?: boolean;
                <br />
                animateOn?: 'whileHover' | 'whileTap' | 'whileDrag' | 'whileFocus' | 'whileInView';
                <br />
                repeat?: boolean | number;
                <br />
                delay?: number;
                <br />
                duration?: number;
                <br />
                easing?: string | number[];
                <br />
                stagger?: number;
                <br />
                viewport?: {"{"}
                <br />
                once ?: boolean;
                <br />
                amount?: number;
                <br />
                {"}"};
                <br />
                [key: string]: any;
                <br />
                {"}"};
                <br />
                <br />
                <br />

              </pre>
            </div>
          ))}
        </div> */}
      </div>

    </section>
  );
}
