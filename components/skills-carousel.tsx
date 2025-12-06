"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const skillsData = {
  languages: [
    { name: "HTML", icon: "🏗️" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "PHP", icon: "🐘" },
  ],
  frameworks: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TailwindCSS", icon: "🌊" },
    { name: "Laravel", icon: "🔴" },
    { name: "Node.js", icon: "🟢" },
  ],
  databases: [
    { name: "MySQL", icon: "🗄️" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
  ],
}

export default function SkillsCarousel() {
  const [activeCategory, setActiveCategory] = useState<"languages" | "frameworks" | "databases">("languages")
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (direction: "left" | "right") => {
    const container = document.getElementById("skills-container")
    if (!container) return

    const scrollAmount = 300
    const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount
    setScrollPosition(newPosition)
    container.scrollLeft = newPosition
  }

  return (
    <div className="space-y-8">
      {/* Category tabs */}
      <div className="flex gap-4 justify-center">
        {(Object.keys(skillsData) as Array<keyof typeof skillsData>).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              setScrollPosition(0)
            }}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeCategory === category
                ? "bg-accent text-accent-foreground"
                : "bg-card border border-border text-foreground/70 hover:text-foreground"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-accent/10 hover:bg-accent/20 rounded-full transition"
        >
          <ChevronLeft size={24} className="text-accent" />
        </button>

        <div
          id="skills-container"
          className="flex gap-6 overflow-x-auto scroll-smooth px-12"
          style={{ scrollBehavior: "smooth" }}
        >
          {skillsData[activeCategory].map((skill) => (
            <div
              key={skill.name}
              className="min-w-[200px] p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition text-center"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <p className="font-semibold text-lg">{skill.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-accent/10 hover:bg-accent/20 rounded-full transition"
        >
          <ChevronRight size={24} className="text-accent" />
        </button>
      </div>
    </div>
  )
}
