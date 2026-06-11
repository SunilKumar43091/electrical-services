// app/components/Footer.jsx

import { Phone, MapPin, Mail } from "lucide-react";
const galleryImages = [
  "https://images.unsplash.com/photo-1564943608180-39066aa78292?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682086494688-8d751a599dd5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1731694405771-59fe834eef4c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1723780824510-354af0484373?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const getCurrentDate = () => {
  return new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const posts = [
  {
    id: 1,
    title: "Do not touch bare wires!",
    date: getCurrentDate(),
    image: "https://plus.unsplash.com/premium_photo-1683127814960-3a97c4f0d882?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Tips for being a superman...",
    date: getCurrentDate(),
    image: "https://plus.unsplash.com/premium_photo-1678766818837-e6fc664c08ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Safe during season’s work",
    date: getCurrentDate(),
    image: "https://images.unsplash.com/photo-1754666104618-3e0655f5fa7c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Footer() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-orange-500 py-8 px-2">
        <div className="max-w-7xl mx-auto md:flex justify-between gap-6 text-white">
          {/* Phone */}
          <div className="flex items-center gap-4 md:mb-0 mb-6">
            <div className="bg-white p-4 rounded-full">
              <Phone color="#ff6900" />
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-sm">(719) 445-2808; (719) 445-2809</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 md:mb-0 mb-6">
            <div className="bg-white p-4 rounded-full">
              <MapPin color="#ff6900" />
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-sm">4578 Marmora Road, Glasgow</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 md:mb-0 mb-6">
            <div className="bg-white p-4 rounded-full">
              <Mail color="#ff6900" />
            </div>
            <div>
              <p className="font-semibold">E-mail:</p>
              <p className="text-sm underline">info@demolink.org</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-[#1c1c24] text-gray-300 py-14 px-2">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <p className="text-sm leading-6">
              JohnnyGo is a large company with more than 10 years of experience
              in helping people with their house problems and malfunctions.
              During our work we helped a huge number of people and have
              garnered a reputation as a stable company with a team of real
              skilled experts who don't fear any difficulties.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Electrical",
                "Plumbing",
                "Heating",
                "Painting",
                "Garden",
                "Home Maintenance",
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recent Post</h3>

            {posts.map((post) => (
              <div key={post.id} className="flex gap-3 mb-4">
                <img
                  src={`${post.image}?w=100&h=100&fit=crop&auto=format`}
                  alt={post.title}
                  className="w-14 h-14 object-cover"
                />

                <div>
                  <p className="text-sm text-white hover:text-orange-400 cursor-pointer transition">
                    {post.title}
                  </p>

                  <p className="text-xs text-orange-400">
                    admin &nbsp; {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-white font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-2 gap-2">
              {galleryImages.map((img, index) => (
                <img
                  key={index}
                  src={`${img}?w=300&h=200&fit=crop`}
                  alt="gallery"
                  className="w-full h-20 object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm max-w-7xl mx-auto">
          <p>© Zemez. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">f</span>
            <span className="hover:text-white cursor-pointer">t</span>
            <span className="hover:text-white cursor-pointer">yt</span>
            <span className="hover:text-white cursor-pointer">ig</span>
          </div>
        </div>
      </footer>
    </>
  );
}
