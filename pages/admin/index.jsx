import React, { useContext, useState, useEffect } from "react";
import SideBarInstructor from "../../components/SideBarInstructor";
import DashboardHeader from "../../components/DashboardHeader";
import axios from "axios";
import { Context } from "../../context";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

const Index = () => {
  // state
  const [transaction, setTransaction] = useState([]);

  // user
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  async function getTransaction() {
    try {
      const { data } = await axios.get(
        "https://different-deer-hem.cyclic.app/api/transaction/",
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(data);
      setTransaction(data.transaction);
    } catch (error) {
      console.log(error);
    }
  }

  async function confirmPayment(e, transactionId) {
    e.preventDefault();
    try {
      const transaction = await axios.post(
        `https://different-deer-hem.cyclic.app/api/transaction/confirm-payment/${transactionId}`,
        {},
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(transaction);
      toast.success("berhasil mengupdate data");
      getTransaction();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user?.role !== "Admin") router.push("/login");
    getTransaction();
  }, []);

  return (
    <>
      <div className="flex h-screen">
        <SideBarInstructor />

        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader namaUser={"Admin"} />

          <div className="mt-[2.25rem]">
            <div class="container bg-[#1D1E24] border-[1.5px] border-white/10 rounded-[20px]">
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
                      User
                    </th>
                    <th class="px-4 py-2 font-medium text-xl text-left text-white">
                      Kelas
                    </th>
                    <th class="px-4 py-2 font-medium text-xl text-left text-white">
                      Harga
                    </th>
                    <th class="px-4 py-2 font-medium text-xl text-left text-white">
                      Status
                    </th>
                    <th class="px-4 py-2 font-medium text-xl text-left text-white">
                      Bukti TF
                    </th>
                    <th class="px-4 py-2 font-medium text-xl text-left text-white">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transaction.map((item) => (
                    <tr className="border-y-[1.5px] border-white/10">
                      <td class="px-4 py-2 text-left text-white font-light text-sm">
                        0032
                      </td>
                      <td class="px-4 py-2 text-left text-white font-light text-sm max-w-[180px]">
                        {item.user}
                      </td>
                      <td class="px-4 py-2 text-left text-white font-light text-sm">
                        {item.nama}
                      </td>
                      <td class="px-4 py-2 text-left text-white font-light text-sm">
                        {item.price}
                      </td>
                      <td class="px-4 py-2 text-left text-white font-light text-sm">
                        {item.status.toUpperCase()}
                      </td>
                      <td class="px-4 py-2 text-left text-white font-light text-sm">
                        <a href={item.payment_picture} target="_blank">
                          <img src="/icon_details.svg" alt="" />
                        </a>
                      </td>
                      <td class="px-4 py-2 text-left text-white font-light text-sm max-w-[6rem]">
                        <div
                          className="text-white px-4 py-2 bg-[#068F23] rounded-[50px] text-sm font-medium text-center"
                          onClick={(e) => confirmPayment(e, item._id)}
                        >
                          Konfirmasi
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
        </div>
      </div>
    </>
  );
};

export default Index;
