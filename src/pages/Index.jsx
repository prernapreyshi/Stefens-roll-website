import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import RollsGrid from "@/components/RollsGrid";
import Franchise from "@/components/Franchise";
import Footer from "@/components/Footer";
import FloatingCartButton from "@/components/FloatingCartButton";
import { useToast } from "@/hooks/use-toast";

const Index = ({ cartItems, setCartItems }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { toast } = useToast();

  const handleAddToCart = (roll) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === roll.id);

      if (existing) {
        return prev.map((item) =>
          item.id === roll.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...roll, quantity: 1 }];
    });

    toast({
      title: "Added to cart! 🎉",
      description: `${roll.name} added to cart`,
    });
  };

  // ✅ Total cart count
  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ✅ PASS cartCount TO HEADER */}
      <Header cartCount={cartCount} />

      <main className="pt-[72px]">
        <Hero />

        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <RollsGrid
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />

        <Franchise />
        <Footer />
      </main>

      {/* ✅ FLOATING CART FOR MOBILE */}
      <FloatingCartButton cartCount={cartCount} />
    </div>
  );
};

export default Index;
