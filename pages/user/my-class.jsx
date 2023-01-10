import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import DashboardHeader from "../../components/DashboardHeader";
import { useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";

const MyClass = () => {
  const [course, setCourse] = useState([]);
  // state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    getCourseOwnedByGamers();
  }, []);

  async function getCourseOwnedByGamers() {
    try {
      const { data } = await axios.get(
        "https://different-deer-hem.cyclic.app/api/course/user-courses",
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setCourse(data);
      console.log("course", course);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Kelas | {user?.nama}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex h-screen">
        <SideBar />

        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader namaUser={user.nama} />
          {/* Main */}
          <main className="mt-[4.5rem]">
            <h1 className="font-bold text-white text-[2rem] mb-2">
              Kelas Saya
            </h1>
            <p className="text-white/60 font-light max-w-xs">
              Upgrade terus skill dan pengalaman terbaru kamu
            </p>
            {/* BreadCrumbs */}
            <div className="mt-12 flex space-x-8 mb-8">
              <div className="border-2 border-white/60 rounded-[50px] px-12 py-2 text-white cursor-pointer">
                Active
              </div>
              <div className="border-2 border-white/60 rounded-[50px] px-12 py-2 text-white cursor-pointer ">
                Freemium
              </div>
              <div className="bg-[#068F23] border-2 border-transparent rounded-[50px] px-12 py-2 cursor-pointer">
                Premium
              </div>
              <div className="border-2 border-white/60 rounded-[50px] px-12 py-2 text-white cursor-pointer">
                Selesai
              </div>
            </div>
            {/* BreadCrumbs */}

            {/* Courses */}
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-x-8">
              {course.length == 0 ? (
                <div className="flex-col">
                  <div className="text-white">Belum mempunyai Kelas</div>
                  <h1 className="text-white">
                    Silakan beli kelas{" "}
                    <span className="text-lime-500 cursor-pointer">
                      <Link href={"/class"}>di sini</Link>
                    </span>
                  </h1>
                </div>
              ) : (
                course.map((item) => (
                  <div className="bg-[#1D1E24] border-[1.5px] border-white/10 p-6 rounded-[15px] max-w-[18.75rem]">
                    <img src="/jett.png" alt="jett" className="mb-7" />
                    <h1 className="text-white text-2xl font-bold cursor-pointer">
                      <Link href={`/user/course/${item.slug}`}>
                        {item.name}
                      </Link>
                    </h1>
                    <p className="text-white/20 text-xl font-light mb-6">
                      {item.paid ? "Kelas Premium" : "Kelas Freemium"}
                    </p>
                    <div className="flex gap-x-4 items-center">
                      <img src="/icon_check.svg" alt="" />
                      <p className="text-white font-xl">Akses Selamanya</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Courses */}
          </main>
          {/* End of Main */}
        </div>
      </div>
    </>
  );
};

export default MyClass;
