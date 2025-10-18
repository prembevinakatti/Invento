import React from "react";
import { Star } from "lucide-react";

// ⭐ Testimonials Data (Updated with placeholder images)
const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "INNOVENT's valuation support helped us secure funding with confidence. Their insights were clear, compliant, and aligned with investor expectations.",
    name: "Aarav Mehta",
    title: "Founder, FinEdge Capital",
    // Placeholder image
    image: "https://placehold.co/100x100/171717/FFFFFF?text=A",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "The team at INNOVENT made our subsidy application process seamless. Their deep knowledge of government schemes saved us both time and money.",
    name: "Sneha Iyer",
    title: "Director, Vayun Industries",
    // Placeholder image
    image: "https://placehold.co/100x100/303030/FFFFFF?text=S",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "From company incorporation in Dubai to ongoing compliance, INNOVENT handled everything end-to-end with precision. Highly recommended for global expansion.",
    name: "Rahul Bansal",
    title: "COO, Nexora Global",
    // Placeholder image
    image: "https://placehold.co/100x100/1e1e1e/FFFFFF?text=R",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "They transformed our internal finance systems with their outsourced CFO service. Real-time insights, accurate reporting, and complete peace of mind.",
    name: "Meera Kapoor",
    title: "Head of Finance, Trivana Technologies",
    // Placeholder image
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
  // Custom style for the card to match the exact corner radius and color
  return (
    <div
      className="bg-[#121212] p-8 rounded-[1rem] border border-zinc-800/80 w-full transition duration-300"
      // Added subtle shadow for depth, matching the design aesthetic
      style={{
        boxShadow: "0 4px 15px rgba(0,0,0,0.2), 0 0 10px rgba(10,10,10,0.1)",
      }}
    >
      <StarRating count={data.rating} />

      {/* Quote text styling is adjusted for the exact font size and line height */}
      <p className="text-lg text-white mb-6 leading-normal">"{data.quote}"</p>

      <div className="flex items-center space-x-4">
        {/* Client Image/Avatar */}
        <img
          src={data.image}
          alt={data.name}
          className="w-10 h-10 rounded-full object-cover bg-zinc-700 border border-zinc-600"
        />

        {/* Client Name and Title */}
        <div>
          <p className="text-white font-semibold text-base">{data.name}</p>
          <p className="text-zinc-400 text-sm">{data.title}</p>
        </div>
      </div>
    </div>
  );
};

// ⭐ Main Testimonials Section
const Testimonials = () => {
  return (
    // Background color changed to a deeper black, matching the screenshot
    <section className="bg-[#050505] text-white py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden flex flex-col items-center">
      {/* Badge/Pill (Matching the style from the screenshot's header) */}
      <div className="flex justify-center mb-5">
        <button className="text-sm font-semibold tracking-wider px-3 py-1 mb-10 border border-zinc-700 bg-[#0a0a0a] text-white/70 rounded-md">
          Testimonials
        </button>
      </div>

      {/* Main Heading and Subtext */}
      <div className="w-full text-left ml-36 sm:text-start mb-16">
        <h2 className="text-4xl sm:text-4xl font-extrabold mb-4 tracking-tight">
          What Our Clients Say About INNOVENT
        </h2>
        <p className="text-xl text-zinc-400">
          Real businesses, real growth — powered by strategic financial and
          compliance solutions.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
