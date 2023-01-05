import React from "react";
import SideBar from "../../../components/SideBar";
import DashboardHeader from "../../../components/DashboardHeader";
import { MultiSelect, NativeSelect, Select } from "@mantine/core";

const EditProfile = () => {
  return (
    <div className="flex h-screen">
      <SideBar />

      <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
        <DashboardHeader />
        {/* Main */}
        <main className="mt-[4.5rem]">
          <h1 className="font-bold text-white text-[2rem] mb-2">
            Edit Profile
          </h1>
          <p className="text-white/60 font-light max-w-xs">
            Masukkan informasi yang valid untuk menunjang proses belajar Anda
          </p>
          <div className="mt-12 flex gap-x-8"></div>
        </main>
        {/* End of Main */}
        <div className="max-w-3xl">
          <div className="text-center bg-[#1D1E24] border-[1px] border-white/10 rounded-[20px] px-6 py-8">
            <h3 className="mb-2 text-white">My Avatar (Maks. 1MB)</h3>
            <div className="flex justify-center">
              <img
                src="/avatar.png"
                alt="avatar"
                className="rounded-full"
                width="100"
                height="100"
              />
            </div>
            <button className="bg-[#068F23] mt-2 py-2 px-5 rounded-lg text-white">
              UPLOAD
            </button>
            <p className="mt-2 text-white/60 text-xs">
              Format file jpg, jpeg, png.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-[1.25rem]">
              <div>
                <p className="text-white/80 text-left mb-2">Nama Lengkap</p>
                <input
                  type="text"
                  className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                  value={"Lukman Nur Hakim"}
                />
              </div>
              <div>
                <p className="text-white/80 text-left mb-2">No Telepon</p>
                <input
                  type="text"
                  className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                  value={"081234589763"}
                />
              </div>
              <div>
                <p className="text-white/80 text-left mb-2">Email</p>
                <input
                  type="text"
                  className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                  disabled
                  value={"Lukman Nur Hakim"}
                />
              </div>
              <div>
                <p className="text-white/80 text-left mb-2">Umur</p>
                <input
                  type="text"
                  className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                />
              </div>
              <div>
                <p className="text-white/80 text-left mb-2">Jenis Kelamin</p>
                <Select
                  data={["Pria", "Wanita"]}
                  styles={{
                    input: {
                      backgroundColor: "#272833",
                      color: "white",
                      borderRadius: 20,
                      padding: "22px",
                      border: "none",
                    },
                    // value: { color: "red" },
                  }}
                />
              </div>
              <div>
                <p className="text-white/80 text-left mb-2">Interest Game</p>
                <MultiSelect
                  data={["Valorant", "Dota 2", "FIFA"]}
                  searchable
                  nothingFound="Belum ada"
                  styles={{
                    input: {
                      backgroundColor: "#272833",
                      padding: "5px 5px 5px 20px",
                      borderRadius: 20,
                      border: "none",
                      color: "white",
                    },
                  }}
                />
              </div>
            </div>
            <div className="mt-11 text-white text-xl font-bold max-w-sm py-2 bg-[#068F23] rounded-[50px] cursor-pointer mx-auto">
              Simpan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
