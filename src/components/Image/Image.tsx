import { LazyLoadImage } from 'react-lazy-load-image-component'

export interface IImage {
  src: string
  alt: string
  width?: string
  height?: string
  className?: string
}

export function Image({
  src,
  alt,
  width,
  height,
  className,
}: IImage): JSX.Element {
  const isExternal = src.includes('http')

  return isExternal ? (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  ) : (
    <LazyLoadImage
      src={`/${src}`}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  )
}
