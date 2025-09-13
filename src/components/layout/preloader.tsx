"use client";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  return (
    <div suppressHydrationWarning id="tt-page-transition">
      <div
        suppressHydrationWarning
        className="tt-ptr-overlay-top bg-background-8 tt-noise"
      ></div>
      <div
        suppressHydrationWarning
        className="tt-ptr-overlay-bottom bg-background-8 tt-noise"
      ></div>
      <div suppressHydrationWarning className="tt-ptr-preloader">
        <div suppressHydrationWarning className="tt-ptr-prel-content">
          <img src="/our/logo.png" className="tt-ptr-prel-image" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
