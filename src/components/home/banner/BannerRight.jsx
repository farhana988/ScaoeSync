import banner from "../../../assets/images/banner.png";
import { motion as Motion } from "framer-motion";
const BannerRight = () => {
  return (
    <Motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }} 
      className="md:absolute -right-8 lg:-right-16 xl:-right-[120px] mb-10 md:mb-0"
    >
      <img
        src={banner}
        alt="App Preview"
        className="w-[420px] lg:w-[620px] xl:w-[720px] 
        h-[356px] lg:h-[556px] x:h-[656px] object-contain "
      />
    </Motion.div>
  );
};

export default BannerRight;
