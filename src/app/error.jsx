"use client"

// const Error = () => {
//   return (
//     <div>Error</div>
//   )
// }

// export default Error

// pages/_error.js
import { motion } from 'framer-motion';
import Image from 'next/image'

const ErrorPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-4xl font-bold mb-4 text-red-500">Oops! An Error Occurred</h1>
      <p className="text-lg mb-4">Unexpected error. Please try again later.</p>
      <Image
        src="/error.gif"
        width={200}
        height={200}
        alt="Error Illustration"
        className="max-w-full h-auto"
      />
    </motion.div>
  );
};

export default ErrorPage;
