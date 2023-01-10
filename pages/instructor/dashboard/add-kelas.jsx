import React, { useContext } from "react";
import DashboardHeader from "../../../components/DashboardHeader";
import SideBarInstructor from "../../../components/SideBarInstructor";
import { MultiSelect, Select } from "@mantine/core";
import { Context } from "../../../context";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Head from "next/head";

const AddKelas = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [paid, setPaid] = useState(true);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  // state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://different-deer-hem.cyclic.app/api/course",
        {
          name,
          description,
          paid: paid == "Freemium" ? false : true,
          category,
          price,
          image,
        },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      console.log(data);
      toast.success("Berhasil menambah course");
      router.push("/instructor/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard | Add Kelas</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex h-screen">
        <SideBarInstructor />
        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader namaUser={user.nama} />
          <div className="bg-[#1D1E24] border-[1px] border-white/10 px-6 pt-8 pb-[2.875rem] rounded-[20px] max-w-[49rem] mt-[4.5rem]">
            <form onSubmit={handleSubmit}>
              <div className="">
                <p className="text-white/80 text-left mb-2">Nama Kelas</p>
                <input
                  type="text"
                  className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mt-[0.625rem]">
                <p className="text-white/80 text-left mb-2">Deskripsi</p>
                <textarea
                  className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[20px]"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
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
                    onChange={setPaid}
                    value={paid}
                  />
                </div>
                <div className="">
                  <p className="text-white/80 text-left mb-2">Kategori Game</p>
                  <Select
                    data={["FPS", "MOBA", "Strategy"]}
                    styles={{
                      input: {
                        backgroundColor: "#272833",
                        color: "white",
                        borderRadius: 20,
                        padding: "22px",
                        border: "none",
                      },
                    }}
                    onChange={setCategory}
                    value={category}
                  />
                </div>
                <div className="">
                  <p className="text-white/80 text-left mb-2">Harga Kelas</p>
                  <input
                    type="text"
                    className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    disabled={paid == "Premium" ? false : true}
                  />
                </div>
                <div className="">
                  <p className="text-white/80 text-left mb-2">Upload Gambar</p>
                  <input
                    type="text"
                    className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                  />
                </div>
              </div>
              <button className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddKelas;
