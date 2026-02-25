"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Quantum Physics", href: "/quantum-physics" },
  { label: "Quantum Computing", href: "/quantum-computing" },
  { label: "Blogs", href: "/blogs" },
  { label: "Forums", href: "/forums" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-wide text-foreground transition-colors duration-300 hover:text-primary"
        >
          Tattva Vimarsha
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-foreground",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
                {/* Active saffron underline */}
                <span
                  className={cn(
                    "absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-500",
                    isActive
                      ? "opacity-100 bg-gradient-to-r from-saffron-500 to-saffron-400 shadow-[0_0_8px_hsl(27,100%,50%,0.4)]"
                      : "opacity-0 bg-saffron-500"
                  )}
                />
                {/* Active glow */}
                {isActive && (
                  <span className="pointer-events-none absolute inset-0 rounded-md bg-saffron-500/5" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="glass-subtle mx-4 mb-3 rounded-lg px-2 pb-3 pt-2 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-300",
                    isActive
                      ? "text-primary bg-saffron-500/5"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
