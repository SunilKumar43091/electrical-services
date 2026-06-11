// app/components/CTA.jsx

export default function CTA() {
  return (
    <section className="bg-orange-500 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Content */}
        <div className="text-white">
          <p className="text-sm mb-2 opacity-90">
            Our experts will solve them in no time.
          </p>

          <h2 className="text-3xl md:text-5xl font-light">
            Have Any Housing Problems?
          </h2>
        </div>

        {/* Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 transition">
          MAKE AN APPOINTMENT
        </button>
      </div>
    </section>
  );
}