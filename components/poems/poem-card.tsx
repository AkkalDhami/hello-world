"use client"

import { SubHeading } from "@/components/ui/sub-heading"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { CopyButton } from "@/components/shared/copy-button"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  ChevronsUpDownIcon,
  ChevronsUpDownIconHandle,
} from "@/components/ui/chevrons-up-down-icon"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export type Poem = {
  id: number
  title: string
  subtitle?: string
  content: string
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

  const [open, setOpen] = useState(false)
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

  const t = useTranslations("poemSection")

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
        "relative w-auto rounded-lg bg-poem-card p-4 font-devanagari",
        className
      )}
    >
      <motion.button
        data-open={open}
        onClick={() => setOpen((open) => !open)}
        className={cn(
          "group flex w-full flex-wrap items-center justify-between gap-4",
          "cursor-pointer"
        )}
      >
        <SubHeading
          as="h3"
          className="font-medium text-accent-foreground sm:text-xl"
        >
          {i}. {poem.title}
        </SubHeading>
        <ChevronsUpDownIcon
          ref={chevronsUpDownIconRef}
          duration={0.2}
          className="size-5 text-muted-foreground duration-150 group-hover:text-foreground"
        />
      </motion.button>
      <motion.pre
        layout
        animate={{
          height: open ? "auto" : 200,
        }}
        className={cn(
          "overflow-hidden pb-8 font-devanagari leading-relaxed font-normal text-poem sm:text-lg",
          !open && "mask-b-from-70%"
        )}
      >
        {poem.content}
      </motion.pre>
      <motion.div
        initial={{
          opacity: open ? 1 : 0,
          filter: open ? "blur(0px)" : "blur(10px)",
        }}
        animate={{
          opacity: open ? 1 : 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <AnimatePresence>
          {open && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="pr-10 text-right text-sm text-muted-foreground"
            >
              {poem.subtitle}
            </motion.p>
          )}
        </AnimatePresence>
        <CopyButton
          text={poem.content}
          onCopySuccess={() => console.log("Copied")}
          onCopyError={(error) => console.error("Copy error:", error)}
          onClick={handleCopy}
          className="absolute right-1 -bottom-1 rounded-md bg-poem-card p-1.5 hover:text-neutral-950"
        />
      </motion.div>

      <Button
        variant={"outline"}
        size={"xs"}
        onClick={() => setOpen((open) => !open)}
        className={
          "absolute bottom-3 left-2 bg-muted text-xs text-muted-foreground hover:text-foreground"
        }
      >
        {!open ? t("show") : t("hide")}
      </Button>
    </motion.article>
  )
}
