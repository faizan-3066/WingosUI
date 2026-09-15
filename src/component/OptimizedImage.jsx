function imageName(source) {
  return source.replace(/^\//, '').replace(/\.[^.]+$/, '').replace(/-\d+$/, '')
}

function srcSet(base, extension, widths) {
  return widths.map((width) => `/${base}-${width}.${extension} ${width}w`).join(', ')
}

export default function OptimizedImage({ src, alt, width, height, sizes = '100vw', widths = [320, 640, 960], eager = false, className = '' }) {
  const base = imageName(src)
  const isHero = base.endsWith('hero')
  const imageWidths = isHero ? [640, 1024] : widths
  const fallbackExtension = isHero ? 'png' : 'jpg'
  const loading = eager ? 'eager' : 'lazy'

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet(base, 'webp', imageWidths)} sizes={sizes} />
      <img
        src={`/${base}-640.${fallbackExtension}`}
        srcSet={srcSet(base, fallbackExtension, imageWidths)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        className={className}
      />
    </picture>
  )
}