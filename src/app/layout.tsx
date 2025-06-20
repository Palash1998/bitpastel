import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Bitpastel',
  description: 'This is a Bitpastel website Create By Palash',
  icons: {
    icon: [
      { url: '/img_bitpastellogo02300dpi_3.png', type: 'image/x-icon' }
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        {/* <script type="module" src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fpalashsa3382back.builtwithrocket.new&_be=https%3A%2F%2Fapplication.rocket.new&_v=0.1.4"> */}
        {/* </script> */}
</body>
    </html>
  );
}
