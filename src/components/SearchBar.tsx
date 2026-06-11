"use client";
import { useState } from "react";

const data = [
  "Electrical Upgrades",
  "Re-wiring",
  "Switcher Repair",
  "Lighting",
  "Troubleshooting",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto relative">
      
      <input
        type="text"
        placeholder="Search services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* RESULTS */}
      {query && (
        <div className="absolute w-full bg-white border mt-1 rounded shadow">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <div
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}