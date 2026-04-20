import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LayoutGroup } from "framer-motion";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TECH.UTS | Future of AI",
  description: "Advanced Digital Magazine",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={jakarta.className}>
        <Navbar />
        <div className="aura-bg">
          <div className="aura-blob top-[-10%] left-[-10%]" />
          <div className="aura-blob bottom-[-10%] right-[-10%] [animation-delay:5s] !bg-indigo-500/10" />
        </div>
        <SmoothScrolling>
          <LayoutGroup>
            {children}
          </LayoutGroup>
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}