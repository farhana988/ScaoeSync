import Banner from "../components/home/banner/banner";
import Faq from "../components/home/faq/Faq";
import Feature from "../components/home/feature/feature";
import HeroSection from "../components/home/hero-section/HeroSection";
import Review from "../components/home/review/Review";

const Home = () => {
  return (
    <>
      <Banner />
      <HeroSection />
      <Feature/>
      <Review/>
      <Faq/>
    </>
  );
};

export default Home;
