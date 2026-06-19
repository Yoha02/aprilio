import type { Metadata } from 'next'

const BASE_URL = 'https://aprilio.ai'
const SITE_NAME = 'Aprilio'
const DEFAULT_DESCRIPTION =
  'Aprilio develops Grounded Retrieval, an LLM-based architecture that outperforms frontier AI models on clinical oncology questions with verifiable, page-level citations.'

interface SEOParams {
  title: string
  description?: string
  path?: string
  ogImage?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  keywords?: string[]
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  ogImage = '/og-default.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  keywords,
  noIndex = false,
}: SEOParams): Metadata {
  const url = `${BASE_URL}${path}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: type === 'article' ? 'article' : 'website',
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}
