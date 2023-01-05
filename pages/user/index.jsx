import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { Context } from "../../context";
import Link from "next/link";
import SideBar from "../../components/SideBar";
import DashboardHeader from "../../components/DashboardHeader";

const Dashboard = () => {
  // state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  return (
    <>
      <div className="flex h-screen">
        <SideBar />

        {/* Header */}
        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader namaUser={user?.nama} />
          {/* Main */}
          <main className="mt-[4.5rem]">
            <h1 className="font-bold text-white text-[2rem] mb-2">Overview</h1>
            <p className="text-white/60 font-light max-w-xs">
              Upgrade terus skill dan pengalaman terbaru kamu
            </p>
            {/* Card */}
            <div className="mt-12 container grid xl:grid-cols-4 md:grid-cols-2">
              <div className="bg-[#1D1E24] border border-white/10 rounded-[20px] py-4 pl-8 max-w-[14rem]">
                <p className="text-white/60 mb-4">Semua kelas</p>
                <div className="flex">
                  <h4 className="mr-3 text-white font-semibold text-5xl">20</h4>
                  <p className="text-white text-sm font-medium place-self-end -translate-y-1">
                    Kelas
                  </p>
                </div>
              </div>

              <div className="bg-[#1D1E24] border border-white/10 rounded-[20px] py-4 pl-8 max-w-[14rem]">
                <p className="text-white/60 mb-4">Kelas Favorit</p>
                <div className="flex">
                  <h4 className="mr-3 text-white font-semibold text-5xl">09</h4>
                  <p className="text-white text-sm font-medium place-self-end -translate-y-1">
                    Kelas
                  </p>
                </div>
              </div>

              <div className="bg-[#1D1E24] border border-white/10 rounded-[20px] py-4 pl-8 max-w-[14rem]">
                <p className="text-white/60 mb-4">Sedang Progres</p>
                <div className="flex">
                  <h4 className="mr-3 text-white font-semibold text-5xl">06</h4>
                  <p className="text-white text-sm font-medium place-self-end -translate-y-1">
                    Kelas
                  </p>
                </div>
              </div>

              <div className="bg-[#1D1E24] border border-white/10 rounded-[20px] py-4 pl-8 max-w-[14rem]">
                <p className="text-white/60 mb-4">Sudah Selesai</p>
                <div className="flex">
                  <h4 className="mr-3 text-white font-semibold text-5xl">14</h4>
                  <p className="text-white text-sm font-medium place-self-end -translate-y-1">
                    Kelas
                  </p>
                </div>
              </div>
            </div>
            {/* Card */}
            {/* Motiivasi */}
            <div className="mt-[7rem] container max-w-[61.75rem] h-60 bg-[#1D1E24] border border-white/10 rounded-[20px] py-[2.125rem] pl-[2.625rem] flex relative">
              <div>
                <h1 className="text-white font-semibold max-w-xl text-[2.25rem] mb-4">
                  Belajar Pelan-pelan tetapi Istiqomah
                </h1>
                <p className="text-white/60 max-w-sm">
                  Cobalah belajar 5-10 menit saja setiap hari. Pelan tapi party
                  !!{" "}
                </p>
              </div>
              <div className="sm:hidden xl:block">
                <img
                  className="scale-x-[-1] w-[384px] h-[345px] absolute -translate-y-36"
                  src={"/phoenix_hero.png"}
                />
              </div>
            </div>

            {/* Motiivasi */}
          </main>
          {/* End of Main */}
        </div>
        {/* End of Header */}
      </div>
    </>
  );
};

export default Dashboard;
