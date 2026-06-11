import { GiElectricalResistance } from "react-icons/gi";
import { RiWirelessChargingLine } from "react-icons/ri";
import { AiFillSwitcher } from "react-icons/ai";


const services = [
  {
    icon: <GiElectricalResistance size={35}/>,
    title: "Electrical Upgrades",
    desc: "Electricity is very important part of our life...",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  },
  {
    icon: <RiWirelessChargingLine size={35} />,
    title: "Re-wiring",
    desc: "Plumbing is such a sphere in our houses...",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    icon: <AiFillSwitcher size={35} />,
    title: "Switcher repair",
    desc: "We have experience in painting any surface...",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    icon: <GiElectricalResistance size={35}/>,
    title: "Electrical Upgrades",
    desc: "Electricity is very important part of our life...",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
  },
  {
    icon: <RiWirelessChargingLine size={35} />,
    title: "Re-wiring",
    desc: "Plumbing is such a sphere in our houses...",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    icon: <AiFillSwitcher size={35} />,
    title: "Switcher repair",
    desc: "We have experience in painting any surface...",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
];
export default function CardServices() {
  return (
    <div>
   <div className="max-w-7xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
    {services.map((item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden bg-white p-10 text-center shadow-md "
    >
      
      {/* IMAGE (hidden by default) */}
      <img
        src={item.image}
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
      />

      {/* ORANGE OVERLAY */}
      <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-90 transition duration-500"></div>

      {/* CONTENT */}
      <div className="relative z-10 transition duration-500 group-hover:text-white">
        
        <div className="w-16 h-16 mx-auto bg-orange-500 group-hover:bg-white rounded-full flex items-center justify-center text-white group-hover:text-orange-500 text-xl">
          {item.icon}
        </div>

        <h3 className="mt-6 font-semibold text-lg">
          {item.title}
        </h3>

        <p className="text-sm mt-3 text-gray-500 group-hover:text-white">
          {item.desc}
        </p>

      </div>
    </div>
  ))}

</div>
    </div>
  );
}
