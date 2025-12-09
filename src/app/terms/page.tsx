'use client'

import React from 'react'
import { FileText, Shield, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function TermsPage() {
  const lastUpdated = "24 November 2024"

  const userObligations = [
    {
      title: 'Informasi Akurat',
      description: 'Anda setuju untuk memberikan informasi yang akurat, lengkap, dan terkini saat menggunakan layanan kami.'
    },
    {
      title: 'Penggunaan yang Sah',
      description: 'Anda setuju untuk tidak menggunakan website kami untuk tujuan ilegal atau tidak sah.'
    },
    {
      title: 'Keamanan Akun',
      description: 'Anda bertanggung jawab untuk menjaga kerahasiaan informasi login dan keamanan akun Anda.'
    },
    {
      title: 'Respect IP Rights',
      description: 'Anda setuju untuk tidak melanggar hak kekayaan intelektual kami atau pihak ketiga.'
    }
  ]

  const companyRights = [
    {
      title: 'Hak untuk Memodifikasi',
      description: 'Kami berhak mengubah atau menghentikan layanan kapan saja dengan pemberitahuan sebelumnya.'
    },
    {
      title: 'Hak untuk Menolak',
      description: 'Kami berhak menolak layanan kepada siapa pun dengan alasan yang sah.'
    },
    {
      title: 'Hak Kekayaan Intelektual',
      description: 'Semua konten di website ini dilindungi oleh hak cipta dan merek dagang kami.'
    },
    {
      title: 'Hak untuk Meningkatkan',
      description: 'Kami berhak terus meningkatkan dan mengembangkan layanan kami.'
    }
  ]

  const prohibitedActivities = [
    'Menggunakan website untuk tujuan penipuan atau phishing',
    'Mengirimkan virus, malware, atau kode berbahaya lainnya',
    'Mencoba mendapatkan akses tidak sah ke sistem kami',
    'Mengganggu atau merusak operasional website',
    'Mengumpulkan data pengguna lain tanpa izin',
    'Menggunakan konten website untuk tujuan komersial tanpa izin',
    'Melanggar hukum atau peraturan yang berlaku',
    'Mengirimkan konten yang tidak pantas atau ilegal'
  ]

  const limitations = [
    {
      title: 'Limitasi Tanggung Jawab',
      description: 'Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan website kami.'
    },
    {
      title: 'Tidak Ada Jaminan',
      description: 'Website kami disediakan "sebagaimana adanya" tanpa jaminan tersurat maupun tersirat.'
    },
    {
      title: 'Batasan Waktu',
      description: 'Setiap klaim harus diajukan dalam waktu 1 tahun sejak kejadian yang menjadi dasar klaim.'
    },
    {
      title: 'Force Majeure',
      description: 'Kami tidak bertanggung jawab atas kegagalan performa karena keadaan di luar kendali kami.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#001f3f] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-[#001f3f]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Syarat & Ketentuan
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Aturan penggunaan website dan layanan NURLELA beserta hak dan kewajiban pengguna dan perusahaan
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                Selamat datang di website NURLELA. Dengan mengakses dan menggunakan website ini, Anda setuju untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, harap jangan gunakan website kami.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Syarat & Ketentuan ini mengatur penggunaan website NURLELA dan semua layanan yang tersedia melalui website ini. Website ini dimiliki dan dioperasikan oleh PT NURLELA.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Terakhir diperbarui: {lastUpdated}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4 text-[#001f3f]">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                    Untuk Pengguna
                  </h3>
                  <p className="text-gray-600">
                    Syarat yang berlaku untuk semua pengguna website dan layanan kami.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center mb-4 text-[#001f3f]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                    Untuk Perusahaan
                  </h3>
                  <p className="text-gray-600">
                    Hak dan kewajiban PT NURLELA sebagai penyedia layanan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Kewajiban Pengguna
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Sebagai pengguna website NURLELA, Anda setuju untuk mematuhi kewajiban berikut:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userObligations.map((obligation, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                          {obligation.title}
                        </h3>
                        <p className="text-gray-600">
                          {obligation.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Aktivitas yang Dilarang
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Anda tidak diperbolehkan melakukan aktivitas berikut saat menggunakan website kami:
            </p>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Rights */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Hak Perusahaan
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              PT NURLELA memiliki hak-hak berikut terkait pengoperasian website dan layanan:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyRights.map((right, index) => (
                <Card key={index} className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Scale className="w-5 h-5 text-[#FFD700] mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-[#001f3f] mb-2">
                          {right.title}
                        </h3>
                        <p className="text-gray-600">
                          {right.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Hak Kekayaan Intelektual
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Konten yang Dilindungi
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-600">
                      Semua konten di website NURLELA, termasuk namun tidak terbatas pada:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                        Teks, gambar, video, dan grafis
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                        Logo, merek dagang, dan nama dagang
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                        Desain dan tata letak website
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                        Kode sumber dan perangkat lunak
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      Dilindungi oleh hak cipta, merek dagang, dan hukum kekayaan intelektual lainnya.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Penggunaan yang Diizinkan
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Anda diperbolehkan untuk:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Melihat dan mengunduh konten untuk penggunaan pribadi dan non-komersial
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Membagikan tautan ke halaman website kami
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Mengutip konten dengan menyebutkan sumber yang jelas
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Pembatasan Tanggung Jawab
            </h2>
            <div className="space-y-6">
              {limitations.map((limitation, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#001f3f] mb-3">
                      {limitation.title}
                    </h3>
                    <p className="text-gray-600">
                      {limitation.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-0 shadow-lg bg-[#001f3f] text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Indemnifikasi
                </h3>
                <p className="text-gray-200 mb-4">
                  Anda setuju untuk mengganti rugi, membela, dan membebaskan PT NURLELA dan direktur, karyawan, dan agennya dari dan terhadap setiap klaim, kerugian, kerusakan, biaya, dan pengeluaran (termasuk biaya hukum) yang timbul dari atau sehubungan dengan:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Pelanggaran Anda terhadap Syarat & Ketentuan ini</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Pelanggaran Anda terhadap hak pihak ketiga</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    <span className="text-gray-200">Penggunaan website Anda yang melanggar hukum</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Changes & Termination */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gradient mb-8">
              Perubahan & Pengakhiran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Perubahan Syarat
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Kami berhak mengubah Syarat & Ketentuan ini kapan saja. Perubahan akan berlaku segera setelah diposting di website.
                  </p>
                  <p className="text-gray-600">
                    Penggunaan website Anda setelah perubahan menunjukkan penerimaan Anda terhadap syarat yang telah diperbarui.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#001f3f] mb-4">
                    Pengakhiran
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Kami dapat mengakhiri atau menangguhkan akses Anda ke website kami segera, tanpa pemberitahuan atau tanggung jawab, untuk alasan apa pun, termasuk jika Anda melanggar Syarat & Ketentuan.
                  </p>
                  <p className="text-gray-600">
                    Setelah pengakhiran, hak Anda untuk menggunakan website akan segera berakhir.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#001f3f] mb-6">
                  Hukum yang Berlaku
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Syarat & Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan konflik ketentuan hukum.
                  </p>
                  <p className="text-gray-600">
                    Setiap sengketa yang timbul dari atau sehubungan dengan Syarat & Ketentuan ini akan diselesaikan melalui perundingan yang baik hati. Jika tidak dapat diselesaikan, sengketa akan diselesaikan melalui pengadilan yang berwenang di Indonesia.
                  </p>
                  <p className="text-gray-600">
                    Bahasa resmi Syarat & Ketentuan ini adalah Bahasa Indonesia. Dalam hal terjadi perbedaan interpretasi antara versi bahasa, versi Bahasa Indonesia yang berlaku.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gradient mb-6">
              Pertanyaan Tentang Syarat & Ketentuan?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami.
            </p>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-[#001f3f] mb-2">Email Legal</h4>
                  <p className="text-gray-600">legal@nurlela.co.id</p>
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
                  <h4 className="font-semibold text-[#001f3f] mb-2">Waktu Operasional</h4>
                  <p className="text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}