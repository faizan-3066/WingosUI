import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import Nav from './component/Nav'
import Footer from './component/Footer'
import CartDrawer from './component/CartDrawer'
import Home from './pages/Home'
const Menu = lazy(() => import('./pages/Menu'))
const Offers = lazy(() => import('./pages/Offers'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const addToCart = (item) => setCart((current) => {
    const existing = current.find((entry) => entry.id === item.id)
    if (existing) return current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry)
    return [...current, { ...item, quantity: 1 }]
  })

  const changeQuantity = (id, amount) => setCart((current) => current.flatMap((item) => {
    if (item.id !== id) return [item]
    const quantity = item.quantity + amount
    return quantity > 0 ? [{ ...item, quantity }] : []
  }))

  const page = path === '/menu' ? <Menu onAddToCart={addToCart} />
    : path === '/offers' ? <Offers />
      : path === '/about' ? <About />
        : path === '/contact' ? <Contact />
          : <Home />

  return (
    <div className="app-shell">
      <Nav cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setCartOpen(true)} />
      <main key={path}><Suspense fallback={<div className="page-loading" aria-label="Loading page">Loading...</div>}>{page}</Suspense></main>
      <Footer />
      {cartOpen && <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onChangeQuantity={changeQuantity} />}
    </div>
  )
}

export default App
