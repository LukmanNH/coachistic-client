import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import Footer from "../../components/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Context } from "../../context";
import { toast } from "react-hot-toast";
import Head from "next/head";

const DetailCourse = () => {
  const [course, setCourse] = useState({});

  // state user
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  async function getCourse() {
    const slug = router.asPath.split("/")[2];
    console.log(slug);
    try {
      const { data } = await axios.get(
        `https://different-deer-hem.cyclic.app/api/course/course/${slug}`
      );
      setCourse(data);
      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    getCourse();
  }, []);

  async function enrollFreeCourse(e) {
    e.preventDefault();
    try {
      if (user == null) {
        router.push("/login");
      } else {
        const { data } = await axios.post(
          `https://different-deer-hem.cyclic.app/api/course/free-enrollment/${course._id}`,
          {},
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        toast.success("Course berhasil di tambahkan cek segera di dashboard");
        router.push("/");
      }
    } catch (error) {}
  }

  async function enrollPaidCourse(e) {
    e.preventDefault();
    const slug = router.asPath.split("/")[2];
    router.push(`/checkout/${slug}`);
  }

  return (
    <>
      <Head>
        <title>Coachistic | {course?.name}</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>
      <NavBar />
      {/* Course Type (Free / Premium) */}
      <div className="mb-[3.25rem] container w-[206px] py-1 text-xl text-[#068F23] bg-[#068F23]/30 grid place-content-center mx-auto rounded-full">
        <p>{course.paid ? "Premium Edition" : "Free Edition"}</p>
      </div>
      {/* End of Course Type */}
      <div className="text-center text-white mb-14">
        <h1 className="mb-6 font-bold text-[2.5rem]">{course?.name}</h1>
        <p className="font-light text-[#D8D9E2]">{course?.description}</p>
      </div>

      <div className="grid grid-cols-3 place-items-center max-w-4xl mx-auto text-2xl font-medium text-white gap-y-6 mb-16">
        <div>Member</div>
        <div>Tingkatan</div>
        <div>Konsultasi</div>
        <div className="font-bold">
          512 <span className="font-normal">Enrolled</span>
        </div>
        <div>
          <Image src={"/beginner.svg"} width="29" height="35" />
        </div>
        <div>
          <Image src={"/icon_check.svg"} width="32" height="32" />
        </div>
      </div>

      <div className="container mx-[7.75rem]">
        <div className="grid grid-cols-12 mb-[3.5rem]">
          <div className="col-span-8">
            <Image src="/video_preview_course.png" width="784" height="438" />
          </div>
          <div className="col-span-4">
            <div className="bg-[#1D1E24] px-[1.688rem] py-6 rounded-t-[20px] border border-white/10">
              <h3 className="font-semibold text-white mb-6">
                {course?.lessons?.length} Lessons (14.3 hours)
              </h3>
              {course?.lessons?.map((item) => (
                <div className="bg-[#272833] px-4 py-2 rounded-[50px] flex items-center text-white font-light mb-[1.125rem]">
                  <div>
                    <img src={"/icon_play.svg"} width="24" height="24" />
                  </div>
                  <div className="ml-4">
                    <p>{item.title}</p>
                  </div>
                  <div className="ml-auto">
                    <p>2 mins</p>
                  </div>
                </div>
              ))}
            </div>
            <div
              onClick={course.paid ? enrollPaidCourse : enrollFreeCourse}
              className="px-[7.313rem] py-4 text-center bg-[#068F23]/80 font-medium text-xl text-white rounded-b-[20px] cursor-pointer"
            >
              Gabung Kelas
            </div>
          </div>
        </div>

        <div className="mb-[3.125rem]">
          <div className="text-[#D8D9E2] font-medium">
            <ul className="flex gap-x-16">
              <li>About</li>
              <li>Lessons</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-12 mb-[4.5rem]">
          <div className="col-span-8">
            <h1 className="text-white text-2xl font-semibold mb-6">
              Improving Your Aim
            </h1>
            <p className="text-white/90 font-light max-w-[43rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </p>
          </div>
          <div className="col-span-3">
            <h1 className="text-white text-2xl font-semibold mb-6">
              Kelas Lainnya
            </h1>
            <div className="bg-[#1D1E24] px-[1.625rem] py-[1.75rem] rounded-[15px] border border-white/10">
              <Image src={"/other_class.png"} width="324" height="189" />
            </div>
          </div>
        </div>

        <div className="text-white grid justify-center justify-items-center mb-32">
          <h3 className="mb-6 text-2xl">Your Instructor</h3>
          <div className="mb-4">
            <Image src={"/instructor_image.png"} width="100" height="100" />
          </div>
          <h4 className="text-xl mb-[6px]">Arrya Dali Lesmana</h4>
          <p className="font-extralight text-white/95">Valorant Expert</p>
          <div className="gap-x-4 flex mb-[18px]">
            <Image src={"/instagram.svg"} width="24" height="24" />
            <Image src={"/discord.svg"} width="24" height="24" />
          </div>
          <p className="text-sm max-w-3xl font-light text-center">
            Saya adalah pemain valorant yang expert. Dibuktikan dengan rank saya
            Radiant top 10 Bojongsoang, Bandung. Saya pernah menjuarai kejuaraan
            INTERFEST tahun 2022 yang dilaksanakan di Indonesia, tepatnya di
            salah satu universitas swasta terkenal di Kota Bandung.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailCourse;
