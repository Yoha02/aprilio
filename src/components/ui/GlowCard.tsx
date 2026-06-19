'use client'

import { motion } from 'framer-motion'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: 'teal' | 'purple' | 'gold'
  dark?: boolean
}

const glowStyles = {
  teal: 'hover:shadow-glow-teal',
  purple: 'hover:shadow-glow-purple',
  gold: 'hover:shadow-glow-gold',
}

const borderGradients = {
  teal: 'from-teal/40 to-purple/20',
  purple: 'from-purple/40 to-teal/20',
  gold: 'from-gold/40 to-teal/20',
}

export default function GlowCard({
  children,
  className = '',
  glowColor = 'teal',
  dark = false,
}: GlowCardProps) {
  const bgClass = dark ? 'bg-dark-surface-light' : 'bg-surface'

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`
        relative rounded-lg ${bgClass} overflow-hidden
        border border-transparent
        transition-shadow duration-300
        ${glowStyles[glowColor]}
        ${className}
      `}
    >
      <div
        className={`
          absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300
          bg-gradient-to-br ${borderGradients[glowColor]}
          pointer-events-none
        `}
        style={{ padding: '1px' }}
      />
      <div className={`absolute inset-[1px] rounded-[11px] ${bgClass} pointer-events-none`} />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
