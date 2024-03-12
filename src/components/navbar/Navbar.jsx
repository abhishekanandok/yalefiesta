import NavbarLinks from "./links/Links"
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";

const Navbar = async () => {
  let user = null; // Initialize user as null

  // Check if user is authenticated
  const session = await auth();
  if (session?.user) {
    // If authenticated, fetch user details
    user = await getUser(session.user.id);
  }

  return (
    <>
      <NavbarLinks session={session} userData={user ? { name: user.username, img: user.img } : null} />
    </>
  )
}

export default Navbar;
