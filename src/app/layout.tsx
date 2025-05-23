import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SideHustleStories",
  description: "Discover inspiring side hustle stories and practical guides",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
        <Script id="clean-fdprocessedid" strategy="afterInteractive">
          {`
            document.querySelectorAll('[fdprocessedid]').forEach(el => {
              el.removeAttribute('fdprocessedid');
            });
          `}
        </Script>
      </body>
    </html>
  );
}