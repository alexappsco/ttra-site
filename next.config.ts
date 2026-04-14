// import { NextConfig } from 'next';
// const createNextIntlPlugin = require('next-intl/plugin');

// const withNextIntl = createNextIntlPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig: NextConfig = {
//   experimental: {
//     serverActions: {
//       bodySizeLimit: '10mb',
//     },
//     // Enable optimized font loading
//     optimizePackageImports: ['@mui/material', '@mui/icons-material', '@mui/lab'],
//   },
//   trailingSlash: true,
//   eslint: {
//     dirs: ['src'],
//   },
//   modularizeImports: {
//     '@mui/icons-material': {
//       transform: '@mui/icons-material/{{member}}',
//     },
//     '@mui/material': {
//       transform: '@mui/material/{{member}}',
//     },
//     '@mui/lab': {
//       transform: '@mui/lab/{{member}}',
//     },
//   },
//   // Enable compression for CSS and JS
//   compress: true,
//   // Optimize images
//   images: {
//     formats: ['image/avif', 'image/webp'],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//   },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };

// module.exports = withNextIntl(nextConfig);
import { NextConfig } from 'next';
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
    // Enable optimized font loading
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
    ],
  },

  trailingSlash: true,

  eslint: {
    dirs: ['src'],
  },

  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  },

  // Enable compression for CSS and JS
  compress: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withNextIntl(nextConfig);