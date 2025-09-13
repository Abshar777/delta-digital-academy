"use client";
import React, { useState, useEffect, Suspense } from "react";


const Hero = () => {
  const shapes = [
    {
      id: 1,
      img: "/our/1.svg",
      alt: "Hero shape 1",
      className:
        "md:block hidden max-[426px]:size-10 w-[50px] h-[50px] absolute left-[8%] top-[15%] md:left-[19%] md:top-[22%] xl:left-[26%] xl:top-[22%] rounded-br-none",
      parallax: { value: "1.8", x: "1", y: "0.5" },
    },
    {
      id: 2,
      img: "/our/2.svg",
      alt: "Hero shape 2",
      className:
        "md:block hidden max-[426px]:size-10 w-[50px] h-[50px] absolute right-[12%] top-[15%] md:right-[20%] md:top-[19%] xl:right-[24%] xl:top-[19%] rounded-bl-none",
      parallax: { value: "2.4", x: "1", y: "1" },
    },
    // {
    //   id: 3,
    //   img: "images/home-page-2/hero-shape-3.png",
    //   alt: "Hero shape 3",
    //   className:
    //     "sm:block hidden w-[50px] h-[50px] absolute left-[7%] bottom-[16%] md:left-[8%] md:bottom-[18%] xl:left-[14%] xl:bottom-[18%] rounded-br-none",
    //   parallax: { value: "1.8", x: "0.7", y: "-1" },
    // },
    // {
    //   id: 4,
    //   img: "images/home-page-2/hero-shape-4.png",
    //   alt: "Hero shape 4",
    //   className:
    //     "sm:block hidden w-[50px] h-[50px] absolute right-[10%] bottom-[15%] md:right-[25%] md:bottom-[15%] xl:right-[28%] xl:bottom-[15%] rounded-bl-none",
    //   parallax: { value: "1.9", x: "1", y: "-0.7" },
    // },
    {
      id: 5,
      img: "/our/5.svg",
      alt: "Hero shape 5",
      className:
        "md:block hidden w-[50px] h-[50px] absolute left-[0%] bottom-[50%] md:left-[16%] md:bottom-[34%] xl:left-[23%] xl:bottom-[36%] rounded-br-none",
      parallax: { value: "1.7", x: "-0.8", y: "1" },
    },
    {
      id: 6,
      img: "/our/3.svg",
      alt: "Hero shape 6",
      className:
        "md:block hidden w-[50px] h-[50px] absolute right-[0%] top-[40%] md:right-[5%] md:top-[30%] xl:right-[10%] xl:top-[32%] rounded-bl-none",
      parallax: { value: "1.7", x: "1", y: "0.8" },
    },
    {
      id: 7,
      img: "/our/11.svg",
      alt: "Hero shape 7",
      className:
        "md:block hidden w-[50px] h-[50px] absolute right-[3%] md:right-[12%] bottom-[38%] md:bottom-[32%] xl:right-[14%] xl:bottom-[28%] rounded-bl-none",
      parallax: { value: "1.7", x: "-1", y: "-1" },
    },
    {
      id: 8,
      img: "/our/10.svg",
      alt: "Hero shape 8",
      className:
        "md:block hidden w-[50px] h-[50px] absolute left-[0%] top-[32%] md:left-[3%] md:top-[42%] xl:left-[8%] xl:top-[42%] rounded-br-none",
      parallax: { value: "1.7", x: "0.5", y: "-1" },
    },
  ];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      className="relative bg-white dark:bg-background-8 z-0 sm:pb-0 pb-14 lg:-mb-12 md:-mb-10 overflow-hidden"
      id="scene"
    >
      {/* Background Overlay */}
      <figure className="absolute h-full w-full hero-bg-overlay-light dark:hero-bg-overlay-dark"></figure>

      <video
        className="w-full h-full absolute -top-[220px] left-0 object-cover z-[-1] min-h-[100vh] hidden dark:block"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/Tube-dark.mp4" type="video/mp4" />
      </video>

      {/* Hero Content */}
      <div className="relative sm:pt-[280px] pt-[160px] md:pb-[200px] z-10">
        {/* Shapes with map */}
        {shapes.map((shape) => (
          <figure
            key={shape.id}
            data-ns-animate
            data-delay="0.1"
            className={`${shape.className} -z-10 bg-white dark:bg-accent/20 p-[3px] rounded-full parallax-effect`}
            data-parallax-value={shape.parallax.value}
            data-data-parallax-x={shape.parallax.x}
            data-data-parallax-y={shape.parallax.y}
          >
            <img
              src={shape.img}
              alt={shape.alt}
              className="size-11 rounded-full max-[426px]:size-8"
            />
          </figure>
        ))}

        {/* Content */}
        <div className="main-container flex flex-col items-center text-center z-10">
          <span
            data-ns-animate
            data-delay="0.1"
            className="badge badge-yellow mb-5"
          >
            Crypto Education
          </span>
          <h1
            data-ns-animate
            data-delay="0.2"
            className="font-medium mb-4 max-[426px]:text-heading-5 max-sm:text-heading-4"
          >
            Master the <span className="text-primary-500">Crypto</span>{" "}
            Revoluation
            <br className="hidden md:block" />
          </h1>
          <p
            data-ns-animate
            data-delay="0.3"
            className="max-w-[625px] mb-10 sm:mb-14 max-sm:max-w-[420px]"
          >
            Unlock the secrets of cryptocurrency, trading strategies, and
            blockchain fundamentals with our award-winning courses designed for
            beginners and intermediate learners.
          </p>
          <form
            data-ns-animate
            data-delay="0.4"
            className="opacity-0 flex flex-col md:flex-row w-full md:w-auto justify-center items-center gap-y-4 gap-x-3 mx-auto md:mx-0"
          >
            {/* <input
              id="cta-email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              className="bg-background-1 dark:bg-background-6 h-12 w-[90%] md:max-w-[345px] md:min-w-[345px] placeholder:text-secondary/40 dark:placeholder:text-white/40 text-secondary/60 dark:text-accent/60 text-tagline-1 focus:outline-none font-normal border border-stroke-3 dark:border-stroke-7 dark:shadow-1 rounded-[360px] dark:bg-dark-200 focus:border-primary-500 dark:focus:border-primary-500 px-[18px] py-3 duration-300 transition-all outline-none placeholder:font-normal"
            /> */}

            <button
              onClick={() => {
                if(typeof window !== "undefined"){
                window.location.href = "https://wa.link/z7re0z";
                }
              }}
              className="btn btn-xl btn-primary flex items-center justify-center w-[90%] md:w-auto h-12"
            >
              <span>Get started</span>
            </button>
          </form>
        </div>
      </div>

      {/* Hero Video Card */}
      {/* <div
        data-ns-animate
        data-delay="0.7"
        className="relative max-w-[1290px] mx-auto p-2.5 bg-background-3 dark:bg-background-7 rounded-4xl overflow-hidden"
      >
        <img
          src="images/home-page-2/hero-video.png"
          alt="hero video cover"
          className="w-full rounded-[25px]"
        />
        <button className="modal-action size-20 max-sm:size-14 rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/10 backdrop-blur-[18px] hover:scale-110 transition-transform">
          <svg className="size-5 max-sm:size-4" viewBox="0 0 20 22" fill="none">
            <path
              d="M19.5151 10.2208L1.5252 0.136503C1.37376 0.0508746 1.20014 0.00383059 1.02225 0.000224187C0.844354 -0.00338222 0.668632 0.0365793 0.513209 0.115987C0.357785 0.195394 0.228287 0.311371 0.138073 0.451955C0.0478591 0.59254 0.000196059 0.75264 0 0.915741V21.0843C0.000196059 21.2474 0.0478591 21.4075 0.138073 21.548C0.228287 21.6886 0.357785 21.8046 0.513209 21.884C0.668632 21.9634 0.844354 22.0034 1.02225 21.9998C1.20014 21.9962 1.37376 21.9491 1.5252 21.8635L19.5151 11.7792C19.6628 11.6992 19.7852 11.5852 19.8702 11.4485C19.9553 11.3119 20 11.1573 20 11C20 10.8427 19.9553 10.6881 19.8702 10.5515C19.7852 10.4148 19.6628 10.3008 19.5151 10.2208Z"
              fill="white"
            />
          </svg>
        </button>
      </div> */}
      <figure
        data-ns-animate
        data-delay="0.6"
        data-offset="0"
        className="absolute top-0 left-1/2 -translate-x-1/2 max-w-[1390px] w-full h-full z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="xl:max-w-[1392px] xl:max-h-[1500px] max-[400px]:max-w-[320px] max-[400px]:max-h-[500px] mx-auto h-full w-full relative top-0"
          viewBox="0 0 1392 1378"
          fill="none"
        >
          <path
            id="curve-path-1"
            d="M409.5 0V688.857C409.5 739.32 387.08 787.176 348.307 819.475L210.193 934.525C171.42 966.824 149 1014.68 149 1065.14V1436"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-2"
            d="M984 0V688.857C984 739.32 1006.42 787.176 1045.19 819.475L1183.31 934.525C1222.08 966.824 1244.5 1014.68 1244.5 1065.14V1436"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-3"
            d="M301.5 0V647.386C301.5 696.681 280.102 743.549 242.854 775.839L59.6455 934.661C22.3976 966.951 1 1013.82 1 1063.11V1469.5"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-4"
            d="M1090.5 0V647.386C1090.5 696.681 1111.9 743.549 1149.15 775.839L1332.35 934.661C1369.6 966.951 1391 1013.82 1391 1063.11V1469.5"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-5"
            d="M517.5 0V704.584C517.5 749.67 499.589 792.911 467.708 824.792L356.792 935.708C324.911 967.589 307 1010.83 307 1055.92V1469.5"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-6"
            d="M876 0V704.584C876 749.67 893.911 792.911 925.792 824.792L1036.71 935.708C1068.59 967.589 1086.5 1010.83 1086.5 1055.92V1469.5"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-7"
            d="M625.5 0V679.422C625.5 709.28 617.636 738.611 602.7 764.465L497.8 946.035C482.864 971.889 475 1001.22 475 1031.08V1469.5"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />
          <path
            id="curve-path-8"
            d="M768 0V679.422C768 709.28 775.864 738.611 790.8 764.465L895.7 946.035C910.636 971.889 918.5 1001.22 918.5 1031.08V1469.5"
            className="stroke-stroke-4 dark:stroke-stroke-5"
          />

          <rect id="rect-1-1" width="1" height="1" />
          <rect id="rect-1-2" width="1" height="1" />
          <rect id="rect-1-3" width="1" height="1" />
          <rect id="rect-1-4" width="1" height="1" />
          <rect id="rect-1-5" width="1" height="1" />
          <rect id="rect-1-6" width="1" height="1" />
          <rect id="rect-1-7" width="1" height="1" />
          <rect id="rect-1-8" width="1" height="1" />
          <rect id="rect-1-9" width="1" height="1" />
          <rect id="rect-1-10" width="1" height="1" />
          <rect id="rect-1-11" width="1" height="1" />
          <rect id="rect-1-12" width="1" height="1" />
          <rect id="rect-1-13" width="1" height="1" />
          <rect id="rect-1-14" width="1" height="1" />
          <rect id="rect-1-15" width="1" height="1" />
          <rect id="rect-1-16" width="1" height="1" />
          <rect id="rect-1-17" width="1" height="1" />
          <rect id="rect-1-18" width="1" height="1" />
          <rect id="rect-1-19" width="1" height="1" />
          <rect id="rect-1-20" width="1" height="1" />
          <rect id="rect-1-21" width="1" height="1" />
          <rect id="rect-1-22" width="1" height="1" />
          <rect id="rect-1-23" width="1" height="1" />
          <rect id="rect-1-24" width="1" height="1" />
          <rect id="rect-1-25" width="1" height="1" />
          <rect id="rect-1-26" width="1" height="1" />
          <rect id="rect-1-27" width="1" height="1" />
          <rect id="rect-1-28" width="1" height="1" />
          <rect id="rect-1-29" width="1" height="1" />
          <rect id="rect-1-30" width="1" height="1" />
          <rect id="rect-1-31" width="1" height="1" />
          <rect id="rect-1-32" width="1" height="1" />
          <rect id="rect-1-33" width="1" height="1" />
          <rect id="rect-1-34" width="1" height="1" />
          <rect id="rect-1-35" width="1" height="1" />
          <rect id="rect-1-36" width="1" height="1" />
          <rect id="rect-1-37" width="1" height="1" />
          <rect id="rect-1-38" width="1" height="1" />
          <rect id="rect-1-39" width="1" height="1" />
          <rect id="rect-1-40" width="1" height="1" />
          <rect id="rect-1-41" width="1" height="1" />
          <rect id="rect-1-42" width="1" height="1" />
          <rect id="rect-1-43" width="1" height="1" />
          <rect id="rect-1-44" width="1" height="1" />
          <rect id="rect-1-45" width="1" height="1" />
          <rect id="rect-1-46" width="1" height="1" />
          <rect id="rect-1-47" width="1" height="1" />
          <rect id="rect-1-48" width="1" height="1" />
          <rect id="rect-1-49" width="1" height="1" />
          <rect id="rect-1-50" width="1" height="1" />
          <rect id="rect-1-51" width="1" height="1" />
          <rect id="rect-1-52" width="1" height="1" />
          <rect id="rect-1-53" width="1" height="1" />
          <rect id="rect-1-54" width="1" height="1" />
          <rect id="rect-1-55" width="1" height="1" />
          <rect id="rect-1-56" width="1" height="1" />
          <rect id="rect-1-57" width="1" height="1" />
          <rect id="rect-1-58" width="1" height="1" />
          <rect id="rect-1-59" width="1" height="1" />
          <rect id="rect-1-60" width="1" height="1" />
          <rect id="rect-2-1" width="1" height="1" />
          <rect id="rect-2-2" width="1" height="1" />
          <rect id="rect-2-3" width="1" height="1" />
          <rect id="rect-2-4" width="1" height="1" />
          <rect id="rect-2-5" width="1" height="1" />
          <rect id="rect-2-6" width="1" height="1" />
          <rect id="rect-2-7" width="1" height="1" />
          <rect id="rect-2-8" width="1" height="1" />
          <rect id="rect-2-9" width="1" height="1" />
          <rect id="rect-2-10" width="1" height="1" />
          <rect id="rect-2-11" width="1" height="1" />
          <rect id="rect-2-12" width="1" height="1" />
          <rect id="rect-2-13" width="1" height="1" />
          <rect id="rect-2-14" width="1" height="1" />
          <rect id="rect-2-15" width="1" height="1" />
          <rect id="rect-2-16" width="1" height="1" />
          <rect id="rect-2-17" width="1" height="1" />
          <rect id="rect-2-18" width="1" height="1" />
          <rect id="rect-2-19" width="1" height="1" />
          <rect id="rect-2-20" width="1" height="1" />
          <rect id="rect-2-21" width="1" height="1" />
          <rect id="rect-2-22" width="1" height="1" />
          <rect id="rect-2-23" width="1" height="1" />
          <rect id="rect-2-24" width="1" height="1" />
          <rect id="rect-2-25" width="1" height="1" />
          <rect id="rect-2-26" width="1" height="1" />
          <rect id="rect-2-27" width="1" height="1" />
          <rect id="rect-2-28" width="1" height="1" />
          <rect id="rect-2-29" width="1" height="1" />
          <rect id="rect-2-30" width="1" height="1" />
          <rect id="rect-2-31" width="1" height="1" />
          <rect id="rect-2-32" width="1" height="1" />
          <rect id="rect-2-33" width="1" height="1" />
          <rect id="rect-2-34" width="1" height="1" />
          <rect id="rect-2-35" width="1" height="1" />
          <rect id="rect-2-36" width="1" height="1" />
          <rect id="rect-2-37" width="1" height="1" />
          <rect id="rect-2-38" width="1" height="1" />
          <rect id="rect-2-39" width="1" height="1" />
          <rect id="rect-2-40" width="1" height="1" />
          <rect id="rect-2-41" width="1" height="1" />
          <rect id="rect-2-42" width="1" height="1" />
          <rect id="rect-2-43" width="1" height="1" />
          <rect id="rect-2-44" width="1" height="1" />
          <rect id="rect-2-45" width="1" height="1" />
          <rect id="rect-2-46" width="1" height="1" />
          <rect id="rect-2-47" width="1" height="1" />
          <rect id="rect-2-48" width="1" height="1" />
          <rect id="rect-2-49" width="1" height="1" />
          <rect id="rect-2-50" width="1" height="1" />
          <rect id="rect-2-51" width="1" height="1" />
          <rect id="rect-2-52" width="1" height="1" />
          <rect id="rect-2-53" width="1" height="1" />
          <rect id="rect-2-54" width="1" height="1" />
          <rect id="rect-2-55" width="1" height="1" />
          <rect id="rect-2-56" width="1" height="1" />
          <rect id="rect-2-57" width="1" height="1" />
          <rect id="rect-2-58" width="1" height="1" />
          <rect id="rect-2-59" width="1" height="1" />
          <rect id="rect-2-60" width="1" height="1" />
          <rect id="rect-3-1" width="1" height="1" />
          <rect id="rect-3-2" width="1" height="1" />
          <rect id="rect-3-3" width="1" height="1" />
          <rect id="rect-3-4" width="1" height="1" />
          <rect id="rect-3-5" width="1" height="1" />
          <rect id="rect-3-6" width="1" height="1" />
          <rect id="rect-3-7" width="1" height="1" />
          <rect id="rect-3-8" width="1" height="1" />
          <rect id="rect-3-9" width="1" height="1" />
          <rect id="rect-3-10" width="1" height="1" />
          <rect id="rect-3-11" width="1" height="1" />
          <rect id="rect-3-12" width="1" height="1" />
          <rect id="rect-3-13" width="1" height="1" />
          <rect id="rect-3-14" width="1" height="1" />
          <rect id="rect-3-15" width="1" height="1" />
          <rect id="rect-3-16" width="1" height="1" />
          <rect id="rect-3-17" width="1" height="1" />
          <rect id="rect-3-18" width="1" height="1" />
          <rect id="rect-3-19" width="1" height="1" />
          <rect id="rect-3-20" width="1" height="1" />
          <rect id="rect-3-21" width="1" height="1" />
          <rect id="rect-3-22" width="1" height="1" />
          <rect id="rect-3-23" width="1" height="1" />
          <rect id="rect-3-24" width="1" height="1" />
          <rect id="rect-3-25" width="1" height="1" />
          <rect id="rect-3-26" width="1" height="1" />
          <rect id="rect-3-27" width="1" height="1" />
          <rect id="rect-3-28" width="1" height="1" />
          <rect id="rect-3-29" width="1" height="1" />
          <rect id="rect-3-30" width="1" height="1" />
          <rect id="rect-3-31" width="1" height="1" />
          <rect id="rect-3-32" width="1" height="1" />
          <rect id="rect-3-33" width="1" height="1" />
          <rect id="rect-3-34" width="1" height="1" />
          <rect id="rect-3-35" width="1" height="1" />
          <rect id="rect-3-36" width="1" height="1" />
          <rect id="rect-3-37" width="1" height="1" />
          <rect id="rect-3-38" width="1" height="1" />
          <rect id="rect-3-39" width="1" height="1" />
          <rect id="rect-3-40" width="1" height="1" />
          <rect id="rect-3-41" width="1" height="1" />
          <rect id="rect-3-42" width="1" height="1" />
          <rect id="rect-3-43" width="1" height="1" />
          <rect id="rect-3-44" width="1" height="1" />
          <rect id="rect-3-45" width="1" height="1" />
          <rect id="rect-3-46" width="1" height="1" />
          <rect id="rect-3-47" width="1" height="1" />
          <rect id="rect-3-48" width="1" height="1" />
          <rect id="rect-3-49" width="1" height="1" />
          <rect id="rect-3-50" width="1" height="1" />
          <rect id="rect-3-51" width="1" height="1" />
          <rect id="rect-3-52" width="1" height="1" />
          <rect id="rect-3-53" width="1" height="1" />
          <rect id="rect-3-54" width="1" height="1" />
          <rect id="rect-3-55" width="1" height="1" />
          <rect id="rect-3-56" width="1" height="1" />
          <rect id="rect-3-57" width="1" height="1" />
          <rect id="rect-3-58" width="1" height="1" />
          <rect id="rect-3-59" width="1" height="1" />
          <rect id="rect-3-60" width="1" height="1" />
          <rect id="rect-4-1" width="1" height="1" />
          <rect id="rect-4-2" width="1" height="1" />
          <rect id="rect-4-3" width="1" height="1" />
          <rect id="rect-4-4" width="1" height="1" />
          <rect id="rect-4-5" width="1" height="1" />
          <rect id="rect-4-6" width="1" height="1" />
          <rect id="rect-4-7" width="1" height="1" />
          <rect id="rect-4-8" width="1" height="1" />
          <rect id="rect-4-9" width="1" height="1" />
          <rect id="rect-4-10" width="1" height="1" />
          <rect id="rect-4-11" width="1" height="1" />
          <rect id="rect-4-12" width="1" height="1" />
          <rect id="rect-4-13" width="1" height="1" />
          <rect id="rect-4-14" width="1" height="1" />
          <rect id="rect-4-15" width="1" height="1" />
          <rect id="rect-4-16" width="1" height="1" />
          <rect id="rect-4-17" width="1" height="1" />
          <rect id="rect-4-18" width="1" height="1" />
          <rect id="rect-4-19" width="1" height="1" />
          <rect id="rect-4-20" width="1" height="1" />
          <rect id="rect-4-21" width="1" height="1" />
          <rect id="rect-4-22" width="1" height="1" />
          <rect id="rect-4-23" width="1" height="1" />
          <rect id="rect-4-24" width="1" height="1" />
          <rect id="rect-4-25" width="1" height="1" />
          <rect id="rect-4-26" width="1" height="1" />
          <rect id="rect-4-27" width="1" height="1" />
          <rect id="rect-4-28" width="1" height="1" />
          <rect id="rect-4-29" width="1" height="1" />
          <rect id="rect-4-30" width="1" height="1" />
          <rect id="rect-4-31" width="1" height="1" />
          <rect id="rect-4-32" width="1" height="1" />
          <rect id="rect-4-33" width="1" height="1" />
          <rect id="rect-4-34" width="1" height="1" />
          <rect id="rect-4-35" width="1" height="1" />
          <rect id="rect-4-36" width="1" height="1" />
          <rect id="rect-4-37" width="1" height="1" />
          <rect id="rect-4-38" width="1" height="1" />
          <rect id="rect-4-39" width="1" height="1" />
          <rect id="rect-4-40" width="1" height="1" />
          <rect id="rect-4-41" width="1" height="1" />
          <rect id="rect-4-42" width="1" height="1" />
          <rect id="rect-4-43" width="1" height="1" />
          <rect id="rect-4-44" width="1" height="1" />
          <rect id="rect-4-45" width="1" height="1" />
          <rect id="rect-4-46" width="1" height="1" />
          <rect id="rect-4-47" width="1" height="1" />
          <rect id="rect-4-48" width="1" height="1" />
          <rect id="rect-4-49" width="1" height="1" />
          <rect id="rect-4-50" width="1" height="1" />
          <rect id="rect-4-51" width="1" height="1" />
          <rect id="rect-4-52" width="1" height="1" />
          <rect id="rect-4-53" width="1" height="1" />
          <rect id="rect-4-54" width="1" height="1" />
          <rect id="rect-4-55" width="1" height="1" />
          <rect id="rect-4-56" width="1" height="1" />
          <rect id="rect-4-57" width="1" height="1" />
          <rect id="rect-4-58" width="1" height="1" />
          <rect id="rect-4-59" width="1" height="1" />
          <rect id="rect-4-60" width="1" height="1" />
          <rect id="rect-5-1" width="1" height="1" />
          <rect id="rect-5-2" width="1" height="1" />
          <rect id="rect-5-3" width="1" height="1" />
          <rect id="rect-5-4" width="1" height="1" />
          <rect id="rect-5-5" width="1" height="1" />
          <rect id="rect-5-6" width="1" height="1" />
          <rect id="rect-5-7" width="1" height="1" />
          <rect id="rect-5-8" width="1" height="1" />
          <rect id="rect-5-9" width="1" height="1" />
          <rect id="rect-5-10" width="1" height="1" />
          <rect id="rect-5-11" width="1" height="1" />
          <rect id="rect-5-12" width="1" height="1" />
          <rect id="rect-5-13" width="1" height="1" />
          <rect id="rect-5-14" width="1" height="1" />
          <rect id="rect-5-15" width="1" height="1" />
          <rect id="rect-5-16" width="1" height="1" />
          <rect id="rect-5-17" width="1" height="1" />
          <rect id="rect-5-18" width="1" height="1" />
          <rect id="rect-5-19" width="1" height="1" />
          <rect id="rect-5-20" width="1" height="1" />
          <rect id="rect-5-21" width="1" height="1" />
          <rect id="rect-5-22" width="1" height="1" />
          <rect id="rect-5-23" width="1" height="1" />
          <rect id="rect-5-24" width="1" height="1" />
          <rect id="rect-5-25" width="1" height="1" />
          <rect id="rect-5-26" width="1" height="1" />
          <rect id="rect-5-27" width="1" height="1" />
          <rect id="rect-5-28" width="1" height="1" />
          <rect id="rect-5-29" width="1" height="1" />
          <rect id="rect-5-30" width="1" height="1" />
          <rect id="rect-5-31" width="1" height="1" />
          <rect id="rect-5-32" width="1" height="1" />
          <rect id="rect-5-33" width="1" height="1" />
          <rect id="rect-5-34" width="1" height="1" />
          <rect id="rect-5-35" width="1" height="1" />
          <rect id="rect-5-36" width="1" height="1" />
          <rect id="rect-5-37" width="1" height="1" />
          <rect id="rect-5-38" width="1" height="1" />
          <rect id="rect-5-39" width="1" height="1" />
          <rect id="rect-5-40" width="1" height="1" />
          <rect id="rect-5-41" width="1" height="1" />
          <rect id="rect-5-42" width="1" height="1" />
          <rect id="rect-5-43" width="1" height="1" />
          <rect id="rect-5-44" width="1" height="1" />
          <rect id="rect-5-45" width="1" height="1" />
          <rect id="rect-5-46" width="1" height="1" />
          <rect id="rect-5-47" width="1" height="1" />
          <rect id="rect-5-48" width="1" height="1" />
          <rect id="rect-5-49" width="1" height="1" />
          <rect id="rect-5-50" width="1" height="1" />
          <rect id="rect-5-51" width="1" height="1" />
          <rect id="rect-5-52" width="1" height="1" />
          <rect id="rect-5-53" width="1" height="1" />
          <rect id="rect-5-54" width="1" height="1" />
          <rect id="rect-5-55" width="1" height="1" />
          <rect id="rect-5-56" width="1" height="1" />
          <rect id="rect-5-57" width="1" height="1" />
          <rect id="rect-5-58" width="1" height="1" />
          <rect id="rect-5-59" width="1" height="1" />
          <rect id="rect-5-60" width="1" height="1" />
          <rect id="rect-6-1" width="1" height="1" />
          <rect id="rect-6-2" width="1" height="1" />
          <rect id="rect-6-3" width="1" height="1" />
          <rect id="rect-6-4" width="1" height="1" />
          <rect id="rect-6-5" width="1" height="1" />
          <rect id="rect-6-6" width="1" height="1" />
          <rect id="rect-6-7" width="1" height="1" />
          <rect id="rect-6-8" width="1" height="1" />
          <rect id="rect-6-9" width="1" height="1" />
          <rect id="rect-6-10" width="1" height="1" />
          <rect id="rect-6-11" width="1" height="1" />
          <rect id="rect-6-12" width="1" height="1" />
          <rect id="rect-6-13" width="1" height="1" />
          <rect id="rect-6-14" width="1" height="1" />
          <rect id="rect-6-15" width="1" height="1" />
          <rect id="rect-6-16" width="1" height="1" />
          <rect id="rect-6-17" width="1" height="1" />
          <rect id="rect-6-18" width="1" height="1" />
          <rect id="rect-6-19" width="1" height="1" />
          <rect id="rect-6-20" width="1" height="1" />
          <rect id="rect-6-21" width="1" height="1" />
          <rect id="rect-6-22" width="1" height="1" />
          <rect id="rect-6-23" width="1" height="1" />
          <rect id="rect-6-24" width="1" height="1" />
          <rect id="rect-6-25" width="1" height="1" />
          <rect id="rect-6-26" width="1" height="1" />
          <rect id="rect-6-27" width="1" height="1" />
          <rect id="rect-6-28" width="1" height="1" />
          <rect id="rect-6-29" width="1" height="1" />
          <rect id="rect-6-30" width="1" height="1" />
          <rect id="rect-6-31" width="1" height="1" />
          <rect id="rect-6-32" width="1" height="1" />
          <rect id="rect-6-33" width="1" height="1" />
          <rect id="rect-6-34" width="1" height="1" />
          <rect id="rect-6-35" width="1" height="1" />
          <rect id="rect-6-36" width="1" height="1" />
          <rect id="rect-6-37" width="1" height="1" />
          <rect id="rect-6-38" width="1" height="1" />
          <rect id="rect-6-39" width="1" height="1" />
          <rect id="rect-6-40" width="1" height="1" />
          <rect id="rect-6-41" width="1" height="1" />
          <rect id="rect-6-42" width="1" height="1" />
          <rect id="rect-6-43" width="1" height="1" />
          <rect id="rect-6-44" width="1" height="1" />
          <rect id="rect-6-45" width="1" height="1" />
          <rect id="rect-6-46" width="1" height="1" />
          <rect id="rect-6-47" width="1" height="1" />
          <rect id="rect-6-48" width="1" height="1" />
          <rect id="rect-6-49" width="1" height="1" />
          <rect id="rect-6-50" width="1" height="1" />
          <rect id="rect-6-51" width="1" height="1" />
          <rect id="rect-6-52" width="1" height="1" />
          <rect id="rect-6-53" width="1" height="1" />
          <rect id="rect-6-54" width="1" height="1" />
          <rect id="rect-6-55" width="1" height="1" />
          <rect id="rect-6-56" width="1" height="1" />
          <rect id="rect-6-57" width="1" height="1" />
          <rect id="rect-6-58" width="1" height="1" />
          <rect id="rect-6-59" width="1" height="1" />
          <rect id="rect-6-60" width="1" height="1" />
          <rect id="rect-7-1" width="1" height="1" />
          <rect id="rect-7-2" width="1" height="1" />
          <rect id="rect-7-3" width="1" height="1" />
          <rect id="rect-7-4" width="1" height="1" />
          <rect id="rect-7-5" width="1" height="1" />
          <rect id="rect-7-6" width="1" height="1" />
          <rect id="rect-7-7" width="1" height="1" />
          <rect id="rect-7-8" width="1" height="1" />
          <rect id="rect-7-9" width="1" height="1" />
          <rect id="rect-7-10" width="1" height="1" />
          <rect id="rect-7-11" width="1" height="1" />
          <rect id="rect-7-12" width="1" height="1" />
          <rect id="rect-7-13" width="1" height="1" />
          <rect id="rect-7-14" width="1" height="1" />
          <rect id="rect-7-15" width="1" height="1" />
          <rect id="rect-7-16" width="1" height="1" />
          <rect id="rect-7-17" width="1" height="1" />
          <rect id="rect-7-18" width="1" height="1" />
          <rect id="rect-7-19" width="1" height="1" />
          <rect id="rect-7-20" width="1" height="1" />
          <rect id="rect-7-21" width="1" height="1" />
          <rect id="rect-7-22" width="1" height="1" />
          <rect id="rect-7-23" width="1" height="1" />
          <rect id="rect-7-24" width="1" height="1" />
          <rect id="rect-7-25" width="1" height="1" />
          <rect id="rect-7-26" width="1" height="1" />
          <rect id="rect-7-27" width="1" height="1" />
          <rect id="rect-7-28" width="1" height="1" />
          <rect id="rect-7-29" width="1" height="1" />
          <rect id="rect-7-30" width="1" height="1" />
          <rect id="rect-7-31" width="1" height="1" />
          <rect id="rect-7-32" width="1" height="1" />
          <rect id="rect-7-33" width="1" height="1" />
          <rect id="rect-7-34" width="1" height="1" />
          <rect id="rect-7-35" width="1" height="1" />
          <rect id="rect-7-36" width="1" height="1" />
          <rect id="rect-7-37" width="1" height="1" />
          <rect id="rect-7-38" width="1" height="1" />
          <rect id="rect-7-39" width="1" height="1" />
          <rect id="rect-7-40" width="1" height="1" />
          <rect id="rect-7-41" width="1" height="1" />
          <rect id="rect-7-42" width="1" height="1" />
          <rect id="rect-7-43" width="1" height="1" />
          <rect id="rect-7-44" width="1" height="1" />
          <rect id="rect-7-45" width="1" height="1" />
          <rect id="rect-7-46" width="1" height="1" />
          <rect id="rect-7-47" width="1" height="1" />
          <rect id="rect-7-48" width="1" height="1" />
          <rect id="rect-7-49" width="1" height="1" />
          <rect id="rect-7-50" width="1" height="1" />
          <rect id="rect-7-51" width="1" height="1" />
          <rect id="rect-7-52" width="1" height="1" />
          <rect id="rect-7-53" width="1" height="1" />
          <rect id="rect-7-54" width="1" height="1" />
          <rect id="rect-7-55" width="1" height="1" />
          <rect id="rect-7-56" width="1" height="1" />
          <rect id="rect-7-57" width="1" height="1" />
          <rect id="rect-7-58" width="1" height="1" />
          <rect id="rect-7-59" width="1" height="1" />
          <rect id="rect-7-60" width="1" height="1" />
          <rect id="rect-8-1" width="1" height="1" />
          <rect id="rect-8-2" width="1" height="1" />
          <rect id="rect-8-3" width="1" height="1" />
          <rect id="rect-8-4" width="1" height="1" />
          <rect id="rect-8-5" width="1" height="1" />
          <rect id="rect-8-6" width="1" height="1" />
          <rect id="rect-8-7" width="1" height="1" />
          <rect id="rect-8-8" width="1" height="1" />
          <rect id="rect-8-9" width="1" height="1" />
          <rect id="rect-8-10" width="1" height="1" />
          <rect id="rect-8-11" width="1" height="1" />
          <rect id="rect-8-12" width="1" height="1" />
          <rect id="rect-8-13" width="1" height="1" />
          <rect id="rect-8-14" width="1" height="1" />
          <rect id="rect-8-15" width="1" height="1" />
          <rect id="rect-8-16" width="1" height="1" />
          <rect id="rect-8-17" width="1" height="1" />
          <rect id="rect-8-18" width="1" height="1" />
          <rect id="rect-8-19" width="1" height="1" />
          <rect id="rect-8-20" width="1" height="1" />
          <rect id="rect-8-21" width="1" height="1" />
          <rect id="rect-8-22" width="1" height="1" />
          <rect id="rect-8-23" width="1" height="1" />
          <rect id="rect-8-24" width="1" height="1" />
          <rect id="rect-8-25" width="1" height="1" />
          <rect id="rect-8-26" width="1" height="1" />
          <rect id="rect-8-27" width="1" height="1" />
          <rect id="rect-8-28" width="1" height="1" />
          <rect id="rect-8-29" width="1" height="1" />
          <rect id="rect-8-30" width="1" height="1" />
          <rect id="rect-8-31" width="1" height="1" />
          <rect id="rect-8-32" width="1" height="1" />
          <rect id="rect-8-33" width="1" height="1" />
          <rect id="rect-8-34" width="1" height="1" />
          <rect id="rect-8-35" width="1" height="1" />
          <rect id="rect-8-36" width="1" height="1" />
          <rect id="rect-8-37" width="1" height="1" />
          <rect id="rect-8-38" width="1" height="1" />
          <rect id="rect-8-39" width="1" height="1" />
          <rect id="rect-8-40" width="1" height="1" />
          <rect id="rect-8-41" width="1" height="1" />
          <rect id="rect-8-42" width="1" height="1" />
          <rect id="rect-8-43" width="1" height="1" />
          <rect id="rect-8-44" width="1" height="1" />
          <rect id="rect-8-45" width="1" height="1" />
          <rect id="rect-8-46" width="1" height="1" />
          <rect id="rect-8-47" width="1" height="1" />
          <rect id="rect-8-48" width="1" height="1" />
          <rect id="rect-8-49" width="1" height="1" />
          <rect id="rect-8-50" width="1" height="1" />
          <rect id="rect-8-51" width="1" height="1" />
          <rect id="rect-8-52" width="1" height="1" />
          <rect id="rect-8-53" width="1" height="1" />
          <rect id="rect-8-54" width="1" height="1" />
          <rect id="rect-8-55" width="1" height="1" />
          <rect id="rect-8-56" width="1" height="1" />
          <rect id="rect-8-57" width="1" height="1" />
          <rect id="rect-8-58" width="1" height="1" />
          <rect id="rect-8-59" width="1" height="1" />
          <rect id="rect-8-60" width="1" height="1" />
        </svg>
      </figure>
    </section>
  );
};

export default Hero;
