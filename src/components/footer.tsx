import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Perusahaan: [
      { name: 'Tentang Kami', href: '/about' },
      { name: 'Layanan', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
    Kontak: [
      { icon: Phone, text: '0821-6407-6993' },
      { icon: Mail, text: 'info@nurlela.co.id' },
      { icon: MapPin, text: 'KP. Kadu Kalahang, Desa Cililitan, Kec. Picung, Kab. Pandeglang, Banten' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-[#001f3f] text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FFD700] rounded-lg flex items-center justify-center">
                <span className="text-[#001f3f] font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold">NURLELA</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Perusahaan pembibitan dan budidaya ayam ras pedaging (broiler) yang berfokus pada produksi daging ayam berkualitas tinggi dengan proses peternakan modern dan terstandarisasi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Perusahaan</h3>
            <ul className="space-y-2">
              {footerLinks.Perusahaan.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.Legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Kontak</h3>
            <div className="space-y-3">
              {footerLinks.Kontak.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="w-4 h-4 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} NURLELA. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed with ❤️ for NURLELA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}