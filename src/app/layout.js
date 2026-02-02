import { Comfortaa, Shantell_Sans } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "@/components/BackgroundMusic";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
const shantell = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Happy Birthday!",
  description: "Celebrate your day with joy and happiness!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${shantell.className} antialiased bg-background select-none`}
      >
      <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}
