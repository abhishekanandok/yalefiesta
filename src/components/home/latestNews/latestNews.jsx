// components/NewsBlog.js
import Link from 'next/link';

const NewsBlog = () => {
  // Hardcoded news data
  const blogData = {
    title: 'Exciting News Title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Read more...',
    slug: 'exciting-news',
  };

  return (
    <div className=' flex justify-between gap-10 pl-20 pr-20'>
      <div className="bg-white p-10 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{blogData.title}</h2>
      <p className="text-gray-600">{blogData.content}</p>
      <Link href={`/news/${blogData.slug}`}>
        <span className="mt-4 text-blue-500 hover:underline">Read More</span>
      </Link>
    </div>
    <div className="bg-white p-10 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{blogData.title}</h2>
      <p className="text-gray-600">{blogData.content}</p>
      <Link href={`/news/${blogData.slug}`}>
        <span className="mt-4 text-blue-500 hover:underline">Read More</span>
      </Link>
    </div>
    <div className="bg-white p-10 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{blogData.title}</h2>
      <p className="text-gray-600">{blogData.content}</p>
      <Link href={`/news/${blogData.slug}`}>
        <span className="mt-4 text-blue-500 hover:underline">Read More</span>
      </Link>
    </div>
    </div>
  );
};

export default NewsBlog;
