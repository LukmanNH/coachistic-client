import React from "react";
import DashboardHeader from "../../../components/DashboardHeader";
import SideBarInstructor from "../../../components/SideBarInstructor";
import { MultiSelect, Select } from "@mantine/core";

const AddKelas = () => {
  return (
    <>
      <div className="flex h-screen">
        <SideBarInstructor />
        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader />
          <div className="bg-[#1D1E24] border-[1px] border-white/10 px-6 pt-8 pb-[2.875rem] rounded-[20px] max-w-[49rem] mt-[4.5rem]">
            <div className="">
              <p className="text-white/80 text-left mb-2">Nama Kelas</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
              />
            </div>
            <div className="mt-[0.625rem]">
              <p className="text-white/80 text-left mb-2">Deskripsi</p>
              <textarea className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[20px]" />
            </div>
            <div className="grid grid-cols-2 gap-x-[1.25rem] gap-y-6">
              <div className="">
                <p className="text-white/80 text-left mb-2">Jenis Kelas</p>
                <Select
                  data={["Freemium", "Premium"]}
                  styles={{
                    input: {
                      backgroundColor: "#272833",
                      color: "white",
                      borderRadius: 20,
                      padding: "22px",
                      border: "none",
                    },
                  }}
                />
              </div>
              <div className="">
                <p className="text-white/80 text-left mb-2">Kategori Game</p>
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
              <div className="">
                <p className="text-white/80 text-left mb-2">Harga Kelas</p>
                <input
                  type="text"
                  className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                />
              </div>
              <div className="">
                <p className="text-white/80 text-left mb-2">Upload Gambar</p>
                <input
                  type="text"
                  className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                />
              </div>
            </div>
            <div className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto">
              Simpan
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddKelas;
