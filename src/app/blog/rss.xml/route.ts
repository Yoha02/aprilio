import { getAllArticles } from '@/lib/articles'

const SITE_URL = 'https://aprilio.ai'

export async function GET() {
  const articles = getAllArticles()

  const items = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${SITE_URL}/blog/${article.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <author>${article.author}</author>
      <category>${article.category}</category>
      <description><![CDATA[${article.description}]]></description>
      <content:encoded><![CDATA[${article.content}]]></content:encoded>
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aprilio Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Insights on AI in clinical oncology, grounded retrieval, and evidence-based medicine.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new Response(rss.trim(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
