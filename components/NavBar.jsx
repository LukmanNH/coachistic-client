import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="">
      <nav className="flex px-[5.375rem] pt-7 pb-[3.563rem] items-center justify-around">
        <div className="flex items-center">
          <div className="mr-[4.375rem]">
            <Link href={"/"}>
              <a>
                <Image src={"/logo.svg"} width={48} height={45} />
              </a>
            </Link>
          </div>
          <ul className="text-white flex space-x-[1.875rem] font-medium">
            <li className="cursor-pointer">Kelas</li>
            <li className="cursor-pointer">Jadi Instructor</li>
          </ul>
        </div>
        <div className="relative text-gray-600 ">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2753 2.86267C16.0029 2.86267 19.8363 6.70506 19.8363 11.446C19.8363 16.1869 16.0029 20.0293 11.2753 20.0293C6.54674 20.0293 2.71436 16.1869 2.71436 11.446C2.71436 6.70506 6.54674 2.86267 11.2753 2.86267Z"
                  stroke="white"
                  strokeOpacity="0.61"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.8987 18.6772C20.6778 18.6772 21.3092 19.3112 21.3092 20.0913C21.3092 20.8734 20.6778 21.5065 19.8987 21.5065C19.1197 21.5065 18.4873 20.8734 18.4873 20.0913C18.4873 19.3112 19.1197 18.6772 19.8987 18.6772Z"
                  stroke="white"
                  strokeOpacity="0.61"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-[1.125rem] text-sm text-white bg-transparent focus:outline-none border-b-2 border-b-[#068F23] pl-12 w-[24.375rem]"
            placeholder="Cari Sekarang ..."
            autoComplete="off"
          />
        </div>
        <div className="flex space-x-5">
          <Link href={"/login"}>
            <a className="py-2 px-6 border border-[#068F23] text-white rounded-md">
              Sign in
            </a>
          </Link>
          <Link href={"/register"}>
            <a className="py-2 px-5 bg-[#068F23] text-white rounded-md">
              Sign Up
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
