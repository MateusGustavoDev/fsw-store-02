"use client";
import { BadgeCategory } from "@/components/ui/badge-category";
import ProductItem from "@/components/ui/product-item";
import { CategoryName } from "@/helpers/category-name";
import { computeProductTotalPrice } from "@/helpers/product";
import { useProductsByCategory } from "@/hooks/get-products-by-category";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import { Pragati_Narrow } from "next/font/google";

export default function CategoryPage({ params }: any) {
  const { data } = useProductsByCategory(params.slug);

  const categoryIcons = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };

  return (
    <div className="px-5 w-full">
      <BadgeCategory>
        {categoryIcons[params.slug as keyof typeof categoryIcons]}
        {CategoryName[params.slug as keyof typeof CategoryName]}
      </BadgeCategory>
      <div className="flex flex-wrap gap-8 justify-center">
        {data?.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
}
