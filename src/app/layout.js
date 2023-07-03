"use client";
import Header from "@/components/Header";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";

// export const metadata = {
//   title: "Ecommerce UI",
//   description: "this is for learning nextjs",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <Header />
        <body>{children}</body>
      </Provider>
    </html>
  );
}
