"use client";
import React from "react";

// Social links data
const socialLinks = [
  { name: "Instagram", icon: "images/icons/instagram.svg" },
  { name: "Youtube", icon: "images/icons/youtube.svg" },
  { name: "LinkedIn", icon: "images/icons/linkedin.svg" },
  { name: "Dribbble", icon: "images/icons/dribbble.svg" },
  { name: "Behance", icon: "images/icons/behance.svg" },
];

// {
//   icon: <IoLogoWhatsapp />,
//   href: "https://wa.link/z7re0z"
// },  {
//   icon: <Mail />,
//   href: "mailto:web3DeCodeds@gmail.com"
// },
// {
//   icon: <Instagram />,
//   href: "https://www.instagram.com/web3_decoded?igsh=MXdtdzdxemJzM2swbA%3D%3D&utm_source=qr"
// },

// Footer menu data
const footerMenus = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "our-team-page-01.html" },
      { name: "Career", href: "career-page.html" },
      { name: "Case Studies", href: "case-study-page.html" },
      { name: "Contact Us", href: "contact-us-page.html" },
    ],
  },
  {
    title: "Social Links",
    links: [
      { name: "WhatsApp", href: "https://wa.link/z7re0z" },
      { name: "Email", href: "mailto:web3DeCodeds@gmail.com" },
      {
        name: "Instagram",
        href: "https://www.instagram.com/web3_decoded?igsh=MXdtdzdxemJzM2swbA%3D%3D&utm_source=qr",
      },
    ],
  },
  {
    title: "Courses",
    links: [
      {
        name: "Crypto Mania",
        href: "#",
      },
      {
        name: "Crypto Mastery",
        href: "#",
      },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-secondary dark:bg-background-9 rounded-t-3xl  relative overflow-hidden">
    {/* gradients */}
    {/* <figure    style={{filter:"hue-rotate(187deg) !important"}} className="pointer-events-none select-none absolute size-[550px] top-[-17%] md:top-[-25%] xl:top-[-32%] max-[376px]:right-[-83%] right-[-64%] md:right-[-30%] lg:right-[-19%] xl:right-[-9%] bg-top-right rotate-[-30deg]">
      <img
      style={{filter:"hue-rotate(187deg) !important"}}
        className="size-full hue-rotate-[187deg]  object-cover object-top"
        src="images/gradient/gradient-1.png"
        alt="Decorative gradient background"
      />
    </figure>
    <figure className="pointer-events-none select-none absolute size-[728px] md:size-[870px] bottom-[-33%] md:bottom-[-60%] xl:bottom-[-77%] left-[-83%] md:left-[-52%] lg:left-[-38%] xl:left-[-30%] 2xl:left-[-22%] min-[2559px]:!left-[-16%]">
      <img
        className="size-full object-bottom"
        src="images/gradient/gradient-2.png"
        alt="Decorative gradient background"
      />
    </figure> */}

    <div className="main-container px-5">
      <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">
        {/* Logo + socials */}
        <div className="col-span-12 xl:col-span-4">
          <div className="max-w-[150px]">
            <figure>
              <img src="/our/logo.png" alt="NextSass Logo" />
            </figure>
            <p className="text-accent/60 font-normal text-tagline-1 mt-4 mb-7">
              The leading platform for blockchain and cryptocurrency education.
            </p>
            <div className="flex items-center gap-3"></div>
          </div>
        </div>

        {/* Footer Menus */}
        <div className="col-span-12 xl:col-span-8 grid grid-cols-12 gap-x-0 gap-y-8">
          {footerMenus.map((menu, idx) => (
            <div key={menu.title} className="col-span-12 md:col-span-4">
              <div className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-ns-green">
                  {menu.title}
                </p>
                <ul className="sm:space-y-5 text-white/60 space-y-3">
                  {menu.links.map((link) => (
                    <li style={{color:""}} key={link.name}>
                      <a href={link.href} className="footer-link text-white/50">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-[26px] pb-[100px] text-center relative">
        <div className="footer-divider absolute top-0 left-0 right-0 w-0 origin-center mx-auto h-px bg-accent/10 dark:bg-stroke-4/10" />
        <p className="text-tagline-1 font-normal text-primary-50">
          Copyright ©Abshar777
        </p>
      </div>
    </div>

    {/* Theme Toggle */}
  </footer>
);
