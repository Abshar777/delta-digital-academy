"use client";
import React, { useState, useEffect, Suspense } from "react";

import { Toaster } from "sonner";
import Nav from "../global/nav";
import { Footer } from "../global/footer";
import Preloader from "./preloader"

const Indexlayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
    <Preloader/>
      <Toaster position="bottom-right" richColors/>
      <Nav />
      <main suppressHydrationWarning>{children}</main>
      <Footer />
    </>
  );
};

export default Indexlayout;
