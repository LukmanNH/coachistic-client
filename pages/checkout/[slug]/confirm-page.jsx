import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import { Context } from "../../../context";
import axios from "axios";
import toast from "react-hot-toast";

const ConfirmPage = () => {
  // state
  const [course, setCourse] = useState({});
  const [picture, setPicture] = useState(String);
  // state user
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  async function getDetailedCourse() {
    const slug = router.asPath.split("/")[2];
    try {
      const { data } = await axios.get(
        `https://different-deer-hem.cyclic.app/api/course/course/${slug}`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(data);
      setCourse(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function submitKonfirmasiPembayaran(e) {
    e.preventDefault();
    const payload = new FormData();
    payload.append("picture", picture);
    try {
      const { data } = await axios.post(
        `https://different-deer-hem.cyclic.app/api/transaction/buy-course/${course._id}`,
        payload,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      toast.success("Berhasil Mengupload Bukti Pembayaran");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user == null) router.push("/login");
    getDetailedCourse();
  }, []);
  return (
    <>
      <NavBar />

      <div className="text-center mt-16 mb-[6rem]">
        <h1 className="text-white font-bold text-[2.5rem] mb-4">
          Konfirmasi Pembayaran
        </h1>
        <p className="text-white text-xl font-light max-w-md mx-auto">
          Bergabung dengan kami di kelas Premium dan wujudkan mimpimu sebagai
          progamer
        </p>
      </div>

      <div className="flex justify-center place-items-start gap-x-8 mb-[10.25rem]">
        <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-7 rounded-[15px] max-w-[23.5rem] max-h-[30.375rem] ">
          <img src="/jett.png" alt="jett" className="mb-5" />
          <h1 className="text-white font-bold text-2xl mb-5">{course.name}</h1>
          <p className="text-white text-xl font-light mb-[2.375rem]">
            Rp. {course.price}
          </p>
          <div className="mt-[2.188rem] flex space-x-5">
            {/* STARS */}
            <div className="flex gap-1">
              <Image src={"/star.png"} width={20} height={20} />
              <Image src={"/star.png"} width={20} height={20} />
              <Image src={"/star.png"} width={20} height={20} />
              <Image src={"/star.png"} width={20} height={20} />
              <Image src={"/star.png"} width={20} height={20} />
            </div>
            {/* END OF STARS */}
            {/* Review Numbers */}
            <div className="">
              <p className="text-white">(512)</p>
            </div>
            {/* End Of Review Numbers */}
          </div>
        </div>

        <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-8 rounded-[15px] min-w-[29.875rem] max-w-[29.875rem]">
          <h3 className="text-white font-semibold text-xl mb-8">
            Konfirmasi Pembayaran
          </h3>
          <div className="">
            <p className="text-white/80 mb-2">Upload Bukti</p>
          </div>
          <div className="relative text-white/60">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <button type="submit" className="p-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1211 2.209V14.25"
                    stroke="white"
                    stroke-opacity="0.87"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.20508 5.13574L12.1211 2.20774L15.0371 5.13574"
                    stroke="white"
                    stroke-opacity="0.87"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.63 7.64014C4.05 7.97014 2.75 9.31014 2.75 14.6401C2.75 21.7411 5.06 21.7411 12 21.7411C18.94 21.7411 21.25 21.7411 21.25 14.6401C21.25 9.31014 19.95 7.97014 16.37 7.64014"
                    stroke="white"
                    stroke-opacity="0.87"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </span>
            <input
              type="file"
              name="picture"
              className="py-3 font-medium text-white bg-[#272833] focus:outline-none pl-12 w-full rounded-[50px] max-w-[25.875rem]"
              placeholder="Upload bukti pembayaran"
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </div>
          <p className="text-xs text-white/60 mt-1 mb-[5rem]">
            Format file jpg, jpeg, png.
          </p>
          <div
            onClick={(e) => submitKonfirmasiPembayaran(e)}
            className="mt-11 text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[25.875rem]"
          >
            Konfirmasi Pembayaran
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ConfirmPage;
