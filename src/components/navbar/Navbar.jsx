import NavbarLinks from "./Links/Links"
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";

const Navbar = async () => {
  let user = null; // Initialize user as null

  // Check if user is authenticated
  const session = await auth();
  
  if (session?.user) {
    // If authenticated, fetch user details
    user = await getUser(session.user.id);
    // console.log(user);
  }

  return (
    <>
      <NavbarLinks session={session} userData={user ? {firstName: user.firstName, lastName: user.lastName, username: user.username, img: user.img } : null} />
    </>
  )
}

export default Navbar;
