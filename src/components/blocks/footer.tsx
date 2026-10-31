import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/#feature-modern-teams" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Twitter", href: "https://x.com/prathamesh3221" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/imuric" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Have a Project in mind?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Whether you need a complete electrical overhaul, lighting sourcing, or a custom industrial solution, we are ready to bring your vision to light.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary/25 dark:text-primary/15 mt-10 w-full md:mt-14 lg:mt-20">
        <svg
          width="1570"
          height="293"
          viewBox="0 0 1570 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <g transform="translate(224.19, 0)">
            <polygon
              fill="url(#paint0_linear_59_191)"
              points="200.61 48.12 166.06 211.64 206.13 211.64 240.68 48.12 200.61 48.12"
            />
            <path
              fill="url(#paint0_linear_59_191)"
              d="M318.29,85A50.25,50.25,0,0,0,299,88.77a42.49,42.49,0,0,0-16.47,12.55,52.82,52.82,0,0,0-4.24,6l3.2-19.59H246l-26.49,123.9H259.1l14.28-66.1a57.73,57.73,0,0,1,5.41-16.12,28.88,28.88,0,0,1,8.41-10.13A18.15,18.15,0,0,1,298,115.83q6.44,0,9.55,2.88c2.08,1.92,3.11,4.88,3.11,8.87a63,63,0,0,1-.69,9.1,82.09,82.09,0,0,1-1.84,9.09l-14.28,65.87h39.61l13.82-63.79q1.38-6.22,2.88-15a94.87,94.87,0,0,0,1.5-15.9q0-15.2-8.52-23.6T318.29,85Z"
            />
            <path
              fill="url(#paint0_linear_59_191)"
              d="M523,87.74,485,167l-9-79.22H449l.1-.47H418.82a16.43,16.43,0,0,1,4.38-7q3.8-3.33,10.94-3.34h19.11l6-28.79H430.68q-22.56,0-35.35,10.6-12.1,10-16.46,28.55H360.21l-6,28.79h18.5l-20.34,95.58h39.84l20.25-95.58H442.6l12.73,88.21h9.9l-3.22,6q-2.31,4.37-5.53,5.87a21.79,21.79,0,0,1-9,1.5H433.22l-6,28.56h22.34A65,65,0,0,0,467.65,244a32.84,32.84,0,0,0,13.13-7.37,53.65,53.65,0,0,0,10.48-14.16l73-134.73Z"
            />
            <polygon
              fill="url(#paint0_linear_59_191)"
              points="677.58 48.12 655.7 150.61 619.54 48.12 577.39 48.12 542.85 211.64 582.92 211.64 603.65 113.53 640.73 211.64 683.11 211.64 717.65 48.12 677.58 48.12"
            />
            <path
              fill="url(#paint0_linear_59_191)"
              d="M817.83,174.56l-38.92-2.3A16.06,16.06,0,0,1,771,182.51a28.43,28.43,0,0,1-13.48,3.11q-8.06,0-12.32-4.61t-4.26-14.51c0-2.21.06-4.35.17-6.45h81.36a93.91,93.91,0,0,0,3-13.7,106.38,106.38,0,0,0,1.16-15.78q0-15.19-5.65-25.33A35.67,35.67,0,0,0,804.59,90Q793.88,85,777.76,85q-18.66,0-33,6.1a66.91,66.91,0,0,0-24.3,17.28,74.87,74.87,0,0,0-15,26.48,106.17,106.17,0,0,0-5.06,33.51q0,20.73,12.78,33.4T751,214.41q26.49,0,42.84-10.25T817.83,174.56Zm-58.38-57.81a26.92,26.92,0,0,1,14.16-3.68q6.69,0,10.6,3.57t3.91,11.4c0,2-.08,3.76-.23,5.3a28.09,28.09,0,0,1-.69,4.14H745a53,53,0,0,1,4.36-10A29,29,0,0,1,759.45,116.75Z"
            />
            <polygon
              fill="url(#paint0_linear_59_191)"
              points="955.56 87.73 912.72 87.73 884.91 123.26 870.35 87.73 829.35 87.73 857.79 149 803.09 211.64 845.7 211.64 874.8 174.92 889.92 211.64 930.92 211.64 901.36 149.49 955.56 87.73"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_59_191"
              x1="742.5"
              y1="0"
              x2="742.5"
              y2="218.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}
