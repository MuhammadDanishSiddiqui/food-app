import React from "react";
import AppStoreSection from "./AppStoreSection";
import Banner from "./Banner";
import PopularDishesSection from "./PopularDishes/PopularDishesSection";
import ReviewsSection from "./ReviewsSection";

const Home = () => {
  return (
    <>
      <Banner />
      <ReviewsSection />
      <AppStoreSection />
      <PopularDishesSection />
    </>
  );
};

export default Home;
