import React from "react";
import { Star } from "lucide-react";

// ⭐ Testimonials Data
const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "INNOVENT's valuation support helped us secure funding with confidence. Their insights were clear, compliant, and aligned with investor expectations.",
    name: "Aarav Mehta",
    title: "Founder, FinEdge Capital",
    image: "https://placehold.co/100x100/171717/FFFFFF?text=A",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "The team at INNOVENT made our subsidy application process seamless. Their deep knowledge of government schemes saved us both time and money.",
    name: "Sneha Iyer",
    title: "Director, Vayun Industries",
    image: "https://placehold.co/100x100/303030/FFFFFF?text=S",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "From company incorporation in Dubai to ongoing compliance, INNOVENT handled everything end-to-end with precision. Highly recommended for global expansion.",
    name: "Rahul Bansal",
    title: "COO, Nexora Global",
    image: "https://placehold.co/100x100/1e1e1e/FFFFFF?text=R",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "They transformed our internal finance systems with their outsourced CFO service. Real-time insights, accurate reporting, and complete peace of mind.",
    name: "Meera Kapoor",
    title: "Head of Finance, Trivana Technologies",
    image: "https://placehold.co/100x100/222222/FFFFFF?text=M",
  },
];

// ⭐ Star Rating Component
const StarRating = ({ count }) => (
  <div className="flex space-x-1 mb-4">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="w-5 h-5 text-white fill-white" />
    ))}
  </div>
);

// ⭐ Individual Testimonial Card
const TestimonialCard = ({ data }) => {
  return (
    <div
      className="bg-[#121212] p-6 sm:p-8 rounded-[1rem] border border-zinc-800/80 w-full transition duration-300"
      style={{
        boxShadow: "0 4px 15px rgba(0,0,0,0.2), 0 0 10px rgba(10,10,10,0.1)",
      }}
    >
      <StarRating count={data.rating} />

      <p className="text-base sm:text-lg text-white mb-6 leading-relaxed sm:leading-normal">
        "{data.quote}"
      </p>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover bg-zinc-700 border border-zinc-600"
        />
        <div>
          <p className="text-white font-semibold text-sm sm:text-base">
            {data.name}
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

// ⭐ Main Testimonials Section
const Testimonials = () => {
  return (
    <section className="bg-[#050505] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-16 flex flex-col items-center">
      {/* Badge/Pill */}
      <div className="flex justify-center mb-5">
        <button className="text-sm font-semibold tracking-wider px-3 py-1 mb-8 sm:mb-10 border border-zinc-700 bg-[#0a0a0a] text-white/70 rounded-md">
          Testimonials
        </button>
      </div>

      {/* Main Heading */}
      <div className="w-full text-center sm:text-left mb-12 sm:mb-16 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight">
          What Our Clients Say About INNOVENT
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
          Real businesses, real growth — powered by strategic financial and
          compliance solutions.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
