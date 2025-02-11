import Image from 'next/image'

interface ProductBannerProps {
  imageUrl: string
  alt: string
}

export function ProductBanner({ imageUrl, alt }: ProductBannerProps) {
  return (
    <div>
      <Image src={imageUrl} width={0} height={0} alt={alt} className="h-auto w-full" sizes="100vw" />
    </div>
  )
}
