import { motion as Motion } from "framer-motion";
const borderColors = [
  "rgba(59, 163, 52, 1)",
  "rgba(59, 163, 52, 0.7)",
  "rgba(59, 163, 52, 0.4)",
];
const FeatureCard = ({ feature, reverse }) => {
  const { label, title, points, img, des } = feature;
  const textAnim = {
    initial: { x: reverse ? -100 : 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };

  const imageAnim = {
    initial: { x: reverse ? 100 : -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };
  return (
    <div className="grid md:grid-cols-2 items-center gap-10">
      {/* Text */}
      <Motion.div
        {...textAnim}
        className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}
      >
        <span
          className="inline-block text-xs lg:text-sm font-semibold text-green 
          px-5 py-1 lg:py-[6px] rounded-[60px]
        border border-[#3BA334]"
        >
          {label}
        </span>
        <h3
          className="mt-[18px] text-xl lg:text-2xl font-bold text-[#0F172A] max-w-[448px] 
        "
        >
          {title}
        </h3>
        <p className="text-lGray mt-4 text-sm lg:text-lg max-w-[498px]">
          {des}
        </p>

        <ul className="space-y-3 lg:space-y-5 mt-5 lg:mt-8 text-[#0F172A] text-sm lg:text-lg">
          {points.map((p, i) => (
            <li key={i} className="flex items-start">
              <span
                className=" border-l-4 pl-[24px]"
                style={{ borderColor: borderColors[i % borderColors.length] }}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>
      </Motion.div>

      {/* Image */}
      <Motion.div
        {...imageAnim}
        className={`order-1 ${
          reverse ? "md:order-2" : "md:order-1"
        } flex justify-center relative`}
      >
        <img
          src={img}
          alt=""
          className="object-cover
          w-[410px] lg:w-[510px] xl:w-[610px] 
          h-[316px] lg:h-[416px] xl:h-[516px] "
        />

        <div
          className="absolute bottom-0 left-0 w-full h-[133px] bg-gradient-to-t
         from-white via-white/50 to-transparent"
        />
      </Motion.div>
    </div>
  );
};

export default FeatureCard;
