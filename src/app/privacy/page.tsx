'use client'

import React from 'react'
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPage() {
  const lastUpdated = "24 November 2024"

  const principles = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Transparansi',
      description: 'Kami memberikan informasi yang jelas tentang bagaimana data Anda dikumpulkan dan digunakan.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Keamanan',
      description: 'Data Anda dilindungi dengan teknologi enkripsi dan keamanan berlapis.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Pembatasan',
      description: 'Data hanya dikumpulkan sebatas yang diperlukan untuk tujuan yang telah ditentukan.'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Hak Pengguna',
      description: 'Anda memiliki hak untuk mengakses, memperbaiki, dan menghapus data pribadi Anda.'
    }
  ]

  const dataCategories = [
    {
      category: 'Data Identitas',
      examples: ['Nama lengkap', 'Email', 'Nomor telepon', 'Alamat perusahaan'],
      purpose: 'Identifikasi dan komunikasi dengan pengguna'
    },
    {
      category: 'Data Penggunaan',
      examples: ['IP Address', 'Browser information', 'Waktu akses', 'Halaman yang dikunjungi'],
      purpose: 'Analisis penggunaan dan peningkatan layanan'
    },
    {
      category: 'Data Bisnis',
      examples: ['Nama perusahaan', 'Jabatan', 'Kebutuhan produk', 'Riwayat transaksi'],
      purpose: 'Penyediaan layanan dan penawaran produk yang relevan'
    },
    {
      category: 'Data Komunikasi',
      examples: ['Isi pesan', 'Riwayat email', 'Catatan telepon', 'Dokumen yang dibagikan'],
      purpose: 'Koordinasi bisnis dan dukungan pelanggan'
    }
  ]

  const userRights = [
    {
      right: 'Hak Akses',
      description: 'Anda berhak mengetahui data pribadi apa saja yang kami simpan tentang Anda.'
    },
    {
      right: 'Hak Koreksi',
      description: 'Anda dapat meminta perbaikan data pribadi yang tidak akurat atau tidak lengkap.'
    },
    {
      right: 'Hak Penghapusan',
      description: 'Anda dapat meminta penghapusan data pribadi Anda dalam kondisi tertentu.'
    },
    {
      right: 'Hak Pembatasan',
      description: 'Anda dapat membatasi pemrosesan data pribadi Anda dalam kondisi tertentu.'
    },
    {
      right: 'Hak Portabilitas',
      description: 'Anda berhak menerima data pribadi Anda dalam format yang terstruktur.'
    },
    {
      right: 'Hak Penolakan',
      description: 'Anda dapat menolak pemrosesan data pribadi Anda untuk tujuan pemasaran.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-[#001f3f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Komitmen kami untuk melindungi data pribadi Anda sesuai standar internasional GDPR
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Di NURLELA, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan data pribadi Anda ketika Anda menggunakan website kami atau berinteraksi dengan layanan kami.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Terakhir diperbarui: {lastUpdated}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {principles.map((principle, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4 text-[#001f3f]">
                      {principle.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-600">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Data yang Kami Kumpulkan
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Kami mengumpulkan berbagai jenis data untuk menyediakan layanan terbaik bagi Anda:
            </p>

            <div className="space-y-6">
              {dataCategories.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#001f3f] mb-3">
                      {category.category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Contoh:</h4>
                        <ul className="space-y-1">
                          {category.examples.map((example, idx) => (
                            <li key={idx} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Tujuan:</h4>
                        <p className="text-gray-600">{category.purpose}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Basis */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Dasar Hukum Pemrosesan Data
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Dasar Hukum Kami Mengumpulkan Data
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Konsent</h4>
                        <p className="text-gray-600">Anda memberikan persetujuan eksplisit untuk kami memproses data Anda.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Kontrak</h4>
                        <p className="text-gray-600">Pemrosesan data diperlukan untuk pelaksanaan kontrak dengan Anda.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Kewajiban Hukum</h4>
                        <p className="text-gray-600">Kami diwajibkan oleh hukum untuk mengumpulkan dan memproses data tertentu.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Kepentingan Sah</h4>
                        <p className="text-gray-600">Pemrosesan data diperlukan untuk kepentingan sah kami yang seimbang.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Hak Anda Sebagai Pengguna
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Sesuai dengan GDPR, Anda memiliki hak-hak berikut terkait data pribadi Anda:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#001f3f] mb-3">
                      {right.right}
                    </h3>
                    <p className="text-gray-600">
                      {right.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-0 shadow-lg bg-[#001f3f] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Cara Menggunakan Hak Anda
                </h3>
                <p className="text-gray-200 mb-4">
                  Untuk menggunakan hak-hak Anda, silakan hubungi kami melalui:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@nurlela.co.id</p>
                  <p><strong>Telepon:</strong> 0821-6407-6993</p>
                  <p><strong>Alamat:</strong> KP. Kadu Kalahang, Desa Cililitan, Kec. Picung, Kab. Pandeglang, Banten</p>
                </div>
                <p className="text-gray-200 mt-4">
                  Kami akan merespons permintaan Anda dalam waktu 30 hari kerja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Perlindungan Data
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Langkah-Langkah Keamanan Kami
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Teknis</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Enkripsi data end-to-end
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Firewall dan sistem deteksi intrusi
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Backup data terenkripsi
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Update keamanan reguler
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Organisasi</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Training keamanan data reguler
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Akses terbatas berbasis peran
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Audit keamanan berkala
                        </li>
                        <li className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                          Kebijakan keamanan yang ketat
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Pertanyaan Tentang Privasi?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau cara kami menangani data Anda, jangan ragu untuk menghubungi kami.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-[#001f3f] mb-2">Email Privasi</h4>
                  <p className="text-gray-600">privacy@nurlela.co.id</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001f3f] mb-2">Telepon</h4>
                  <p className="text-gray-600">0821-6407-6993</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001f3f] mb-2">Alamat</h4>
                  <p className="text-gray-600">KP. Kadu Kalahang, Desa Cililitan<br />Kec. Picung, Kab. Pandeglang, Banten</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#001f3f] mb-2">Waktu Respon</h4>
                  <p className="text-gray-600">30 hari kerja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}