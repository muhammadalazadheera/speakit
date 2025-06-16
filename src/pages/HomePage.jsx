import Hero from "daisyui/components/hero";
import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import LanguageCategories from "../components/HomePage/LanguageCategories";
import StatsCard from "../components/HomePage/StatsCard";
import PopularTutors from "../components/HomePage/PopularTutors";
import PopularCourses from "../components/HomePage/PopularCourses";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsCard />
      <LanguageCategories />
      <PopularTutors />
      <PopularCourses />
    </div>
  );
}

export default HomePage;
