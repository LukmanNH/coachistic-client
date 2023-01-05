import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Context } from "../../context";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";

const BecomeInstructor = () => {
  const [expertise, setExpertise] = useState("");
  const [instagram, setInstagram] = useState("");
  const [discord, setDiscord] = useState("");
  const [summary, setSummary] = useState("");
  // state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    if (user == null && !user?.role.includes("Instructor")) {
      router.push("/login");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/api/instructor/make-instructor",
      {
        expertise,
        instagram,
        discord,
        summary,
      }
    );
    toast.success("success become instructor");
  };

  return (
    <>
      <NavBar />
      <div className="text-center mt-16 mb-[6.5rem]">
        <h1 className="text-white font-bold text-[2.5rem] mb-4">
          Daftar Jadi Instructor
        </h1>
        <p className="text-white/80 text-xl font-light max-w-md mx-auto">
          Bagikan pengalamanmu kepada para gamers pemula dan dapatkan manfaatnya
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-[#1D1E24] border-[1px] border-white/10 px-6 pt-8 pb-[2.875rem] rounded-[20px] max-w-[49rem] mx-auto">
          <div className="grid grid-cols-2 gap-y-4 gap-x-[1.25rem]">
            <div className="">
              <p className="text-white/80 text-left mb-2">Nama Lengkap</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                value={user?.nama}
                disabled
              />
            </div>
            <div className="">
              <p className="text-white/80 text-left mb-2">No Telepon</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                value={user?.no_telp}
                disabled
              />
            </div>
            <div className="">
              <p className="text-white/80 text-left mb-2">Email</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                value={user?.email}
                disabled
              />
            </div>
            <div className="">
              <p className="text-white/80 text-left mb-2">Expertise</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                onChange={(e) => setExpertise(e.target.value)}
                required
              />
            </div>
            <div className="">
              <p className="text-white/80 text-left mb-2">Instagram</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                onChange={(e) => setInstagram(e.target.value)}
                required
              />
            </div>
            <div className="">
              <p className="text-white/80 text-left mb-2">Link Discord</p>
              <input
                type="text"
                className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[50px]"
                onChange={(e) => setDiscord(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mt-[0.625rem]">
            <p className="text-white/80 text-left mb-2">Summary</p>
            <textarea
              className="text-white/30 font-medium bg-[#272833] focus:outline-none py-3 px-4 w-full rounded-[20px]"
              onChange={(e) => setSummary(e.target.value)}
              required
            />
          </div>
          <button className="block mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] min-w-[20rem] mx-auto">
            Simpan
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default BecomeInstructor;
