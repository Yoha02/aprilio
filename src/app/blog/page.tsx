import { getAllArticles } from '@/lib/articles'
import BlogListClient from './BlogListClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on AI in clinical oncology, grounded retrieval, and evidence-based medicine.',
}

export default function BlogPage() {
  const articles = getAllArticles()
  const categories = Array.from(new Set(articles.map((a) => a.category)))

  return <BlogListClient articles={articles} categories={categories} />
}
