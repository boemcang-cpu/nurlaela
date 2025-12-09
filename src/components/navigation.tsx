'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Layanan', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Kontak', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#001f3f] to-[#003366] rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold text-gradient transition-all duration-300 group-hover:text-[#001f3f]">NURLELA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#001f3f] font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>0821-6407-6993</span>
            </div>
            <Button className="btn-primary transition-all duration-300 hover:scale-105">
              Hubungi Kami
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#001f3f] transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#001f3f] font-medium transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Phone className="w-4 h-4" />
                  <span>0821-6407-6993</span>
                </div>
                <Button className="btn-primary w-full transition-all duration-300 hover:scale-105">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}