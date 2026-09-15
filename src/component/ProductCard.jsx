import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '../data/menu'
import OptimizedImage from './OptimizedImage'
import Reveal from './Reveal'

export default function ProductCard({ item, onOrder, onAddToCart }) {
  return (
    <Reveal as="article" className="product-card">
      <div className="product-image"><OptimizedImage src={item.image} alt={item.name} width={320} height={190} sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
      <div className="product-card__body">
        <p className="eyebrow">{item.category}</p>
        <h3>{item.name}</h3>
        <p className="product-description">{item.description}</p>
        <div className="product-card__footer">
          <strong>{formatPrice(item.price)}</strong>
          <div className="product-actions">
            {onAddToCart && <button className="icon-button" onClick={() => onAddToCart(item)} title="Add to cart" aria-label={`Add ${item.name} to cart`}><ShoppingBag size={16} /></button>}
            <button className="button button--small" onClick={() => onOrder(item.name)}>Order Now</button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}