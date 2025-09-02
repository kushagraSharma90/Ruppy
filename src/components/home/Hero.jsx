"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import BenefitsSectionComponent from "../BenefitsSection"

const SLIDE_MS = 3000

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
    image: "/images/Main.png",
  },
  {
    slug: "personal-loan",
    title: "Personal Loan",
    desc: "Get instant funds for your personal needs with minimal documentation and quick approvals. Flexible repayment options designed to make your financial journey stress-free.",
    image: "/images/personalloan.jpg",
  },
  {
    slug: "new-car-loan",
    title: "New Car Loan",
    desc: "Drive home your dream car faster with competitive interest rates and extended tenure with low EMI through a digital process. Enjoy seamless financing for a smooth and joyful car-buying experience.",
    image: "/images/newcarloan.jpg",
  },
  {
    slug: "used-car-loan",
    title: "Used Car Loan",
    desc: "Affordable financing options for pre-owned vehicles, with quick approvals and transparent processing for a hassle-free purchase.",
    image: "/images/usedcarloan.jpg",
  },
  {
    slug: "loan-against-car",
    title: "Loan Against Car",
    desc: "Turn your car’s value into instant funds whenever you need it the most. Benefit from easy documentation, instant approvals, and complete flexibility.",
    image: "/images/loanagainstcar.jpg",
  },
]

export default function Hero() {
  const containerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  useEffect(() => {
    function onVis() {
      setPaused(document.hidden)
    }
    document.addEventListener("visibilitychange", onVis)
    return () => document.removeEventListener("visibilitychange", onVis)
  }, [])

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, SLIDE_MS)
    return () => clearInterval(intervalId)
  }, [paused, prefersReducedMotion])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") e.preventDefault()
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % SLIDES.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
    }
    window.addEventListener("keydown", onKey, { passive: false })
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX)
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) setIndex((i) => (i + 1) % SLIDES.length)
    if (distance < -50) setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)
    setTouchStart(null)
    setTouchEnd(null)
  }

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
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <Slide key={slide.slug} slide={slide} />
            ))}
          </div>
        </div>

        {/* ✅ Static Pills */}
        <div className="flex justify-center mt-6">
          <Pills activeSlug={SLIDES[index]?.slug} onSelect={handleSelect} />
        </div>

        {/* Mobile indicators */}
        <div className="md:hidden flex justify-center space-x-2 mt-4 pb-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-[#3870A6]" : "bg-gray-300"}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <BenefitsSectionComponent />
    </>
  )
}

function Slide({ slide }) {
  const [first, second = ""] = splitTitle(slide.title)

  return (
    <article role="group" aria-label={slide.title} className="min-w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 md:pt-6 lg:pt-8 pb-0">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
          {/* Text */}
          <div className="text-center md:text-left w-full md:w-1/2">
            {/* Heading */}
            {slide.type === "intro" ? (
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-pretty">
                <span className="text-[#3870A6]">Unlock Your </span>
                <span className="text-[#3870A6]">Financial </span>
                <span className="text-[#D47734]">Dreams</span>
              </h1>
            ) : (
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-pretty">
                <span className="text-[#3870A6]">{first} </span>
                <span className="text-[#D47734]">{second}</span>
              </h1>
            )}

            {/* Description */}
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-black/80">
              {slide.desc}
            </p>

            {/* Apply button */}
            <div className="mt-3 md:mt-4 flex justify-center md:justify-start">
              <a
                href="/apply"
                className="inline-flex select-none items-center justify-center rounded-full bg-[#3870A6] px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base text-white font-semibold shadow-sm hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3870A6]"
              >
                APPLY NOW
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end w-full md:w-1/2">
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} hero`}
              className="w-4/5 sm:w-3/5 md:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </article>
  )
}

function Pills({ activeSlug, onSelect }) {
  const toIndex = (slug) => SLIDES.findIndex((s) => s.slug === slug)

  return (
    <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-4 justify-center">
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
                ? "rounded-full bg-[#D47734] text-white px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-semibold shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D47734] whitespace-nowrap"
                : "rounded-full border border-black/70 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm bg-white text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3870A6] whitespace-nowrap"
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
