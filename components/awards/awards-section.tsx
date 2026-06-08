"use client"

import { useTranslations } from "next-intl"
import { Section } from "@/components/ui/section"
import { SubHeading } from "@/components/ui/sub-heading"
import { Heading } from "@/components/ui/heading"
import { AnimatedText } from "@/components/ui/animated-text"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { IconAward, IconCalendar } from "@tabler/icons-react"

const data = [
  {
    image: "/a1.jpeg",
    title:
      "सहिद मनोज झपेन्द्र सुरेन्द्र स्मृति प्रतिष्ठानद्वारा आयोजित राष्ट्रिय कविता प्रतियोगिता",
    date: "२०८२",
    className: "col-span-1",
  },
  {
    image: "/a3.jpeg",
    title: "ईको विश्वव्यापी खुल्ला कविता प्रतियोगिता",
    className: "col-span-2",
    date: "२०८३",
  },
  {
    image: "/a4.jpeg",
    title: "सर्जक चौतारी ओखलढुंगाद्वारा आयोजित खुल्ला कविता प्रतियोगिता",
    className: "col-span-2",
    date: "२०८३",
  },
  {
    image: "/a5.jpeg",
    title: "सर्जक चौतारी ओखलढुंगाद्वारा आयोजित खुल्ला कविता प्रतियोगिता",
    className: "col-span-1",
    date: "२०८२",
  },
]

export function AwardsSection() {
  const t = useTranslations("awardSection")
  return (
    <Section id="awards">
      <Heading>
        <AnimatedText text={t("title")} delay={0.05} />
      </Heading>
      <SubHeading as="div">
        <AnimatedText text={t("description")} />
      </SubHeading>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {data.map((item, i) => (
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
            <div className="absolute bottom-2 left-2 z-10 flex flex-col">
              <div className="flex gap-2">
                <IconAward className="size-5 shrink-0 text-orange-500" />
                <p className="font-medium tracking-wide">{item.title}</p>
              </div>
              <div className="flex items-center gap-2">
                <IconCalendar className="size-4 text-muted-foreground" />
                <p>{item.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
