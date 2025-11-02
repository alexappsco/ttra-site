import React from 'react';

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export const metadata = {
  title: 'Istihwaz',
  description:
    'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style.',
  keywords: 'react,material,kit,application,dashboard,admin,template',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-96x96.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
    ],
    shortcut: { url: '/favicon/favicon.ico' },
  },
};

export default function Layout({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        {auth}
      </body>
    </html>
  );
}
