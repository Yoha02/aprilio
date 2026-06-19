'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { siteNavigation } from '@/content/site'

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark-bracket">[</span>
      <span className="brand-mark-dot" />
      <span className="brand-mark-bracket">]</span>
    </span>
  )
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'border-ink/10 bg-white/88 shadow-[0_14px_50px_rgba(16,37,66,0.10)] backdrop-blur-xl'
            : 'border-white/70 bg-white/64 backdrop-blur-md'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="Aprilio home">
          <Mark />
          <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-[-0.03em] text-ink">
            aprilio
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-ink/[0.04] hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="button-link button-link-dark text-sm">
            Start a conversation
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-1 h-px w-5 bg-current transition-transform ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute bottom-1 left-0 h-px w-5 bg-current transition-transform ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-ink/10 bg-white p-3 shadow-xl md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-ink hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="button-link button-link-dark mt-2 justify-center"
              >
                Start a conversation <span aria-hidden="true">↗</span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
