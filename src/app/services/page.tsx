'use client'

import React from 'react'
import { Egg, Truck, Shield, Heart, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Egg className="w-8 h-8" />,
      title: 'Pembibitan DOC (Day Old Chick)',
      description: 'Menyediakan DOC berkualitas unggul dengan keturunan terbaik untuk mendukung produktivitas maksimal.',
      features: [
        'DOC dari indukan berkualitas',
        'Kesehatan terjamin dan terkontrol',
        'Sertifikat kesehatan lengkap',
        'Garansi kualitas'
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Budidaya Ayam Broiler',
      description: 'Proses budidaya ayam broiler dengan standar modern dan biosecurity ketat untuk hasil optimal.',
      features: [
        'Kandang modern dengan teknologi canggih',
        'Suhu dan kelembaban terkontrol',
        'Pakan berkualitas tinggi',
        'Monitoring kesehatan 24/7'
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Distribusi & Logistik',
      description: 'Sistem distribusi yang efisien untuk memastikan produk sampai ke tujuan dengan kualitas terjaga.',
      features: [
        'Armada pengiriman terpercaya',
        'Sistem cold chain',
        'Jangkauan distribusi luas',
        'Tracking real-time'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Konsultasi Teknis',
      description: 'Layanan konsultasi untuk mitra bisnis dalam pengelolaan peternakan yang efektif dan efisien.',
      features: [
        'Ahli berpengalaman',
        'Training reguler',
        'Support teknis 24/7',
        'Best practices sharing'
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Pemeliharaan DOC',
      description: 'Proses pemeliharaan DOC dengan standar tertinggi, nutrisi optimal, dan monitoring kesehatan intensif.'
    },
    {
      step: '02',
      title: 'Pengelolaan Pakan',
      description: 'Sistem manajemen pakan yang efisien dengan formula nutrisi seimbang untuk pertumbuhan optimal.'
    },
    {
      step: '03',
      title: 'Pengendalian Biosecurity',
      description: 'Protokol biosecurity ketat untuk mencegah penyakit dan menjaga kesehatan seluruh populasi ternak.'
    },
    {
      step: '04',
      title: 'Pemanenan',
      description: 'Proses pemanenan yang manusiawi dan higienis untuk memastikan kualitas daging terbaik.'
    },
    {
      step: '05',
      title: 'Distribusi',
      description: 'Pengiriman cepat dan aman ke berbagai mitra bisnis dengan kualitas produk terjamin.'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Kualitas Terjamin',
      description: 'Produk dengan standar kualitas tertinggi dan sertifikasi lengkap.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Harga Kompetitif',
      description: 'Harga yang kompetitif dengan kualitas premium untuk keuntungan maksimal.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Ketersediaan Stok',
      description: 'Kapasitas produksi besar untuk memenuhi kebutuhan pasar secara konsisten.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Layanan Purnajual',
      description: 'Dukungan teknis dan konsultasi berkelanjutan untuk mitra bisnis.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Sertifikasi Halal',
      description: 'Produk bersertifikat halal MUI untuk keamanan dan kepercayaan konsumen.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Traceability',
      description: 'Sistem pelacakan produk dari farm to table untuk transparansi penuh.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Kami
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Perusahaan kami bergerak di bidang Pembibitan dan Budidaya Ayam Ras Pedaging (Broiler) yang berfokus pada produksi daging ayam berkualitas tinggi melalui proses peternakan modern dan terstandarisasi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan peternakan ayam broiler berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-6 text-[#001f3f]">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f3f] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Proses Produksi
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kegiatan usaha meliputi pemeliharaan DOC, pengelolaan pakan dan nutrisi, pengendalian biosecurity, pemanenan ayam pedaging, hingga proses distribusi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#001f3f]">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Teknologi & Inovasi
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Dengan memanfaatkan teknologi kandang terbaru, sistem manajemen pakan yang efisien, serta pengawasan kesehatan ternak secara berkala, kami berkomitmen menghasilkan ayam pedaging yang sehat, higienis, dan memenuhi standar keamanan pangan.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#001f3f] mb-1">Kandang Modern</h4>
                    <p className="text-gray-600">Teknologi kontrol suhu otomatis dan ventilasi optimal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#001f3f] mb-1">Manajemen Pakan Digital</h4>
                    <p className="text-gray-600">Sistem pemberian pakan otomatis dengan monitoring real-time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#001f3f] mb-1">Biosecurity System</h4>
                    <p className="text-gray-600">Protokol keamanan biologis berstandar internasional</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#001f3f]/10 to-[#003366]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-16 h-16 text-[#001f3f]" />
                  </div>
                  <p className="text-2xl font-bold text-[#001f3f]">Teknologi</p>
                  <p className="text-gray-600">Modern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Keunggulan Layanan Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Alasan mengapa mitra bisnis mempercayakan kebutuhan ayam broiler kepada kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4 text-[#001f3f]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#001f3f] to-[#003366]">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tertarik dengan Layanan Kami?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk kebutuhan bisnis Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-secondary text-lg px-8 py-4">
                  Hubungi Kami
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 text-lg px-8 py-4">
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}