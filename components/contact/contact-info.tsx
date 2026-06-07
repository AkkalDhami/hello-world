"use client"

import { useTranslations } from "next-intl"
import { Section } from "@/components/ui/section"
import { cn } from "@/lib/utils"
import { IconMail, IconMapPin, IconPhone, IconUser } from "@tabler/icons-react"
import { CopyButton } from "@/components/shared/copy-button"

export function ContactsInfo({ className }: { className?: string }) {
  const t = useTranslations("shared")

  const contactInfo = [
    {
      label: t("contacts.name.label"),
      value: t("contacts.name.value"),
      icon: IconUser,
    },
    {
      label: t("contacts.address.label"),
      value: t("contacts.address.value"),
      icon: IconMapPin,
    },
    {
      label: t("contacts.phone.label"),
      value: t("contacts.phone.value"),
      icon: IconPhone,
    },
    {
      label: t("contacts.email.label"),
      value: t("contacts.email.value"),
      icon: IconMail,
    },
  ]
  return (
    <Section id="contacts" className={cn(className)}>
      {contactInfo.map((item) => (
        <div key={item.label} className="group relative">
          <div className="flex w-full items-center gap-2">
            <div className="relative">
              <item.icon className="text-muted-primary size-10 rounded-lg border border-edge bg-muted p-2" />
            </div>
            <div className="flex flex-col text-primary">
              <span className="text-sm font-normal tracking-widest text-muted-foreground uppercase">
                {item.label}
              </span>
              <p className="text-base font-normal">{item.value}</p>
              <CopyButton
                text={item.value}
                className={cn(
                  "p-1.5 text-muted-foreground opacity-0 hover:bg-muted",
                  "duration-200 ease-in-out group-hover:opacity-100"
                )}
              />
            </div>
          </div>
        </div>
      ))}
    </Section>
  )
}
