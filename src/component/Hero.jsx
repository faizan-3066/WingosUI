import { Play } from 'lucide-react'
import { openWhatsApp } from '../utils/whatsapp'
import OptimizedImage from './OptimizedImage'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <Reveal as="section" className="hero-section">

  {/* Left Content */}
  <div className="hero-copy">

    <p className="text-[#E9B255] text-sm font-sans tracking-widest mb-3">
      PREMIUM FAST FOOD
    </p>

    <h1>
      Biggest Bites
    </h1>

    <h1 className="hero-accent">
      Happier Vibes
    </h1>

    <p className="hero-description">
      Fresh ingredients. Bold flavors. Crafted for food lovers like you.
    </p>

    {/* Buttons */}
    <div className="hero-actions">

      <button className="button" onClick={() => openWhatsApp()}>
        Order Now
      </button>

      <a className="button button--outline" href="/about"><Play size={15} fill="currentColor" />
        Watch Our Story
      </a>

    </div>
  </div>


  {/* Right Image */}
  <div className="hero-art">

    <OptimizedImage
      src="/image/hero-1024.jpg"
      alt="Premium Fast Food"
      width={1024}
      height={683}
      sizes="(max-width: 650px) 80vw, 50vw"
      eager
      className="hero-image" />

  </div>

  </Reveal>
  )
}
