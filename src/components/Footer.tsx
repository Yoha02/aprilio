import Link from 'next/link'
import { siteNavigation } from '@/content/site'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Aprilio home">
              <span className="brand-mark" aria-hidden="true">
                <span className="brand-mark-bracket">[</span>
                <span className="brand-mark-dot" />
                <span className="brand-mark-bracket">]</span>
              </span>
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-[-0.03em] text-ink">
                aprilio
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
              Structurally grounded retrieval for knowledge that must be current, traceable, and certain.
            </p>
          </div>

          <div>
            <p className="eyebrow text-ink-muted">Navigate</p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {siteNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-ink-muted hover:text-ink">
                  {item.label}
                </Link>
              ))}
              <Link href="/blog" className="text-sm text-ink-muted hover:text-ink">Journal</Link>
              <Link href="/paper" className="text-sm text-ink-muted hover:text-ink">Research</Link>
            </div>
          </div>

          <div>
            <p className="eyebrow text-ink-muted">Build with Aprilio</p>
            <p className="mt-4 text-sm leading-6 text-ink-muted">
              Licensing, platform integration, and research partnerships.
            </p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
              contact@aprilio.ai <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aprilio, LLC.</p>
          <p>Built by clinicians, researchers, and systems engineers.</p>
        </div>
      </div>
    </footer>
  )
}
