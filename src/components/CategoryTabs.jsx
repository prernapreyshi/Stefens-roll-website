import { categories } from "@/data/rollsData";

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="sticky top-[72px] z-40 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full
                text-sm font-medium whitespace-nowrap transition-all
                ${
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                }
              `}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
