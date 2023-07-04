import Header from "@/components/Header";
import "./globals.css";
import { Providers } from "@/store/Provider";

export const metadata = {
  title: "Ecommerce UI",
  description: "this is for learning nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <Header />
        <body>{children}</body>
      </Providers>
    </html>
  );
}
