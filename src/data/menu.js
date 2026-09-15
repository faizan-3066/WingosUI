export const categories = [
  { name: 'Burger', image: '/image/burger-640.jpg', note: 'Juicy & loaded' },
  { name: 'Pizza', image: '/image/pizza-640.jpg', note: 'Cheesy & delicious' },
  { name: 'Chicken', image: '/image/chicken-640.jpg', note: 'Crispy & tasty' },
  { name: 'Fries', image: '/image/fries-640.jpg', note: 'Golden & crunchy' },
  { name: 'Wraps', image: '/image/wraps-640.jpg', note: 'Fresh & filling' },
  { name: 'Drinks', image: '/image/drinks-640.jpg', note: 'Cool & refreshing' },
]

export const menuItems = [
  { id: 'classic-beef-burger', category: 'Burger', name: 'Classic Beef Burger', description: 'Juicy beef, fresh veggies and our signature sauce.', price: 7.99, image: '/image/burger-640.jpg' },
  { id: 'smoky-bbq-burger', category: 'Burger', name: 'Smoky BBQ Burger', description: 'Grilled beef, smoky BBQ glaze and crispy onions.', price: 8.99, image: '/image/burger-640.jpg' },
  { id: 'pepperoni-pizza', category: 'Pizza', name: 'Pepperoni Pizza', description: 'Loaded with stretchy cheese and spicy pepperoni.', price: 8.99, image: '/image/pizza-640.jpg' },
  { id: 'garden-feast-pizza', category: 'Pizza', name: 'Garden Feast Pizza', description: 'Roasted peppers, mushrooms, olives and mozzarella.', price: 8.49, image: '/image/pizza-640.jpg' },
  { id: 'crispy-chicken-wings', category: 'Chicken', name: 'Crispy Chicken Wings', description: 'Crunchy wings tossed in a spicy signature sauce.', price: 6.99, image: '/image/chicken-640.jpg' },
  { id: 'golden-chicken-tenders', category: 'Chicken', name: 'Golden Chicken Tenders', description: 'Tender chicken strips with a crisp golden coating.', price: 7.49, image: '/image/chicken-640.jpg' },
  { id: 'loaded-fries', category: 'Fries', name: 'Loaded Fries', description: 'Crispy fries with cheese, herbs and delicious sauces.', price: 5.99, image: '/image/fries-640.jpg' },
  { id: 'classic-fries', category: 'Fries', name: 'Classic Fries', description: 'Golden, crunchy and seasoned just right.', price: 3.49, image: '/image/fries-640.jpg' },
  { id: 'crispy-chicken-wrap', category: 'Wraps', name: 'Crispy Chicken Wrap', description: 'Crispy chicken, greens and creamy house dressing.', price: 6.49, image: '/image/wraps-640.jpg' },
  { id: 'spicy-beef-wrap', category: 'Wraps', name: 'Spicy Beef Wrap', description: 'Seasoned beef, crunchy salad and a spicy kick.', price: 6.99, image: '/image/wraps-640.jpg' },
  { id: 'fizzy-cola', category: 'Drinks', name: 'Fizzy Cola', description: 'An ice-cold classic to complete your bite.', price: 1.99, image: '/image/drinks-640.jpg' },
  { id: 'mango-chill', category: 'Drinks', name: 'Mango Chill', description: 'Bright, tropical and perfectly refreshing.', price: 2.99, image: '/image/drinks-640.jpg' },
]

export const offers = [
  { id: 'bite-house-combo', title: 'The Bite House Combo', description: 'Classic Beef Burger, fries and a chilled drink for a full-on feast.', price: 11.99, image: '/image/burger-640.jpg' },
  { id: 'pizza-party', title: 'Pizza Party', description: 'Two loaded pizzas made for sharing, with extra cheese on us.', price: 15.99, image: '/image/pizza-640.jpg' },
  { id: 'wing-night', title: 'Wing Night', description: 'Get a generous box of crispy wings and a dipping sauce.', price: 9.99, image: '/image/chicken-640.jpg' },
  { id: 'first-bite-discount', title: '20% Off Your First Bite', description: 'New here? Enjoy 20% off your first order at Bite House.', price: null, image: '/image/hero-1024.jpg' },
]

export const formatPrice = (price) => `$${price.toFixed(2)}`