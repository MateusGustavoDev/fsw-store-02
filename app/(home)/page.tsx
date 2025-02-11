'use client'
import Categories from '@/components/ui/categories'
import { ProductBanner } from './components/product-banner'
import { ProductList } from '@/components/ui/product-list'
import { BannerCarousel } from './components/banner-carousel'
import { mouses, keyboards, headphones } from '@/db'

export default function HomePage() {
  return (
    <>
      <div className="block md:hidden mt-7">
        <ProductBanner imageUrl="/banners/banner-home-01.png" alt="Até 55% de desconto esse mês" />
      </div>
      <div className="hidden md:block max-w-[1250px] w-full m-auto">
        <BannerCarousel />
      </div>
      <Categories />
      {mouses && <ProductList category="Mouses" products={mouses} />}

      <div className="block md:hidden">
        <ProductBanner imageUrl="/banners/banner-home-02.png" alt="Até 55% de desconto esse mês" />
      </div>

      <div className="max-w-[1250px] h-max max-md:hidden gap-6 w-full m-auto px-5 grid grid-cols-2">
        <div className="w-full">
          <ProductBanner imageUrl="/banners/banner-mouses.png" alt="Até 55% de desconto esse mês" />
        </div>
        <div className="w-full">
          <ProductBanner imageUrl="/banners/banner-fones.png" alt="Até 55% de desconto esse mês" />
        </div>
      </div>

      {keyboards && <ProductList category="Teclados" products={keyboards} />}
      <div className="block md:hidden">
        <ProductBanner imageUrl="/banners/banner-home-03.png" alt="Até 55% de desconto esse mês" />
      </div>
      <div className="hidden md:block max-w-[1250px] px-5 w-full my-10 m-auto">
        <ProductBanner imageUrl="/banners/banner-frete.png" alt="Até 55% de desconto esse mês" />
      </div>
      {headphones && <ProductList category="Fones" products={headphones} />}
    </>
  )
}
