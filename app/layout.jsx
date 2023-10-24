import { Inter } from "next/font/google";
import "./globals.css";
import StoreReduxProviders from "@/providers/redux-toolkit.providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tic Tac Toe",
  description: "A simple tic tac toe game with Next.js and Redux Toolkit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StoreReduxProviders>{children}</StoreReduxProviders>
      </body>
    </html>
  );
}
