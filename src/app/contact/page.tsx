'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telepon',
      content: '0821-6407-6993',
      description: 'Senin - Sabtu, 08:00 - 17:00'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      content: 'info@nurlela.co.id',
      description: 'Kami akan membalas dalam 24 jam'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat',
      content: 'KP. Kadu Kalahang, Desa Cililitan, Kec. Picung, Kab. Pandeglang, Banten',
      description: 'Indonesia 42265'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 08:00 - 17:00',
      description: 'Minggu & Hari Libur: Tutup'
    }
  ]

  const officeHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 17:00' },
    { day: 'Sabtu', hours: '08:00 - 15:00' },
    { day: 'Minggu', hours: 'Tutup' },
    { day: 'Hari Libur Nasional', hours: 'Tutup' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Kami siap membantu kebutuhan bisnis Anda. Hubungi kami untuk informasi lebih lanjut tentang produk dan layanan NURLELA.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#001f3f]">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {info.content}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan kami akan menghubungi Anda secepatnya.
              </p>

              {isSubmitted ? (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-gray-600">
                      Terima kasih telah menghubungi kami. Kami akan membalas pesan Anda segera.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">
                            Nama Lengkap *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Telepon *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="0812-3456-7890"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-gray-700 font-medium">
                            Perusahaan
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-2"
                            placeholder="PT Example"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-gray-700 font-medium">
                          Subjek *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="Informasi Produk"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Pesan *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="Tuliskan pesan Anda di sini..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="btn-primary w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Mengirim...
                          </>
                        ) : (
                          <>
                            Kirim Pesan
                            <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map & Office Hours */}
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-6">
                Lokasi Kami
              </h2>
              
              {/* Map Placeholder */}
              <div className="aspect-square bg-gray-200 rounded-2xl mb-8 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#001f3f]/10 to-[#003366]/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#001f3f] mx-auto mb-4" />
                    <p className="text-lg font-semibold text-[#001f3f] mb-2">
                      NURLELA Office
                    </p>
                    <p className="text-gray-600">
                      KP. Kadu Kalahang, Desa Cililitan<br />
                      Kec. Picung, Kab. Pandeglang<br />
                      Banten, Indonesia 42265
                    </p>
                    <Button className="btn-primary mt-4">
                      Buka di Google Maps
                    </Button>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Jam Operasional
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700 font-medium">
                          {schedule.day}
                        </span>
                        <span className="text-[#FFD700] font-semibold">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                  Bagaimana cara menjadi mitra bisnis?
                </h3>
                <p className="text-gray-600">
                  Hubungi kami melalui form kontak atau telepon langsung. Tim kami akan memberikan informasi lengkap tentang persyaratan dan proses kemitraan.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                  Apakah produk tersertifikasi halal?
                </h3>
                <p className="text-gray-600">
                  Ya, semua produk kami telah tersertifikasi halal MUI dan memenuhi standar keamanan pangan nasional.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                  Berapa kapasitas produksi per bulan?
                </h3>
                <p className="text-gray-600">
                  Kapasitas produksi kami mencapai 1000+ ton per tahun dengan sistem distribusi yang luas di wilayah Jabodetabek dan Banten.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                  Apakah ada minimum order?
                </h3>
                <p className="text-gray-600">
                  Minimum order bervariasi tergantung jenis produk dan lokasi pengiriman. Hubungi kami untuk penawaran khusus sesuai kebutuhan Anda.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}