import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";

const Register = () => {
  const [nama, setNama] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // router
  const router = useRouter();

  // state
  const { dispatch, state } = useContext(Context);
  const { user } = state;

  // check user login
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const register = await axios.post(
        "https://different-deer-hem.cyclic.app/api/register",
        {
          nama,
          no_telp: noTelp,
          email,
          password,
        }
      );
      toast("Berhasil Registrasi. Silakan login");
      setLoading(false);
      router.push("/login");
    } catch (error) {
      console.log(error.response.data);
      toast(error.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Coachistic | Register</title>
        <link rel="icon" href="/logo.svg"></link>
      </Head>
      <div className="flex">
        <div className="mr-[16.25rem]">
          <Image src={"/register-banner.png"} width={564} height={1001} />
        </div>
        <div className="mt-[6.25rem]">
          <Link href={"/"}>
            <a>
              <Image src={"/logo.svg"} width={48} height={45} />
            </a>
          </Link>
          <h1 className="text-[2.5rem] font-bold mt-[2.25rem] text-white mb-[1.25rem]">
            Daftar Akun
          </h1>
          <p className="text-[#D8D9E2] font-light">
            Lengkapi form dibawah ini untuk <br /> menggunakan fitur pada
            Coachistic
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-8 space-y-7">
              <div>
                <label className="text-white">Nama Lengkap</label>
                <div className="mt-2">
                  <input
                    type="text"
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                    className="bg-[#272833] rounded-[50px] py-2 px-5 w-[25rem] text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-white">No Telepon</label>
                <div className="mt-2">
                  <input
                    type="text"
                    onChange={(e) => setNoTelp(e.target.value)}
                    value={noTelp}
                    className="bg-[#272833] rounded-[50px] py-2 px-5 w-[25rem] text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-white">Email</label>
                <div className="mt-2">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="bg-[#272833] rounded-[50px] py-2 px-5 w-[25rem] text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-white">Password</label>
                <div className="mt-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-[#272833] rounded-[50px] py-2 px-5 w-[25rem] text-white"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-[4.5rem] space-y-7">
              <button className="py-2 px-5 bg-[#068F23] text-white text-xl font-bold rounded-full w-full">
                {loading ? <CircularProgress color="secondary" /> : "Daftar"}
              </button>
              <button className="py-2 px-5 border-[1px] border-[#B1B1B1] text-[#B1B1B1] text-xl font-bold rounded-full w-full">
                <div className="flex justify-center gap-x-3 items-center">
                  <div>
                    <img src="../google.png" />
                  </div>
                  Google
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
