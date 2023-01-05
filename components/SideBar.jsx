import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SideBar = () => {
  const router = useRouter();

  let path = router.pathname;

  return (
    <div className="bg-[#1D1E24] w-[16.375rem] min-h-full rounded-tr-[24px]">
      <nav className="py-[2.375rem] min-h-full">
        <Link href={"/"}>
          <img
            src={"/logo.svg"}
            width="68"
            height="63"
            className="block mx-auto cursor-pointer"
          />
        </Link>
        <div className="mt-[3.75rem] pl-[3.75rem]">
          <ul className="space-y-12">
            <Link href={"/user/"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/user" ? "text-white" : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/user"
                        ? "/icon_dashboard.svg"
                        : "/icon_dashboard_unactive.svg"
                    }`}
                  />
                  <span className="ml-3">Dashboard</span>
                  {path == "/user" ? (
                    <div className="bg-[#068F23] py-6 px-1 rounded-l absolute right-0"></div>
                  ) : null}
                </a>
              </li>
            </Link>
            <Link href={"/user/my-class"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/user/my-class" ? "text-white" : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/user/my-class"
                        ? "/icon_kelas_saya_unactive.svg"
                        : "/icon_kelas_saya.svg"
                    }`}
                  />
                  <span className="ml-3">Kelas saya</span>
                  {path == "/user/my-class" ? (
                    <div className="bg-[#068F23] py-6 px-1 rounded-l absolute right-0"></div>
                  ) : null}
                </a>
              </li>
            </Link>
            <Link href={"/user/transaction"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/user/transaction" ? "text-white" : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/user/transaction"
                        ? "/icon_transaksi_unactive.svg"
                        : "/icon_transaksi.svg"
                    }`}
                  />
                  <span className="ml-3">Transaksi</span>
                  {path == "/user/transaction" ? (
                    <div className="bg-[#068F23] py-6 px-1 rounded-l absolute right-0"></div>
                  ) : null}
                </a>
              </li>
            </Link>
            <Link href={"/user/setting"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/user/setting" ||
                    path == "/user/setting/edit-profile" ||
                    path == "/user/setting/change-password"
                      ? "text-white"
                      : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/user/setting" ||
                      path == "/user/setting/edit-profile" ||
                      path == "/user/setting/change-password"
                        ? "/icon_setting_unactive.svg"
                        : "/icon_setting.svg"
                    }`}
                  />
                  <span className="ml-3">Setting</span>
                  {path == "/user/setting" ||
                  path == "/user/setting/edit-profile" ||
                  path == "/user/setting/change-password" ? (
                    <div className="bg-[#068F23] py-6 px-1 rounded-l absolute right-0"></div>
                  ) : null}
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
