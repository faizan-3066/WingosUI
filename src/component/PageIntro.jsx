import Reveal from './Reveal'
import OptimizedImage from './OptimizedImage'

export default function PageIntro({ eyebrow, title, children }) {
  return <Reveal as="section" className="page-intro"><div className="page-intro__copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children && <p>{children}</p>}</div><div className="page-intro__art"><OptimizedImage src="/image/hero-1024.jpg" alt="Bite House signature burger, fries and drink" width={1024} height={683} sizes="(max-width: 650px) 72vw, 42vw" /></div></Reveal>
}