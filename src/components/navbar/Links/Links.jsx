"use client"

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from "@/components/ui/button"
import { handleLogout } from "@/lib/action";
import { ModeToggle } from "@/components/darkMode"
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { EnvelopeOpenIcon } from '@radix-ui/react-icons';

import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css' // needed for toast notifications, can be ignored if hideToast=true






const components = [
  {
    title: 'Developer Team',
    href: '/team/developer',
    description: 'Meet our robust Developer team, who made this community possible.',
  },
  {
    title: 'About us',
    href: '/about',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Coordinator Team',
    href: '/team/coordinator',
    description: 'Meet our robust Coordinator team, who made this community possible.',
  },
  {
    title: 'FAQs',
    href: '/about/faq',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Sponsors',
    href: '/about/sponsors',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Gallary',
    href: '/about/gallery',
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

function ListItem({ className, title, children, ...props }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link

          ref={props.ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-lg font-bold leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

ListItem.displayName = 'ListItem';





const NavbarLinks = ({ session, userData }) => {

  //   console.log(userData);
  //   console.log(userData.username);

  return (
    <nav className="pt-2 pb-2 text-indigo-800 sticky top-0 bg-white flex space-x-4 pl-44 pr-44 items-center font-bold">

      {/* logo and name */}
      <div className="flex items-center flex-1">
        <Image src="/yaleFiesta.svg" alt="yaleFiesta Logo" className="mr-2" height={70} width={70} />
        <Link href="/">
          <span className="text-2xl cursor-pointer">yaleFiesta</span>
        </Link>
      </div>

      {/* main links */}
      <div className=''>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/events"
                      >
                        <Image src="/yaleFiesta.svg" height={300} width={300} alt='logo' className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          YaleFiesta Events
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A fest website for Purnia college of enginnering.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/events/upcomming" title="Up Comming">
                    Our upcomming events, get ready....
                  </ListItem>
                  <ListItem href="/events/current" title="Current">
                    Why you watching here, participate now.
                  </ListItem>
                  <ListItem href="/events/past" title="PAST">
                    Our record break fest & events that we done successfully.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/results' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Results
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/community' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Community
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/contact' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* notification */}
      <div>
        <SuprSendInbox
          workspaceKey="xm5WpboKrNlhQrPQTtAD"
          subscriberId="AUp3yKu_zln08mF8HXqr1aGf5yeTxKjV0WYNPKZxMD8"
          distinctId="abhishekanandok@gmail.com"
        />
      </div>


      {/* dark theme button */}
      <div>
        <ModeToggle />
      </div>


      {/* profile section */}


      {session?.user ? (
        <div>
          <DropdownMenu>

            <DropdownMenuTrigger><Avatar>
              <AvatarImage src={userData.img || "/noAvatar.png"} alt="user_image" />
              <AvatarFallback>Hi</AvatarFallback>
            </Avatar></DropdownMenuTrigger>

            <DropdownMenuContent className="w-52">
              <DropdownMenuLabel><span className=' font-light'>Hi,</span> {userData.firstName} {userData.lastName}</DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>

                <Link href={`/${userData.username}/profile`}>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <CgProfile className="mr-2 h-4 w-4" />Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>

                <Link href={`/${userData.username}/dashboard`}>
                  <DropdownMenuItem className=' cursor-pointer'>
                    <RxDashboard className="mr-2 h-4 w-4" />Dashboard
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>

                <Link href={`/${userData.username}/dashboard/setting`} >
                  <DropdownMenuItem className=' cursor-pointer'>
                    <IoSettingsOutline className="mr-2 h-4 w-4" />Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <form action={handleLogout}>
                <DropdownMenuItem>
                  <Button variant="destructive"><IoMdLogOut className="mr-2 h-4 w-4" />Log out</Button>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </form>

            </DropdownMenuContent>
          </DropdownMenu>


        </div>
      ) : (
        <div>
          <Link href="/login">
            <Button className=' font-bold'>Login</Button>
          </Link>
        </div>
      )}




    </nav>
  );
}

export default NavbarLinks;



