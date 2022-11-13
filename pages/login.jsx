import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="flex">
        <div className="mr-[16.25rem]">
          <Image src={"/login-banner.png"} width={564} height={1001} />
        </div>
        <div className="mt-[12.188rem]">
          <h1 className="text-[2.5rem] font-bold mt-[2.25rem] text-white mb-[1.25rem]">
            Sign In
          </h1>
          <div className="mt-8 space-y-7">
            <div>
              <label className="text-white">Email</label>
              <div className="mt-2">
                <input
                  type="email"
                  className="bg-[#272833] rounded-[50px] py-2 px-5 w-[25rem] text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-white">Password</label>
              <div className="mt-2">
                <input
                  className="bg-[#272833] rounded-[50px] py-2 px-5 w-[25rem] text-white"
                  required
                />
              </div>
            </div>
            <div className="text-[#B1B1B1] flex place-content-end -translate-y-4 cursor-pointer">
              <p>Lupa Password</p>
            </div>
          </div>
          <div className="mt-[4.5rem]"></div>
          <button className="py-2 px-5 bg-[#068F23] text-white text-xl font-bold rounded-full w-full">
            Sign In
          </button>
          <Link href="/register">
            <a className="mt-[2.375rem] text-center py-2 px-5 block bg-[#1D1E24] text-white text-xl font-medium rounded-full w-[25rem]">
              Daftar Akun Baru
            </a>
          </Link>

          <hr class="my-8 h-px bg-[#B1B1B1] border-0" />

          <button className="py-2 px-5 border-[1px] border-[#B1B1B1] text-[#B1B1B1] text-xl font-bold rounded-full w-full">
            <div className="flex justify-center gap-x-3 items-center">
              <div>
                <img src="../google.png" />
              </div>
              Google
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
