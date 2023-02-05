import React from "react";
import AppStoreSection from "./AppStoreSection";
import Banner from "./Banner";
import CategoriesSection from "./Categories/CategoriesSection";
import PopularDishesSection from "./PopularDishes/PopularDishesSection";
import ReviewsSection from "./ReviewsSection";
import SliderSection from "./SliderSection/SliderSection";

const Home = () => {
  return (
    <>
      <Banner />
      <ReviewsSection />
      <AppStoreSection />
      <PopularDishesSection />
      <CategoriesSection />
      <SliderSection />
    </>
  );
};

export default Home;
