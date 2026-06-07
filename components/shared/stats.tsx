"use client"

import { AnimatedDiv } from "@/components/ui/animated-div"
import {
  IconTrophy,
  IconBook,
  IconPencil,
  IconProps,
} from "@tabler/icons-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"
import { AnimatedNumber } from "../ui/animated-number"
import { motion } from "motion/react"

type Stat = {
  title: string
  value: number
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

const stats: Stat[] = [
  {
    title: "Poems",
    value: 30,
    icon: IconBook,
  },
  {
    title: "Awards",
    value: 8,
    icon: IconTrophy,
  },
  {
    title: "Works",
    value: 20,
    icon: IconPencil,
  },
]

export function Stats() {
  return (
    <AnimatedDiv className="flex flex-wrap items-center gap-12">
      {stats.map((stat, i) => (
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: (i + 1) * 0.4,
            ease: "easeInOut",
          }}
          key={stat.title}
          className="flex items-center gap-2"
        >
          <stat.icon className="size-12 rounded-lg bg-muted p-3 text-muted-foreground" />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </span>
            <AnimatedNumber
              springOptions={{
                bounce: 4,
                duration: 30000,
              }}
              value={stat.value}
              className="text-lg font-medium"
              suffix="+"
            />
          </div>
        </motion.div>
      ))}
    </AnimatedDiv>
  )
}
