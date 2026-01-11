import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import RollsGrid from "@/components/RollsGrid";
import Footer from "@/components/Footer";
import { useState } from "react";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <>
      <Header />
      <Hero />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <RollsGrid activeCategory={activeCategory} />
      <Footer />
    </>
  );
};

export default Home;
