import RollCard from "./RollCard";
import { rollsData, categories } from "@/data/rollsData";

const RollsGrid = ({ activeCategory, onAddToCart }) => {
  const filteredRolls =
    activeCategory === "all"
      ? rollsData
      : rollsData.filter((roll) => roll.category === activeCategory);

  // ✅ Get heading name from categories
  const activeCategoryObj = categories.find(
    (cat) => cat.id === activeCategory
  );

  const headingTitle = activeCategoryObj
    ? activeCategoryObj.name
    : "Rolls";

  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        {/* ✅ FIXED HEADING */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {headingTitle}
          </h2>
          <p className="text-muted-foreground mt-1">
            {filteredRolls.length} item
            {filteredRolls.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRolls.map((roll) => (
            <RollCard
              key={roll.id}
              roll={roll}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredRolls.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No rolls found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RollsGrid;
