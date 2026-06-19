'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Container from '@/components/ui/Container'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import GradientText from '@/components/ui/GradientText'
import BlogCard from '@/components/BlogCard'
import type { Article } from '@/lib/articles'

const categoryLabels: Record<string, string> = {
  grounded_retrieval: 'Grounded Retrieval',
  ai_medicine: 'AI in Medicine',
  clinical_intelligence: 'Clinical Intelligence',
}

export default function BlogListClient({
  articles,
  categories,
}: {
  articles: Article[]
  categories: string[]
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filtered = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-dark-surface pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,201,167,0.06),transparent_60%)]" />
          <Container className="relative">
            <AnimateOnScroll>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-4">
                Insights
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)]">
                <GradientText>Blog</GradientText>
              </h1>
              <p className="mt-6 text-lg text-text-on-dark-muted max-w-2xl leading-relaxed">
                Insights on AI in clinical oncology, grounded retrieval, and evidence-based medicine.
              </p>
            </AnimateOnScroll>
          </Container>
        </section>

        {/* Category Filters + Grid */}
        <section className="py-20 bg-bg">
          <Container>
            <AnimateOnScroll>
              <div className="flex flex-wrap items-center gap-2 mb-10">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-4 py-2 text-sm rounded-full border transition-colors cursor-pointer ${
                    activeCategory === null
                      ? 'bg-teal/10 border-teal/40 text-teal'
                      : 'border-navy/10 text-text-secondary hover:border-teal/30 hover:text-teal'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-sm rounded-full border transition-colors cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-teal/10 border-teal/40 text-teal'
                        : 'border-navy/10 text-text-secondary hover:border-teal/30 hover:text-teal'
                    }`}
                  >
                    {categoryLabels[cat] || cat}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || 'all'}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {filtered.map((article) => (
                  <BlogCard key={article.slug} article={article} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <p className="text-center text-text-secondary mt-12">
                No articles in this category yet.
              </p>
            )}
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
