"use client"

import { useEffect, useRef, useState } from "react"

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Python", "SQL", "Golang", "Kotlin", "Java","Phyton","C",],
  },
  {
    name: "Frameworks",
    skills: [
      "React",
      "Next.js",
      "TailwindCSS",
      "Expo.js",
      "Vite.js",
      "SpringBoot",
      "Laravel",
      "Bootstrap",
      "Material-UI",
      "SHADCN",
    ],
  },
  {
    name: "Databases",
    skills: ["MySQL", "PostgreSQL"],
  },
]

export default function FullpageSkillsScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      // Check if we're in the skills section
      const rect = container.getBoundingClientRect()
      const isInSkillsSection = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2

      if (!isInSkillsSection) return

      const isFirstSlide = currentSlide === 0
      const isLastSlide = currentSlide === skillCategories.length - 1

      if ((isFirstSlide && e.deltaY < 0) || (isLastSlide && e.deltaY > 0)) {
        // Allow normal vertical scroll at boundaries
        return
      }

      e.preventDefault()

      if (isScrolling) return
      isScrolling = true

      const delta = e.deltaY

      if (delta > 0 && currentSlide < skillCategories.length - 1) {
        // Scroll down = move to next slide
        setCurrentSlide((prev) => prev + 1)
      } else if (delta < 0 && currentSlide > 0) {
        // Scroll up = move to previous slide
        setCurrentSlide((prev) => prev - 1)
      }

      setTimeout(() => {
        isScrolling = false
      }, 800)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
    }
  }, [currentSlide])

  return (
    <div ref={containerRef} className="w-full h-screen px-4 bg-black flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
          <div className="text-sm text-foreground/60">
            {currentSlide + 1} / {skillCategories.length}
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {skillCategories.map((category, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-8 text-accent">{category.name}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.skills.map((skill, skillIdx) => (
                        <div
                          key={skillIdx}
                          className="p-4 bg-card/50 border border-border rounded-lg hover:border-accent/50 hover:bg-card transition-all duration-300 group cursor-pointer"
                          style={{
                            animation: `fadeInUp 0.5s ease-out ${skillIdx * 0.05}s both`,
                          }}
                        >
                          <p className="text-center font-semibold group-hover:text-accent transition-colors">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {skillCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "bg-accent w-8" : "bg-border w-2 hover:bg-border/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
