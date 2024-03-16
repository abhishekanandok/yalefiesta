import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { GiTrophyCup } from "react-icons/gi";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlinePostAdd } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";

const Sidebar = ({ userID }) => {
  return (
    <div className=' flex ml-9'>
      <div><GiHamburgerMenu className="mr-2 h-8 w-8 sticky top-20"/></div>
      <div>
      <nav className="text-indigo-800 min-h-full w-52 p-3  mr-9 mb-5 text-md font-semibold gap-10 border-r-4 border-slate-900/75  shadow-xl">
      <ul>

        <Link href={`/${userID}/profile`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className=" flex gap-2 items-center"><CgProfile className="h-5 w-5" />Profile</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><RxDashboard className="h-5 w-5"/>Dashboard</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard/event`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><MdOutlineCreateNewFolder className="h-5 w-5"/>Create Events</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard/result`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><GiTrophyCup className="h-5 w-5"/>Result</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard/users`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><LuUsers2 className="h-5 w-5"/>Users</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard/post`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><MdOutlinePostAdd className="h-5 w-5"/>Blog Post</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard/gallary`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><GrGallery className="h-5 w-5"/>Gallary</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard/setting`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300">
            <span className="flex gap-2 items-center"><IoSettingsOutline className="h-5 w-5"/>Setting</span>
          </li>
        </Link>
        <Link href={`/${userID}/dashboard`}>
          <li className=" rounded-md p-2 m-1 hover:bg-pink-300 text-pink-600">
            <span className="flex gap-2 items-center"><FiLogOut className="h-5 w-5"/>Logout</span>
          </li>
        </Link>
        {/* Add more sidebar links as needed */}
      </ul>
    </nav>
      </div>
    </div>
  );
};

export default Sidebar;
