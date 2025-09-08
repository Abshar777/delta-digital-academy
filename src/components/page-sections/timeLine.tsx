export const TimeLine = () => (
  <section style={{backgroundColor:"#0b0705 !important"}} className="dark:bg-background-7  pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px]  xl:pb-[100px] xl:pt-[100px]">
    <div style={{border:"0px solid none !important"}} className="max-w-[1464px] mx-5 2xl:mx-auto   bg-background-3 dark:bg-background-5  border-white    rounded-[20px] py-10 xl:py-[120px] px-2.5 sm:px-5 xl:px-[50px] relative overflow-hidden">
      {/* background image  */}
      <div
        data-ns-animate=""
        data-delay="0.7"
        data-direction="up"
        className="absolute max-[400px]:-top-[20%] max-[400px]:rotate-[73deg] max-[400px]:-right-[70%] -top-[20%] sm:-top-[24%] md:-top-[30%] lg:-top-[44%] -right-[54%] min-[550px]:-right-[20%] md:-right-[28%] lg:-right-[20%] xl:-right-[18%] max-w-[420px] md:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1080px] rotate-90 md:rotate-[6deg] pointer-events-none select-none"
      >
        <img
          src="images/gradient/gradient-36.png"
          alt="Timeline integration vector background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center mb-14 md:mb-20 lg:mb-32 2xl:mb-[183px]">
        <span
          data-ns-animate=""
          data-delay="0.1"
          className="badge badge-green mb-3.5 md:mb-5"
        >
          Timeline
        </span>
        <h2 data-ns-animate="" data-delay="0.2" className="mb-3">
          Chronological
          <span className="text-primary-500 inline-block">overview</span>
        </h2>
        <p
          data-ns-animate=""
          data-delay="0.3"
          className="lg:max-w-[560px] mx-auto"
        >
          With concepts in hand, we meticulously design, refining every detail
          to align with your vision and objectives.
        </p>
        <div className="relative z-30">
          <div
            data-ns-animate=""
            data-delay="0.4"
            className="sm:py-10 py-6 z-10 relative mt-14 2xl:mt-[70px] sm:px-[60px] px-10 font-normal sm:text-heading-5 text-heading-6 rounded-[365px] bg-ns-green inline-block"
          >
            2020 to 2025
          </div>
          {/* timeline svg  */}
          <div className="absolute top-2/3 -z-0 left-1/2 -translate-x-[50%] hidden lg:block">
            <svg
              width={880}
              height={275}
              viewBox="0 0 880 275"
              fill="none"
              stroke="#df84198a"
              style={{stroke:"#df84198a !important"}}
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#df84198a] dark:stroke-stroke-8"
            >
              <g clipPath="url(#clip0_6586_24283)">
                <path
                  d="M439.672 0.5L440.359 274.499"
                  id="svg-one"
                  className="invisible"
                />
                <path
                  d="M439.672 129.969V129.969C439.672 146.249 426.474 159.446 410.194 159.446H40.6719C18.5805 159.446 0.671875 177.355 0.671875 199.446V273.969"
                  id="svg-two"
                  className="invisible"
                />
                <path
                  d="M440.328 129.969V129.969C440.328 146.249 453.526 159.446 469.806 159.446H839.328C861.42 159.446 879.328 177.355 879.328 199.446V273.969"
                  id="svg-three"
                  className="invisible"
                />
              </g>
              <defs>
                <clipPath id="clip0_6586_24283">
                  <rect
                    width="878.656"
                    height="273.999"
                    fill="white"
                    transform="translate(0.671875 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="grid relative z-30 grid-cols-12 gap-6">
        {/* Trading exchanges, */}
        <div
          data-ns-animate=""
          data-delay="1.2"
          className="col-span-12 md:col-span-6 lg:col-span-4 bg-background-1 dark:bg-background-7 rounded-[20px] p-8"
        >
          <h3 className="font-normal sm:text-heading-5 text-heading-6 mb-4">
            Trading exchanges
          </h3>
          <ul className="sm:ml-6 ml-4 sm:space-y-6 space-y-4">
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-secondary/60 dark:text-accent/60">
              2020: A mysterious person or team introduces a new form of
              currency.
            </li>
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-secondary/60 dark:text-accent/60">
              2020: Bitcoin is officially launched by Satoshi Nakamoto with its
              first block
            </li>
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-secondary/60 dark:text-accent/60">
              2021: The inaugural Bitcoin transaction takes place, famously
              involving pizzas.
            </li>
          </ul>
        </div>
        {/* Progress and evolution, */}
        <div
          data-ns-animate=""
          data-delay="1.3"
          className="col-span-12 md:col-span-6 lg:col-span-4 bg-secondary dark:bg-accent rounded-[20px] p-8"
        >
          <h3 className="sm:text-heading-5 text-heading-6 font-normal text-accent dark:text-secondary mb-4">
            Progress and evolution
          </h3>
          <ul className="sm:ml-6 ml-4 sm:space-y-6 space-y-4">
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-accent dark:text-secondary">
              2020: A mysterious person or team introduces a new form of
              currency.
            </li>
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-accent dark:text-secondary">
              2020: Bitcoin is officially launched by Satoshi Nakamoto with its
              first block
            </li>
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-accent dark:text-secondary">
              2021: The inaugural Bitcoin transaction takes place, famously
              involving pizzas.
            </li>
          </ul>
        </div>
        {/* Growth recognized. */}
        <div
          data-ns-animate=""
          data-delay="1.4"
          className="col-span-12 md:col-span-6 lg:col-span-4 bg-background-1 dark:bg-background-7 rounded-[20px] p-8"
        >
          <h3 className="font-normal sm:text-heading-5 text-heading-6 mb-4">
            Growth recognized.
          </h3>
          <ul className="sm:ml-6 ml-4 sm:space-y-6 space-y-4">
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-secondary/60 dark:text-accent/60">
              2023: Mt. Gox, a major Bitcoin exchange, struggled significantly.
            </li>
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-secondary/60 dark:text-accent/60">
              2024: Ethereum launched, bringing new blockchain features.
            </li>
            <li className="text-tagline-2 sm:text-tagline-1 font-normal list-disc text-secondary/60 dark:text-accent/60">
              2024: The second Bitcoin halving occurred, affecting the market
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
