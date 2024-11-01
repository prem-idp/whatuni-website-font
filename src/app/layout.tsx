import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/headercomponents";
import Footer from "./components/footer/footercomponents";

import {interRegular, interSemibold, interBold, farroMedium, farroBold} from "@/app/utils/customfonts"

export const metadata: Metadata = {
  title: "Compare the Best University Degrees Courses UK | Whatuni",
  description: "Find courses at top universities. Free, trusted advice to help you decide which university is best for you. The UK’s biggest student reviews site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${interRegular.variable} ${interSemibold.variable} ${interBold.variable} ${farroMedium.variable} ${farroBold.variable} `}>
      <body>
        <main className="bg-neutral-50">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
