import { X } from "lucide-react";
import { useState } from "react";

const CheckoutModal = ({ isOpen, onClose, onConfirm, totalAmount }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cod");

  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!name || !mobile || !address) {
      alert("Please fill all delivery details");
      return;
    }

    if (mobile.length !== 10) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    if (payment === "upi" && !upiId) {
      alert("Enter UPI ID");
      return;
    }

    if (
      payment === "card" &&
      (!card.number || !card.expiry || !card.cvv)
    ) {
      alert("Fill all card details");
      return;
    }

    onConfirm({
      name,
      mobile,
      address,
      payment,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4">Checkout</h2>

        {/* NAME */}
        <input
          className="w-full border rounded-lg p-3 mb-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* MOBILE */}
        <input
          className="w-full border rounded-lg p-3 mb-3"
          placeholder="Mobile Number"
          maxLength={10}
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        {/* ADDRESS */}
        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          rows="3"
          placeholder="Full Delivery Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* PAYMENT METHOD */}
        <h3 className="font-semibold mb-2">Payment Method</h3>

        <div className="space-y-2 mb-4">
          <label className="flex gap-2 items-center">
            <input
              type="radio"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
            Cash on Delivery
          </label>

          <label className="flex gap-2 items-center">
            <input
              type="radio"
              checked={payment === "upi"}
              onChange={() => setPayment("upi")}
            />
            UPI
          </label>

          <label className="flex gap-2 items-center">
            <input
              type="radio"
              checked={payment === "card"}
              onChange={() => setPayment("card")}
            />
            Card
          </label>
        </div>

        {/* UPI DETAILS */}
        {payment === "upi" && (
          <input
            className="w-full border rounded-lg p-3 mb-3"
            placeholder="UPI ID (example@upi)"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        )}

        {/* CARD DETAILS */}
        {payment === "card" && (
          <div className="space-y-3 mb-3">
            <input
              className="w-full border rounded-lg p-3"
              placeholder="Card Number"
              value={card.number}
              onChange={(e) =>
                setCard({ ...card, number: e.target.value })
              }
            />
            <div className="flex gap-3">
              <input
                className="w-1/2 border rounded-lg p-3"
                placeholder="MM/YY"
                value={card.expiry}
                onChange={(e) =>
                  setCard({ ...card, expiry: e.target.value })
                }
              />
              <input
                className="w-1/2 border rounded-lg p-3"
                placeholder="CVV"
                value={card.cvv}
                onChange={(e) =>
                  setCard({ ...card, cvv: e.target.value })
                }
              />
            </div>
          </div>
        )}

        {/* TOTAL */}
        <p className="font-semibold mb-4">
          Total Amount: ₹{totalAmount}
        </p>

        <button
          onClick={handleConfirm}
          className="w-full bg-accent text-white py-3 rounded-lg font-semibold"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
