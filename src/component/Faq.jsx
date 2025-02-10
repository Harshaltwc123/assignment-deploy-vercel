import React, { useState } from 'react';

const faqs = [
  { question: 'What is Hubnex Invest?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'How does Hubnex Invest support Startup?', answer: 'Vite is a modern build tool that provides a faster and leaner development experience for modern web projects.' },
  { question: 'What type of startups does Hubnex Invest work with?', answer: 'You can install React with Vite using the command: npm create vite@latest my-app --template react' },
  { question: 'Does Hubnex Invest provide financial investment ?', answer: 'React is a JavaScript library for building user interfaces.' },
  { question: 'What is the application process for Hubnex Invest?', answer: 'React is a JavaScript library for building user interfaces.' },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto pt-7 pb-16 px-10 bg-black text-white ">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b-2 py-2 shadow-md">
            <button 
              className="w-full text-left font-normal text-lg flex justify-between"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="mt-2 text-white text-start">{faq.answer}</p>}
          </div>
        ))}
      </div>

      <div className='flex justify-start items-start pt-6'>
      <button className='py-2 px-8 text-black bg-white font-bold rounded-md'>
      More FAQ’s
      </button>
      </div>
    </div>
  );
}

export default Faq;
