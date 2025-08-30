"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Main from "../../assets/Main.png"
import loanagainstcar from "../../assets/loanagainstcar.jpg"
import newcarloan from "../../assets/newcarloan.jpg"
import personalloan from "../../assets/personalloan.jpg"
import usedcarloan from "../../assets/usedcarloan.jpg"
import BenefitsSection from "../BenefitsOf"

const SLIDE_MS = 1500 // autoplay interval (1.5s)

const PRODUCT_SLIDES = [
  { slug: "personal-loan", title: "Personal Loan" },
  { slug: "new-car-loan", title: "New Car Loan" },
  { slug: "used-car-loan", title: "Used Car Loan" },
  { slug: "loan-against-car", title: "Loan Against Car" },
]

const SLIDES = [
  {
    slug: "intro",
    type: "intro",
    title: "Unlock Your Financial Dreams",
    desc: "Fastest-growing Fintech recognized by startup India initiative with AI driven technology into Personal and Car loans.",
    image: Main,
  },
  {
    slug: "personal-loan",
    title: "Personal Loan",
    desc: "Quick funds for your personal needs with minimal documentation.",
    image: personalloan,
  },
  {
    slug: "new-car-loan",
    title: "New Car Loan",
    desc: "Drive home your dream car with competitive interest rates.",
    image: newcarloan,
  },
  {
    slug: "used-car-loan",
    title: "Used Car Loan",
    desc: "Affordable financing options for pre-owned vehicles.",
    image: usedcarloan,
  },
  {
    slug: "loan-against-car",
    title: "Loan Against Car",
    desc: "Leverage your car's value for immediate financial needs.",
    image: loanagainstcar,
  },
]

export default function Hero() {
  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  // Pause when tab hidden
  useEffect(() => {
    function onVis() {
      setPaused(document.hidden)
    }
    document.addEventListener("visibilitychange", onVis)
    return () => document.removeEventListener("visibilitychange", onVis)
  }, [])

  // Autoplay every 1.5s
  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => clearInterval(intervalId)
  }, [paused, prefersReducedMotion])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") e.preventDefault()
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % SLIDES.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
    }
    window.addEventListener("keydown", onKey, { passive: false })
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const handleSelect = (targetIndex) => {
    setIndex(targetIndex)
    const slug = SLIDES[targetIndex].slug
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      url.searchParams.set("slide", slug)
      history.replaceState(null, "", url.toString())
    }
  }

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full bg-[#f5f5ec]"
        aria-roledescription="carousel"
        aria-label="Loan products"
      >
        <div className="overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <Slide key={slide.slug} slide={slide} index={i} activeIndex={index} onSelect={handleSelect} />
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Benefits Section in smaller container with less spacing */}
      <div className="relative -mt-20 flex justify-center">
        <div className="w-full max-w-5xl px-4">
          <BenefitsSection />
        </div>
      </div>
    </>
  )
}

function Slide({ slide, activeIndex, onSelect }) {
  if (slide.type === "intro") {
    return (
      <article role="group" aria-label="Intro" className="min-w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Text section */}
            <div className="order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pretty">
                <span className="text-[#3870A6]">Unlock Your </span>
                <span className="text-[#3870A6]">Financial </span>
                <span className="text-[#D47734]">Dreams</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-black/80">{slide.desc}</p>

              <div className="mt-8 md:mt-10 flex justify-center md:justify-start">
                <Pills activeSlug={SLIDES[activeIndex]?.slug} onSelect={onSelect} />
              </div>

              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="/apply"
                  className="inline-flex select-none items-center justify-center rounded-full bg-[#3870A6] px-6 py-3 text-white font-semibold shadow-sm hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3870A6]"
                >
                  APPLY NOW
                </a>
              </div>
            </div>

            {/* Image section */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src={slide.image || "/placeholder.svg"}
                alt="Intro hero"
                className="w-3/4 sm:w-2/3 md:w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </article>
    )
  }

  const [first, second = ""] = splitTitle(slide.title)
  return (
    <article role="group" aria-label={slide.title} className="min-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-pretty">
              <span className="text-[#3870A6]">{first} </span>
              <span className="text-[#D47734]">{second}</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-black/80">{slide.desc}</p>

            <div className="mt-8 flex justify-center md:justify-start">
              <Pills activeSlug={SLIDES[activeIndex]?.slug} onSelect={onSelect} />
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <a
                href="/apply"
                className="inline-flex select-none items-center justify-center rounded-full bg-[#3870A6] px-6 py-3 text-white font-semibold shadow-sm hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3870A6]"
              >
                APPLY NOW
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-56 sm:h-72 md:h-80">
              <img
                src={slide.image || "/placeholder.svg"}
                alt={`${slide.title} hero`}
                className="h-full w-full object-cover rounded-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function Pills({ activeSlug, onSelect }) {
  const toIndex = (slug) => SLIDES.findIndex((s) => s.slug === slug)
  return (
    <div className="flex flex-nowrap gap-3 md:gap-4 justify-center md:justify-start">
      {PRODUCT_SLIDES.map((p) => {
        const targetIndex = toIndex(p.slug)
        const isActive = activeSlug === p.slug
        return (
          <button
            key={p.slug}
            type="button"
            onClick={() => onSelect(targetIndex)}
            aria-current={isActive ? "true" : "false"}
            className={
              isActive
                ? "rounded-full bg-[#D47734] text-white px-4 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D47734] whitespace-nowrap"
                : "rounded-full border border-black/70 px-4 py-1.5 text-sm bg-white text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3870A6] whitespace-nowrap"
            }
          >
            {p.title}
          </button>
        )
      })}
    </div>
  )
}

function splitTitle(title) {
  const parts = title.split(" ")
  if (parts.length < 2) return [title, ""]
  return [parts.slice(0, -1).join(" "), parts[parts.length - 1]]
}
