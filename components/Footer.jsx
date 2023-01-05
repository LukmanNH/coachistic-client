import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-[6.5rem] pl-[10.25rem] bg-[#1D1E24] pb-[3.938rem]">
      <div className="grid grid-cols-4 pt-16">
        <div>
          <h1 className="mb-6 font-bold text-2xl text-white">Our Games</h1>
          <div className="text-[#D8D9E2] text-xl space-y-2">
            <p>Valorant</p>
            <p>FIFA</p>
            <p>PUBG</p>
            <p>Dota 2</p>
            <p>Mobile Legends</p>
            <p>CS:GO</p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 font-bold text-2xl text-white">MAIN MENU</h1>
          <div className="text-[#D8D9E2] text-xl space-y-2">
            <p>Kelas</p>
            <p>Jadi Instructor</p>
            <p>Kategori Game</p>
            <p>FAQ</p>
          </div>
        </div>
        <div>
          <h1 className="mb-6 font-bold text-2xl text-white">SOSIAL MEDIA</h1>
          <div className="inline-grid grid-cols-2 gap-y-2 gap-x-9 ">
            <div>
              <Image src={"/instagram.png"} width={24} height={24} />
            </div>
            <div>
              <Image src={"/facebook.png"} width={13.89} height={24} />
            </div>
            <div>
              <Image src={"/discord.png"} width={24} height={24} />
            </div>
            <div>
              <Image src={"/youtube.png"} width={24} height={24} />
            </div>
            <div>
              <Image src={"/twitter.png"} width={24} height={24} />
            </div>
            <div>
              <Image src={"/linkedin.png"} width={24} height={24} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-6 font-bold text-2xl text-white">BANTUAN</h1>
          <div className="text-[#D8D9E2] text-xl space-y-2">
            <p>Help Center</p>
            <p>Hubungi Kami</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
