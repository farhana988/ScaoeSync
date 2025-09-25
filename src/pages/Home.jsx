import Banner from "../components/home/banner/banner";
import Faq from "../components/home/faq/Faq";
import HeroSection from "../components/home/hero-section/HeroSection";
import Review from "../components/home/review/Review";

const Home = () => {
  return (
    <>
      <Banner />
      <HeroSection />
      <Review/>
      <Faq/>
    </>
  );
};

export default Home;
