import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import OrderConfirmation from "@/components/OrderConfirmation";

const CartPage = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  // ✅ THESE TWO STATES ARE REQUIRED
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Update quantity
  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((i) => i.id !== id));
      return;
    }

    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity } : i
      )
    );
  };

  // Cart count
  const cartCount = cartItems.reduce(
    (sum, i) => sum + i.quantity,
    0
  );

  // Total amount
  const totalAmount = cartItems.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Header cartCount={cartCount} />

      {/* Page Content */}
      <main className="pt-[72px] flex-1 container mx-auto px-4 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        <Cart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={(id) =>
            setCartItems((prev) =>
              prev.filter((i) => i.id !== id)
            )
          }
          onPlaceOrder={() => setShowCheckout(true)}
          isPage
          onClose={() => navigate("/menu")}
        />
      </main>

      <Footer />

      {/* ✅ CHECKOUT MODAL */}
      <CheckoutModal
        isOpen={showCheckout}
        totalAmount={totalAmount}
        onClose={() => setShowCheckout(false)}
        onConfirm={() => {
          setShowCheckout(false);
          setShowConfirmation(true);
        }}
      />

      {/* ✅ ORDER CONFIRMATION MODAL */}
      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          setCartItems([]);
          navigate("/");
        }}
      />
    </div>
  );
};

export default CartPage;
