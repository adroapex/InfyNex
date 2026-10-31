import Link from "next/link";

import { ArrowLeft} from "lucide-react";
import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Sourcing",
  description:
    "We're working behind the scenes to bring you quality products and sourcing opportunities from across the globe.",
};

export default function SourcingPage() {
  return (
    <Background>
      <div className="container flex min-h-[70vh] flex-col items-center justify-center py-28 text-center lg:min-h-[80vh] lg:py-36">
        <div className="relative z-10 flex max-w-3xl flex-col items-center">
          

          {/* Heading */}
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-balance">
            Bringing the World Closer to You.
          </h1>

          {/* Body */}
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg sm:text-xl text-balance">
            We&apos;re working behind the scenes to bring you quality products
            and sourcing opportunities from across the globe.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group min-w-[180px] gap-2"
            >
              <Link href="/">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
}