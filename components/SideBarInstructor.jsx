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
            <Link href={"/instructor/dashboard"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/instructor/dashboard"
                      ? "text-white"
                      : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/instructor/dashboard"
                        ? "/icon_dashboard.svg"
                        : "/icon_dashboard_unactive.svg"
                    }`}
                  />
                  <span className="ml-3">Dashboard</span>
                  {path == "/instructor/dashboard" ? (
                    <div className="bg-[#068F23] py-6 px-1 rounded-l absolute right-0"></div>
                  ) : null}
                </a>
              </li>
            </Link>
            <Link href={"/instructor/dashboard/add-kelas"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/instructor/dashboard/add-kelas"
                      ? "text-white"
                      : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/instructor/dashboard/add-kelas"
                        ? "/icon_kelas_saya_unactive.svg"
                        : "/icon_kelas_saya.svg"
                    }`}
                  />
                  <span className="ml-3">Add Kelas</span>
                  {path == "/instructor/dashboard/add-kelas" ? (
                    <div className="bg-[#068F23] py-6 px-1 rounded-l absolute right-0"></div>
                  ) : null}
                </a>
              </li>
            </Link>
            <Link href={"/instructor/dashboard/setting"}>
              <li className="relative cursor-pointer">
                <a
                  className={`flex items-center px-4 ${
                    path == "/instructor/dashboard/setting" ||
                    path == "/instructor/dashboard/setting/edit-profile" ||
                    path == "/instructor/dashboard/setting/change-password"
                      ? "text-white"
                      : "text-white/60"
                  } font-semibold text-lg`}
                >
                  <img
                    src={`${
                      path == "/instructor/dashboard/setting" ||
                      path == "/instructor/dashboard/setting/edit-profile" ||
                      path == "/instructor/dashboard/setting/change-password"
                        ? "/icon_setting_unactive.svg"
                        : "/icon_setting.svg"
                    }`}
                  />
                  <span className="ml-3">Setting</span>
                  {path == "/instructor/dashboard/setting" ||
                  path == "/instructor/dashboard/setting/edit-profile" ||
                  path == "/instructor/dashboard/setting/change-password" ? (
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
