'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const pageData: Record<string, { title: string; description?: string }> = {
  '/': {
    title: 'Oracare - Revolutionary Oral Healthcare Solutions',
    description: 'Your trusted partner in advanced dental care and oral health'
  },
  '/products': {
    title: 'Products - Oracare',
    description: 'Discover our advanced dental products and solutions'
  },
  '/signin': {
    title: 'Sign In - Oracare',
    description: 'Access your dental health dashboard'
  },
  '/signup': {
    title: 'Sign Up - Oracare',
    description: 'Join Oracare for better oral health'
  }
}

export default function DynamicPageTitle() {
  const pathname = usePathname()

  useEffect(() => {
    const pageInfo = pageData[pathname] || {
      title: 'Oracare - Advanced Dental Solutions',
      description: 'Professional oral healthcare solutions'
    }

    // Update the document title
    document.title = pageInfo.title

    // Update meta description if it exists
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && pageInfo.description) {
      metaDescription.setAttribute('content', pageInfo.description)
    }
  }, [pathname])

  return null // This component doesn't render anything
}
