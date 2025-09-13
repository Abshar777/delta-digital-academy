import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Heade from "@/components/layout/heade";
import Scripts from "@/components/layout/scripts";
import Nav from "@/components/global/nav";
import Indexlayout from "@/components/layout";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Delta-blockchain | Learn Blockchain, Crypto, Web3 & DeFi Courses",
  description:
  "Master Web3 with Web3 DeCoded. Learn blockchain, crypto trading, NFTs, DeFi, and smart contracts through beginner to advanced online courses designed by industry experts.",
  keywords: [
    "Web3 courses",
    "learn blockchain",
    "crypto trading course",
    "cryptocurrency for beginners",
    "smart contract course",
    "DeFi training",
    "NFT 2024",
    "blockchain education",
    "Web3 tutorial",
    "crypto investing",
    "Best blockchain courses for beginners in 2025",
    "Free Web3 courses with certificates",
    "Learn DeFi with Web3Decoded",
    "What is Web3 and how do I learn it?",
    "How to start trading crypto as a beginner",
    "Best online platforms to learn blockchain",
    "Web3 roadmap for non-developers",
    "Learn crypto without coding",
    "Courses for DeFi, NFTs, and smart contracts",
    "How to master Web3 development",
    "Blockchain and crypto courses for students",
    "Ethereum development",
    "Smart contract training",
    "Decentralized applications (dApps)",
    "Web3 job ready program",
    "DAO governance explained",
    "Tokenomics crash course",
    "NFT creation guide",
    "Web3 career guide",
    "Cryptocurrency regulations",
    "Blockchain use cases in real life",
    "Web3Decoded.tech crypto course",
    "Web3Decoded blockchain training",
    "Master crypto uprising Web3Decoded",
    "Web3Decoded expert crypto guides",
    "Master the crypto uprising",
    "Unlock crypto secrets course",
    "Beginner-friendly blockchain training",
    "Intermediate crypto education",
    "Award-winning crypto learning platform",
    "Industry-led blockchain courses",
    "Up-to-date crypto learning",
    "Cutting-edge Web3 curriculum"
  ]
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      className="light lenis lenis-smooth"
      lang="en"
    >
      <Heade />
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4YQPNX68EQ"  
          strategy="afterInteractive"  
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', 2024);

            gtag('config', 'G-4YQPNX68EQ');  
          `}  
        </Script>  

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '931471225017986');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=931471225017986&ev=PageView&noscript=1"
          />
        </noscript>
      <body
        suppressHydrationWarning
        className="bg-background-2 dark dark:bg-background-5 tt-transition tt-lightmode-on tt-noise tt-magic-cursor tt-smooth-scroll"
      >
        <Indexlayout>{children}</Indexlayout>
        <Scripts />
      </body>
    </html>
  );
}
