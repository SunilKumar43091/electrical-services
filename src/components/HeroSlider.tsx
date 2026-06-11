"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { MdOutlineKeyboardDoubleArrowRight,MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


export default function HeroSlider() {
  
  const slides = [
    {
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      title: "24/7 Emergency Services",
    },
    {
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      title: "Professional Electrical Solutions",
    },
  ];

  return (
    <div className="relative h-[600px] w-full">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        autoplay={{ delay: 2000 }}
        effect="fade"
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[600px] w-full z-10">

              {/* Background */}
              <img
                src={slide.img}
                className="absolute w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-10"></div>

              {/* Animated Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl font-light mb-4"
                >
                  {slide.title}
                </motion.h1>

                <motion.h4
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-2xl mt-3 font-light"
                >
                  Mobile No: +91719445-2808
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-sm"
                >
                  OUR EXPERTS WILL SOLVE THEM IN NO TIME.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 mt-6"
                >
                  <button className="bg-yellow-400 text-white px-6 py-3 text-sm font-semibold cursor-pointer">
                    NEED EMERGENCY SERVICES?
                  </button>

                  <button className="border border-white px-6 py-3 text-sm cursor-pointer">
                    MORE ABOUT US
                  </button>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM ARROWS */}
      <button className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow z-20 cursor-pointer flex items-center justify-center">
        <MdOutlineKeyboardDoubleArrowLeft className="text-xl" />
      </button>

      <button className="next-btn absolute right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow z-20 cursor-pointer flex justify-center items-center">
        <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
      </button>
    </div>
  );
}