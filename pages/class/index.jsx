import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const Class = () => {
  const [courses, setCourses] = useState([]);

  async function getAllCourse() {
    try {
      const { data } = await axios.get(
        "https://different-deer-hem.cyclic.app/api/course"
      );
      setCourses(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <>
      <Head>
        <title>Coachistic | Kelas</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>
      <NavBar />
      {/* End of Course Type */}
      <div className="text-center text-white mb-14">
        <h1 className="mb-6 font-bold text-[2.5rem]">
          Semua Kelas Yang Tersedia
        </h1>
        <p className="font-light text-[#D8D9E2] max-w-[29.25rem] mx-auto">
          Bergabung dengan kami di kelas Premium dan wujudkan mimpimu sebagai
          progamer
        </p>
      </div>

      <div className="mt-[6.5rem] grid grid-cols-3 mx-[7.75rem] gap-y-[2rem]">
        {courses.map((item) => (
          <div className="p-[1.688rem] bg-[#1D1E24] w-[21.625rem] h-[29.813rem] rounded-xl">
            <div>
              <Image src={"/jett.png"} width={292} height={216} />
            </div>
            <h3 className="text-white font-semibold text-xl mt-[1.688rem] cursor-pointer">
              <Link href={`/class/${item.slug}`}>{item.name}</Link>
            </h3>
            <p className="mt-3 text-[#EFEDE8] ">Rp. {item.price}</p>
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
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Class;
