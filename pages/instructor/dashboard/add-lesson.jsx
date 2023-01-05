import React from "react";
import SideBarInstructor from "../../../components/SideBarInstructor";
import DashboardHeader from "../../../components/DashboardHeader";
import toast from "react-hot-toast";

const AddLesson = () => {
  const addLessonHandler = () => {
    toast.custom(
      (t) => (
        <div className={`bg-white p-6 w-[28.125rem] rounded-[20px]`}>
          <div className="flex">
            <h1>Add Lessons</h1>
            <div className="ml-auto cursor-pointer">
              <img
                onClick={() => toast.dismiss(t.id)}
                src="/icon_close.svg"
                alt=""
              />
            </div>
          </div>
          <div className="mt-6">
            <p className="text-[#272833]/80">Judul Materi</p>
            <input
              type="text"
              className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
            />
          </div>
          <div className="mt-6">
            <p className="text-[#272833]/80">Deskripsi</p>
            <textarea
              type="text"
              className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[20px] h-[116px]"
            />
          </div>
          <div className="mt-6 mb-12">
            <p className="text-[#272833]/80">Link Materi</p>
            <input
              type="text"
              className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
            />
          </div>
          <div className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto">
            Simpan
          </div>
        </div>
      ),
      { duration: Infinity }
    );
  };

  return (
    <>
      <div className="h-screen flex">
        <SideBarInstructor />
        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader />
          <div className="flex mt-[4.5rem]">
            <div className="">
              <h1 className="text-white font-bold ">
                Tips Meningkatkan Aim Valorant untuk Para Pemula
              </h1>
            </div>
            <div className="flex ml-auto gap-x-4">
              <img src="/icon_edit.svg" alt="" width="36" height="36" />
              <img src="/icon_publish.svg" alt="" width="36" height="36" />
            </div>
          </div>
          <p className="font-light text-white/60 mt-2">
            Mastering aim dan game sense dalam Valorant
          </p>
          <p className="text-white/80 text-sm mt-1">
            Rp. 49,999 |{" "}
            <span className="text-[#068F23]/80 text-sm">Premium</span>
          </p>
          <hr className="border-t-[1.5px] border-white/10 mt-4 mb-[4.25rem]" />
          <div
            onClick={addLessonHandler}
            className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto"
          >
            Add Lessons
          </div>
          <div className="mt-[2.5rem]">
            <div className="">
              <h1 className="text-2xl font-medium text-white/80">
                138 Lessons
              </h1>
              {[0, 1, 2, 3, 4].map((item) => (
                <div>
                  <div className="flex mt-6">
                    <p className="font-bold text-xl text-white/80">
                      1.{" "}
                      <span className="font-semibold ml-8">Trailer Class</span>
                    </p>
                    <div className="ml-auto flex gap-x-4">
                      <img src="/icon_edit.svg" alt="" width="36" height="36" />
                      <img
                        src="/icon_delete.svg"
                        alt=""
                        width="36"
                        height="36"
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
