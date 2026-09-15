const phoneNumber = '923001234567'

export function whatsappUrl(message) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

export function orderUrl(itemName) {
  return whatsappUrl(itemName ? `Hi, I'd like to order: ${itemName}` : "Hi, I'd like to place an order")
}

export function openWhatsApp(itemName) {
  window.open(orderUrl(itemName), '_blank', 'noopener,noreferrer')
}

export function contactUrl() {
  return whatsappUrl("Hello, I'd like to know more about Bite House")
}