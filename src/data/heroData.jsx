import { BiLineChartDown } from "react-icons/bi";
import { IoShieldOutline } from "react-icons/io5";
import { LuCalendarCheck } from "react-icons/lu";
import { MdMyLocation } from "react-icons/md";

export const heroData = [
  {
    id: 1,
    icon: <LuCalendarCheck className="" />,
    title: "Easy Service Booking",
    desc: "Streamlined booking process for clients with service catalogs and availability.",
  },
  {
    id: 2,
    icon: <MdMyLocation className="" />,
    title: "Real-Time Tracking",
    desc: "Monitor job progress, employee hours, and project timelines with live updates.",
  },
  {
    id: 3,
    icon: <BiLineChartDown className="" />,
    title: "Performance Analytics",
    desc: "Comprehensive reporting and insights to improve operations and efficiency.",
  },
  {
    id: 4,
    icon: <IoShieldOutline className="" />,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
  },
];
