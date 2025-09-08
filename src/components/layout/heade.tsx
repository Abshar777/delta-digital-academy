"use client";
import React, { useEffect, useState } from "react";

const Heade = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <head>
      <>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="NextSaaS - Modern HTML template collection with 35+ home page variations for SaaS businesses, startups, and web applications. Features responsive design, authentication pages, pricing, blog, and more with Tailwind CSS and Vite."
        />
        <meta name="keywords" content="Delta-blockchain" />
        <meta name="author" content="Delta-blockchain" />
        

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>Delta-blockchain</title>
        <link rel="stylesheet" href="/assets/main.css" />
      </>
    </head>
  );
};

export default Heade;
