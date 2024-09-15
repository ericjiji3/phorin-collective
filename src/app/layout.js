import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Transition from "./Transition.js";
import { AnimatePresence } from 'framer-motion';
import IntroVideo from "@/components/IntroVideo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phorin Collective",
  description: "Knowledge is power.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <IntroVideo/>
        <Header/>

        <Transition>{children}</Transition>
       
        
      </body>
    </html>
  );
}
