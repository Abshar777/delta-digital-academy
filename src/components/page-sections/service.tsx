import React from "react";

const Service = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span
            data-ns-animate=""
            data-delay="0.3"
            className="badge badge-green mb-3.5 md:mb-5"
          >
            Our services
          </span>
          <h2 data-ns-animate="" data-delay="0.4">
            In-depth overview of crypto <br className="hidden md:block" />
            currency
            <span className="text-primary-500 inline-block">solutions.</span>
          </h2>
          <p
            data-ns-animate=""
            data-delay="0.5"
            className="lg:max-w-[650px] mx-auto"
          >
            An in-depth overview of cryptocurrency solutions reveals a rapidly
            evolving ecosystem designed to revolutionize traditional financial
            systems.
          </p>
        </div>
        {/* services */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-[42px] sm:gap-6 mb-10 md:mb-14">
          {/* services card-1 */}
          <div
            data-ns-animate=""
            data-delay="0.6"
            className="col-span-12 lg:col-span-6 sm:col-span-6"
          >
            <div className="bg-white dark:bg-background-6 flex flex-col md:flex-row items-center gap-8 rounded-[20px] py-8 lg:py-14 px-5 md:px-8 overflow-hidden">
              <div className="w-full md:w-1/2 lg:w-auto">
                <div className="inline-block mb-4 lg:mb-6">
                  <span className="ns-shape-9 text-[52px] text-secondary dark:text-white" />
                </div>
                <h3 className="font-normal text-heading-6 xl:text-heading-5 md:text-heading-6 mb-2">
                  Cryptocurrency lending
                </h3>
                <p className="max-w-[275px] mb-6 md:mb-11">
                  Cryptocurrency lending is a financial service that allows
                  individuals to lend
                </p>
                <div className="flex items-center justify-start">
                  <a
                    href="our-services-details-page.html"
                    className="btn btn-md btn-accent block md:inline-block dark:btn-white-dark w-full md:w-auto dark:hover:btn-accent hover:btn-secondary"
                  >
                    <span>View Service</span>
                  </a>
                </div>
              </div>
              <figure className="w-full md:w-1/2 lg:max-w-[260px] overflow-hidden">
                <img
                  src="images/home-page-1/services-asset-1.svg"
                  alt="service-1"
                  className="w-full h-auto object-cover dark:hidden inline-block rounded-[12px]"
                />
                <img
                  src="images/home-page-1/services-asset-dark-1.svg"
                  alt="service-1"
                  className="w-full h-auto object-cover dark:inline-block hidden rounded-[12px]"
                />
              </figure>
            </div>
          </div>
          {/* services card-2 */}
          <div
            data-ns-animate=""
            data-delay="0.7"
            className="col-span-12 lg:col-span-6 sm:col-span-6"
          >
            <div className="bg-white dark:bg-background-6 flex flex-col md:flex-row items-center gap-8 rounded-[20px] py-8 lg:py-14 px-5 md:px-8 overflow-hidden">
              <div className="w-full md:w-1/2 lg:w-auto">
                <div className="inline-block mb-4 md:mb-6">
                  <span className="ns-shape-2 text-[52px] text-secondary dark:text-white" />
                </div>
                <h3 className="font-normal text-heading-6 xl:text-heading-5 md:text-heading-6 mb-2">
                  Payment solutions
                </h3>
                <p className="max-w-[275px] mb-6 md:mb-11">
                  Payment solutions play a vital role in streamlining financial
                  transactions
                </p>
                <div className="flex items-center justify-start">
                  <a
                    href="our-services-details-page.html"
                    className="btn btn-md btn-accent block md:inline-block dark:btn-white-dark w-full md:w-auto dark:hover:btn-accent hover:btn-secondary"
                  >
                    <span>View Service</span>
                  </a>
                </div>
              </div>
              <figure className="w-full md:w-1/2 lg:max-w-[253px] rounded-[10px] overflow-hidden">
                <img
                  src="images/home-page-1/services-asset-2.svg"
                  alt="service-1"
                  className="w-full h-auto object-cover dark:hidden inline-block rounded-[10px]"
                />
                <img
                  src="images/home-page-1/services-asset-dark-2.svg"
                  alt="service-1"
                  className="w-full h-auto object-cover dark:inline-block hidden rounded-[10px]"
                />
              </figure>
            </div>
          </div>
          {/* services card-3 */}
          <div
            data-ns-animate=""
            data-delay="0.8"
            className="col-span-12 md:col-span-6 lg:col-span-4 sm:col-span-6"
          >
            <div className="bg-white dark:bg-background-6 h-full items-center gap-8 rounded-[20px] py-8 md:py-14 px-5 md:px-8 overflow-hidden group">
              <div className="inline-block mb-4 md:mb-6">
                <span className="ns-shape-3 text-[52px] text-secondary dark:text-white" />
              </div>
              <h3 className="font-normal text-heading-6 sm:text-heading-5 mb-2">
                Digital wallets
              </h3>
              <p className="mb-6 md:mb-11">
                Digital wallets are a modern and convenient way to make
                financial transactions using
              </p>
              <div className="flex space-y-3 mt-8 md:mt-12 mb-8 md:mb-14 flex-col">
                <div className="flex -space-x-3.5">
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-ns-yellow dark:ring-background-5 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                    src="images/avatar/avatar-1.png"
                    alt="Avatar 1"
                  />
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-ns-green dark:ring-background-5 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                    src="images/avatar/avatar-2.png"
                    alt="Avatar 2"
                  />
                  <img
                    className="inline-block size-[38px] rounded-full relative z-0 ring-2 ring-ns-red dark:ring-background-5 bg-linear-[156deg,#FFF_32.92%,#A585FF_91%]"
                    src="images/avatar/avatar-3.png"
                    alt="Avatar 3"
                  />
                  <div className="inline-flex items-center relative z-10 justify-center size-[38px] bg-white dark:bg-black rounded-full ring-2 ring-primary-400 dark:ring-background-5 text-secondary/80 text-tagline-3 font-medium overflow-hidden">
                    <figure>
                      {/* light Icon */}
                      <img
                        src="images/icons/arrow-up-right.svg"
                        alt="Arrow Icon"
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500 opacity-100 group-hover:opacity-0 inline dark:hidden"
                      />
                      <img
                        src="images/icons/arrow-up-right.svg"
                        alt="Arrow Icon"
                        className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] opacity-0 group-hover:opacity-100 inline-block dark:hidden"
                      />
                      {/* dark Icon */}
                      <img
                        src="images/icons/arrow-up-right-light.svg"
                        alt="Arrow Icon"
                        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 group-hover:-translate-y-12 group-hover:translate-x-8 transition-all duration-500 opacity-100 group-hover:opacity-0 dark:inline hidden"
                      />
                      <img
                        src="images/icons/arrow-up-right-light.svg"
                        alt="Arrow Icon"
                        className="absolute translate-y-6 -translate-x-12 transition-all duration-500 group-hover:-translate-x-[14px] group-hover:-translate-y-[49%] opacity-0 group-hover:opacity-100 dark:inline hidden"
                      />
                    </figure>
                  </div>
                </div>
                <p className="text-tagline-2">
                  <span className="font-normal block text-left text-secondary dark:text-white text-xl mb-1 leading-[1.5]">
                    Trusted by 20k+
                  </span>
                  Customers across the globe
                </p>
              </div>
              <div className="flex items-center justify-start">
                <a
                  href="our-services-details-page.html"
                  className="btn btn-md btn-accent block md:inline-block dark:btn-white-dark w-full md:w-auto dark:hover:btn-accent hover:btn-secondary"
                >
                  <span>View Service</span>
                </a>
              </div>
            </div>
          </div>
          {/* services card-4 */}
          <div
            data-ns-animate=""
            data-delay="0.9"
            className="col-span-12 md:col-span-6 lg:col-span-4 sm:col-span-6"
          >
            <div className="group items-center gap-8 h-full rounded-[20px] py-8 md:py-14 px-5 md:px-8 bg-secondary dark:bg-ns-green overflow-hidden">
              <div className="inline-block mb-4 md:mb-6">
                <span className="ns-shape-12 text-[52px] text-white dark:text-secondary" />
              </div>
              <h3 className="font-normal text-heading-5 text-white dark:text-secondary mb-2">
                Trading platforms
              </h3>
              <p className="mb-6 md:mb-11 text-accent/80 dark:text-secondary/80">
                Trading platforms are digital interfaces that allow investors
                and traders to buy and sell
              </p>
              <figure className="flex mt-8 md:mt-12 mb-8 md:mb-14 flex-col rounded-[10px] overflow-hidden w-full md:w-1/2 lg:max-w-[338px] lg:w-full">
                <img
                  src="images/home-page-1/services-asset-3.svg"
                  alt="service-3"
                  className="w-full h-auto object-cover dark:hidden inline-block"
                />
                <img
                  src="images/home-page-1/services-asset-dark-3.svg"
                  alt="service-3"
                  className="w-full h-auto object-cover dark:inline-block hidden"
                />
              </figure>
              <div className="flex items-center justify-start">
                <a
                  href="our-services-details-page.html"
                  className="btn btn-md btn-accent block md:inline-block dark:bg-ns-green dark:border-stroke-7 w-full md:w-auto dark:hover:btn-accent hover:btn-primary"
                >
                  <span>View Service</span>
                </a>
              </div>
            </div>
          </div>
          {/* services card-5 */}
          <div
            data-ns-animate=""
            data-delay={1}
            className="col-span-12 md:col-span-6 lg:col-span-4 sm:col-span-6"
          >
            <div className="group bg-white dark:bg-background-6 items-center gap-8 rounded-[20px] py-8 md:py-14 px-5 md:px-8 overflow-hidden">
              <div className="inline-block mb-4 md:mb-6">
                <span className="ns-shape-7 text-[52px] text-secondary dark:text-white" />
              </div>
              <h3 className="font-normal text-heading-6 sm:text-heading-5 mb-2">
                Trading exchanges
              </h3>
              <p>
                Trading exchanges are centralized platforms where financial
                instruments such as stocks
              </p>
              <figure className="flex mt-8 mb-8 md:mb-14 flex-col rounded-[10px] overflow-hidden w-full md:w-1/2 lg:max-w-[338px] lg:w-full">
                <img
                  src="images/home-page-1/services-asset-4.svg"
                  alt="service-3"
                  width={338}
                  height={110}
                  className="w-full h-auto object-cover dark:hidden inline-block"
                />
                <img
                  src="images/home-page-1/services-asset-dark-4.svg"
                  width={338}
                  height={110}
                  alt="service-3"
                  className="w-full h-auto object-cover dark:inline-block hidden"
                />
              </figure>
              <div className="flex items-center justify-start">
                <a
                  href="our-services-details-page.html"
                  className="btn btn-md btn-accent block md:inline-block dark:btn-white-dark w-full md:w-auto dark:hover:btn-accent hover:btn-secondary"
                >
                  <span>View Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-ns-animate=""
          data-delay="1.1"
          className="flex justify-center"
        >
          <a
            href="our-services-page-01.html"
            className="btn btn-lg md:btn-xl dark:btn-transparent btn-white block md:inline-block w-full md:w-auto hover:btn-primary"
          >
            <span>View All Services</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
