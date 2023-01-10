import React, { useContext, useEffect } from "react";
import SideBarInstructor from "../../../components/SideBarInstructor";
import DashboardHeader from "../../../components/DashboardHeader";
import Image from "next/image";
import { Context } from "../../../context";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import Modal from "react-modal";
import Head from "next/head";

const DashboardInstructor = () => {
  const [course, setCourse] = useState([]);
  const [user, setUser] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // state form
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [published, setPublished] = useState(Boolean);
  const [paid, setPaid] = useState(Boolean);

  // state
  // const { state, dispatch } = useContext(Context);
  // const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const foundUser = loggedInUser ? JSON.parse(loggedInUser) : {};
    setUser(foundUser);
    if (!foundUser || foundUser.role !== "Instructor") {
      router.push("/");
    }
    getCourse(foundUser.token);
  }, []);

  async function getCourse(token) {
    try {
      const { data } = await axios.get(
        "https://different-deer-hem.cyclic.app/api/instructor/instructor-courses",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(data);
      setCourse(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleUpdate(name, slug, desc, price, category, published, paid) {
    setName(name);
    setSlug(slug);
    setDescription(desc);
    setPrice(price);
    setCategory(category);
    setPublished(published);
    setPaid(paid);
  }

  async function updateCourse(e) {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://different-deer-hem.cyclic.app/api/course/${slug}`,
        { name, slug, description, price, category, published, paid },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setModalIsOpen(false);
      getCourse(user.token);
    } catch (error) {}
  }

  return (
    <>
      <Head>
        <title>Dashboard | {user?.nama}</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex h-screen">
        <SideBarInstructor />

        <div className="pl-16 pr-[5.375rem] pt-12 w-10/12">
          <DashboardHeader namaUser={user?.nama} />

          {/* Main */}
          {/* Modal */}
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
              <form onSubmit={(e) => updateCourse(e)}>
                <div className="flex space-x-4">
                  <div className="mt-6">
                    <p className="text-[#272833]/80">Judul Materi</p>
                    <input
                      type="text"
                      className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[#272833]/80">Slug</p>
                    <input
                      type="text"
                      className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
                      onChange={(e) => setSlug(e.target.value)}
                      value={slug}
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[#272833]/80">Deskripsi</p>
                  <textarea
                    type="text"
                    className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[20px] h-[50px]"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="mt-6">
                    <p className="text-[#272833]/80">Price</p>
                    <input
                      type="text"
                      className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[20px]"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[#272833]/80">Category</p>
                    <input
                      type="text"
                      className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[20px]"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="mt-6">
                    <p className="text-[#272833]/80">Published</p>
                    <input
                      type="text"
                      className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[20px]"
                      onChange={(e) => setPublished(e.target.value)}
                      value={published}
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-[#272833]/80">Paid</p>
                    <input
                      type="text"
                      className="focus:outline-none w-full px-4 py-2 text-black bg-white border-[#272833]/60 border-[1px] rounded-[50px]"
                      onChange={(e) => setPaid(e.target.value)}
                      value={paid}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-[2.875rem] text-white text-xl font-bold py-2 bg-[#068F23] rounded-[50px] cursor-pointer text-center max-w-[22.375rem] mx-auto"
                >
                  Update
                </button>
              </form>
            </div>
          </Modal>
          {/* Modal */}
          <main className="mt-[4.5rem]">
            <h1 className="font-bold text-white text-[2rem] mb-2">Dashboard</h1>
            <p className="text-white/60 font-light max-w-xs">
              Terus berkarya bersama kami dan dapatkan manfaatnya
            </p>
            <div className="mt-[2.25rem]">
              <div class="container bg-[#1D1E24] border-[1.5px] border-white/10 rounded-[20px] min-w-[61.75rem]">
                <div class="flex justify-between items-center p-6">
                  <h2 class="text-white/80">Showing 1 to 10 of 3 entries</h2>
                  <div class="relative rounded-md shadow-sm">
                    <div className="flex items-center">
                      <div className="mr-4 text-white/80">Search : </div>
                      <div>
                        <input
                          type="search"
                          class="py-4 pl-5 pr-5 block bg-[#272833] text-white focus:outline-none w-full leading-5 rounded-[50px] transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="Cari Keyword ..."
                        />
                      </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg
                        class="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <table class="w-full">
                  <thead className="border-y-[1.5px] border-white/10">
                    <tr>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        #
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Materi
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Cover
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Jenis
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Harga
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Reviews
                      </th>
                      <th class="px-4 py-2 font-medium text-xl text-left text-white">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.length == 0 ? (
                      <tr>
                        <td
                          className="text-white font-light text-lg text-center p-4"
                          colSpan={7}
                        >
                          Tidak ada Course
                        </td>
                      </tr>
                    ) : (
                      course.map((item) => (
                        <tr className="border-y-[1.5px] border-white/10">
                          <td class="px-4 py-2 text-left text-white font-light text-sm">
                            0032
                          </td>
                          <td class="px-4 py-2 text-left text-white font-light text-sm max-w-[10rem]">
                            {item.name}
                          </td>
                          <td class="px-4 py-2 text-left text-white font-light text-sm">
                            <img
                              src="/jett.png"
                              alt=""
                              width="68"
                              height="50"
                            />
                          </td>
                          <td class="px-4 py-2 text-left text-white font-light text-sm">
                            {item.paid ? "Premium" : "Freemium"}
                          </td>
                          <td class="px-4 py-2 text-left text-white font-light text-sm">
                            Rp. {item.paid ? item.price : "Free"}
                          </td>
                          <td class="px-4 py-2 text-left text-white font-light text-sm">
                            <div className="flex gap-1">
                              <Image src={"/star.png"} width={20} height={20} />
                              <Image src={"/star.png"} width={20} height={20} />
                              <Image src={"/star.png"} width={20} height={20} />
                              <Image src={"/star.png"} width={20} height={20} />
                              <Image src={"/star.png"} width={20} height={20} />
                            </div>
                          </td>
                          <td class="px-4 py-2 text-left text-white font-light text-sm">
                            <div className="flex gap-x-2">
                              <div>
                                <Link
                                  href={`/instructor/dashboard/${item.slug}`}
                                >
                                  <img
                                    src="/icon_details.svg"
                                    alt=""
                                    className="cursor-pointer"
                                  />
                                </Link>
                              </div>
                              <div>
                                <img
                                  src="/icon_edit.svg"
                                  alt=""
                                  onClick={() => {
                                    setModalIsOpen(true);
                                    handleUpdate(
                                      item.name,
                                      item.slug,
                                      item.description,
                                      item.price,
                                      item.category,
                                      item.published,
                                      item.paid
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
                <div class="flex justify-center items-center p-5">
                  <div className="text-[#068F23] bg-[#068F23]/20 rounded-full py-2 px-4">
                    1
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* Main */}
        </div>
      </div>
    </>
  );
};

export default DashboardInstructor;
