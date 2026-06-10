"use client"

import { SubHeading } from "@/components/ui/sub-heading"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { CopyButton } from "@/components/shared/copy-button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  ChevronsUpDownIcon,
  ChevronsUpDownIconHandle,
} from "@/components/ui/chevrons-up-down-icon"
import { useEffect, useRef, useState } from "react"
import { useLocale } from "next-intl"
import { LocaleType } from "@/data/poems"
import { AudioPlayer } from "@/components/shared/audio-player"

export type Poem = {
  id: number
  title: string
  subtitle?: string
  content: string
  src: string
}

export function PoemCard({
  poem,
  className,
  i,
}: {
  poem: Poem
  className?: string
  i: number
}) {
  const { copy } = useCopyToClipboard()

  const locale = useLocale() as LocaleType

  const [open, setOpen] = useState(true)
  const chevronsUpDownIconRef = useRef<ChevronsUpDownIconHandle>(null)

  useEffect(() => {
    const controls = chevronsUpDownIconRef.current
    if (!controls) return

    if (open) {
      controls.startAnimation()
    } else {
      controls.stopAnimation()
    }
  }, [open])

  const handleCopy = () => {
    copy(poem.content)
  }

  // const t = useTranslations("poemSection")

  return (
    <motion.article
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
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn(
        "relative w-auto rounded-lg bg-poem-card p-4",
        locale === "en" ? "font-manrope" : "font-devanagari",
        className
      )}
    >
      <motion.button
        data-open={open}
        onClick={() => setOpen((open) => !open)}
        className={cn(
          "group relative flex w-full cursor-pointer flex-wrap items-center justify-between gap-2"
        )}
      >
        <div className="flex items-center gap-3">
          <SubHeading
            as="h3"
            className="font-medium text-accent-foreground sm:text-xl"
          >
            {i}. {poem.title}
          </SubHeading>
        </div>
        <ChevronsUpDownIcon
          ref={chevronsUpDownIconRef}
          duration={0.2}
          className="size-5 text-muted-foreground duration-150 group-hover:text-foreground"
        />
      </motion.button>
      <motion.pre
        animate={{
          height: open ? "auto" : 200,
        }}
        className={cn(
          "overflow-hidden font-devanagari leading-relaxed font-normal text-poem sm:text-lg",
          !open && "mask-b-from-70%"
        )}
      >
        {poem.content}
      </motion.pre>
      <AudioPlayer id={poem.id} src={poem.src} />

      {/* <AnimatePresence initial={false}> */}
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            height: 0,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            height: "auto",
            filter: "blur(0px)",
          }}
          // exit={{
          //   opacity: 0,
          //   height: 0,
          //   filter: "blur(10px)",
          // }}
          transition={{
            duration: 0.3,
          }}
          className="mt-1 flex w-full items-center justify-end overflow-hidden"
        >
          {poem.subtitle && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="pr-10 text-right text-sm text-muted-foreground"
            >
              {poem.subtitle}
            </motion.p>
          )}
          <CopyButton
            text={poem.content}
            onCopySuccess={() => console.log("Copied")}
            onCopyError={(error) => console.error("Copy error:", error)}
            onClick={handleCopy}
            className="relative rounded-md bg-poem-card p-1.5 hover:text-neutral-950"
          />
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </motion.article>
  )
}
