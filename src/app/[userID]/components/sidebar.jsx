import Link from 'next/link';

const Sidebar = ({userID}) => {
  return (
    <nav className="bg-gray-800 text-white h-full w-64 p-10 ml-3 mr-9 mb-5">
      <ul>
        
        <li className="mb-4">
          <Link href={`/${userID}/profile`}>
            <span className="text-white">Profile</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard`}>
            <span className="text-white">Dashboard</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard/event`}>
            <span className="text-white">Create Events</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard/result`}>
            <span className="text-white">Result</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard/users`}>
            <span className="text-white">Users</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard/post`}>
            <span className="text-white">Post</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard/gallary`}>
            <span className="text-white">Gallary</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard/setting`}>
            <span className="text-white">Setting</span>
          </Link>
        </li>
        <li className="mb-4">
          <Link href={`/${userID}/dashboard`}>
            <span className="text-white">Logout</span>
          </Link>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </nav>
  );
};

export default Sidebar;
