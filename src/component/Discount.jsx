import { openWhatsApp } from '../utils/whatsapp'
import OptimizedImage from './OptimizedImage'
import Reveal from './Reveal'

export default function Discount() {
  return (
    <Reveal as="section" className="discount-section">

  {/* Left Content */}
  <div>

    <p className="eyebrow">
      SPECIAL OFFER
    </p>

    <p className="discount-title">
      Get <span className="text-[#FFCF62]">20% off</span>
    </p>

    <p className="discount-copy">
      On your first order. Because good food should always be a little extra.
    </p>

    <button className="button button--small" onClick={() => openWhatsApp('20% Off Your First Bite')}>
      Order Now
    </button>

  </div>

  {/* Right Image */}
  <div className="discount-art">
    <OptimizedImage
      src="/image/hero-1024.jpg"
      alt="Premium Fast Food"
      width={1024}
      height={683}
      sizes="(max-width: 650px) 40vw, 36vw"
      className="discount-image"
    />
  </div>

  </Reveal>
  )
}
