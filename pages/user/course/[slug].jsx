import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../context";
import { useRouter } from "next/router";
import Head from "next/head";

const DetailCourse = () => {
  const [course, setCourse] = useState({});
  const [currentUrl, setCurrentUrl] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentLesson, setCurrentLesson] = useState({});
  const [firstVideo, setfirstVideo] = useState({});

  // user state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  async function getCourseBySlug() {
    const slug = router.asPath.split("/")[3];
    try {
      const { data } = await axios.get(
        `https://different-deer-hem.cyclic.app/api/course/${slug}`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      console.log(data.course);
      setCourse(data.course);
      setCurrentUrl(data.course.lessons[0].video_url);
      setCurrentLesson(data.course.lessons[0]);
      setfirstVideo(data.course.lessons[0]);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(currentLesson);

  useEffect(() => {
    if (user == null) router.push("/login");
    getCourseBySlug();
  }, []);

  return (
    <>
      <Head>
        <title>{course?.name}</title>
      </Head>
      <div className="flex mx-[5.375rem] my-[2.875rem]">
        <div>
          <Link href={"/"}>
            <img src="/logo.svg" alt="logo" className="cursor-pointer" />
          </Link>
        </div>
        <div className="text-white self-center ml-[4.375rem] cursor-pointer">
          <Link href={"/user"}>My Dashboard</Link>
        </div>
        <div className="ml-auto self-center">
          <div className="flex space-x-4 items-center">
            <div className="text-white text-base font-medium">
              <p>{user?.nama}</p>
            </div>
            <img
              className="block h-8 w-8 rounded-full ring-2 ring-[#068F23]"
              src="/avatar.png"
            />
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex mx-[7.75rem]">
        {/* SideBar */}
        <div>
          <div className="bg-[#1D1E24] px-4 py-6 rounded-[16px] mb-6">
            <h2 className="text-white font-semibold mb-2">Persiapan Kelas</h2>
            <p className="text-xs text-white/60 mb-4">
              Trailer Kelas | Channel Discord
            </p>
            <div className="flex bg-[#272833] rounded-[50px] px-4 py-3 space-x-2 mb-3 cursor-pointer">
              <div>
                <img src="/icon_play_white.svg" alt="play" />
              </div>
              <h3 className="font-medium text-white">{firstVideo?.title}</h3>
            </div>
            <div className="flex bg-[#272833] rounded-[50px] px-4 py-3 space-x-2 mb-3 cursor-pointer">
              <div>
                <img src="/icon_discord_link.svg" alt="play" />
              </div>
              <h3 className="font-medium text-white">
                <a href="https://discord.gg/wuSBZf8A" target={"_blank"}>
                  Join Discord
                </a>
              </h3>
            </div>
          </div>

          <div className="bg-[#1D1E24] px-4 py-6 rounded-[16px] mb-6 max-h-[45.438rem] overflow-auto">
            <h2 className="text-white font-semibold mb-2">Semangat Belajar</h2>
            <p className="text-xs text-white/60 mb-4">
              {course?.lessons?.length} Lessons (14.3 hours)
            </p>
            {course?.lessons?.map((item, idx) => (
              <div
                className="flex bg-[#272833] rounded-[50px] px-4 py-3 space-x-2 mb-3 cursor-pointer"
                onClick={() => {
                  setCurrentUrl(item.video_url);
                  setCurrentIdx(idx);
                  setCurrentLesson(course?.lessons[idx]);
                }}
              >
                <div>
                  <img src="/icon_play_white.svg" alt="play" />
                </div>
                <h3 className="font-medium text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        {/* SideBar */}

        {/* Video Course */}
        <div>
          <div className="ml-8 rounded-[20px] overflow-hidden">
            <iframe
              src={currentUrl}
              frameborder="0"
              width="886"
              height="495"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex mt-6 ml-8 mb-16">
            <div>
              <h1 className="text-white text-[2rem] font-semibold">
                {currentLesson.title}
              </h1>
              <p className="text-white/80 font-light">
                {currentLesson.description}
              </p>
            </div>
            <div
              className="ml-auto bg-[#068F23] text-white my-auto px-6 py-2 rounded-[50px]"
              onClick={() => {
                setCurrentIdx(
                  currentIdx >= course?.lessons.length
                    ? currentIdx
                    : currentIdx + 1
                );
                setCurrentUrl(course?.lessons[currentIdx].video_url);
              }}
            >
              Next Lesson
            </div>
          </div>
          <div className="ml-8">
            <h1 className="text-white font-semibold text-xl mb-4">
              Your Instructor
            </h1>
            <div className="bg-[#1D1E24] px-[2rem] py-6 rounded-2xl max-w-[23.5rem] mb-[7.25rem]">
              <div className="flex">
                <div className="mr-4">
                  <img
                    src="/avatar.png"
                    alt="avatar"
                    className="rounded-full h-20 w-20"
                  />
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold mb-[6px]">
                    Arrya Dali Lesmana{" "}
                  </h1>
                  <p className="text-white/90 font-extralight mb-[6px]">
                    Valorant Expert
                  </p>
                  <div className="flex space-x-4">
                    <img src="/discord.svg" alt="" />
                    <img src="/instagram.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Course */}
      </div>
      {/* Main */}
    </>
  );
};

export default DetailCourse;
