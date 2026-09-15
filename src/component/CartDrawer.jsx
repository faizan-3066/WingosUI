import { X, Minus, Plus, ShoppingCart } from 'lucide-react'
import { formatPrice } from '../data/menu'
import { whatsappUrl } from '../utils/whatsapp'
import OptimizedImage from './OptimizedImage'

export default function CartDrawer({ cart, onClose, onChangeQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const message = cart.length
    ? `Hi, I'd like to order:\n${cart.map((item) => `${item.quantity}x ${item.name}`).join('\n')}\nTotal: ${formatPrice(total)}`
    : ''

  return (
    <div className="cart-overlay" role="dialog" aria-modal="true" aria-label="Your cart">
      <aside className="cart-drawer">
        <div className="cart-drawer__header"><div><p className="eyebrow">BITE HOUSE</p><h2>Your Cart</h2></div><button className="icon-button" onClick={onClose} aria-label="Close cart"><X /></button></div>
        {cart.length ? <div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><OptimizedImage src={item.image} alt="" width={76} height={65} sizes="76px" /><div><h3>{item.name}</h3><strong>{formatPrice(item.price * item.quantity)}</strong><div className="quantity"><button onClick={() => onChangeQuantity(item.id, -1)} aria-label="Decrease quantity"><Minus size={14} /></button><span>{item.quantity}</span><button onClick={() => onChangeQuantity(item.id, 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></div></div>)}</div> : <div className="cart-empty"><ShoppingCart size={34} /><p>Your cart is waiting for a good idea.</p></div>}
        <div className="cart-drawer__bottom"><div className="cart-total"><span>Total</span><strong>{formatPrice(total)}</strong></div><a className={`button button--full ${!cart.length ? 'button--disabled' : ''}`} href={cart.length ? whatsappUrl(message) : undefined} target="_blank" rel="noreferrer" onClick={!cart.length ? (event) => event.preventDefault() : undefined}>Checkout via WhatsApp</a></div>
      </aside>
    </div>
  )
}