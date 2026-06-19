import Link from 'next/link'
import GlowCard from '@/components/ui/GlowCard'
import Badge from '@/components/ui/Badge'
import type { Article } from '@/lib/articles'
import { formatDateOnly } from '@/lib/dates'

const categoryLabels: Record<string, string> = {
  grounded_retrieval: 'Grounded Retrieval',
  ai_medicine: 'AI in Medicine',
  clinical_intelligence: 'Clinical Intelligence',
}

const categoryColors: Record<string, 'teal' | 'purple' | 'gold'> = {
  grounded_retrieval: 'teal',
  ai_medicine: 'purple',
  clinical_intelligence: 'gold',
}

export default function BlogCard({ article }: { article: Article }) {
  const preview = article.description

  return (
    <Link href={`/blog/${article.slug}`} className="block group">
      <GlowCard glowColor={categoryColors[article.category] || 'teal'} className="h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="info">
              {categoryLabels[article.category] || article.category}
            </Badge>
            <span className="text-xs text-text-tertiary">{article.readingTime}</span>
          </div>
          <h3 className="text-lg font-bold text-text-primary font-[family-name:var(--font-heading)] group-hover:text-teal transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
            {preview}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-text-tertiary">
            <time dateTime={article.date}>
              {formatDateOnly(article.date)}
            </time>
            <span>&middot;</span>
            <span>{article.author}</span>
          </div>
        </div>
      </GlowCard>
    </Link>
  )
}
