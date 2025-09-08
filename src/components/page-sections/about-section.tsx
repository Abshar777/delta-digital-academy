import React from "react";

const features = [
  // - Bitcoin (BTC): Digital gold, store of value
// - Ethereum (ETH): Smart contract platform
// - Solana (SOL): High-performance blockchain
// - Cardano (ADA): Research-driven approach
  "Bitcoin (BTC): Digital gold, store of value",
  "Ethereum (ETH): Smart contract platform",
  "Solana (SOL): High-performance blockchain",
  "Cardano (ADA): Research-driven approach",
];

const avatars = [
  "/our/1.svg",
  "/our/2.svg",
  "/our/3.svg",
  "/our/4.svg",
  "/our/10.svg",
  "/our/11.svg",
];

const Section = () => {
  return (
    <section className="relative pt-20 md:pt-[100px] lg:pt-[160px] xl:pt-[200px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] bg-background-3 dark:bg-background-6 max-sm:pt-10 max-sm:pb-10">
      <div className="main-container flex flex-col gap-[70px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-y-4">
          <h2
            data-ns-animate
            data-delay="0.1"
            className="max-w-[750px] mx-auto max-sm:max-w-[320px]"
          >
            Crypto Fundamentals
          </h2>
          <p
            data-ns-animate
            data-delay="0.2"
            className="max-w-[850px] max-sm:max-w-[300px]"
          >
            A digital or virtual currency that uses cryptography for security
            and operates on a technology called blockchain.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 max-sm:gap-y-[42px] max-sm:gap-x-0 gap-[42px]">
          {/* About Card */}
          <div
            data-ns-animate
            data-delay="0.3"
            className="col-span-12 relative z-10"
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-[20px] overflow-hidden">
              <img
                style={{ filter: "hue-rotate(223deg)" }}
                src="images/home-page-2/about-bg.png"
                alt="about bg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-sm:py-8 py-14 px-6 max-sm:px-5 md:px-11 grid max-sm:grid-cols-1 grid-cols-2 max-sm:gap-10 gap-5">
              <div className="max-w-[500px] about-content">
                <h5 className="text-accent mb-8 max-sm:text-heading-6">
                Popular Cryptocurrencies
                </h5>
                <a
                  href="#"
                  className="btn btn-md btn-white hover:btn-white-dark"
                >
                  <span>Get started</span>
                </a>
              </div>

              <div>
                <ul className="max-sm:space-y-3 space-y-5">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center max-sm:gap-2.5 gap-2"
                    >
                      <svg
                        className="size-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 10.0002C0 4.47729 4.47717 0 10 0C15.5229 0 20.0001 4.47729 20.0001 10.0002C20.0001 15.523 15.5229 20.0003 10 20.0003C4.47717 20.0003 0 15.523 0 10.0002Z"
                          fill="#FCFCFC"
                          fillOpacity="0.17"
                        />
                        <path
                          d="M14.125 7.375L8.875 12.6248L6.25 10"
                          stroke=""
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="stroke-accent"
                        />
                      </svg>
                      <span className="text-accent max-sm:text-tagline-2">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* User Data Card */}
          <div
            data-ns-animate
            data-delay="0.4"
            className="max-md:col-span-12 col-span-6 bg-white dark:bg-background-5 rounded-[20px]"
          >
            <div className="flex items-center bg-secondary dark:bg-background-9 rounded-[12px] p-5 sm:p-8">
              <div className="flex flex-col gap-4 flex-2/3">
                <div className="flex -space-x-2">
                  {avatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className={`inline-block size-9 rounded-full ring-4 ring-secondary bg-white ${
                        index >= 4 ? "sm:inline-block hidden" : ""
                      }`}
                    />
                  ))}
                  <div className="inline-flex items-center justify-center size-9 rounded-full shrink-0 ring-4 ring-secondary text-accent bg-primary-500 text-tagline-3 font-medium">
                    20+
                  </div>
                </div>
                <p className="text-accent font-medium">
                  Gather worldwide user <br className="hidden sm:block" />
                  data for the current
                </p>
              </div>

              <div className="flex-1/3 flex flex-col items-center justify-end ml-auto">
                {/* Circular progress */}
                <div className="relative w-fit">
                  <svg
                    width="114"
                    height="113"
                    viewBox="0 0 114 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M114 56.5C114 87.7041 88.4802 113 57 113C25.5198 113 0 87.7041 0 56.5C0 25.2959 25.5198 0 57 0C88.4802 0 114 25.2959 114 56.5ZM13.68 56.5C13.68 80.2151 33.075 99.44 57 99.44C80.925 99.44 100.32 80.2151 100.32 56.5C100.32 32.7849 80.925 13.56 57 13.56C33.075 13.56 13.68 32.7849 13.68 56.5Z"
                      className="fill-accent"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M57 6.78C57 3.03551 60.0459 -0.0412769 63.7644 0.399254C70.4102 1.18659 76.8824 3.13028 82.8775 6.15813C90.8922 10.206 97.8267 16.0767 103.114 23.2901C108.401 30.5036 111.891 38.8549 113.298 47.6615C114.705 56.468 113.99 65.4796 111.21 73.9595C108.431 82.4394 103.666 90.1468 97.3051 96.4515C90.9445 102.756 83.1689 107.479 74.614 110.235C66.059 112.99 56.9677 113.699 48.0832 112.304C41.4691 111.266 35.1094 109.083 29.2884 105.873C25.98 104.049 25.3169 99.7256 27.5504 96.6784V96.6784C29.7576 93.667 33.9625 93.0531 37.2934 94.7397C41.3425 96.7899 45.7047 98.2019 50.2233 98.9113C56.9754 99.9714 63.8849 99.4324 70.3866 97.3384C76.8884 95.2444 82.7978 91.6548 87.6319 86.8632C92.4659 82.0715 96.0872 76.2139 98.1998 69.7692C100.312 63.3245 100.856 56.4757 99.7867 49.7827C98.7172 43.0898 96.0649 36.7427 92.0466 31.2605C88.0283 25.7783 82.7581 21.3166 76.6669 18.2402C72.5968 16.1846 68.2373 14.7864 63.7529 14.0849C60.0534 13.5062 57 10.5245 57 6.78V6.78Z"
                      className="fill-primary-500"
                    />
                  </svg>
                  <h6 className="flex items-center text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span>95</span>
                    <span className="font-inherit"> % </span>
                  </h6>
                </div>
                <p className="text-secondary bg-ns-green rounded-[12px] py-2 px-4 md:px-4 lg:px-6 -mt-6 relative z-10">
                  <span>Active User</span>
                </p>
              </div>
            </div>

            <div className="text-center max-w-[375px] mx-auto max-lg:py-6 max-lg:text-left max-lg:px-6 py-8">
              <h5 className="mb-2 max-lg:text-heading-6">
                An intuitive website creation tool.
              </h5>
              <p className="max-lg:text-tagline-2">
                An intuitive website creation tool is designed to simplify the
                process of building a website, making it accessible even for
                users
              </p>
            </div>
          </div>

          {/* AI Card */}
          <div
            data-ns-animate
            data-delay="0.5"
            className="max-md:col-span-12 col-span-6 bg-white dark:bg-background-5 rounded-[20px]"
          >
            <div className="bg-secondary dark:bg-background-9 rounded-xl p-5 sm:p-8">
              <div className="flex items-center gap-4 mb-[46px]">
                <figure className="inline-block size-16 rounded-full ring-4 ring-white bg-linear-[135deg,#ffffff_0%,#a585ff_100%] overflow-hidden relative">
                  <img
                    src="/our/gw.png"
                    alt="avatar"
                    className="max-w-full"
                  />
                  <img
                     src="/our/gw.png"
                    alt="avatar"
                    className="absolute top-0 left-0 -z-10"
                  />
                </figure>
                <div>
                  <h5 className="text-accent max-sm:text-heading-6">
                   Guinness World Record Holder
                  </h5>
                  <p className="text-accent/60 max-sm:text-tagline-2">
                    Cryptocurrency Expert
                  </p>
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <p className="text-accent/60 text-tagline-2 font-medium">
                    now
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <p className="text-accent/60 text-tagline-2 font-medium">
                    4.7 (750 Reviews)
                  </p>
                </div>
              </div> */}
            </div>

            <div className="text-center max-w-[375px] mx-auto max-lg:py-6 max-lg:text-left max-lg:px-6 py-8">
              <h5 className="mb-2 max-lg:text-heading-6">
                Guinness World Record Holder
              </h5>
              <p className="px-1 sm:px-0 max-lg:text-tagline-2">
                Content creation powered by artificial intelligence (AI) is
                revolutionizing the way digital content is produced, curated,
                and delivered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
