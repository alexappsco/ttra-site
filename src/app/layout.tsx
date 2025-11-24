
import React from 'react';

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // اختياري — أو احذفها لتحسين أكثر
};


export const metadata = {
  title: 'Isthwath | منصة استحواذ',
  description: `استحواذ هي منصة سعودية رائدة تمكّنك من بيع وشراء الأنشطة التجارية والمشاريع الصغيرة بكل سهولة وشفافية.
تم تصميم المنصة لتكون نقطة التقاء بين رواد الأعمال، المستثمرين، وأصحاب المشاريع الباحثين عن فرص جاهزة للانطلاق أو التوسع داخل السوق السعودي.

من خلال تطبيق استحواذ - Isthwath، يمكنك إدارة عملية البيع أو الشراء بشكل متكامل داخل بيئة رقمية مرنة وآمنة.`,
  openGraph: {
    url: 'https://isthwath.com/ar/',
    title: 'Isthwath | منصة استحواذ',
    description: `استحواذ هي منصة سعودية رائدة تمكّنك من بيع وشراء الأنشطة التجارية والمشاريع الصغيرة بكل سهولة وشفافية.`,
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/logo/logo_blue.svg' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-96x96.png' },
      { rel: 'apple-touch-icon', sizes: '32x12', url: '/favicon/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/logo/logo_blue.svg' },
    ],
    shortcut: { url: '/logo/logo_blue.svg' },
  },
};


export default function Layout({ children, auth }: { children: React.ReactNode; auth: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* تحسين LCP عبر تحميل الخطوط مسبقًا */}
        <link
          rel="preload"
          href="/fonts/DINNextLTArabic-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/DINNextLTArabic-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        {auth}
      </body>
    </html>
  );
}
// export const metadata = {
//   title: 'Isthwath | منصة استحواذ',
//  description: `استحواذ هي منصة سعودية رائدة تمكّنك من بيع وشراء الأنشطة التجارية والمشاريع الصغيرة بكل سهولة وشفافية.
// تم تصميم المنصة لتكون نقطة التقاء بين رواد الأعمال، المستثمرين، وأصحاب المشاريع الباحثين عن فرص جاهزة للانطلاق أو التوسع داخل السوق السعودي.

// من خلال تطبيق استحواذ - Isthwath، يمكنك إدارة عملية البيع أو الشراء بشكل متكامل داخل بيئة رقمية مرنة وآمنة.`,
//   openGraph: {
//     url: 'https://isthwath.com/ar/',
//     title: 'Isthwath | منصة استحواذ',
//  description: `استحواذ هي منصة سعودية رائدة تمكّنك من بيع وشراء الأنشطة التجارية والمشاريع الصغيرة بكل سهولة وشفافية.
// تم تصميم المنصة لتكون نقطة التقاء بين رواد الأعمال، المستثمرين، وأصحاب المشاريع الباحثين عن فرص جاهزة للانطلاق أو التوسع داخل السوق السعودي.

// من خلال تطبيق استحواذ - Isthwath، يمكنك إدارة عملية البيع أو الشراء بشكل متكامل داخل بيئة رقمية مرنة وآمنة.`,
//   },
//   manifest: '/manifest.json',
//   icons: {
//     icon: [
//       { rel: 'icon', url: '/logo/logo_blue.svg' },
//       { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-96x96.png' },
//       { rel: 'apple-touch-icon', sizes: '32x12', url: '/favicon/apple-touch-icon.png' },
//     ],
//     shortcut: { url: '/logo/logo_blue.svg' },
//   },
// // };