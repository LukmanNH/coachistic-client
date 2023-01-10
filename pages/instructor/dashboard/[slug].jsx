import React, { useContext, useState } from "react";
import SideBarInstructor from "../../../components/SideBarInstructor";
import DashboardHeader from "../../../components/DashboardHeader";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Context } from "../../../context";
import Modal from "react-modal";

const AddLesson = () => {
  const [lessons, setLessons] = useState([]);
  const [course, setCourse] = useState({});
  const [successAddLesson, setSuccessAddLesson] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [lessonIdUpdate, setlessonIdUpdate] = useState("");

  // state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  async function getLessons() {
    const slug = router.asPath.split("/")[3];
    try {
      const { data } = await axios.get(
        `https://different-deer-hem.cyclic.app/api/course/lessons/${slug}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setLessons(data.lessons);
    } catch (error) {}
  }

  async function getDetailedCourse() {
    const slug = router.asPath.split("/")[3];
    try {
      const { data } = await axios.get(
        `https://different-deer-hem.cyclic.app/api/course/${slug}`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setCourse(data.course);
    } catch (error) {}
  }

  async function addLessons(e) {
    e.preventDefault();
    const slug = router.asPath.split("/")[3];
    try {
      const { data } = await axios.post(
        `https://different-deer-hem.cyclic.app/api/course/add-lesson/${slug}/${user._id}`,
        { title, description, video },
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setTitle("");
      setDescription("");
      setVideo("");
      setSuccessAddLesson(true);
      setModalIsOpen(false);
    } catch (error) {}
  }

  async function deleteLesson(e, idLesson) {
    e.preventDefault();
    const slug = router.asPath.split("/")[3];
    try {
      const { data } = await axios.delete(
        `https://different-deer-hem.cyclic.app/api/course/lessons/${slug}/${idLesson}`,
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      getLessons();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLessons();
    if (successAddLesson) {
      getLessons();
      setSuccessAddLesson(false);
    }
    getDetailedCourse();
  }, [successAddLesson]);

  function handleUpdate(title, description, video) {
    setUpdated(true);
    setTitle(title);
    setDescription(description);
    setVideo(video);
  }

  async function submitUpdate(e, idLesson) {
    e.preventDefault();
    const slug = router.asPath.split("/")[3];
    try {
      const { data } = await axios.put(
        `https://different-deer-hem.cyclic.app/api/course/lessons/${slug}/${idLesson}`,
        { _id: idLesson, title, description, video_url: video },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setModalIsOpen(false);
      getLessons();
    } catch (error) {}
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(19, 21, 27, 0.7)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className={`bg-white p-6 w-[28.125rem] rounded-[20px]`}>
          <div className="flex">
            <h1>Add Lessons</h1>
            <div className="ml-auto cursor-pointer">
              <img
                onClick={() => setModalIsOpen(false)}
                src="/icon_close.svg"
                alt=""
              />
            </div>
          </div>
          <form
            onSubmit={(e) =>
              updated ? submitUpdate(e, lessonIdUpdate) : addLessons(e)
            }
          >
            <div className="mt-6">
              <p className="text-[#272833]/80">Judul Materi</p>
              <input
                type="text"
                className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mt-6">
              <p className="text-[#272833]/80">Deskripsi</p>
              <textarea
                type="text"
                className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[20px] h-[116px]"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="mt-6 mb-12">
              <p className="text-[#272833]/80">Link Materi</p>
              <input
                type="text"
                className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
                onChange={(e) => setVideo(e.target.value)}
                value={video}
              />
            </div>
            <button
              type="submit"
              className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto"
            >
              {updated ? "Update" : "Submit"}
            </button>
          </form>
        </div>
      </Modal>
      <div className="h-screen flex">
        <SideBarInstructor />
        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader />
          <div className="flex mt-[4.5rem]">
            <div className="">
              <h1 className="text-white font-bold ">{course.name}</h1>
            </div>
            <div className="flex ml-auto gap-x-4">
              <img src="/icon_edit.svg" alt="" width="36" height="36" />
              <img src="/icon_publish.svg" alt="" width="36" height="36" />
            </div>
          </div>
          <p className="font-light text-white/60 mt-2">{course.description}</p>
          <p className="text-white/80 text-sm mt-1">
            Rp. {course.paid ? course.price : "Free"} |{" "}
            <span className="text-[#068F23]/80 text-sm">
              {course.paid ? "Premium" : "Freemium"}
            </span>
          </p>
          <hr className="border-t-[1.5px] border-white/10 mt-4 mb-[4.25rem]" />
          <div
            onClick={() => {
              setModalIsOpen(true);
              setUpdated(false);
              setTitle("");
              setDescription("");
              setVideo("");
            }}
            className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto"
          >
            Add Lessons
          </div>
          <div className="mt-[2.5rem]">
            <div className="">
              <h1 className="text-2xl font-medium text-white/80">
                {lessons.length} Lessons
              </h1>
              {lessons.map((item, idx) => (
                <div>
                  <div className="flex mt-6">
                    <p className="font-bold text-xl text-white/80">
                      {idx + 1}
                      <span className="font-semibold ml-8">{item.title}</span>
                    </p>
                    <div className="ml-auto flex gap-x-4">
                      <img
                        src="/icon_edit.svg"
                        alt=""
                        width="36"
                        height="36"
                        onClick={() => {
                          handleUpdate(
                            item.title,
                            item.description,
                            item.video_url
                          );
                          setModalIsOpen(true);
                          setlessonIdUpdate(item._id);
                        }}
                      />
                      <img
                        src="/icon_delete.svg"
                        alt=""
                        width="36"
                        height="36"
                        onClick={(e) => deleteLesson(e, item._id)}
                      />
                    </div>
                  </div>
                  <hr className="border-t-[1.5px] border-white/10 mt-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLesson;
