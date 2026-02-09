


import React from 'react';
import 'simplebar-react/dist/simplebar.min.css'; // تحميل بدون render-blocking

import '../global.css';

const SITE_TITLE = ' الديرة';
const SITE_DESCRIPTION = 'الديرة'

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};


export const metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | الديرة"
  },
  description: SITE_DESCRIPTION,

  // openGraph: {
  //   title: SITE_TITLE,
  //   description: SITE_DESCRIPTION,
  //   url: "",
  //   siteName: SITE_TITLE,
  //   images: [
  //     {
  //       url: "/a",
  //       width: 512,
  //       height: 512,
  //     },
  //   ],
  //   locale: "ar_SA",
  //   type: "website",
  // },
  icons: {
    icon: [
      { url: "/logo/logo-deira.png" },
      { url: "/logo/logo-deira.png", type: "/logo/logo-deira.png" },
      { url: "/logo/logo-deira.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/logo/logo-deira.png", sizes: "180x180" }
    ]
  },
  manifest: "/logo/logo-deira.png"
};

export default function Layout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
        {auth}
      </body>
    </html>
  );
}

