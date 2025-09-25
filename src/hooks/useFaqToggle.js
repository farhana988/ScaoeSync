import { useState } from "react";

const useFaqToggle = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return { openIndex, toggleFaq };
};

export default useFaqToggle;
