import { Menu as MenuIcon, Search, ShoppingCart, User, X } from 'lucide-react'
import { useState } from 'react'
import { openWhatsApp } from '../utils/whatsapp'

export default function Nav({ cartCount = 0, onCartClick }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const links = [['Home', '/'], ['Menu', '/menu'], ['About', '/about'], ['Offers', '/offers'], ['Contact', '/contact']]

  return (
    <header className="site-header">
      <a href="/" className="brand">Bite <span>House</span></a>
      <button className="mobile-toggle icon-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <MenuIcon />}</button>
      <nav className={`site-nav ${mobileOpen ? 'site-nav--open' : ''}`}>{links.map(([label, href]) => <a href={href} key={href} onClick={() => setMobileOpen(false)}>{label}</a>)}</nav>
      <div className="header-actions"><a className="header-icon" href="/menu" title="Search menu" aria-label="Search menu"><Search size={18} /></a><button className="header-icon cart-trigger" onClick={onCartClick} title="Open cart" aria-label={`Open cart, ${cartCount} items`}><ShoppingCart size={18} />{cartCount > 0 && <span>{cartCount}</span>}</button><button className="header-icon" title="Account" aria-label="Account"><User size={18} /></button><button className="button button--small header-order" onClick={() => openWhatsApp()}>Order Now</button></div>
    </header>
  )
}
