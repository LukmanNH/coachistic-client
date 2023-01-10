import React, { useContext } from "react";
import SideBarInstructor from "../../../../components/SideBarInstructor";
import DashboardHeader from "../../../../components/DashboardHeader";
import { MultiSelect, NativeSelect, Select } from "@mantine/core";
import { Context } from "../../../../context";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Head from "next/head";

const EditProfile = () => {
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const [nama, setNama] = useState(user.nama);
  const [noTelp, setNoTelp] = useState(user.no_telp);
  const [instagram, setInstagram] = useState(user.instagram);
  const [discord, setDiscord] = useState(user.discord);
  const [summary, setSummary] = useState(user.summary);
  const [umur, setUmur] = useState(Number);
  const [jenisKelamin, setJenisKelamin] = useState(String);
  const [expertise, setExpertise] = useState(String);
  const [picture, setPicture] = useState(String);

  // router
  const router = useRouter();

  // function onSelectedFile(e) {
  //   const file = e.target.file[0];
  //   const urlImage = URL.createObjectURL(file);
  //   setPicture(urlImage);
  // }

  async function updateProfile(e) {
    e.preventDefault();
    const token = user.token;

    const payload = new FormData();
    payload.append("nama", nama);
    payload.append("no_telp", noTelp);
    payload.append("umur", umur);
    payload.append("jenisKelamin", jenisKelamin);
    payload.append("expertise", expertise);
    payload.append("instagram", instagram);
    payload.append("discord", discord);
    payload.append("summary", summary);
    picture && payload.append("picture", picture);
    try {
      const { data } = await axios.put(
        "https://different-deer-hem.cyclic.app/api/instructor/update",
        payload,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      const statusUpdated = data.statusUpdated;
      const newStorage = {
        token,
        ...statusUpdated,
      };
      localStorage.setItem("user", JSON.stringify(newStorage));
      toast.success("Berhasil Mengubah Data");
      router.push("/instructor/dashboard");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(picture);
  return (
    <>
      <Head>
        <title>Edit Profile | {user && user?.nama}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex h-screen">
        <SideBarInstructor />

        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader namaUser={user && user?.nama} />
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
              <div className="flex justify-center ">
                <div className="rounded-full ">
                  <img
                    src={user?.picture}
                    alt="avatar"
                    className="rounded-full w-24 h-24"
                  />
                </div>
              </div>
              {/* <button className="bg-[#068F23] mt-2 py-2 px-5 rounded-lg text-white">
              UPLOAD
            </button> */}
              <form onSubmit={(e) => updateProfile(e)}>
                <input
                  type="file"
                  name="picture"
                  // value={picture}
                  onChange={(e) => setPicture(e.target.files[0])}
                />
                <p className="mt-2 text-white/60 text-xs">
                  Format file jpg, jpeg, png.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-[1.25rem]">
                  <div>
                    <p className="text-white/80 text-left mb-2">Nama Lengkap</p>
                    <input
                      type="text"
                      className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                    />
                  </div>
                  <div>
                    <p className="text-white/80 text-left mb-2">No Telepon</p>
                    <input
                      type="text"
                      className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                      onChange={(e) => setNoTelp(e.target.value)}
                      value={noTelp}
                    />
                  </div>
                  <div>
                    <p className="text-white/80 text-left mb-2">Email</p>
                    <input
                      type="text"
                      className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                      disabled
                      value={user?.email}
                    />
                  </div>
                  <div>
                    <p className="text-white/80 text-left mb-2">Umur</p>
                    <input
                      type="text"
                      className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                      onChange={(e) => setUmur(e.target.value)}
                      value={umur}
                    />
                  </div>
                  <div>
                    <p className="text-white/80 text-left mb-2">
                      Jenis Kelamin
                    </p>
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
                      }}
                      onChange={setJenisKelamin}
                      value={jenisKelamin}
                    />
                  </div>
                  <div>
                    <p className="text-white/80 text-left mb-2">Expertise</p>
                    <Select
                      data={["Valorant", "Dota2", "FIFA"]}
                      styles={{
                        input: {
                          backgroundColor: "#272833",
                          color: "white",
                          borderRadius: 20,
                          padding: "22px",
                          border: "none",
                        },
                      }}
                      onChange={setExpertise}
                      value={expertise}
                    />
                  </div>
                  <div className="">
                    <p className="text-white/80 text-left mb-2">Instagram</p>
                    <input
                      type="text"
                      className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                      onChange={(e) => setInstagram(e.target.value)}
                      value={instagram}
                    />
                  </div>
                  <div className="">
                    <p className="text-white/80 text-left mb-2">Link Discord</p>
                    <input
                      type="text"
                      className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                      onChange={(e) => setDiscord(e.target.value)}
                      value={discord}
                    />
                  </div>
                </div>
                <div className="mt-[0.625rem]">
                  <p className="text-white/80 text-left mb-2">Summary</p>
                  <textarea
                    className="text-white font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[20px]"
                    onChange={(e) => setSummary(e.target.value)}
                    value={summary}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-11 text-white text-xl font-bold max-w-sm py-2 bg-[#068F23] rounded-[50px] cursor-pointer mx-auto"
                >
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
