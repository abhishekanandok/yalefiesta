import React from 'react';
import './ContactUsPage.css'; // Import the CSS for styling
import Image from 'next/image'

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16">
        <div className="bg-white bg-opacity-90 p-8 rounded-md shadow-lg">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fadeIn">
              {/* <Image src="/contact-image.webp" alt="Contact" className="rounded-md w-full" /> */}
              <Image
                src="/contact-image.webp"
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="animate-fadeIn delay-300">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
