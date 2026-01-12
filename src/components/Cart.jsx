import { ShoppingCart, Minus, Plus, X, Trash2 } from "lucide-react";

const Cart = ({
  items,
  isOpen = true,
  onToggle,
  onUpdateQuantity,
  onRemoveItem,
  onPlaceOrder,
  isPage = false,
  onClose,
}) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* ✅ Overlay (does NOT block cart clicks) */}
      {!isPage && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 touch-none"
          onClick={onToggle}
        />
      )}

      {/* ✅ Cart Container */}
      <div
        className={`${
          isPage
            ? "relative w-full max-w-3xl mx-auto"
            : `fixed top-0 right-0 h-full w-full sm:w-96 z-50
               transform transition-transform duration-300
               ${isOpen ? "translate-x-0" : "translate-x-full"}`
        }
        bg-card shadow-2xl pointer-events-auto`}
      >
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Your Cart
            </h2>

            <button
              onClick={isPage ? onClose : onToggle}
              className="h-10 w-10 flex items-center justify-center rounded-full
                         hover:bg-muted active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Your cart is empty
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-secondary p-3 rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-primary font-semibold">₹{item.price}</p>

                    {/* ✅ Mobile-safe quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-9 w-9 flex items-center justify-center
                                   rounded-full bg-muted active:scale-95"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="min-w-[20px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-9 w-9 flex items-center justify-center
                                   rounded-full bg-muted active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Delete */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="h-9 w-9 flex items-center justify-center
                               rounded-full text-destructive
                               hover:bg-destructive/10 active:scale-95"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              {/* ✅ Mobile-friendly CTA */}
              <button
                onClick={onPlaceOrder}
                className="w-full h-12 bg-accent text-white
                           rounded-xl font-semibold
                           active:scale-[0.98]"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
