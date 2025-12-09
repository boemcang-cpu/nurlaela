'use client'

import React from 'react'
import { Award, Target, Eye, Users, Shield, CheckCircle, TrendingUp, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integritas',
      description: 'Kami menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis kami.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Inovasi',
      description: 'Terus berinovasi dalam teknologi dan metode peternakan untuk hasil terbaik.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Kepedulian',
      description: 'Memperhatikan kesejahteraan hewan dan kepuasan pelanggan sebagai prioritas utama.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kualitas',
      description: 'Berkomitmen pada standar kualitas tertinggi dalam setiap produk yang kami hasilkan.'
    }
  ]

  const milestones = [
    {
      year: '2010',
      title: 'Berdiri',
      description: 'NURLELA didirikan dengan visi menjadi produsen daging ayam berkualitas.'
    },
    {
      year: '2015',
      title: 'Ekspansi',
      description: 'Memperluas kapasitas produksi dan memodernisasi fasilitas peternakan.'
    },
    {
      year: '2020',
      title: 'Sertifikasi',
      description: 'Mendapatkan sertifikasi nasional untuk produk peternakan dan keamanan pangan.'
    },
    {
      year: '2024',
      title: 'Digitalisasi',
      description: 'Meluncurkan platform digital untuk memudahkan kerja sama dengan mitra bisnis.'
    }
  ]

  const certifications = [
    {
      name: 'Sertifikat Kelayakan Usaha Peternakan',
      issuer: 'Kementerian Pertanian RI',
      year: '2020'
    },
    {
      name: 'Sertifikat Cara Pembuatan Pangan Olahan (CPPOB)',
      issuer: 'Badan POM RI',
      year: '2021'
    },
    {
      name: 'Sertifikat Halal MUI',
      issuer: 'Majelis Ulama Indonesia',
      year: '2019'
    },
    {
      name: 'Sertifikat Manajemen Mutu ISO 9001:2015',
      issuer: 'International Organization for Standardization',
      year: '2022'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang NURLELA
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Perusahaan pembibitan dan budidaya ayam ras pedaging (broiler) terpercaya dengan komitmen pada kualitas dan keberlanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Profil Perusahaan
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                PT NURLELA adalah perusahaan yang bergerak di bidang pembibitan dan budidaya ayam ras pedaging (broiler) yang berfokus pada produksi daging ayam berkualitas tinggi. Dengan pengalaman lebih dari satu dekade, kami telah menjadi salah satu produsen terkemuka di Indonesia.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Perusahaan kami berlokasi di KP. Kadu Kalahang, Desa Cililitan, Kecamatan Picung, Kabupaten Pandeglang, Banten. Dengan fasilitas modern dan tim profesional, kami berkomitmen untuk menghasilkan produk terbaik yang memenuhi standar keamanan pangan nasional dan internasional.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-gray-700">Berdiri sejak 2010</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-gray-700">Kapasitas 1000+ ton/tahun</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-gray-700">50+ mitra bisnis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#FFD700]" />
                  <span className="text-gray-700">Sertifikasi lengkap</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#001f3f]/10 to-[#003366]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-[#001f3f]">N</span>
                  </div>
                  <p className="text-2xl font-bold text-[#001f3f]">NURLELA</p>
                  <p className="text-gray-600">Since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#001f3f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#001f3f] mb-4">Visi</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Menjadi produsen daging ayam broiler terkemuka di Indonesia yang mengutamakan kualitas, keberlanjutan, dan kepuasan pelanggan melalui inovasi teknologi peternakan modern.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#001f3f]" />
                </div>
                <h3 className="text-2xl font-bold text-[#001f3f] mb-4">Misi</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Menghasilkan produk daging ayam berkualitas tinggi yang aman dan sehat</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Menerapkan praktik peternakan yang berkelanjutan dan bertanggung jawab</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Membangun hubungan jangka panjang dengan mitra bisnis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Terus berinovasi dalam teknologi dan manajemen peternakan</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#001f3f]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Milestone penting dalam sejarah NURLELA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#001f3f]" />
                </div>
                <div className="text-2xl font-bold text-[#FFD700] mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Sertifikasi & Legalitas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bukti komitmen kami pada standar kualitas dan kepatuhan regulasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[#001f3f]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#001f3f] mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-[#FFD700] text-sm font-medium">
                        {cert.year}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}