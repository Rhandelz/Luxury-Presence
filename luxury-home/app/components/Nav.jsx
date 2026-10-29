"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/image/Mask group.svg";

const links = [
  { label: "Home", href: "#home" },
  { label: "Listing", href: "#listing" },
  { label: "Let's Move", href: "#services" },
  { label: "About", href: "#about" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        open ? "bg-[#171717]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-4 sm:px-10 lg:py-6">
        {/* LOGO */}
        <a href="#home" onClick={close} className="shrink-0">
          <Image src={logo} alt="Logo" className="h-11 w-auto" />
        </a>

        {/* DESKTOP LINKS */}
        <nav className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-normal uppercase text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden lg:flex items-center gap-6">
          <span className="tag text-white">EN</span>
          <hr className="h-[25px] border-r border-white/40" />
          <i className="bx bx-search text-xl text-white" />
          <a
            href="#contact"
            className="whitespace-nowrap bg-[#171717] px-6 py-2 text-[12px] font-medium text-white transition-colors hover:bg-slate-700"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* HAMBURGER BUTTON (mobile and tablet only) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden flex h-11 w-11 items-center justify-center text-white"
        >
          <i className={`bx ${open ? "bx-x" : "bx-menu"} text-3xl`} />
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 pb-6 sm:px-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              className="border-b border-white/10 py-4 text-[14px] uppercase text-white"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 py-4 text-white">
            <span className="tag">EN</span>
            <hr className="h-[20px] border-r border-white/40" />
            <i className="bx bx-search text-xl" />
          </div>

          <a
            href="#contact"
            onClick={close}
            className="w-full bg-white py-3 text-center text-[12px] font-medium text-[#171717]"
          >
            GET IN TOUCH
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;