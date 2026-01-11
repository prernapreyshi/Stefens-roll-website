import { Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-4 bg-[#FFF7F2]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT CONTENT */}
          <div className="flex-1 max-w-xl text-center md:text-left animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F28C63]/10 text-[#F28C63] rounded-full px-4 py-2 mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium text-gray-800">
                Guaranteed 20 Minutes Delivery
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Fresh Rolls,
              <br />
              <span className="text-gray-500">Delivered Fast</span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600">
              Discover a variety of delicious rolls, freshly prepared and
              delivered hot to your doorstep in just 20 minutes.
            </p>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex-1 flex justify-center animate-slide-up">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Peach Glow */}
              <div className="absolute inset-0 rounded-full bg-[#F28C63]/20 blur-3xl"></div>

              {/* Storyset SVG */}
              <img
                src="/food-delivery.svg"
                alt="Food delivery illustration"
                className="relative w-full h-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* Attribution */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <a
            href="https://storyset.com/food"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
