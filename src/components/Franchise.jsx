import { useState } from "react";
import { CheckCircle } from "lucide-react";

const Franchise = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-5xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Own a Stefens Rolls Franchise
        </h2>

        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          Start your own food business with minimal investment and strong brand
          support from Stefens Rolls.
        </p>

        {/* Info Card */}
        <div className="mt-10 bg-card border border-border rounded-2xl p-8 shadow-soft">

          {/* Price */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">
                Franchise Cost
              </h3>
              <p className="text-muted-foreground">
                One-time onboarding fee
              </p>
            </div>

            <div className="text-3xl font-bold text-accent">
              ₹6,000/-
            </div>
          </div>

          {/* Benefits */}
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "QuickRolls brand & logo usage",
              "Complete menu & pricing support",
              "Marketing & promotional guidance",
              "Low investment, high profit model",
              "Training & setup assistance",
              "Pan-India expansion opportunity",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition"
            >
              Apply for Franchise
            </button>
          </div>
        </div>

        {/* ================= FORM SECTION ================= */}
        {showForm && (
          <div className="mt-12 bg-card border border-border rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-semibold mb-6">
              Franchise Application Form
            </h3>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-lg font-medium">
                  Thank you! Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  required
                  placeholder="Full Name"
                  className="input"
                />

                <input
                  required
                  placeholder="Mobile Number"
                  className="input"
                />

                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="input"
                />

                <input
                  required
                  placeholder="City"
                  className="input"
                />

                <select required className="input md:col-span-2">
                  <option value="">Investment Range</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 – ₹2,00,000</option>
                  <option>₹2,00,000+</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Why do you want to partner with QuickRolls?"
                  className="input md:col-span-2"
                />

                <button
                  type="submit"
                  className="md:col-span-2 mt-4 bg-accent text-accent-foreground py-3 rounded-lg font-medium hover:opacity-90"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Franchise;
