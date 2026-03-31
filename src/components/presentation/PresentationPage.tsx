"use client";

import { Loft, PresentationConfig } from "@/data/types";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import IncludedSection from "./IncludedSection";
import GallerySection from "./GallerySection";
import UpsellSection from "./UpsellSection";
import PriceSection from "./PriceSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

interface Props {
  config: PresentationConfig;
  loft: Loft;
}

export default function PresentationPage({ config, loft }: Props) {
  return (
    <div className="min-h-screen">
      <HeroSection config={config} loft={loft} />
      <AboutSection config={config} loft={loft} />
      <IncludedSection config={config} loft={loft} />
      <GallerySection loft={loft} />
      <UpsellSection config={config} />
      <PriceSection config={config} loft={loft} />
      <CTASection config={config} loft={loft} />
      <Footer loft={loft} />
    </div>
  );
}
