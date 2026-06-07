"use client"

import { Heading } from "@/components/ui/heading"
import { Section } from "@/components/ui/section"
import { useTranslations } from "next-intl"
import { AnimatedText } from "@/components/ui/animated-text"
import { SocialLinks } from "@/components/shared/social-link"
import Image from "next/image"
import { motion } from "motion/react"
import { Cta } from "@/components/shared/cta"
import { Stats } from "@/components/shared/stats"
import { PoemCard } from "@/components/poems/poem-card"
import { POEMS } from "@/data/poems"

export function HeroSection() {
  const t = useTranslations("shared")
  const tHero = useTranslations("heroSection")

  return (
    <Section>
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex flex-wrap items-center justify-center gap-6 sm:justify-start"
        >
          <Image
            width={220}
            height={220}
            src="/pratap.jpg"
            alt="Profile"
            className="size-40 hover:grayscale-0 grayscale-0 duration-200 object-cover object-bottom-right rounded-full"
          />
          <div>
            <Heading>{t("fullName")}</Heading>
            <AnimatedText
              delay={0.02}
              text={tHero("title")}
              className="font-medium text-muted-foreground sm:text-lg"
            />
            <SocialLinks />
          </div>
        </motion.div>
        <AnimatedText
          delay={0.02}
          text={tHero("description")}
          className="text-muted-foreground sm:text-lg"
        />

        <Cta />
        <Stats />
        <div className="grid gap-4 sm:grid-cols-2">
          {POEMS.slice(0, 2).map((poem, index) => (
            <PoemCard key={index} poem={poem} i={index + 1} />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

export function HeroSection2() {
  const t = useTranslations("shared")
  const tHero = useTranslations("heroSection")

  return (
    <Section>
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <Heading>{t("fullName")}</Heading>
        <AnimatedText
          text={tHero("description")}
          className="mt-2 text-muted-foreground sm:text-lg"
        />
        <SocialLinks className="py-0" />
        <Cta />
        <Stats />
        <div className="grid gap-4 sm:grid-cols-2">
          {POEMS.slice(0, 2).map((poem, index) => (
            <PoemCard key={index} poem={poem} i={index + 1} />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
