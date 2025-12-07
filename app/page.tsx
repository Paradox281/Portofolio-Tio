"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import dynamic from "next/dynamic"
import ProjectsSlider from "@/components/projects-slider"
import FullpageSkillsScroll from "@/components/fullpage-skills-scroll"
import { ScrollAnimation } from "@/components/scroll-animation"

const HeroCanvas = dynamic(() => import("@/components/hero-canvas"), { ssr: false })

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }

  const experience = [
    {
      period: "Agustus 2024-Desember 2024",
      title: "Full-stack Developer",
      company: "Padepokan Tujuh Sembilan • Bandung, West Java",
      ship: "Magang",
      description:
        <ul className="list-disc pl-5">
            <li>Mengembangkan aplikasi web komprehensif menggunakan Spring Boot, React, Laravel, dan Next.js</li>
            <li>Mahir dalam membangun API RESTful dan antarmuka yang ramah pengguna</li>
            <li>Menjelajahi alat dan teknik baru untuk mengoptimalkan kinerja</li>
        </ul>    
  },
    {
      period: "Juli 2024",
      title: "Full-Stack Developer",
      company: "ArutalaLab • Remote",
      ship: "Pelatihan",
      description:
      <ul className="list-disc pl-5">
        <li> Membangun aplikasi web menggunakan Laravel dengan pola MVC.</li>
        <li> Membuat UI responsif dengan Bootstrap dan TailwindCSS.</li>
        <li> Melakukan debugging dan perbaikan modul aplikasi.</li>
     </ul>        
    },
    {
      period: "Maret 2024",
      title: "Programming Bootcamp",
      company: "ArutalaLab • Remote",
      ship: "Pelatihan",
      description:
        <ul className="list-disc pl-5">
                <li>  Memahami dasar pemrograman, struktur data, dan algoritma.</li>
                <li>  Menerapkan pemrograman Java untuk debugging dan implementasi logic sederhana.                </li>
        </ul>         
        },
  ]

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
            Kharisma Tio Pernanda Pratama
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" onClick={handleNavClick} className="text-foreground/70 hover:text-foreground transition">
              About
            </a>
            <a href="#skills" onClick={handleNavClick} className="text-foreground/70 hover:text-foreground transition">
              Skills
            </a>
            <a
              href="#projects"
              onClick={handleNavClick}
              className="text-foreground/70 hover:text-foreground transition"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={handleNavClick}
              className="text-foreground/70 hover:text-foreground transition"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full hover:opacity-90 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-4 py-4 space-y-4">
              <a href="#about" onClick={handleNavClick} className="block text-foreground/70 hover:text-foreground">
                About
              </a>
              <a href="#skills" onClick={handleNavClick} className="block text-foreground/70 hover:text-foreground">
                Skills
              </a>
              <a href="#projects" onClick={handleNavClick} className="block text-foreground/70 hover:text-foreground">
                Projects
              </a>
              <a href="#experience" onClick={handleNavClick} className="block text-foreground/70 hover:text-foreground">
                Experience
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block px-6 py-2 bg-accent text-accent-foreground rounded-full w-fit hover:opacity-90"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-background">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up z-10">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <p className="text-sm text-accent">Welcome to my portfolio</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Kharisma Tio Pernanda{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-gray-600">FullStack Developer</span>
          </h1>

          <p className="text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
          Saya seorang Full-Stack Web Developer dengan pengalaman dalam membangun aplikasi web yang cepat, aman, dan user-friendly menggunakan HTML, CSS, JavaScript, PHP, Laravel, dan Next.js.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#projects"
              onClick={handleNavClick}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-8 py-3 border border-accent/30 text-accent rounded-full font-semibold hover:bg-accent/10 transition"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a href="https://github.com/Paradox281" className="p-3 bg-card rounded-full hover:bg-accent/10 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/kharisma-tio-pernanda-pratama/" className="p-3 bg-card rounded-full hover:bg-accent/10 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:kharismatio220@gmail.com" className="p-3 bg-card rounded-full hover:bg-accent/10 transition">
              <Mail size={20} />
            </a>
          </div>

          <div className="pt-12 animate-bounce">
            <ChevronDown className="mx-auto opacity-50" size={28} />
          </div>
        </div>
      </section>

      <div className="bg-black">
        <section id="about" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold mb-12">About Me</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation className="space-y-6">
                <p className="text-foreground/70 leading-relaxed text-lg">
                Saya Kharisma Tio Pernanda Pratama, seorang full-stack web developer pemula yang memiliki ketertarikan kuat pada dunia teknologi dan pengembangan aplikasi web. Latar belakang saya di bidang Ilmu Komputer dari Sekolah Tinggi Teknologi Payakumbuh memberi saya dasar teknis yang solid, sementara pengalaman dari proyek pribadi dan magang membantu saya memahami bagaimana membangun solusi digital yang nyata.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                Saya menikmati proses membangun aplikasi dari awal,mulai dari merancang antarmuka yang bersih dan modern hingga mengembangkan API dan mengelola basis data di sisi backend. Saat ini, saya banyak bekerja dengan teknologi seperti Next.js, React, dan Tailwind CSS, serta terus mengasah kemampuan backend saya menggunakan Node.js, Go, dan berbagai tools pengembangan lainnya.
                </p>
                <p className="text-foreground/70 leading-relaxed text-lg">
                Bagi saya, menjadi developer bukan hanya soal menulis kode, tetapi juga tentang memecahkan masalah, berkolaborasi, dan belajar hal baru setiap hari. Saya selalu terbuka terhadap tantangan baru dan ingin terus tumbuh menjadi engineer yang lebih baik melalui pengalaman nyata di dunia kerja.
                </p>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="relative">
                  <img
                    src="/unnamed(1).jpg"
                    alt="Developer profile"
                    className="rounded-lg border border-border hover:border-accent/50 transition"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 bg-black">
          <FullpageSkillsScroll />
        </section>

        <section id="projects" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
            </ScrollAnimation>
            <ProjectsSlider />
          </div>
        </section>

        <section id="experience" className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold mb-12">Experience</h2>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experience.map((exp, i) => (
                <ScrollAnimation key={exp.title} className="opacity-0">
                  <div
                    className="p-6 border-t-4 border-accent bg-card rounded-lg hover:bg-card/80 transition"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                    }}
                  >
                    <p className="text-accent text-sm font-semibold mb-2">{exp.period}</p>
                    <div className="flex justify-between gap-1">
                    <h3 className="text-lg font-bold mb-2">{exp.title}</h3>
                    <span className="inline-flex items-center px-9 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">{exp.ship}</span>
                    </div>
                    <p className="text-accent/80 font-semibold text-sm mb-3">{exp.company}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-black">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <ScrollAnimation>
              <h2 className="text-4xl font-bold">Let's Work Together</h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="text-xl text-foreground/60 leading-relaxed">
                Saya selalu terbuka untuk peluang baru dan kolaborasi menarik. Jangan ragu untuk menghubungi saya
                melalui salah satu channel di bawah.
              </p>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="mailto:kharismatio220@gmail.com"
                  className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:opacity-90 transition"
                >
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/kharisma-tio-pernanda-pratama/"
                  className="px-8 py-3 border border-accent/30 text-accent rounded-full font-semibold hover:bg-accent/10 transition"
                >
                  LinkedIn
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="flex gap-6 justify-center pt-8">
                <a href="#" className="p-3 bg-card rounded-full hover:bg-accent/10 transition">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-card rounded-full hover:bg-accent/10 transition">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 bg-card rounded-full hover:bg-accent/10 transition">
                  <Mail size={20} />
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-8 px-4 bg-black">
          <div className="max-w-6xl mx-auto text-center text-foreground/60 text-sm">
            <p>&copy; 2025 Web Developer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
