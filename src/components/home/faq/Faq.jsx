import { useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const faqs = [
  {
    q: "Is the app free to use?",
    a: "Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.",
  },
  {
    q: "Can I assign multiple employees to one job?",
    a: "Absolutely. You can assign as many employees as needed for each job.",
  },
  {
    q: "Does it work on both mobile and desktop?",
    a: "Yes, our app is fully responsive and works across all devices.",
  },
];
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className=" py-20">
      {/* FAQ */}
      <div className="container mx-auto px-6 mt-24">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Quick answers to help you get the most out of our app."
        />

        <div className="mt-10 max-w-[995px] mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div
              className="border border-[#C7E6C5] rounded-[16px] p-[24px] "
              key={i}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-dGray">{f.q}</span>
                {openIndex === i ? (
                  <AiOutlineMinus className="opacity-80 text-xs" />
                ) : (
                  <AiOutlinePlus className="opacity-80 text-xs" />
                )}
              </button>
              {openIndex === i && (
                <p className="pb-5 text-lGray text-sm pl-10 mt-[24px]">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
