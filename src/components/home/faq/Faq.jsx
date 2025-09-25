import SectionHeader from "../../shared/SectionHeader";
import useFaqToggle from "../../../hooks/useFaqToggle";
import { faqData } from "../../../data/faqData";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  const { openIndex, toggleFaq } = useFaqToggle();
  return (
    <section className="pt-[170px]">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Quick answers to help you get the most out of our app."
      />

      <div className="mt-[60px] max-w-[995px] mx-auto space-y-4">
        {faqData.map((f, i) => (
          <FaqAccordion
            key={i}
            question={f.q}
            answer={f.a}
            isOpen={openIndex === i}
            onClick={() => toggleFaq(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
