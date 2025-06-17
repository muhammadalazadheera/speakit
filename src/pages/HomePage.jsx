import Hero from "daisyui/components/hero";
import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import LanguageCategories from "../components/HomePage/LanguageCategories";
import StatsCard from "../components/HomePage/StatsCard";
import PopularTutors from "../components/HomePage/PopularTutors";
import PopularCourses from "../components/HomePage/PopularCourses";
import { useLoaderData } from "react-router";
import NewsletterSection from "../components/HomePage/Sunscriction";

function HomePage() {
  const { message } = useLoaderData()
  return (
    <div>
      <HeroSection />
      <StatsCard tutorials={message} />
      <LanguageCategories />
      <PopularTutors tutorials={message} />
      <NewsletterSection></NewsletterSection>
    </div>
  );
}

export default HomePage;
