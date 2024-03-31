import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: "300" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Phoenix Bot",
  description: "The Ultimate Security Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
