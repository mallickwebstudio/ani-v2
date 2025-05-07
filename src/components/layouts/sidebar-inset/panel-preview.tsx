"use client"

import { useState } from "react"
import ReanimateButton from "./action/reanimate-button"
import { AnimationsProps } from "@/types"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PanelPreview({
    animation: Animation,
    variant,
}: {
    animation: AnimationsProps
    variant?: string[]
}) {
    const [reanimate, setReanimate] = useState(0)
    const [selectedVariant, setSelectedVariant] = useState(variant?.[0] || "")

    const handleReanimate = () => {
        setReanimate(prev => prev + 1)
    }

    return (
        <div className="relative p-4 size-full flex justify-center items-center">
            <div className="absolute flex gap-2 top-3 right-3">
                {variant && (
                    <Select
                        value={selectedVariant}
                        onValueChange={setSelectedVariant}
                    >
                        <SelectTrigger className="w-fit">
                            <SelectValue placeholder="Select Variant" />
                        </SelectTrigger>
                        <SelectContent>
                            {variant.map(item => (
                                <SelectItem value={item} key={item}>
                                    {item}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}

                <ReanimateButton onClick={handleReanimate} />
            </div>

            <Animation
                key={reanimate}
                {...(variant ? { variant: selectedVariant } : {})}
            >
                <div className="size-20 aspect-square rounded-md bg-primary border" />
            </Animation>
        </div>
    )
}
