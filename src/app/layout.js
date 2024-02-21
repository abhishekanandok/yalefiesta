import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "yaleFiesta | Purnea College of Engineering",
        template: "%s | yaleFiesta"
    },
    description: "Purnea College of Engineering fest & event Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className=" flex flex-col min-h-screen justify-between">
                 <Navbar />
                    {children}
                 <Footer/>   
                </div>
            </body>
        </html>
    );
}
