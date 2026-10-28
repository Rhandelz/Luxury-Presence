"use client";
import Image from "next/image";
import heroImage from "../image/hero-image-bg.png";
import marci from "../image/marci.png";
import logo from "@/image/Mask group.svg";
import vector from "@/image/Vector.png";
import img1 from "@/image/img1.webp";
import img2 from "@/image/img2.webp";
import img3 from "@/image/img3.webp";
import img4 from "@/image/img4.webp";
import img5 from "@/image/img5.webp";
import img6 from "@/image/img6.webp";
import { useState, useEffect } from "react";

export const cards = [
  {
    id: 1,
    image: img1,
    title: "Top Residential Sales Last 5 Years",
    text: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market.",
  },
  {
    id: 2,
    image: img2,
    title: "Don't Just List It...",
    text: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
  },
  {
    id: 3,
    image: img3,
    title: "Guide to Buyers",
    text: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
  },
];
const galleryImages = [img1, img2, img3, img4, img5, img6];

export const servicesTitle = "Our Services";

export const services = [
  {
    id: 1,
    image: img1,
    shape: "square",
    title: "Real Estate Done Right",
    text: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    detail: {
      heading: "Real Estate Done Right",
      description:
        "Whether you're buying, selling, or investing, we guide you through every stage with clear advice and honest communication.",
      features: [
        {
          icon: "bx bx-home-heart",
          title: "Buying Made Simple",
          text: "We help you find the right home, tour properties with you, and negotiate so you get the best possible terms.",
        },
        {
          icon: "bx bx-trending-up",
          title: "Selling With Strategy",
          text: "From pricing to staging to marketing, we position your home to reach every possible buyer and sell for top dollar.",
        },
      ],
    },
  },
  {
    id: 2,
    image: img2,
    shape: "square",
    title: "Commercial & Residential",
    text: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    detail: {
      heading: "Commercial & Residential",
      description:
        "From condos to mansions and from storefronts to office space, we match you with properties that fit your goals and your budget.",
      features: [
        {
          icon: "bx bx-building-house",
          title: "Residential Properties",
          text: "Starter homes, family homes, fixer-uppers, and luxury estates. We know every neighborhood and what each one is worth.",
        },
        {
          icon: "bx bx-buildings",
          title: "Commercial Properties",
          text: "Retail, office, and investment properties. We review the numbers with you so you can invest with confidence.",
        },
      ],
    },
  },
  {
    id: 3,
    image: img3,
    shape: "circle",
    title: "Rely on Expertise",
    text: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    detail: {
      heading: "Rely on Expertise",
      description:
        "Affordability, credit, and loan options can feel overwhelming. We connect you with trusted professionals so you feel confident at every step.",
      features: [
        {
          icon: "bx bx-calculator",
          title: "Financing Guidance",
          text: "We introduce you to trusted lenders and walk you through affordability, credit, and loan options.",
        },
        {
          icon: "bx bx-badge-check",
          title: "Informed Decisions",
          text: "Market analysis and clear timelines keep you educated and in control from the first call to closing day.",
        },
      ],
    },
  },
];

export default function Home() {
  // inside your component, before the return
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = galleryImages.length;

  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  // Optional autoplay (remove this block if you don't want it)
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, total]);

  // Decides how each card is positioned relative to the active one
  const getCardClass = (i) => {
    const offset = (i - current + total) % total;

    if (offset === 0) return "z-30 translate-x-0 scale-100 opacity-100"; // active
    if (offset === 1) return "z-20 translate-x-[13%] scale-[0.92] opacity-50"; // peeking on the right
    if (offset === total - 1)
      return "z-0 -translate-x-[10%] scale-90 opacity-0 pointer-events-none"; // just left
    return "z-0 translate-x-[20%] scale-90 opacity-0 pointer-events-none"; // hidden
  };
  return (
    <div className="flex flex-col ">
      {/* HERO SECTION  */}
      <div
        className={`h-screen w-full  bg-contain bg-bottom relative flex flex-col items-center justify-center`}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Image
          src={heroImage}
          alt="Hero Image"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <main className="relative z-10 mx-auto flex w-full flex-col items-center px-5 gap-5  text-center text-white">
          <p className="text-[9px] font-medium uppercase tracking-[0.12em]">
            Marc Metzger - The Ridge Realty Group
          </p>
          <h1 className="text-[48px] leading-none tracking-wide sm:text-[42px]">
            Pahrump Realtor
          </h1>

          <form className="flex w-full w-[40%]  max-w-[500px] items-center justify-between gap-2 rounded-[12px] bg-white/100 px-2 py-1 text-black  sm:px-3 sm:py-1">
            <label className="w-full flex min-w-0 flex-col justify-center items-start   sm:px-3">
              <span className="tag tracking-tighter tag  inter-font">
                Location
              </span>
              <select
                defaultValue=""
                className="w-full inter-font min-w-0 appearance-none bg-transparent tag tracking-tight text-slate-500 outline-none"
              >
                <option value="" disabled>
                  Select locations
                </option>
                <option>Pahrump</option>
                <option>Las Vegas</option>
              </select>
            </label>

            <hr className="h-[50%] border-r border-black/20" />

            <label className="w-full flex min-w-0 flex-col justify-center items-start \  sm:px-3">
              <span className="tag tracking-tighter  inter-font">Type</span>
              <select
                defaultValue=""
                className="w-full inter-font min-w-0 appearance-none bg-transparent tag tracking-tight text-slate-500 outline-none"
              >
                <option value="" disabled>
                  Select Type
                </option>
                <option>Pahrump</option>
                <option>Las Vegas</option>
              </select>
            </label>

            <hr className="h-[50%] border-r border-black/20" />

            <label className="w-full flex min-w-0 flex-col justify-center items-start     sm:px-3">
              <span className="tag tracking-tighter  inter-font">
                Price Range
              </span>
              <select
                defaultValue=""
                className="w-full inter-font min-w-0 appearance-none bg-transparent tag tracking-tight text-slate-500 outline-none"
              >
                <option value="" disabled>
                  Max - Min
                </option>
                <option>Pahrump</option>
                <option>Las Vegas</option>
              </select>
            </label>

            <button
              type="button"
              aria-label="Search properties"
              className="flex  items-center justify-center min-h-11 min-w-11 self-center rounded-xl bg-black text-white transition-colors hover:bg-slate-700 "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6786 12.9277C15.889 11.276 16.4311 9.2283 16.1965 7.19412C15.9619 5.15994 14.9679 3.28936 13.4133 1.9566C11.8588 0.623835 9.85831 -0.0728113 7.81217 0.0060301C5.76603 0.0848715 3.8251 0.933387 2.37771 2.38182C0.930312 3.83025 0.0831854 5.77178 0.00580817 7.81798C-0.0715691 9.86417 0.626509 11.8641 1.96038 13.4177C3.29425 14.9713 5.16555 15.964 7.19989 16.1972C9.23424 16.4303 11.2816 15.8867 12.9324 14.6752H12.9311C12.9678 14.7252 13.0086 14.7731 13.0536 14.8189L17.8661 19.6314C18.1005 19.866 18.4185 19.9978 18.7501 19.9979C19.0816 19.9981 19.3997 19.8664 19.6342 19.6321C19.8688 19.3977 20.0006 19.0797 20.0007 18.7481C20.0009 18.4165 19.8693 18.0985 19.6349 17.8639L14.8224 13.0514C14.7777 13.0062 14.7296 12.9656 14.6786 12.9277ZM15.0011 8.12268C15.0011 9.02552 14.8233 9.91952 14.4778 10.7536C14.1323 11.5877 13.6259 12.3456 12.9875 12.984C12.3491 13.6224 11.5912 14.1289 10.7571 14.4744C9.92296 14.8199 9.02896 14.9977 8.12612 14.9977C7.22328 14.9977 6.32929 14.8199 5.49517 14.4744C4.66106 14.1289 3.90317 13.6224 3.26476 12.984C2.62636 12.3456 2.11995 11.5877 1.77445 10.7536C1.42895 9.91952 1.25112 9.02552 1.25112 8.12268C1.25112 6.29932 1.97545 4.55064 3.26476 3.26133C4.55408 1.97201 6.30276 1.24768 8.12612 1.24768C9.94948 1.24768 11.6982 1.97201 12.9875 3.26133C14.2768 4.55064 15.0011 6.29932 15.0011 8.12268Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </main>
      </div>

      {/* ABOUT SECTION  */}
      <div className="w-full flex flex-row items-center justify-center  relative ">
        <div className="w-full flex flex-row items-center justify-center max-w-[1440px] relative mx-auto  x-2 sm:px-10 pt-16">
          <div className="w-full flex flex-col gap-4 items-center justify-start text-left  mb-12  ">
            <div className="  w-[70%] flex flex-col gap-4 items-start ">
              <h2 className=" ">MARCI METZGER</h2>
              <p className=" text-gray-600 text-[16px] leading-6 tracking-tight">
                We helped nearly 90 clients in 2021, and closed 28.5 million in
                sales!  Our team works hard everyday to grow and lear
              </p>
              <button className="  bg-[#171717] px-6 py-2 italic font-medium text-white transition-colors hover:bg-slate-700">
                <i className="fa-solid fa-phone "></i> 206-919-6886
              </button>
            </div>
          </div>
          <Image src={marci} alt="Marci Metzger" className="w-full h-auto " />
        </div>{" "}
        <Image
          src={vector}
          alt="Vector"
          className="w-screen h-auto absolute bottom-0 max-h-[110px] min-h-[100px]"
        />
      </div>

      {/* SOLD SECTION  */}
      <div className="w-full  bg-[#171717] py-16">
        <div className="w-full flex flex-col gap-6 items-center justify-start max-w-[1440px] relative mx-auto ">
          {/* TITLE */}
          <div className="w-full flex flex-row ">
            <div className="w-full flex items-center justify-stat gap-4 flex-row ">
              <h2 className="text-white"> GET IT SOLD</h2>
              <hr className="h-[1px] border-top border-white/25 w-1/2" />
            </div>
            <div className="w-full flex justify-end items-center">
              <p className=" text-white w-[65%] text-right leading-6 tracking-tight">
                We helped nearly 90 clients in 2021, and closed 28.5 million in
                sales!  Our team works hard everyday to grow and lear
              </p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="w-full flex flex-row gap-4">
            {cards.map((card) => (
              <ImageCard
                key={card.id}
                image={card.image}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE SECTION  */}
      <div className="w-full py-16">
        <div className="w-full flex flex-col gap-6 items-center justify-start max-w-[1440px] relative mx-auto ">
          {/* TITLE */}
          <div className="w-full flex flex-row ">
            <div className="w-full flex items-center justify-stat gap-4 flex-row ">
              <h2 className="text-[#171717]"> Our Services</h2>
              <hr className="h-[1px] border-top border-black/25 w-1/2" />
            </div>
            <div className="w-full flex justify-end items-center">
              <p className=" text-[#171717] w-[65%] text-right leading-6 tracking-tight">
                We helped nearly 90 clients in 2021, and closed 28.5 million in
                sales!  Our team works hard everyday to grow and lear
              </p>
            </div>
          </div>

          {/* CONTENT */}

          <div className="w-full flex flex-col gap-4">
            {services.map((service) => (
              <ServiceDetail
                key={service.id}
                image={service.image}
                detail={service.detail}
                reverse={service.id === 2}
              />
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION  */}
      <div className="w-full  bg-[#171717] py-16">
        <div className="w-full flex flex-row gap-6 items-center justify-start max-w-[1440px] relative mx-auto ">
          {/* TITLE */}
          <div className="w-full flex flex-col justify-center items-center gap-6 h-[3 0vh]  ">
            <div className="w-full flex items-center justify-center gap-4 flex-row ">
              <hr className="h-[1px] border-top border-white/25 w-full" />
              <h2 className="text-white w-full whitespace-nowrap">
                {" "}
                GET IT SOLD
              </h2>
              <hr className="h-[1px] border-top border-white/25 w-full" />
            </div>
            <p className=" text-white w-[65%] text-center leading-6 tracking-tight">
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales!  Our team works hard everyday to grow and lear
            </p>

            <div className="w-[70%] flex justify-between items-center ">
              <button
                aria-label="Previous photo"
                onClick={prev}
                className="p-3 text-white transition-all duration-300 hover:-translate-x-1 hover:opacity-70 disabled:opacity-30 disabled:hover:translate-x-0 disabled:cursor-not-allowed"
              >
                <svg
                  width="52"
                  height="7"
                  viewBox="0 0 52 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M51.3941 3.36623C51.3941 3.49883 51.3415 3.62601 51.2477 3.71978C51.1539 3.81355 51.0267 3.86623 50.8941 3.86623L1.70789 4.00063L3.85489 6.14663C3.90138 6.19312 3.93826 6.24831 3.96342 6.30905C3.98858 6.36979 4.00152 6.43489 4.00152 6.50063C4.00152 6.56638 3.98858 6.63148 3.96342 6.69222C3.93826 6.75295 3.90138 6.80814 3.85489 6.85463C3.80841 6.90112 3.75322 6.938 3.69248 6.96316C3.63174 6.98831 3.56664 7.00126 3.50089 7.00126C3.43515 7.00126 3.37005 6.98831 3.30931 6.96316C3.24857 6.938 3.19338 6.90112 3.14689 6.85463L0.146894 3.85463C0.100331 3.80819 0.0633875 3.75301 0.0381811 3.69227C0.0129746 3.63152 0 3.5664 0 3.50063C0 3.43486 0.0129746 3.36974 0.0381811 3.309C0.0633875 3.24825 0.100331 3.19308 0.146894 3.14663L3.14689 0.146632C3.24078 0.0527451 3.36812 0 3.50089 0C3.63367 0 3.76101 0.0527451 3.85489 0.146632C3.94878 0.240518 4.00152 0.367856 4.00152 0.500632C4.00152 0.633408 3.94878 0.760745 3.85489 0.854632L1.70789 3.00063L50.8941 2.86623C51.0267 2.86623 51.1539 2.9189 51.2477 3.01267C51.3415 3.10644 51.3941 3.23362 51.3941 3.36623Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  />
                </svg>
              </button>

              {/* NEXT (same arrow, rotated 180deg) */}
              <button
                aria-label="Next photo"
                onClick={next}
                className="p-3 text-white transition-all duration-300 hover:translate-x-1 hover:opacity-70 disabled:opacity-30 disabled:hover:translate-x-0 disabled:cursor-not-allowed"
              >
                <svg
                  width="52"
                  height="7"
                  viewBox="0 0 52 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M51.3941 3.36623C51.3941 3.49883 51.3415 3.62601 51.2477 3.71978C51.1539 3.81355 51.0267 3.86623 50.8941 3.86623L1.70789 4.00063L3.85489 6.14663C3.90138 6.19312 3.93826 6.24831 3.96342 6.30905C3.98858 6.36979 4.00152 6.43489 4.00152 6.50063C4.00152 6.56638 3.98858 6.63148 3.96342 6.69222C3.93826 6.75295 3.90138 6.80814 3.85489 6.85463C3.80841 6.90112 3.75322 6.938 3.69248 6.96316C3.63174 6.98831 3.56664 7.00126 3.50089 7.00126C3.43515 7.00126 3.37005 6.98831 3.30931 6.96316C3.24857 6.938 3.19338 6.90112 3.14689 6.85463L0.146894 3.85463C0.100331 3.80819 0.0633875 3.75301 0.0381811 3.69227C0.0129746 3.63152 0 3.5664 0 3.50063C0 3.43486 0.0129746 3.36974 0.0381811 3.309C0.0633875 3.24825 0.100331 3.19308 0.146894 3.14663L3.14689 0.146632C3.24078 0.0527451 3.36812 0 3.50089 0C3.63367 0 3.76101 0.0527451 3.85489 0.146632C3.94878 0.240518 4.00152 0.367856 4.00152 0.500632C4.00152 0.633408 3.94878 0.760745 3.85489 0.854632L1.70789 3.00063L50.8941 2.86623C51.0267 2.86623 51.1539 2.9189 51.2477 3.01267C51.3415 3.10644 51.3941 3.23362 51.3941 3.36623Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* CONTENT */}

          {/* <div className="w-full flex flex-row gap-4"></div> */}
          <div
            className="w-full pl-6 lg:pl-0 pr-[10%] lg:pr-[6%]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full aspect-[3/2]">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-700 ease-in-out ${getCardClass(i)}`}
                >
                  <Image
                    src={img}
                    alt={`Gallery photo ${i + 1}`}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GALLERY SECTION  */}
      <div className="w-full   py-16">
        <div className="w-full flex flex-row gap-6 items-center justify-start max-w-[1440px] relative mx-auto ">
          {/* TITLE */}
          <div className="w-full flex flex-col justify-center items-start gap-6 h-[3 0vh]  ">
            <div className="w-full flex items-center justify-start gap-4 flex-row ">
              <h2 className="text-black  whitespace-nowrap"> Call or visit</h2>
              <hr className="h-[1px] border-top border-black/25 w-1/2" />
            </div>
            <h5 className=" text-black w-[65%] text-left leading-6 tracking-tight">
              Send a Message
            </h5>
            <div className="w-full max-w-[600px] flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent border-0x border-b border-gray-400 py-3 text-base text-[#171717] placeholder:text-gray-500 outline-none transition-colors duration-300 focus:border-black"
              />

              <input
                type="email"
                placeholder="Email address *"
                className="w-full bg-transparent border-0x border-b border-gray-400 py-3 text-base text-[#171717] placeholder:text-gray-500 outline-none transition-colors duration-300 focus:border-black"
              />

              <input
                type="text"
                placeholder="Message"
                className="w-full bg-transparent border-0 border-b border-gray-400 py-3 text-base text-[#171717] placeholder:text-gray-500 outline-none transition-colors duration-300 focus:border-black"
              />
            </div>
            <button className="  bg-[#171717] px-6 py-2 text-[12px] italic font-medium text-white transition-colors hover:bg-slate-700">
              206-919-6886
            </button>
          </div>

          {/* CONTENT */}

          <section className="w-full max-w-[640px] flex flex-col gap-6 p-6">
            {/* NAME + COMPANY */}
            <h3 className="text-[#171717] [font-variant:small-caps] text-2xl">
              Marci Metzger -{" "}
              <span className="font-bold uppercase [font-variant:normal] font-sans tracking-tight">
                The Ridge Realty Group
              </span>
            </h3>

            {/* MAP */}
            <div className="w-full h-[210px] overflow-hidden">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Pahrump,+NV&z=13&output=embed"
                className="w-full h-full border-0  opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* OFFICE HOURS */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#171717] [font-variant:small-caps] text-2xl">
                Office Hours
              </h4>

              <div className="flex flex-row gap-8 text-[#171717]">
                <p>Open daily</p>
                <p>8:00 am - 7:00 pm</p>
              </div>

              <p className="text-[#171717]">
                Appointments outside office hours available upon request. Just
                call!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// components/ImageCard.jsx
const ImageCard = ({ image, title, text }) => {
  // Works with a Next.js static import (object with .src) or a plain URL string
  const src = typeof image === "string" ? image : image.src;

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-start">
      {/* IMAGE CONTAINER */}
      <div
        className="group relative w-full aspect-square bg-center bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${src})` }}
      >
        {/* Overlay + title */}
        <div className="absolute inset-0 p-6 flex items-end justify-start bg-black/20 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          <h5 className="text-white translate-y-0 transition-transform duration-500 ease-in-out group-hover:translate-y-2">
            {title}
          </h5>
        </div>
      </div>

      <div className="w-full p-6">
        <p className="text-white">{text}</p>
      </div>
    </div>
  );
};

const ServiceDetail = ({ image, detail, reverse = false }) => {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* IMAGE */}
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={detail.heading}
          className="w-full h-full max-h-[400px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col gap-2 p-6 items-start justify-center">
        <h3>{detail.heading}</h3>
        <p className="text-[#171717] w-[85%] text-left leading-6 tracking-tight">
          {detail.description}
        </p>
        <hr className="h-[1px] border-top border-black/25 w-full mb-6" />

        <div className="w-full flex flex-col sm:flex-row gap-4">
          {detail.features.map((feature) => (
            <div key={feature.title} className="w-full flex flex-col gap-4">
              <i className={`${feature.icon} text-xl`}></i>
              <h5>{feature.title}</h5>
              <p className="text-[#171717] w-full text-left leading-6 tracking-tight">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
