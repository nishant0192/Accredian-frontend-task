import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = [
    {
      name: "Eligibility",
      questions: [
        {
          question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
          answer:
            "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
        },
        {
          question: "What is the minimum system configuration required?",
          answer:
            "Yes, non-residents can also participate, provided they meet the program's eligibility requirements.",
        },
      ],
    },
    {
      name: "How to Use?",
      questions: [
        {
          question: "How do I use the referral code?",
          answer:
            "To use the referral code, enter it in the referral code field during the sign-up process.",
        },
        {
          question: "Can I share my referral code on social media?",
          answer:
            "Yes, you can share your referral code on social media and invite your friends to join.",
        },
      ],
    },
    {
      name: "Terms & Conditions",
      questions: [
        {
          question: "What are the terms and conditions?",
          answer:
            "The terms and conditions of the program can be found on our official website.",
        },
        {
          question: "Where can I read the full terms and conditions?",
          answer:
            "The full terms and conditions are available on our website under the 'Terms & Conditions' section.",
        },
      ],
    },
  ];

  const faqItems = categories[selectedCategory].questions;

  return (
    <section className="py-24 w-[90vw]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently Asked <span className="text-[#1A73E8]">Questions</span>
          </h1>
        </div>
        <div className="flex space-x-8">
          <div className="btns flex flex-col w-[30%] space-y-4 items-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`py-3 w-[14rem] border rounded-[10px] ${
                  selectedCategory === index
                    ? "bg-white text-[#1A73E8] font-[600]"
                    : "border-[#737373] bg-transparent text-gray-700"
                }`}
                onClick={() => setSelectedCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="w-[70%]">
            <div className="accordion-group" data-accordion="default-accordion">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl ${
                    activeIndex === index ? "accordion-active:bg-indigo-50 text-[#1A73E8]" : ""
                  }`}
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full font-[600] text-[1.1rem] transition duration-500 text-left accordion-active:font-medium"
                    aria-controls={`basic-collapse-${index}-with-arrow`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5 className={`${activeIndex === index ? "text-[#1A73E8]":""}`} >{item.question}</h5>
                    <svg
                      className={`text-gray-500 transition duration-500  ${
                        activeIndex === index
                          ? "accordion-active:text-indigo-600 rotate-180"
                          : ""
                      }`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id={`basic-collapse-${index}-with-arrow`}
                    className={`accordion-content w-full px-0 overflow-hidden transition-max-height duration-500 ease-in-out ${
                      activeIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                    aria-labelledby={`basic-heading-${index}-with-arrow`}
                  >
                    <p className="text-base text-gray-900 leading-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
