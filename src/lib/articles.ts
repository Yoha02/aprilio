import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export interface Article {
  slug: string
  title: string
  date: string
  author: string
  category: string
  description: string
  keyTakeaways: string[]
  readingTime: string
  content: string
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '')
    return getArticleBySlug(slug)
  }).filter(Boolean) as Article[]

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    category: data.category,
    description: data.description,
    keyTakeaways: data.keyTakeaways || [],
    readingTime: stats.text,
    content,
  }
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category)
}
