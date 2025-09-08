"use client"
import Hero from "@/components/page-sections/hero";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import AboutSection from "@/components/page-sections/about-section";
import HowItWorks from "@/components/page-sections/howItWorks";
import Service from "@/components/page-sections/service";
import { Faqs } from "@/components/page-sections/faqs";
import  Testimonials  from "@/components/page-sections/testimonials";
import { TimeLine } from "@/components/page-sections/timeLine";
import { Blog } from "@/components/page-sections/blog";
import { Cta } from "@/components/page-sections/cta";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
 <>
 <Hero/>
 <AboutSection/>
 <HowItWorks/>
 <Service/>
 <Faqs/>
 <Testimonials/>
 <TimeLine/>
 <Blog/>
 {/* <Cta/> */}
 </>
  );
}
