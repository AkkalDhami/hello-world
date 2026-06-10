"use client"

import { useTranslations } from "next-intl"
import { Section } from "@/components/ui/section"
import { SubHeading } from "@/components/ui/sub-heading"
import { Heading } from "@/components/ui/heading"
import { AnimatedText } from "@/components/ui/animated-text"

import { AwardCard } from "./award-card"

export type AwardDataType = {
  image: string
  title: string
  date: string
  className: string
}

const data: AwardDataType[] = [
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
          <AwardCard item={item} i={i} key={i} />
        ))}
      </div>
    </Section>
  )
}
