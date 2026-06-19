import AnimateOnScroll from './AnimateOnScroll'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <AnimateOnScroll className={`max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-wider text-teal mb-3">
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-[family-name:var(--font-heading)] ${
          dark ? 'text-white' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? 'text-text-on-dark-muted' : 'text-text-secondary'
          }`}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  )
}
