import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  }  ,
  /* config options here */
  // trailingSlash: true,
  // output: 'export',
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     }
  //   }
  //   return config
  // },
  typescript: { 
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
