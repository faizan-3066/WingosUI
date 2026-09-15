import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Element = 'div', className = '', children }) {
  const elementRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <Element ref={elementRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</Element>
}