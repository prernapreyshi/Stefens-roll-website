import { Check, Clock, PartyPopper } from "lucide-react";

const OrderConfirmation = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      <div className="relative bg-card rounded-2xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
            <Check className="w-10 h-10 text-primary-foreground" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <PartyPopper className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-card-foreground">
              Order Placed!
            </h2>
            <PartyPopper className="w-6 h-6 text-primary transform scale-x-[-1]" />
          </div>

          <p className="text-muted-foreground mb-6">
            Thank you for your order!
          </p>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-3 text-accent">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">
                Your order will be delivered in 20 minutes
              </span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Our delivery partner is on the way with your delicious rolls.
            Get ready for a tasty treat!
          </p>

          <button
            onClick={onClose}
            className="w-full gradient-primary text-primary-foreground py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
