import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloatingCartButton = ({ cartCount }) => {
  const navigate = useNavigate();

  if (cartCount === 0) return null;

  return (
    <button
      onClick={() => navigate("/cart")}
      className="fixed bottom-6 right-6 z-50 bg-accent text-white p-4 rounded-full shadow-lg"
    >
      <ShoppingCart className="w-6 h-6" />
      <span className="absolute -top-2 -right-2 bg-white text-accent w-6 h-6 text-xs font-bold rounded-full flex items-center justify-center">
        {cartCount}
      </span>
    </button>
  );
};

export default FloatingCartButton;
