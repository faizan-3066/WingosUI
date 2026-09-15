import PageIntro from '../component/PageIntro'
import { offers, formatPrice } from '../data/menu'
import { openWhatsApp } from '../utils/whatsapp'
import OptimizedImage from '../component/OptimizedImage'
import Reveal from '../component/Reveal'

export default function Offers() {
  return <><PageIntro eyebrow="MORE BITE FOR YOUR BUCK" title="Good deals. Great company.">Combos, discounts and limited-time reasons to make tonight delicious.</PageIntro><section className="content-section"><div className="offer-grid">{offers.map((offer) => <Reveal as="article" className="offer-card" key={offer.id}><div className="offer-card__image"><OptimizedImage src={offer.image} alt={offer.title} width={640} height={480} sizes="(max-width: 650px) 100vw, 40vw" /></div><div><p className="eyebrow">LIMITED OFFER</p><h2>{offer.title}</h2><p>{offer.description}</p>{offer.price && <strong className="offer-price">{formatPrice(offer.price)}</strong>}<button className="button" onClick={() => openWhatsApp(offer.title)}>Order Now</button></div></Reveal>)}</div></section></>
}