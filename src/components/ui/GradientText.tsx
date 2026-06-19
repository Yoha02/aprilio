interface GradientTextProps {
  children: React.ReactNode
  className?: string
  from?: string
  to?: string
}

export default function GradientText({
  children,
  className = '',
  from = 'from-teal',
  to = 'to-purple',
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}
