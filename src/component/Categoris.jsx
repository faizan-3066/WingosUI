import { categories } from '../data/menu'
import OptimizedImage from './OptimizedImage'
import Reveal from './Reveal'

export default function Categoris() {
  return (
    <Reveal as="section" className="category-section"><div className="section-heading"><p className="eyebrow">OUR NEW</p><h2>Popular Categories</h2></div><div className="category-grid">{categories.map((category) => <a className="category-card" href={`/menu?category=${category.name}`} key={category.name}><OptimizedImage src={category.image.replace('.png', '.jpg')} alt={category.name} width={320} height={320} sizes="(max-width: 650px) 30vw, (max-width: 900px) 28vw, 15vw" /><strong>{category.name}</strong><span>{category.note}</span></a>)}</div></Reveal>
  )
}
