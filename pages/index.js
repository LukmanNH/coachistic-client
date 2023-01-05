import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Hero */}
      <div className="border-[2px] border-[#068F23] pl-[4.75rem] pt-[4.75rem] pr-[1.375rem] mx-[5.375rem] rounded-[10px] flex justify-between">
        <div>
          <h4 className="text-2xl text-[#068F23] font-medium">Ola Gamers!</h4>
          <h1 className="text-5xl text-white font-bold leading-[4.5rem]">
            Raihlah Cita Cita <br /> Menjadi Progamer
          </h1>
          <p className="mt-8 mb-[4.375rem] text-[#D8D9E2] max-w-md font-thin ">
            Choachistic menyediakan kelas yang telah disusun dengan baik oleh
            para gamers expert di bidangnya masing-masing.
          </p>
          <div className="space-x-8">
            <button className="px-[3.188rem] py-4 text-white font-bold text-xl bg-[#068F23] rounded-md ">
              Ayo Belajar
            </button>
            <button className="px-[3.188rem] py-4 text-white font-bold text-xl border-2 border-[#068F23] rounded-md ">
              Ayo Mengajar
            </button>
          </div>
        </div>
        <div className="content-end">
          <Image src={"/phoenix_hero.png"} width={650} height={590} />
        </div>
        <div className="absolute left-0 top-3 z-[-1]">
          <img src={"/backlight.png"} />
        </div>
      </div>
      {/* End Of Hero */}

      <div className="pl-[10.25rem] mb-20">
        {/* Course Categories */}
        <div className="mt-32">
          <h4 className="text-2xl text-[#068F23] font-medium">
            Ayo Segera Enroll
          </h4>
          <h1 className="text-5xl text-white font-bold leading-[4.5rem] max-w-3xl mb-12">
            Temukan Kelas Berdasarkan Kategori Game
          </h1>
          <div className="flex space-x-12">
            {/* MOBA */}
            <div className="py-[3.125rem] px-[2.25rem] bg-[#1D1E24] w-[18.75rem] h-[11.875rem] rounded-xl">
              <h3 className="text-white font-semibold text-xl">MOBA</h3>
              <div className="flex">
                <p className="mt-3 text-[#EFEDE8]/60 text-sm ">
                  Akses video kami dan jadilah yang terbaik
                </p>
                <img
                  src="../icon_next.png"
                  className="w-[42px] h-[42px] self-end cursor-pointer"
                />
              </div>
            </div>
            {/* END OF MOBA */}
            {/* FPS */}
            <div className="py-[3.125rem] px-[2.25rem] bg-[#1D1E24] w-[18.75rem] h-[11.875rem] rounded-xl">
              <h3 className="text-white font-semibold text-xl">FPS</h3>
              <div className="flex">
                <p className="mt-3 text-[#EFEDE8]/60 text-sm ">
                  Menjadikan karaktermu sekuat dirimu
                </p>
                <img
                  src="../icon_next.png"
                  className="w-[42px] h-[42px] self-end cursor-pointer"
                />
              </div>
            </div>
            {/* END OF FPS */}
            {/* STRATEGI */}
            <div className="py-[3.125rem] px-[2.25rem] bg-[#1D1E24] w-[18.75rem] h-[11.875rem] rounded-xl">
              <h3 className="text-white font-semibold text-xl">STRATEGI</h3>
              <div className="flex">
                <p className="mt-3 text-[#EFEDE8]/60 text-sm ">
                  Bangun strategi yang efektif dalam permainan
                </p>
                <img
                  src="../icon_next.png"
                  className="w-[42px] h-[42px] self-end cursor-pointer"
                />
              </div>
            </div>
            {/* END OF STRATEGI */}
            {/* BATTLE ROYALE */}
            <div className="py-[3.125rem] px-[2.25rem] bg-[#1D1E24] w-[18.75rem] h-[11.875rem] rounded-xl">
              <h3 className="text-white font-semibold text-xl">
                BATTLE ROYALE
              </h3>
              <div className="flex">
                <p className="mt-3 text-[#EFEDE8]/60 text-sm ">
                  Gabung sekarang, agar jago seperti impianmu
                </p>
                <img
                  src="../icon_next.png"
                  className="w-[42px] h-[42px] self-end cursor-pointer"
                />
              </div>
            </div>
            {/* END OF BATTLE ROYALE */}
          </div>
        </div>
        {/* End of Course Categories */}
        {/* Gabung Course */}
        <div className="mt-32">
          <h4 className="text-2xl text-[#068F23] font-medium">
            Gabung Sekarang
          </h4>
          <h1 className="text-5xl text-white font-bold leading-[4.5rem] max-w-3xl mb-12">
            Pilih Kelas Unggulan <br /> Yang Kami Rekomendasikan
          </h1>
          <div className="flex space-x-10">
            <div className="p-[1.688rem] bg-[#1D1E24] w-[21.625rem] h-[29.813rem] rounded-xl">
              <div>
                <Image src={"/jett.png"} width={292} height={216} />
              </div>
              <h3 className="text-white font-semibold text-xl mt-[1.688rem]">
                Tips Meningkatkan Aim Valorant untuk...
              </h3>
              <p className="mt-3 text-[#EFEDE8] ">Rp. 49,999</p>
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
            <div className="p-[1.688rem] bg-[#1D1E24] w-[21.625rem] h-[29.813rem] rounded-xl">
              <div>
                <Image src={"/jett.png"} width={292} height={216} />
              </div>
              <h3 className="text-white font-semibold text-xl mt-[1.688rem]">
                Tips Meningkatkan Aim Valorant untuk...
              </h3>
              <p className="mt-3 text-[#EFEDE8] ">Rp. 49,999</p>
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
            <div className="p-[1.688rem] bg-[#1D1E24] w-[21.625rem] h-[29.813rem] rounded-xl">
              <div>
                <Image src={"/jett.png"} width={292} height={216} />
              </div>
              <h3 className="text-white font-semibold text-xl mt-[1.688rem]">
                Tips Meningkatkan Aim Valorant untuk...
              </h3>
              <p className="mt-3 text-[#EFEDE8] ">Rp. 49,999</p>
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
            <div className="p-[1.688rem] bg-[#1D1E24] w-[21.625rem] h-[29.813rem] rounded-xl">
              <div>
                <Image src={"/jett.png"} width={292} height={216} />
              </div>
              <h3 className="text-white font-semibold text-xl mt-[1.688rem]">
                Tips Meningkatkan Aim Valorant untuk...
              </h3>
              <p className="mt-3 text-[#EFEDE8] ">Rp. 49,999</p>
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
          </div>
          <div className="absolute right-0 rotate-180 top-[58rem] z-[-1]">
            <img src={"/backlight.png"} />
          </div>
        </div>
        {/* End of Gabung Course */}
      </div>
      {/* FAQ */}
      <div className="mt-32 grid place-items-center">
        <h4 className="text-2xl text-[#068F23] font-medium">
          Ingin Tau Sesuatu ?
        </h4>
        <h1 className="text-5xl text-white font-bold leading-[4.5rem] max-w-lg text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="">
          <div className="grid grid-cols-2 gap-x-[2.875rem] gap-y-[2.375rem] text-white">
            <div className="bg-[#1D1E24] w-[33.313rem] h-[4.75rem] flex justify-between place-items-center px-6 rounded-xl">
              <h3 className="font-semibold text-xl">Apa itu Choachistic ?</h3>
              <img src="../arrow_down.png" className="w-6 h-6" />
            </div>
            <div className="bg-[#1D1E24] w-[33.313rem] h-[4.75rem] flex justify-between place-items-center px-6 rounded-xl ">
              <h3 className="font-semibold text-xl">
                Apakah ada komunitas belajarnya ?
              </h3>
              <img src="../arrow_down.png" className="w-6 h-6" />
            </div>
            <div className="bg-[#1D1E24] w-[33.313rem] h-[4.75rem] flex justify-between place-items-center px-6 rounded-xl">
              <h3 className="font-semibold text-xl">
                Privilege apa yang saya dapatkan ?
              </h3>
              <img src="../arrow_down.png" className="w-6 h-6" />
            </div>
            <div className="bg-[#1D1E24] w-[33.313rem] h-[4.75rem] flex justify-between place-items-center px-6 rounded-xl">
              <h3 className="font-semibold text-xl">
                Untuk siapa saja Choachistic ?
              </h3>
              <img src="../arrow_down.png" className="w-6 h-6" />
            </div>
            <div className="bg-[#1D1E24] w-[33.313rem] h-[4.75rem] flex justify-between place-items-center px-6 rounded-xl">
              <h3 className="font-semibold text-xl">
                Apakah ada kelas yang free ?
              </h3>
              <img src="../arrow_down.png" className="w-6 h-6" />
            </div>
            <div className="bg-[#1D1E24] w-[33.313rem] h-[4.75rem] flex justify-between place-items-center px-6 rounded-xl">
              <h3 className="font-semibold text-xl">
                Apakah kelasnya secara Live ?
              </h3>
              <img src="../arrow_down.png" className="w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[134rem] z-[-1]">
          <img src={"/backlight.png"} />
        </div>
        {/* End of FAQ */}
      </div>
      {/* CTA Footer */}
      <div className="mt-32 grid place-items-center">
        <div className="mb-16">
          <Image src={"/logo_big.png"} height={151} width={162} />
        </div>
        <h1 className="mb-4 text-[2.5rem] font-bold text-white">
          Ayo Jadi Progamer Sekarang!
        </h1>
        <p className="fon-light text-white text-[1.5rem] max-w-md text-center mb-16">
          Belajar langsung dari gamers yang ahli dibidangnya tanpa batas waktu
        </p>
        <button className="px-[1.563rem] py-[0.938rem] text-white font-bold text-xl bg-[#068F23] rounded-md">
          Daftar Sekarang
        </button>
      </div>
      {/* End Of CTA Footer */}
      {/* Footer */}
      <Footer />
      {/* End Of Footer */}
    </>
  );
}
