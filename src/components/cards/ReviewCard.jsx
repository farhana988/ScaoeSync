import quote from "../../assets/images/review/quote.png";
import { motion as Motion } from "framer-motion";
const ReviewCard = ({ testimonial }) => {
  const { name, role, text, image } = testimonial;
  return (
    <Motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-white rounded-[22px] p-[28px] text-left hover:shadow-md transition"
      style={{ boxShadow: "0px 16px 32px -4px rgba(146, 42, 145, 0.1)" }}
    >
      <div className="flex items-center space-x-4 mb-[26px]">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-dGray">{name}</h4>
          <p className="text-lGray text-sm">{role}</p>
        </div>
      </div>
      <div className="relative">
        <img
          src={quote}
          alt="quote"
          className="absolute z-0 -left-3 -top-6 w-[64px] h-[52px]"
        />
        <p className="text-lGray relative z-10">{text}</p>
      </div>
    </Motion.div>
  );
};

export default ReviewCard;
