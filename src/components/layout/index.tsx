"use client";
import React, { useState, useEffect, Suspense } from "react";

import { Toaster } from "sonner";
import Nav from "../global/nav";
import { Footer } from "../global/footer";

const Indexlayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <Toaster position="top-center" />
      <Nav />
      <main suppressHydrationWarning>{children}</main>
      <Footer />
    </>
  );
};

export default Indexlayout;
