import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-[80vh] pt-24 sm:pt-32 mb-20">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 h-[calc(100%-6rem)] flex items-center">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative w-[624px] h-[371px] mb-10">
            <Image
              src="/images/logo.png"
              alt="Next-Gen Data Lead"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Reach out
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}