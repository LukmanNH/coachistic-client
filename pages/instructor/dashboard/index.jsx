import React from "react";
import SideBarInstructor from "../../../components/SideBarInstructor";
import DashboardHeader from "../../../components/DashboardHeader";
import Image from "next/image";

const DashboardInstructor = () => {
  return (
    <>
      <div className="flex h-screen">
        <SideBarInstructor />

        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader />

          {/* Main */}
          <main className="mt-[4.5rem]">
            <h1 className="font-bold text-white text-[2rem] mb-2">Dashboard</h1>
            <p className="text-white/60 font-light max-w-xs">
              Terus berkarya bersama kami dan dapatkan manfaatnya
            </p>
            <div className="mt-[2.25rem]">
              <div class="container bg-[#1D1E24] border-[1.5px] border-white/10 rounded-[20px] min-w-[61.75rem]">
                <div class="flex justify-between items-center p-6">
                  <h2 class="text-white/80">Showing 1 to 10 of 3 entries</h2>
                  <div class="relative rounded-md shadow-sm">
                    <div className="flex items-center">
                      <div className="mr-4 text-white/80">Search : </div>
                      <div>
                        <input
                          type="search"
                          class="py-4 pl-5 pr-5 block bg-[#272833] text-white focus:outline-none w-full leading-5 rounded-[50px] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="Cari Keyword ..."
                        />
                      </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <table class="w-full">
                  <thead className="border-y-[1.5px] border-white/10">
                    <tr>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        #
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Materi
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Cover
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Jenis
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Harga
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Reviews
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[0, 1, 2, 3, 4].map((item) => (
                      <tr className="border-y-[1.5px] border-white/10">
                        <td class="px-4 py-2 text-left text-white font-light text-sm">
                          0032
                        </td>
                        <td class="px-4 py-2 text-left text-white font-light text-sm max-w-[10rem]">
                          Tips Meningkatkan Aim Valorant untuk Para Pemula
                        </td>
                        <td class="px-4 py-2 text-left text-white font-light text-sm">
                          <img src="/jett.png" alt="" width="68" height="50" />
                        </td>
                        <td class="px-4 py-2 text-left text-white font-light text-sm">
                          Premium
                        </td>
                        <td class="px-4 py-2 text-left text-white font-light text-sm">
                          Rp. 149,999
                        </td>
                        <td class="px-4 py-2 text-left text-white font-light text-sm">
                          <div className="flex gap-1">
                            <Image src={"/star.png"} width={20} height={20} />
                            <Image src={"/star.png"} width={20} height={20} />
                            <Image src={"/star.png"} width={20} height={20} />
                            <Image src={"/star.png"} width={20} height={20} />
                            <Image src={"/star.png"} width={20} height={20} />
                          </div>
                        </td>
                        <td class="px-4 py-2 text-left text-white font-light text-sm">
                          <div className="flex gap-x-2">
                            <div>
                              <img src="/icon_details.svg" alt="" />
                            </div>
                            <div>
                              <img src="/icon_edit.svg" alt="" />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div class="flex justify-center items-center p-5">
                  <div className="text-[#068F23] bg-[#068F23]/20 rounded-full py-2 px-4">
                    1
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Main */}
        </div>
      </div>
    </>
  );
};

export default DashboardInstructor;
