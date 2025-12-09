'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Award, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Kualitas Terjamin',
      description: 'Produksi daging ayam berkualitas tinggi dengan standar keamanan pangan'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Teknologi Modern',
      description: 'Menggunakan teknologi kandang terbaru dan sistem manajemen efisien'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Sertifikasi Lengkap',
      description: 'Memenuhi standar nasional dan internasional untuk produk peternakan'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Tim Profesional',
      description: 'Didukung oleh tenaga ahli berpengalaman di bidang peternakan'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Biosecurity',
      description: 'Pengendalian biosecurity ketat untuk kesehatan ternak terjamin'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Skala Besar',
      description: 'Kapasitas produksi besar untuk memenuhi kebutuhan pasar'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Ton/Tahun Produksi' },
    { number: '50+', label: 'Mitra Bisnis' },
    { number: '10+', label: 'Tahun Pengalaman' },
    { number: '100%', label: 'Kualitas Terjamin' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90 z-10"></div>
          <img 
            src="/chicken-farm-hero.jpg" 
            alt="Modern Chicken Farm" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-20 animate-bounce delay-75 z-0"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-20 animate-bounce delay-150 z-0"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-20 animate-bounce delay-300 z-0"></div>

        <div className="container-custom relative z-20">
          <div className="text-center text-white max-w-5xl mx-auto">
            <div className={`animate-fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {/* Premium Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 px-6 py-3 rounded-full font-semibold mb-8 shadow-2xl">
                <Award className="w-5 h-5 mr-2" />
                Industry Leader Since 2010
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                NURLELA
                <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 text-amber-400 font-light tracking-wide">
                  Premium Poultry Solutions
                </span>
              </h1>
            </div>

            <div className={`animate-slide-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-200`}>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light">
                Menghadirkan daging ayam broiler berkualitas premium dengan standar internasional, 
                teknologi peternakan modern, dan komitmen terhadap keberlanjutan.
              </p>
            </div>

            <div className={`animate-slide-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-400`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link href="/contact">
                  <Button className="btn-secondary text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                    Hubungi Kami
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 text-xl px-10 py-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                    <Shield className="mr-3 w-6 h-6" />
                    Sertifikasi Kami
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className={`animate-slide-up ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 delay-600`}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform">
                        {stat.number}
                      </div>
                      <div className="text-white text-sm md:text-base font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-20">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2 text-gray-300">Scroll untuk menjelajah</span>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-3 rounded-full font-semibold mb-6 shadow-xl">
              <Award className="w-5 h-5 mr-2" />
              Keunggulan Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Mengapa Memilih NURLELA?
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen untuk memberikan produk terbaik dengan standar kualitas tertinggi dan layanan yang memuaskan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group card-hover border-0 shadow-2xl hover:shadow-3xl bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 text-blue-900 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  <div className="mt-6 flex items-center text-amber-500 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="mr-2">Pelajari lebih lanjut</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Showcase Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 px-6 py-3 rounded-full font-semibold mb-6 shadow-xl">
              <Shield className="w-5 h-5 mr-2" />
              Fasilitas Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Peternakan Modern
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Lihat fasilitas peternakan kami yang dilengkapi dengan teknologi terkini
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src="/chicken-farm-interior.jpg" 
                alt="Interior Kandang Modern" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm font-medium">Biosecurity</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Kandang Modern</h3>
                  <p className="text-gray-600">Dilengkapi dengan sistem pendingin otomatis dan ventilasi yang optimal untuk kenyamanan ayam</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Pakan Berkualitas</h3>
                  <p className="text-gray-600">Formulasi pakan premium dengan nutrisi seimbang untuk pertumbuhan optimal</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Monitoring 24/7</h3>
                  <p className="text-gray-600">Sistem pemantauan konstan untuk kesehatan dan kesejahteraan ternak</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Sertifikasi ISO</h3>
                  <p className="text-gray-600">Memenuhi standar internasional untuk kualitas dan keamanan pangan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95 z-10"></div>
          <img 
            src="/chicken-farm-aerial.jpg" 
            alt="Aerial View of Farm" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-20 animate-bounce delay-75 z-0"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-20 animate-bounce delay-150 z-0"></div>

        <div className="container-custom relative z-20">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 px-6 py-3 rounded-full font-semibold mb-8 shadow-2xl">
              <Shield className="w-5 h-5 mr-2" />
              Partner Terpercaya
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Siap Bekerja Sama dengan Kami?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Bergabunglah dengan mitra bisnis kami dan nikmati kualitas daging ayam terbaik dengan harga kompetitif serta layanan profesional
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="btn-secondary text-xl px-10 py-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300">
                  Hubungi Kami Sekarang
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 text-xl px-10 py-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                  <Award className="mr-3 w-6 h-6" />
                  Lihat Portfolio
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-gray-300">Kepuasan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">ISO</div>
                <div className="text-gray-300">Tersertifikasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">30+</div>
                <div className="text-gray-300">Provinsi</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}