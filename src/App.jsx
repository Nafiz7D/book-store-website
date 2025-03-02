import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";
import Banner from "./components/Banner/Banner";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import AllBooks from "./components/AllBooks/AllBooks";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar></Navbar>
        <Hero></Hero>
        <BestBooks></BestBooks>
        <Banner></Banner>
        <AppStoreBanner></AppStoreBanner>
        <AllBooks></AllBooks>
      </div>
    </>
  );
};

export default App;
