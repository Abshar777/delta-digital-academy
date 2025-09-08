import React from "react";

type Step = {
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: "ns-shape-3",
    title: "Cryptocurrency marketplace",
    description: "A cryptocurrency marketplace is a digital platform where users can buy",
  },
  {
    icon: "ns-shape-5",
    title: "Buy digital currency",
    description:
      "Buying digital currency has become an increasingly popular way for individuals and",
  },
  {
    icon: "ns-shape-35",
    title: "Generate income",
    description:
      "Generating income is the process of earning money through various means such as",
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div
        data-ns-animate=""
        data-delay="0.1"
        className="2xl:max-w-[1440px] max-w-[1290px] mx-5 text-center xl:mx-auto rounded-4xl py-16 lg:py-28 -z-0 bg-secondary dark:bg-background-7 overflow-hidden relative"
      >
        {/* background image  */}
        <div
          data-ns-animate=""
          data-delay="0.3"
          data-duration={2}
          data-spring=""
          data-direction="right"
          data-offset={50}
          style={{filter:"hue-rotate(235deg) !important"}}
          className="absolute max-[400px]:-right-[32%] max-[400px]:-top-[20%] -top-[31%] -right-[40%] sm:-right-[20%] md:-right-[28%] lg:-right-[20%] xl:-right-[12%] max-w-[530px] rotate-90 md:rotate-[108deg] select-none pointer-events-none"
        >
          <img
            style={{filter:"hue-rotate(235deg) !important"}}
            src="images/gradient/gradient-16.png"
            alt="how-to-work"
            className="w-full h-full hue-rotate-[235deg] object-cover"
          />
        </div>
        {/* Gradient  */}
        <div className="absolute bg-(image:--color-gradient-5) blur-[85px] -rotate-[50deg] z-10 left-[28%] -top-[22%] w-[108px] h-[982px]" />
        <div className="absolute bg-(image:--color-gradient-5) blur-[85px] -rotate-45 z-10 right-[8%] -top-[22%] w-[108px] h-[982px]" />

        {/* Getting Started */}
        <span
          data-ns-animate=""
          data-delay="0.3"
          className="badge badge-blur mb-3.5 md:mb-5 text-ns-yellow"
        >
          How it works
        </span>
        <h2
          data-ns-animate=""
          data-delay="0.4"
          className="text-white text-center font-normal mb-16 md:mb-[70px] max-[400px]:!max-w-[250px] max-[400px]:mx-auto max-md:max-w-[300px] max-md:mx-auto"
        >
          Refer to the easy
          <br className="hidden md:block" />
          <span className="text-primary-500">installation manual.</span>
        </h2>

        {/* Steps */}
        <div className="flex mx-auto max-md:flex-wrap max-md:items-center max-md:justify-center items-start md:items-center justify-start md:justify-center gap-y-10 gap-x-8 max-xl:px-8 max-[400px]:px-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="text-left"
              data-ns-animate=""
              data-duration="0.5"
              data-delay={0.5 + idx * 0.1}
            >
              <span className={`${step.icon} text-[52px] text-white`} />
              <h3 className="text-heading-6 md:text-heading-5 font-normal mt-4 mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-tagline-1 text-accent/60 max-w-[375px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
