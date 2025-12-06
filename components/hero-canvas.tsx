"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    camera.position.z = 5

    // Create animated objects
    const geometry = new THREE.IcosahedronGeometry(2, 4)
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x4f46e5,
      shininess: 100,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 200
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.08,
      color: 0x6366f1,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1)
    light.position.set(10, 10, 10)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.002
      mesh.rotation.z += 0.001

      particles.rotation.x += 0.0001
      particles.rotation.y += 0.0003

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.parentElement?.getBoundingClientRect()
      if (rect) {
        const width = rect.width
        const height = rect.height
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
}
