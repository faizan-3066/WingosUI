import { Search } from 'lucide-react'
import { useState } from 'react'
import { categories, menuItems } from '../data/menu'
import PageIntro from '../component/PageIntro'
import ProductCard from '../component/ProductCard'
import { openWhatsApp } from '../utils/whatsapp'

export default function Menu({ onAddToCart }) {
  const initialCategory = new URLSearchParams(window.location.search).get('category')
  const [category, setCategory] = useState(categories.some((item) => item.name === initialCategory) ? initialCategory : 'All')
  const [search, setSearch] = useState('')
  const visibleItems = menuItems.filter((item) => (category === 'All' || item.category === category) && item.name.toLowerCase().includes(search.toLowerCase()))
  return <>
    <PageIntro eyebrow="THE FULL BITE HOUSE MENU" title="Pick your perfect bite." >Every craving has a place here, from loaded burgers to cool drinks.</PageIntro>
    <section className="content-section menu-section">
      <div className="menu-toolbar"><div className="search-field"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the menu..." aria-label="Search menu" /></div><div className="category-tabs"><button className={category === 'All' ? 'active' : ''} onClick={() => setCategory('All')}>All</button>{categories.map((item) => <button className={category === item.name ? 'active' : ''} key={item.name} onClick={() => setCategory(item.name)}>{item.name}</button>)}</div></div>
      <div className="product-grid">{visibleItems.map((item) => <ProductCard item={item} key={item.id} onOrder={openWhatsApp} onAddToCart={onAddToCart} />)}</div>
      {!visibleItems.length && <div className="empty-state"><h2>No bites found</h2><p>Try another search or category.</p></div>}
    </section>
  </>
}