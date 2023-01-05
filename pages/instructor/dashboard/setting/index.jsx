import React from "react";
import DashboardHeader from "../../../../components/DashboardHeader";
import SideBarInstructor from "../../../../components/SideBarInstructor";
import Link from "next/link";

const Setting = () => {
  return (
    <div className="flex h-screen">
      <SideBarInstructor />

      <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
        <DashboardHeader />
        {/* Main */}
        <main className="mt-[4.5rem]">
          <h1 className="font-bold text-white text-[2rem] mb-2">Settings</h1>
          <p className="text-white/60 font-light max-w-xs">
            Pengaturan akun anda, seperti profile dan ubah password
          </p>
          <div className="mt-12 flex gap-x-8">
            <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[20px] w-64">
              <img
                src="/avatar.png"
                alt=""
                className="rounded-full"
                height="100"
                width="100"
              />
              <h2 className="mt-4 text-white font-semibold text-2xl mb-2">
                My Profile
              </h2>
              <p className="text-white/60 font-light mb-8">
                Ubah data diri anda
              </p>
              <Link href={"/instructor//dashboard/setting/edit-profile"}>
                <div className="text-white text-center px-8 py-3 bg-[#272833] rounded-[50px] text-sm cursor-pointer">
                  Edit Profile
                </div>
              </Link>
            </div>
            <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[20px] w-64">
              <img
                src="/password_change.svg"
                alt=""
                className="rounded-full"
                height="100"
                width="100"
              />
              <h2 className="mt-4 text-white font-semibold text-2xl mb-2">
                My Password
              </h2>
              <p className="text-white/60 font-light mb-8">
                Ganti password anda
              </p>
              <Link href={"/instructor/dashboard/setting/change-password"}>
                <div className="text-white text-center px-8 py-3 bg-[#272833] rounded-[50px] text-sm cursor-pointer">
                  Change Password
                </div>
              </Link>
            </div>
          </div>
        </main>
        {/* End of Main */}
      </div>
    </div>
  );
};

export default Setting;
