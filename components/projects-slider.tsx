"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Penjualan Ayam Geprek Berbasis Website",
    description: "Sebuah aplikasi web sederhana yang dirancang untuk membantu pengelolaan penjualan ayam geprek secara efisien. Sistem ini memungkinkan admin untuk mengelola data menu, transaksi, serta melihat laporan penjualan secara berkala. Cocok digunakan untuk usaha kuliner skala kecil hingga menengah.",
    tags: ["PHP", "HTML", "CSS","JavaScript","MySQL"],
    image: "/Geprek.png",
    link: "https://github.com/Paradox281/website-penjualanayamgeprek",
    demo: "#"
  },
  {
    title: "My Alquran Digital",
    description: "Sebuah website Al-Qur'an digital yang menampilkan daftar surah lengkap, ayat-ayat Al-Qur'an, terjemahan dalam Bahasa Indonesia. Website ini dibangun untuk memudahkan pengguna membaca dan memahami Al-Qur'an secara online, baik di desktop maupun mobile.",
    tags: ["Next.JS","API Al-Qur'an","TailwindCSS"],
    image: "/Alquran.png",
    link: "https://github.com/Paradox281/My-Alquran-Digital",
    demo: "https://v0-my-al-quran.vercel.app/"
  },
  {
    title: "Absence App",
    description: "Aplikasi web yang memungkinkan pengguna untuk mengelola catatan ketidakhadiran mereka dan melihat riwayat ketidakhadiran mereka.",
    tags: ["React.js", "PostgreSQL", "TypeScript","MinIo","TailwindCSS"],
    image: "/Absence.png",
    link: "#",
    demo : "#"
  },
  {
    title: "E-KRS",
    description: "Aplikasi web yang memungkinkan siswa untuk mengelola catatan akademis mereka dan melihat kemajuan akademis mereka.",
    tags: ["React", "TypeScript", "PostgreSQL","Minio","TailwindCSS"],
    image: "/Ekrs.png",
    link: "#",
    demo : "#"
  },
  {
    title: "Aplikasi Android Todo List Akademik",
    description: "Aplikasi Android sederhana yang digunakan untuk mencatat dan mengelola data akademik seperti jurusan, mahasiswa, dan mata kuliah.",
    tags: ["Kotlin","Android Studio"],
    image: "/github.png",
    link: "https://github.com/Paradox281/Android-Studio-Mahasiswa-Pintar",
    demo : "#"
  },
  {
    title: "Altura Android",
    description: "Menyediakan Pemesanan Traveling",
    tags: ["Expo.JS", "PostgreSQL", "TypeScript","TailwindCSS"],
    image: "/saas-dashboard-template.jpg",
    link: "https://github.com/Paradox281/Wisata-android",
    demo: "#"
  },
  {
    title: "Altura Website",
    description: "Landing Page Pemesanan Traveling",
    tags: ["Next.JS", "PostgreSQL", "TypeScript","TailwindCSS"],
    image: "/saas-dashboard-template.jpg",
    link: "https://github.com/Paradox281/Altura-website",
    demo: "#"
  },
  {
    title: "Data Extraction System Arutala Lab",
    description: "Aplikasi web yang memungkinkan pengguna untuk mengekstrak data dari berkas Excel dan menyimpannya ke basis data serta menampilkan data secara interaktif di dasbor.",
    tags: ["Next.JS", "PostgreSQL", "TypeScript","TailwindCSS","Golang","Docker","RabbitMQ"],
    image: "/ExtractionApp.jpeg",
    link: "#",
    demo: "#"
  },
  {
    title: "Machine Learning Microservices Starter",
    description: "Menyediakan workflow untuk memproses file CSV yang di-upload user melalui web",
    tags: ["Next.JS", "PostgreSQL", "TypeScript","TailwindCSS","Phyton","Docker","Groq"],
    image: "/CSV.png",
    link: "https://github.com/Paradox281/Machine-Learning",
    demo: "#"
  },
  
]

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ]

  return (
    <div className="space-y-8">
      <div className="grid lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, idx) => (
          <div
            key={`${project.title}-${idx}`}
            className="group bg-background border border-border rounded-lg overflow-hidden hover:border-accent/50 transition duration-300 h-[600px]"          >
            <div className="relative h-48 overflow-hidden bg-card">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold text-pretty">{project.title}</h3>
              </div>
              <p className="text-foreground/60 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-start gap-4">
              <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 
                  rounded-xl text-gray-800 font-medium shadow-md 
                  hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.387 7.865 10.905.575.11.785-.25.785-.556 0-.274-.01-1-.015-1.962-3.2.696-3.877-1.542-3.877-1.542-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.08-.699.08-.699 1.155.081 1.764 1.188 1.764 1.188 1.027 1.76 2.695 1.252 3.35.958.104-.744.402-1.253.732-1.542-2.554-.29-5.238-1.277-5.238-5.683 0-1.255.45-2.28 1.186-3.085-.119-.29-.515-1.464.113-3.05 0 0 .968-.31 3.17 1.178A11.07 11.07 0 0 1 12 6.32c.98.004 1.97.133 2.893.39 2.2-1.488 3.166-1.178 3.166-1.178.63 1.586.234 2.76.115 3.05.74.804 1.185 1.83 1.185 3.085 0 4.42-2.69 5.39-5.254 5.673.41.352.78 1.05.78 2.115 0 1.53-.014 2.764-.014 3.14 0 .31.206.672.79.556C20.21 21.38 23.5 17.08 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
                  </svg>

                  Github
              </a>
              <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 border border-gray-600 
                  rounded-xl text-white-800 font-medium shadow-md 
                  hover:bg-gray-800 hover:shadow-lg transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                    <path d="M5 5h5V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2v5H5V5z" />
                  </svg>
                  Demo
              </a>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition ${idx === currentIndex ? "w-8 bg-accent" : "w-2 bg-border"}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
