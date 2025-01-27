import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "MD SHEHAB UDDIN - FULL STACK WEB DEVELOPER",
  description: "Full Stack Web Devloper React.js | Next.js | Redux.js | Tailwind CSS | Node.js | Express.js | MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/linux.png" type="image/png" />
      </head>
      <body
        className={` light antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
