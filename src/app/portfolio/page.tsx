'use client'

import React, { useState } from 'react'
import { Eye, Calendar, MapPin, Filter, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'farm', name: 'Peternakan' },
    { id: 'distribution', name: 'Distribusi' },
    { id: 'partnership', name: 'Kemitraan' },
    { id: 'technology', name: 'Teknologi' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Modern Farming Complex',
      category: 'farm',
      description: 'Pengembangan kompleks peternakan modern dengan kapasitas 50.000 ekor per siklus, dilengkapi dengan teknologi otomasi dan sistem biosecurity tingkat tinggi.',
      location: 'Pandeglang, Banten',
      date: '2023',
      image: '/api/placeholder/600/400',
      tags: ['Modern', 'Large Scale', 'Biosecurity'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Cold Chain Distribution Network',
      category: 'distribution',
      description: 'Jaringan distribusi berpendingin untuk memastikan kualitas produk tetap terjaga dari farm to table dengan jangkauan Jabodetabek dan Banten.',
      location: 'Jakarta, Tangerang, Banten',
      date: '2023',
      image: '/api/placeholder/600/400',
      tags: ['Logistics', 'Cold Chain', 'Distribution'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Partnership Program 2022',
      category: 'partnership',
      description: 'Program kemitraan dengan 20+ peternak lokal untuk meningkatkan kapasitas produksi dan kualitas produk melalui transfer teknologi.',
      location: 'Multiple Locations',
      date: '2022',
      image: '/api/placeholder/600/400',
      tags: ['Partnership', 'Empowerment', 'Technology Transfer'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Smart Farming System',
      category: 'technology',
      description: 'Implementasi sistem pertanian cerdas dengan IoT monitoring, AI untuk prediksi pertumbuhan, dan manajemen pakan otomatis.',
      location: 'Pandeglang, Banten',
      date: '2023',
      image: '/api/placeholder/600/400',
      tags: ['IoT', 'AI', 'Automation'],
      status: 'ongoing'
    },
    {
      id: 5,
      title: 'Sustainable Farming Initiative',
      category: 'farm',
      description: 'Program pertanian berkelanjutan dengan fokus pada penggunaan energi terbarukan, pengelolaan limbah, dan kesejahteraan hewan.',
      location: 'Pandeglang, Banten',
      date: '2022',
      image: '/api/placeholder/600/400',
      tags: ['Sustainable', 'Green Energy', 'Animal Welfare'],
      status: 'completed'
    },
    {
      id: 6,
      title: 'Rumah Potong Ayam Modern',
      category: 'distribution',
      description: 'Pembangunan rumah potong ayam modern dengan standar halal MUI dan sertifikasi CPPOB untuk memenuhi kebutuhan pasar domestik.',
      location: 'Pandeglang, Banten',
      date: '2023',
      image: '/api/placeholder/600/400',
      tags: ['RPA', 'Halal Certified', 'CPPOB'],
      status: 'ongoing'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const stats = [
    { number: '50+', label: 'Proyek Selesai' },
    { number: '1000+', label: 'Hektar Lahan' },
    { number: '50+', label: 'Mitra Bisnis' },
    { number: '10+', label: 'Tahun Pengalaman' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio Kami
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Koleksi proyek-proyek terbaik yang telah kami kerjakan dengan standar kualitas tertinggi dan komitmen pada keberlanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#001f3f] mb-2">
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

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id 
                    ? 'bg-[#001f3f] text-white hover:bg-[#003366]' 
                    : 'border-[#001f3f] text-[#001f3f] hover:bg-[#001f3f] hover:text-white'
                } transition-colors duration-200`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-hover border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-[#001f3f]/20 to-[#003366]/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-2">
                        <Eye className="w-8 h-8 text-[#001f3f]" />
                      </div>
                      <p className="text-[#001f3f] font-semibold">Project Image</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status === 'completed' ? 'Selesai' : 'Berjalan'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{project.date}</span>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#001f3f] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#FFD700]/20 text-[#001f3f]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="btn-primary w-full">
                    Lihat Detail
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Kisah Sukses Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cerita keberhasilan mitra bisnis yang telah bekerja sama dengan NURLELA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#001f3f]">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#001f3f] mb-3">
                  PT Agro Sejahtera
                </h3>
                <p className="text-gray-600 mb-4">
                  "Berkat kerja sama dengan NURLELA, produksi kami meningkat 150% dalam 2 tahun. Kualitas DOC dan dukungan teknis sangat luar biasa."
                </p>
                <div className="text-sm text-gray-500">
                  <p>CEO, PT Agro Sejahtera</p>
                  <p>Mitra sejak 2020</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#001f3f]">B</span>
                </div>
                <h3 className="text-xl font-bold text-[#001f3f] mb-3">
                  CV Berkah Farm
                </h3>
                <p className="text-gray-600 mb-4">
                  "Sistem distribusi NURLELA sangat efisien. Produk selalu sampai tepat waktu dengan kualitas terjamin. Sangat merekomendasikan!"
                </p>
                <div className="text-sm text-gray-500">
                  <p>Owner, CV Berkah Farm</p>
                  <p>Mitra sejak 2019</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#001f3f]">C</span>
                </div>
                <h3 className="text-xl font-bold text-[#001f3f] mb-3">
                  UD Cipta Mandiri
                </h3>
                <p className="text-gray-600 mb-4">
                  "Teknologi dan biosecurity dari NURLELA membantu kami mencapai standar ekspor. Kerja sama yang sangat menguntungkan."
                </p>
                <div className="text-sm text-gray-500">
                  <p>Director, UD Cipta Mandiri</p>
                  <p>Mitra sejak 2021</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#001f3f] to-[#003366]">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ingin Menjadi Mitra Kami?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Bergabunglah dengan ratusan mitra bisnis yang telah merasakan keunggulan layanan NURLELA
            </p>
            <Button className="btn-secondary text-lg px-8 py-4">
              Hubungi Kami
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}