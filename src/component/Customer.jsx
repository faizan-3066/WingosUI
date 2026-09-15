import { menuItems } from '../data/menu'
import ProductCard from './ProductCard'
import { openWhatsApp } from '../utils/whatsapp'
import Reveal from './Reveal'

export default function Customer() {
  return <Reveal as="section" className="favorites-section"><div className="section-heading section-heading--dark"><p className="eyebrow">OUR BEST SELLERS</p><h2>Customer Favorites</h2><p>Handpicked items that keep our customers coming back.</p></div><div className="product-grid product-grid--favorites">{menuItems.slice(0, 4).map((item) => <ProductCard item={item} key={item.id} onOrder={openWhatsApp} />)}</div><div className="center-action"><a className="button button--outline-dark" href="/menu">View Full Menu <span aria-hidden="true">→</span></a></div></Reveal>
}