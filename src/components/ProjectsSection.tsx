// app/components/ProjectsSection.jsx

const projects = [
  {
    id: 1,
    title: "Heather Ln, Glasgow",
    category: "Garden,Home Maintenance,Painting",
    image:
      "https://images.unsplash.com/photo-1660330589693-99889d60181e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Central Str, New York",
    category: "Electrical,Garden",
    image:
      "https://plus.unsplash.com/premium_photo-1661929137248-2544fd28de13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Main Avn, London",
    category: "Garden,Home Maintenance,Painting",
    image:
      "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?q=80&w=639&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Hauptstrasse, Berlin",
    category: "Electrical,Heating",
    image:
      "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Green Str, Boston",
    category: "Garden,Home Maintenance,Painting",
    image:
      "https://plus.unsplash.com/premium_photo-1678766819678-35fc6c1f1170?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Hard Ln, Paris",
    category: "Heating,Home Maintenance,Painting",
    image:
      "https://plus.unsplash.com/premium_photo-1683134505842-507b0dde76b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold inline-block text-black px-4 py-1">
          Services
        </h2>
        <p className="text-gray-600 mt-4">
          We are proud to show you Services that were made with all our skills
          and professionalism.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((item) => (
          <div key={item.id} className="group">
            {/* Image Wrapper */}
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-orange-400/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">+</span>
              </div>
            </div>

            {/* Content */}
            <div className="text-center mt-4">
              <p className="text-gray-500 text-sm">{item.category}</p>
              <h3 className="text-lg font-medium mt-1">{item.title}</h3>

              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-semibold transition cursor-pointer">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
