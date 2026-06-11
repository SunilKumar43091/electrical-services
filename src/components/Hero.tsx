// app/page.tsx
"use client";
import HeroSlider from "./HeroSlider";
import CardServices from "./CardServices";
export default function Hero() {
  return (
    <div className="font-sans">
      {/* HERO SECTION */}
      <HeroSlider />
      {/* CARDS SECTION */}
      <div className="bg-gray-100 pt-20 px-6 relative z-20 ">
       <CardServices/>
         <div className="w-full  mt-12">
        <img
          src="https://ld-wp73.template-help.com/wordpress/prod_10685/v1/wp-content/uploads/2020/10/home-electric-4.jpg" // put your image in public folder
          alt="Bottom Visual"
          className="w-full h-auto object-cover"
        />
      </div>
      </div>
    </div>
  );
}
