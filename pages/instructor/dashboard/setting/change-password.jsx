import React from "react";
import SideBarInstructor from "../../../../components/SideBarInstructor";
import DashboardHeader from "../../../../components/DashboardHeader";

const ChangePassword = () => {
  return (
    <div className="flex h-screen">
      <SideBarInstructor />

      <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
        <DashboardHeader />
        {/* Main */}
        <main className="mt-[4.5rem]">
          <h1 className="font-bold text-white text-[2rem] mb-2">
            Edit Password
          </h1>
          <p className="text-white/60 font-light max-w-xs">
            Amankan akun Anda dengan kombinasi password yang baik
          </p>
          <div className="mt-12 flex gap-x-8"></div>
        </main>
        {/* End of Main */}
        <div className="max-w-md">
          <div className="text-center bg-[#1D1E24] border-[1px] border-white/10 rounded-[20px] px-6 py-8">
            <div className="grid gap-y-4">
              <div>
                <p className="text-white/80 text-left mb-2">Old Password</p>
                <input
                  type="password"
                  className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                />
              </div>
              <div>
                <p className="text-white/80 text-left mb-2">New Password</p>
                <input
                  type="password"
                  className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                />
              </div>
              <div className="mb-11">
                <p className="text-white/80 text-left mb-2">
                  Confirm New Password
                </p>
                <input
                  type="password"
                  className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                />
              </div>
              <div className="text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer">
                Ubah
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
