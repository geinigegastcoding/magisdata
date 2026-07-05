import React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import type { Variants } from "framer-motion"

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export interface CustomerLogo {
  src: string
  alt: string
  height: number
  icon?: React.ReactNode
}

interface CustomersSectionProps {
  customers: CustomerLogo[]
  className?: string
  title?: string
}

export function CustomersSection({ customers = [], className, title = "Onze Tools" }: CustomersSectionProps) {
  return (
    <section className={`bg-transparent pb-8 pt-8 md:pb-16 md:pt-12 ${className ?? ""}`}>
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <div className="block text-sm duration-150 hover:opacity-75 bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm">
            <span>{title}</span>
            <ChevronRight className="ml-1 inline-block size-3" />
          </div>
        </div>
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2,
                },
              },
            },
            ...transitionVariants,
          }}
          className="group-hover:blur-xs mx-auto mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-6 transition-all duration-500 group-hover:opacity-50 sm:gap-x-12 sm:gap-y-10"
        >
          {customers.map((logo, index) => (
            <div key={index} className="flex items-center justify-center text-muted hover:text-navy transition-colors">
              {logo.icon ? (
                <div className="flex items-center gap-2">
                  {logo.icon}
                  <span className="font-semibold text-sm">{logo.alt}</span>
                </div>
              ) : (
                <img
                  className="mx-auto h-auto w-fit max-h-8 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                  src={logo.src}
                  alt={logo.alt}
                  height={logo.height}
                  width="auto"
                />
              )}
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}
