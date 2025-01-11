import MainSlider from "@/components/MainSlider/MainSlider";
import PlanSection from "@/components/plans/PlanSection";
import BonusSection from "@/components/Bonus/BonusSection";
import BlogSection from "@/components/blog/BlogSection";
import TermsAndConditionMainSection from "@/components/teemsAndConditions/TermsAndConditionMainSection";
import FAQ from '@/components/FAQ/FAQ';
import ReviewsSection from '@/components/reviews/ReviewsSection';
import ParralaxLogo from '@/components/parralaxLogo/parralaxLogo';
import React from 'react';

export default function Home() {
  return (
    <>
      <MainSlider />

      <PlanSection />
      <BonusSection />

      <BlogSection />

      <TermsAndConditionMainSection />
      <FAQ />

      <ReviewsSection />

      <>ببخش تماس با ما</>

      <>Footer</>
    </>
  );
}
