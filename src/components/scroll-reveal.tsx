'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
}

export function ScrollReveal({ 
  children, 
  className = '', 
  direction = 'up',
  delay = 0,
  duration = 600
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const getAnimationClass = () => {
    const baseClass = 'transition-all'
    const delayClass = delay > 0 ? `delay-${delay}` : ''
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClass} opacity-0 translate-y-10 ${delayClass}`
        case 'down':
          return `${baseClass} opacity-0 -translate-y-10 ${delayClass}`
        case 'left':
          return `${baseClass} opacity-0 -translate-x-10 ${delayClass}`
        case 'right':
          return `${baseClass} opacity-0 translate-x-10 ${delayClass}`
        default:
          return `${baseClass} opacity-0 translate-y-10 ${delayClass}`
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 ${delayClass}`
  }

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = ''
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollReveal()
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [end, duration, isVisible])

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const rect = element.getBoundingClientRect()
      const parallax = scrolled * speed
      
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        element.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function StaggeredAnimation({ 
  children, 
  className = '',
  staggerDelay = 100,
  direction = 'up'
}: StaggeredAnimationProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}