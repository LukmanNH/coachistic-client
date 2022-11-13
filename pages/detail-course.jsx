import React from "react";
import NavBar from "../components/NavBar";

const DetailCourse = () => {
  return (
    <>
      <NavBar />
      {/* Course Type (Free / Premium) */}
      <div className="mb-[3.25rem] container w-[206px] py-1 text-xl text-[#068F23] bg-[#068F23]/30 grid place-content-center mx-auto rounded-full">
        <p>Premium Edition</p>
      </div>
      {/* End of Course Type */}
      <div className="text-center text-white mb-6">
        <h1 className="mb-6 font-bold text-[2.5rem]">
          Tips Meningkatkan Aim Valorant <br /> untuk Para Pemula
        </h1>
        <p className="font-light text-[#D8D9E2]">
          Mastering aim dan game sense dalam Valorant
        </p>
      </div>

      <div className="grid grid-cols-3 place-items-center">
        <div>Member</div>
        <div>Member</div>
        <div>Member</div>
      </div>
    </>
  );
};

export default DetailCourse;
