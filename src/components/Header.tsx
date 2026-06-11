import { IoSearch } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useEffect, useState } from "react";
const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();

  if (day >= 1 && day <= 5) {
    // Mon–Fri (10AM–7PM)
    return hour >= 10 && hour < 19;
  } else {
    // Sat–Sun (10AM–3PM)
    return hour >= 10 && hour < 15;
  }
};
export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(isOpenNow());

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen(isOpenNow());
    }, 60000); // update every 1 min

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* TOP BLACK BAR */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto ">
          <div className=" text-gray-300 text-xs py-2 px-2 flex justify-between">
            <div className="flex gap-2">
              <FaPhone color="#ff6900" /> Call: (719) 445-2808
            </div>
            <div className="flex gap-2">
              <FaLocationDot color="#ff6900" /> 4578 Marmora Road, Glasgow
            </div>
          </div>
        </div>
      </div>
      {/* HEADER */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white py-4 flex items-center justify-between px-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-orange-500 text-2xl">⚡</div>
          </div>

          {/* Info */}
          <div className="flex items-center gap-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="relative flex h-3 w-3">
                {/* Blinking effect */}
                {isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                )}

                {/* Solid dot */}
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 ${
                    isOpen ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </div>

              <span className={isOpen ? "text-green-600" : "text-red-600"}>
                {isOpen ? "Online" : "Offline"}
              </span>
            </div>
            <div className=" hidden md:flex gap-2 items-center">
              <div>
                <FaClock color="#ff6900" />
              </div>
              <div>Mon – Fri: 10AM – 7PM; <br></br> Sat – Sun: 10AM – 3PM</div>
            </div>
            <div className="hidden md:flex gap-2 items-center">
              <div>
                <FaPhone color="#ff6900" />
              </div>
              <div className="font-semibold">(719) 445-2808</div>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-yellow-400 px-5 py-2 text-sm font-semibold cursor-pointer"
          >
            MAKE AN APPOINTMENT
          </button>
          {open && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setOpen(false)}
            >
              {/* BOX */}
              <div
                className="bg-white w-full max-w-md p-6 rounded shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 text-gray-600 cursor-pointer"
                >
                  ✕
                </button>

                {/* TITLE */}
                <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>

                {/* FORM */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mb-3 px-3 py-2 border border-amber-600 rounded"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full mb-3 px-3 py-2 border border-amber-600 rounded"
                />

                <button className="w-full bg-orange-500 text-white py-2 rounded">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-orange-500 ">
        <div className="px-2 max-w-7xl mx-auto">
          <div className="md:flex justify-between items-center text-white h-14 hidden">
            <div className="md:flex gap-8 text-sm font-semibold  items-center hidden">
              <a className="bg-yellow-400 text-black px-3 py-2 cursor-pointer">
                HOME
              </a>
              <a className="cursor-pointer">ABOUT</a>
              <a className="cursor-pointer">PROJECTS</a>
              <a className="cursor-pointer">SERVICES</a>
              <a className="cursor-pointer">BLOG</a>
              <a className="cursor-pointer">CONTACTS</a>
            </div>
            <div className="text-lg cursor-pointer">
              <div className="relative">
                {/* SEARCH ICON */}
                <div
                  className="text-lg cursor-pointer"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <IoSearch />
                </div>

                {/* SEARCH BOX */}
                {searchOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-transparent shadow-lg border rounded p-3 z-50">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="w-full px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
