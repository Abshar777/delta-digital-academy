"use client";
import React from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact Us", href: "contact-us-page.html", isButton: true },
];

const Nav = () => {
  return (
    <header>
      <div
      style={{backgroundColor:"#3d3c3c17"}}
        className="header-one opacity-0 py-2 px-6  rounded-full lp:!max-w-[1290px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] min-[500px]:max-w-[450px] min-[425px]:max-w-[375px] max-w-[320px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 top-5 flex items-center justify-between    backdrop-blur-[10px] dark:border-stroke-6 bg-accent dark:bg-[rgba(183, 180, 180, 0.04)] "
        data-ns-animate=""
        data-direction="up"
        data-offset={100}
      >
        {/* Logo */}
        <a href="index-2.html">
          <span className="sr-only">Home</span>
          <figure className="lg:max-w-[100px] lg:block hidden">
            <img
              src="/our/logo.png"
              alt="NextSaaS"
             
            />
          </figure>
          <figure className="max-w-[80px] lg:hidden block">
       
            <img
              src="/our/logo.png"
              alt="NextSaaS"
              className="w-full dark:block hidden"
            />
          </figure>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center">
            {navItems.map((item) =>
              item.isButton ? (
                <li key={item.name} className="py-2.5">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent"
                  >
                    {item.name}
                  </a>
                </li>
              ) : (
                <li
                  key={item.name}
                  className="relative group/nav cursor-pointer py-2.5"
                >
                  <a href={item.href} className="nav-item-link">
                    <span>{item.name}</span>
                    
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* CTA */}
        <div className="xl:flex hidden items-center justify-center">
          <a
            href="signup-page-01.html"
            className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white"
          >
            <span>Get started</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden block">
          <button className="nav-hamburger flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer">
            <span className="sr-only">Menu</span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <aside className="sidebar fixed top-0 right-0 w-full sm:w-1/2 translate-x-full transition-all duration-300 h-screen bg-white dark:bg-background-7 xl:hidden z-[999] scroll-bar">
        <div className="lg:p-9 sm:p-8 p-5 space-y-4">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between">
            <a href="index.html">
              <span className="sr-only">Home</span>
              <figure className="max-w-[44px]">
                <img
                  src="images/shared/logo.svg"
                  alt="NextSaaS"
                  className="w-full dark:hidden block"
                />
                <img
                  src="images/shared/logo-dark.svg"
                  alt="NextSaaS"
                  className="w-full dark:block hidden"
                />
              </figure>
            </a>
            <button className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative">
              <span className="sr-only">Close Menu</span>
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute" />
              <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute" />
            </button>
          </div>

          {/* Sidebar Nav */}
          <div className="h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10 scroll-bar">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="relative space-y-0">
                  <button className="sub-menu text-tagline-1 font-normal text-secondary/60 dark:text-accent/60 transition-all duration-200 py-3 border-b border-stroke-4 dark:border-stroke-6 w-full text-left flex items-center justify-between cursor-pointer">
                    <span>{item.name}</span>
                    {!item.isButton && (
                      <span className="sub-menu-arrow transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8 12L12 8L8 4"
                            className="stroke-secondary dark:stroke-accent"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Nav;
