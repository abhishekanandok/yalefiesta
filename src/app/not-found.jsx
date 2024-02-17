
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Oops! Page not found.</p>
        <Link href="/">
          <span className="text-blue-500 hover:underline">Go back to home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
