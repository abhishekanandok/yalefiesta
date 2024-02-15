import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "yaleFiesta",
        template: "%s | yaleFiesta"
    },
    description: "yaleFiesta | A college fest Website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div>
                 <Navbar />
                    {children}
                 <Footer/>   
                </div>
            </body>
        </html>
    );
}
