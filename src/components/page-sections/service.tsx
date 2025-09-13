import React from "react";
import { FaBitcoin, FaChalkboardTeacher } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";
import { SiBlockchaindotcom, SiHiveBlockchain } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";

const Service = () => {

//   Comprehensive Curriculum
// From blockchain fundamentals to advanced DeFi strategies, our courses cover every aspect of the crypto ecosystem.

// In-Depth Crypto Insights
// Gain a deep understanding of cryptocurrencies, tokenomics, and blockchain use cases through detailed case studies and expert analysis.

// Expert Instructors
// Learn from blockchain developers, crypto fund managers, and Web3 pioneers with years of industry experience.

// Blockchain Certification
// Earn verifiable credentials stored on-chain to showcase your expertise to potential employers.

// Global Community
// Connect with fellow crypto enthusiasts, share insights, and build your network in our exclusive community.

// Real-Time Updates
// Stay ahead with course content that evolves with the market, reflecting the latest trends and technologies
  const services = [
    {
      title: "Comprehensive Curriculum",
      description: "From blockchain fundamentals to advanced DeFi strategies, our courses cover every aspect of the crypto ecosystem.",
   shape: <SiHiveBlockchain/>,
   bg:"dark:bg-background-6 text-white",
   delay:"0.6",
   textColor:"text-white"
    },
    {
      title: "In-Depth Crypto Insights",
      description: "Gain a deep understanding of cryptocurrencies, tokenomics, and blockchain use cases through detailed case studies and expert analysis.",
      shape: <FaBitcoin/>,
      bg:"dark:bg-ns-green text-black",
      delay:"0.7",
      textColor:"text-black"
    },
    {
      title: "Expert Instructors",
      description: "Learn from blockchain developers, crypto fund managers, and Web3 pioneers with years of industry experience.",
      shape: <FaChalkboardTeacher/>,
      bg:"dark:bg-background-6 text-white",
      delay:"0.8",
      textColor:"text-white"
    },
    
    {
      title: "Blockchain Certification",
      description: "Earn verifiable credentials stored on-chain to showcase your expertise to potential employers.",
      shape: <TbCertificate/>,
      bg:"dark:bg-ns-green text-black",
      delay:"0.9",
      textColor:"text-black"
    },
    {
      title: "Global Community",
      description: "Connect with fellow crypto enthusiasts, share insights, and build your network in our exclusive community.",
      shape: <RiUserCommunityFill/>,
      bg:"dark:bg-background-6 text-white",
      delay:"1.0",
      textColor:"text-white"
    },
    {
      title: "Real-Time Updates",
      description: "Stay ahead with course content that evolves with the market, reflecting the latest trends and technologies",
      shape: <FaBoltLightning/>,
      bg:"dark:bg-ns-green text-black",
      delay:"1.1",
      textColor:"text-black"
    },

    
  ];
  return (
    <section id="services" className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-14 md:mb-[70px]">
          <span
            data-ns-animate=""
            data-delay="0.3"
            className="badge badge-green mb-3.5 md:mb-5"
          >
            our services
          </span>
          <h2 data-ns-animate="" data-delay="0.4">
            Cutting-Edge Crypto Education
            <span className="text-primary-500 inline-block">solutions.</span>
          </h2>
          <p
            data-ns-animate=""
            data-delay="0.5"
            className="lg:max-w-[650px] mx-auto"
          >
            Our courses are designed by industry experts and blockchain pioneers
            to give you the most relevant and up-to-date knowledge in the
            rapidly evolving crypto space.
          </p>
        </div>
        {/* services */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-y-8 md:gap-[42px] sm:gap-6 mb-10 md:mb-14">
          {/* services card-1 */}
         {
          services.map((service, index) => (
            <div data-ns-animate="" data-delay={service.delay} className="">
            <div className={`bg-white ${service.bg} flex flex-col md:flex-row items-center gap-8 rounded-[20px] py-8 lg:py-14 px-5 md:px-8 overflow-hidden ${service.bg}`}>
              <div className="w-full md:w-1/2 lg:w-auto">
                <div className="inline-block mb-4 lg:mb-6">
                  <span className={` text-[52px] `}>{service.shape}</span>
                </div>
                <h3 className={`font-normal text-heading-6 xl:text-heading-5 md:text-heading-6 mb-2 ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`max-w-[275px] mb-6 md:mb-11 ${service.textColor}`}>
                  {service.description}
                </p>
                <div className="flex items-center justify-start">
                  <a
                    onClick={() => {
                      if(typeof window !== "undefined"){
                        window.location.href = "https://wa.link/z7re0z";
                      }
                    }}
                    className="btn btn-md btn-accent block md:inline-block dark:btn-white-dark w-full md:w-auto dark:hover:btn-accent hover:btn-secondary"
                  >
                    <span>Start Learning</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))
         }
          {/* services card-2 */}

          {/* services card-3 */}

       
        </div>
    
      </div>
    </section>
  );
};

export default Service;
