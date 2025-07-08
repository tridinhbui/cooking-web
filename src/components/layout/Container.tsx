'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const sizeVariants = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl', 
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-full'
}

const paddingVariants = {
  none: '',
  sm: 'px-4 py-4',
  md: 'px-6 py-8 md:px-8',
  lg: 'px-8 py-12 md:px-12'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
  padding = 'md'
}) => {
  return (
    <div className={cn(
      'mx-auto w-full',
      sizeVariants[size],
      paddingVariants[padding],
      className
    )}>
      {children}
    </div>
  )
}

export default Container 