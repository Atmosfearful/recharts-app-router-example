import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.layoutContainer}>
          <nav className={styles.desktopNav}>
            <ul>
              <li>
                <Link href="/">Overview</Link>
              </li>
              <li>
                <Link href="/on-chain-off-chain">Off vs On-chain</Link>
              </li>
              <li>
                <Link href="/supply">Supply</Link>
              </li>
              <li>
                <Link href="/trends">Retirement trends</Link>
              </li>
              <li>
                <Link href="/token-details">Token details</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.contentContainer}>{children}</div>
        </div>
      </body>
    </html>
  );
}