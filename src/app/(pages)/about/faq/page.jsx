'use client'

import React, { use, useState } from 'react';

const FAQPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is yaleFiesta?',
      answer: 'yaleFiesta is a college festival that celebrates various talents and skills through events such as hackathons, dancing, debates, kabbadi, cricket, singing, and more.',
    },
    {
      question: 'How can I participate in events?',
      answer: 'To participate in events, you need to register on our website and select the events you are interested in. Follow the registration process for each specific event.',
    },
    {
      question: 'Are there any registration fees?',
      answer: 'Registration fees vary for each event. Please check the details of each event on our website for specific information on registration fees.',
    },
    {
      question: 'How do I get tickets?',
      answer: 'Once you register for an event, you will receive a confirmation email with details on how to obtain tickets. Make sure to bring your ticket to the event for entry.',
    },
    {
      question: 'How are winners determined?',
      answer: 'Winners are determined based on the judging criteria for each event. The criteria may include creativity, skill, teamwork, and other specific factors. Judges will evaluate participants during the event.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-100 min-h-screen m-10">
      <div className="container mx-auto py-16 m-20">
        <div className="bg-white bg-opacity-90 p-8 rounded-md shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h1>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg font-semibold text-gray-800">{faq.question}</h2>
                <svg
                  className={`w-6 h-6 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>

              {activeIndex === index && (
                <div className="mt-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
