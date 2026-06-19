type BadgeVariant = 'success' | 'danger' | 'info' | 'warning' | 'neutral'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
  pulse?: boolean
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-success-bg text-success border-success/20',
  danger: 'bg-danger-bg text-danger border-danger/20',
  info: 'bg-teal/10 text-teal border-teal/20',
  warning: 'bg-gold/10 text-gold-dark border-gold/20',
  neutral: 'bg-navy/5 text-text-secondary border-navy/10',
}

export default function Badge({
  children,
  variant = 'neutral',
  className = '',
  pulse = false,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-2.5 py-0.5 text-xs font-medium
        rounded-full border
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`
              absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping
              ${variant === 'danger' ? 'bg-danger' : variant === 'success' ? 'bg-success' : 'bg-teal'}
            `}
          />
          <span
            className={`
              relative inline-flex rounded-full h-2 w-2
              ${variant === 'danger' ? 'bg-danger' : variant === 'success' ? 'bg-success' : 'bg-teal'}
            `}
          />
        </span>
      )}
      {children}
    </span>
  )
}
