"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { AwardDataType } from "./awards-section"

export function AwardCard({ item, i }: { item: AwardDataType; i: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(15px)",
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: (i + 1) * 0.26,
        ease: "circOut",
      }}
      key={i}
      className={cn("relative", item.className)}
    >
      <Image
        width={250}
        height={250}
        alt={item.title}
        src={item.image}
        className="h-70 w-full rounded-lg mask-b-from-30% object-cover object-center"
      />
      <motion.div className="absolute bottom-2 left-2 z-10 w-full">
        <div className="flex w-full flex-wrap justify-between pr-6 gap-2 font-devanagari">
          <p className="font-medium tracking-wide">{item.title}</p>
          <p>{item.date}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
