import ReviewCard from "../../cards/ReviewCard";
import { reviewData } from "../../../data/reviewData";
import SectionHeader from "../../shared/common/SectionHeader";

const Review = () => {
  return (
    <section className="pt-20 lg:pt-32 xl:pt-[170px]">
      <SectionHeader
        title="What Our Users Are Saying"
        subtitle="Real stories from clients, employees, and business owners who use our app every day."
      />
      <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviewData.map((testimonial) => (
          <ReviewCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Review;
