"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function HomeNavBar() {
    {/*Array of navigation links*/}
    const navLinks = [
      { title: "Overview", href: "./overview" },
      { title: "Reports", href: "./reports" },
      { title: "Inventory", href: "./Inventory" },
      { title: "Announcements", href: "./announcements" },
      { title: "About", href: "./about" },
    ];

    {/*render navLinks*/}
  return (
    <div className="bg-[white] text-black p-4 shadow-md flex-1 overflow-auto mt-3 ml-3">
      <div className="h-16 flex items-center">

        {/* UPM Logo */}
        <div className="flex items-center">
          <Link href="https://www.upm.edu.ph" passHref>
            <Image src="/upmlogo.png" alt="UPM Logo" width={70} height={70} loading="lazy" className="cursor-pointer" style={{ maxWidth: "120px", maxHeight: "120px" }}/>
          </Link>
        </div>

        {/* Hello User + University Name */}
        <div className="flex flex-col justify-center ml-4">
          <p
            className="text-slate-700 font-semibold"
            style={{ fontSize: "1.5em" }}
          >
            Hello Admin!
          </p>
          <span className="text-sm">University of the Philippines Manila</span>
        </div>
      </div>

        {/* Navigation Links */}
        <nav className="sticky mt-1.5 flex space-x-4">
          {[
            { title: "Overview", href: "./overview" },
            { title: "Reports", href: "./reports" },
            { title: "Inventory", href: "./Inventory" },
            { title: "Announcements", href: "./announcements" },
            { title: "About", href: "./about" },
          ].map((link, index) => (
            <Link
              key={`${link.title}-${index}`} // Unique key for each link
              href={link.href}
              className="flex py-3 px-3 border-b border-[#761319] hover:bg-[#EACACC] rounded"
            >
              {link.title}
            </Link>
          ))}
        </nav>
    </div>
  );
}
