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

export default function Home() {
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
      <div className="w-full pt-16">
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
            <div className="w-full flex flex-row">
              <Image
                src={img4}
                alt="Service 1"
                className="w-full max-h-[400px]"
              />

              <div className="w-full flex flex-col gap-2 p-6 items-start justify-center">
                <h3>Commercial & Residential</h3>
                <p className=" text-[#171717] w-[65%] text-left leading-6 tracking-tight">
                  We helped nearly 90 clients in 2021, and closed 28.5 million
                  in sales!  Our team works hard everyday to grow and lear
                </p>
                <hr className="h-[1px] border-top border-black/25 w-full mb-6" />

                <div className="w-full flex flex-row gap-4">
                  <div className="w-full flex flex-col gap-4">
                    <i className="bx bx-home-alt text-xl"></i>
                    <h5>Commercial & Residential</h5>
                    <p className=" text-[#171717] w-full text-left leading-6 tracking-tight">
                      We helped nearly 90 clients in 2021, and closed 28.5
                      million in sales!  Our team works hard everyday to grow
                      and lear
                    </p>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <i className="bx bx-home-alt text-xl"></i>
                    <h5>Commercial & Residential</h5>
                    <p className=" text-[#171717] w-full text-left leading-6 tracking-tight">
                      We helped nearly 90 clients in 2021, and closed 28.5
                      million in sales!  Our team works hard everyday to grow
                      and lear
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
