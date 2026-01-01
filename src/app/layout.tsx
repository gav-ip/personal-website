import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gavin Abrigo",
  description: "Gavin Abrigo's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <div className="flex flex-col min-h-screen w-full sm:max-w-4xl sm:mx-auto md:px-12">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
