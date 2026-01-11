import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import RollsGrid from "@/components/RollsGrid";
import Footer from "@/components/Footer";
import FloatingCartButton from "@/components/FloatingCartButton";
import { useToast } from "@/hooks/use-toast";

const Menu = ({ cartItems, setCartItems }) => {
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
      title: "Added to cart!",
      description: `${roll.name} added to cart`,
    });
  };

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-[72px]">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <RollsGrid
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />

        <Footer />
      </main>

      {/* ✅ REQUIRED */}
      <FloatingCartButton cartCount={cartCount} />
    </div>
  );
};

export default Menu;
