import { Plus } from "lucide-react";

const RollCard = ({ roll, onAddToCart }) => {
  return (
    <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group animate-fade-in border border-border">
      <div className="relative overflow-hidden">
        <img
          src={roll.image}
          alt={roll.name}
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="mb-1.5">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {roll.category}
          </span>
        </div>

        <h3 className="text-base font-semibold text-card-foreground mb-1">
          {roll.name}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {roll.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">
            ₹{roll.price}
          </span>

          <button
            onClick={() => onAddToCart(roll)}
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-accent/90 transition-colors active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default RollCard;
