import Nav from "./components/nav";
import "./globals.css";
import { Inter } from "next/font/google";
import { connectToMongoDB } from "./lib/mongodb";

// for icons do not jump when loadin

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Books App",
  description: "Generated by Inga",
};

export default function RootLayout({ children }) {
  connectToMongoDB();
  return (
    <html lang="en" className="bg-page">
      <body className={inter.className} cz-shortcut-listen="false">
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />

          <div className="  mx-auto flex-grow overflow-y-auto  text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
