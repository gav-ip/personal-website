import type { Metadata } from "next";
import { IBM_Plex_Mono} from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

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
      <body
        className={`${ibmPlexMono.variable} antialiased relative`}
      >
        
        <div className="flex flex-col min-h-screen w-full sm:max-w-4xl sm:mx-auto md:px-12">
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </div>
      </body> 
    </html>
  );
}
