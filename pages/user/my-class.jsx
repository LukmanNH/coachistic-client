import React from "react";
import SideBar from "../../components/SideBar";
import DashboardHeader from "../../components/DashboardHeader";

const MyClass = () => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
        <DashboardHeader namaUser={"lukman"} />
        {/* Main */}
        <main className="mt-[4.5rem]">
          <h1 className="font-bold text-white text-[2rem] mb-2">Kelas Saya</h1>
          <p className="text-white/60 font-light max-w-xs">
            Upgrade terus skill dan pengalaman terbaru kamu
          </p>
          {/* BreadCrumbs */}
          <div className="mt-12 flex space-x-8 mb-8">
            <div className="border-2 border-white/60 rounded-[50px] px-12 py-2 text-white cursor-pointer">
              Active
            </div>
            <div className="border-2 border-white/60 rounded-[50px] px-12 py-2 text-white cursor-pointer ">
              Freemium
            </div>
            <div className="bg-[#068F23] border-2 border-transparent rounded-[50px] px-12 py-2 cursor-pointer">
              Premium
            </div>
            <div className="border-2 border-white/60 rounded-[50px] px-12 py-2 text-white cursor-pointer">
              Selesai
            </div>
          </div>
          {/* BreadCrumbs */}

          {/* Courses */}
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-8">
            <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[15px] max-w-[18.75rem]">
              <img src="/jett.png" alt="jett" className="mb-7" />
              <h1 className="text-white text-2xl font-bold">
                Game Sense From Zero to Hero
              </h1>
              <p className="text-white/20 text-xl font-light mb-6">
                Kelas Premium
              </p>
              <div className="flex gap-x-4 items-center">
                <img src="/icon_check.svg" alt="" />
                <p className="text-white font-xl">Akses Selamanya</p>
              </div>
            </div>

            <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[15px] max-w-[18.75rem]">
              <img src="/jett.png" alt="jett" className="mb-7" />
              <h1 className="text-white text-2xl font-bold">
                Game Sense From Zero to Hero
              </h1>
              <p className="text-white/20 text-xl font-light mb-6">
                Kelas Premium
              </p>
              <div className="flex gap-x-4 items-center">
                <img src="/icon_check.svg" alt="" />
                <p className="text-white font-xl">Akses Selamanya</p>
              </div>
            </div>

            <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[15px] max-w-[18.75rem]">
              <img src="/jett.png" alt="jett" className="mb-7" />
              <h1 className="text-white text-2xl font-bold">
                Game Sense From Zero to Hero
              </h1>
              <p className="text-white/20 text-xl font-light mb-6">
                Kelas Premium
              </p>
              <div className="flex gap-x-4 items-center">
                <img src="/icon_check.svg" alt="" />
                <p className="text-white font-xl">Akses Selamanya</p>
              </div>
            </div>

            <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[15px] max-w-[18.75rem]">
              <img src="/jett.png" alt="jett" className="mb-7" />
              <h1 className="text-white text-2xl font-bold">
                Game Sense From Zero to Hero
              </h1>
              <p className="text-white/20 text-xl font-light mb-6">
                Kelas Premium
              </p>
              <div className="flex gap-x-4 items-center">
                <img src="/icon_check.svg" alt="" />
                <p className="text-white font-xl">Akses Selamanya</p>
              </div>
            </div>
          </div>

          {/* Courses */}
        </main>
        {/* End of Main */}
      </div>
    </div>
  );
};

export default MyClass;
