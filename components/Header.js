import Image from "next/image";
import React from "react";
import {MagnifyingGlassIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, Bars3Icon,} from '@heroicons/react/24/outline'
import {HomeIcon} from "@heroicons/react/24/solid"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";
function Header() {
  const {data: session} = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto bg-white">
      {/* <Left /> */}
        <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.svg"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div onClick={() => router.push("/")} className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_icon_Logo_2016-700x700.png"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* <Middle- Search input field/> */}
        <div className="max-w-xs">

        <div className="relative mt-1 p-3 rounded-md">
       
       <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
       <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
       </div>
         <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="Search" />
       </div>
        </div>
        {/* <Right /> */}
        <div className="flex items-center justify-end space-x-4">
        <HomeIcon onClick={() => router.push("/")} className="navBtn" />
        <Bars3Icon className="h-6 md:hidden cursor-pointer" />

        {session ? (
          <>
          <div className="relative navBtn">
        <PaperAirplaneIcon className="navBtn" style={{transform: "rotate(-45deg)"}}  />
        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
        </div>

        <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn" />
        <UserGroupIcon className="navBtn" />
        <HeartIcon className="navBtn" />
        <img onClick={signOut} src={session.user.image} className="h-10 w-10 rounded-full cursor-pointer" alt="profile-picture" />
        </>
        ) : (
          <button onClick={signIn}>Sign In</button>
        )}

        

        </div>
        
      </div>
    </div>
  );
}

export default Header;
