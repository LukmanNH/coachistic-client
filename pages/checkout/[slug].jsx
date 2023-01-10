import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { Context } from "../../context";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import ConfirmPage from "./[slug]/confirm-page";

const CheckoutPage = () => {
  // state
  const [course, setCourse] = useState({});
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

  useEffect(() => {
    if (user == null) router.push("/login");
    getDetailedCourse();
  }, []);

  return (
    <>
      <NavBar />
      <div className="text-center mt-16 mb-[6rem]">
        <h1 className="text-white font-bold text-[2.5rem] mb-4">
          Checkout Kelas
        </h1>
        <p className="text-white text-xl font-light max-w-md mx-auto">
          Bergabung dengan kami di kelas Premium dan wujudkan mimpimu sebagai
          progamer
        </p>
      </div>
      <div className="flex justify-center gap-x-8 mb-[10.25rem]">
        <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-7 rounded-[15px] max-w-[23.5rem] max-h-[30.375rem]">
          <img src="/jett.png" alt="jett" className="mb-5" />
          <h1 className="text-white font-bold text-2xl mb-5">{course.nama}</h1>
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

        <div>
          <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-8 rounded-[15px] min-w-[36.25rem] max-w-[36.25rem]">
            <h3 className="text-white font-semibold text-xl mb-8">
              Detail Pembayaran
            </h3>
            <div className="flex justify-between text-white/80 text-xl mb-6">
              <div>Harga Normal</div>
              <div>Rp. {course.price}</div>
            </div>
            <div className="flex justify-between text-white/80 text-xl mb-6">
              <div>Harga Diskon</div>
              <div>Rp. 0</div>
            </div>
            <div className="flex justify-between text-xl">
              <div className="text-white/80">Total Harga</div>
              <div className="text-white">Rp. {course.price}</div>
            </div>
            <hr className="border-[1px] border-white my-[2.5rem]" />
            <h3 className="text-white font-semibold text-xl mb-8">
              Transfer Pembayaran
            </h3>
            <img src="/mandiri.svg" alt="mandiri" width="111" height="31" />
            <p className="mt-4 text-white/80 text-xl">
              Coachistic Group (Admin Alif)
            </p>
            <p className="mt-1 text-white text-xl font-semibold mb-6">
              1712002838617
            </p>
            <img src="/bca.svg" alt="bca" />
            <p className="mt-4 text-white/80 text-xl">
              Coachistic Group (Admin Alif)
            </p>
            <p className="mt-1 text-white text-xl font-semibold">0280252355</p>
            <div
              onClick={() => {
                Swal.fire({
                  title: "Apakah anda sudah melakukan pembayaran?",
                  icon: "warning",
                  showCancelButton: true,
                  cancelButtonText: "Belum",
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Sudah!",
                }).then((result) => {
                  router.push(`/checkout/${course.slug}/confirm-page`);
                });
              }}
              className="mt-11 text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer mx-auto text-center"
            >
              Konfirmasi Pembayaran
            </div>
          </div>
          <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-8 rounded-[15px] min-w-[36.25rem] max-w-[36.25rem] mt-8">
            <h3 className="text-white font-semibold text-xl mb-8">
              Informasi penting
            </h3>
            <p className="text-xl text-white/80 max-w-[29.125rem]">
              Waktu operasional mencakup pelayanan konsultasi, transaksi admin,
              dan customer service. Hanya akan dilayani pada hari kerja{" "}
              <span className="text-white font-medium text-xl ">
                Senin s/d Jum'at pukul 08:00 WIB - 17:00 WIB{" "}
              </span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckoutPage;
