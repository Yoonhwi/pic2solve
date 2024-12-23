"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useState } from "react";

interface CardFlipProps {
  parentStyle: ClassValue;
  front: React.ReactNode;
  back: React.ReactNode;
}

const CardFlip = ({ parentStyle, front, back }: CardFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        className={cn(
          "relative transition-all duration-700 cursor-pointer h-full",
          parentStyle
        )}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
        }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div
          className="absolute top-0 bottom-0 left-0 right-0"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {front}
        </div>
        <div
          className="absolute top-0 bottom-0 left-0 right-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
