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
      {/* Overlay ONLY for drawer */}
      {!isPage && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onToggle}
        />
      )}

      <div
        className={`${
          isPage
            ? "relative w-full max-w-3xl mx-auto"
            : `fixed top-0 right-0 h-full w-full sm:w-96 z-50 transform transition-transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`
        } bg-card shadow-2xl`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Your Cart
            </h2>

            <button
              onClick={isPage ? onClose : onToggle}
              className="p-2 hover:bg-muted rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <p className="text-center text-muted-foreground">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 bg-secondary p-3 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg"
                    />

                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-primary">₹{item.price}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus />
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-destructive"
                    >
                      <Trash2 />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button
                onClick={onPlaceOrder}
                className="w-full mt-4 bg-accent text-white py-3 rounded-xl"
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
