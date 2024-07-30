import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar"
import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Carousell from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between ${inter.className}`}
    ><NavBar />
      

      <div>
        <Carousell />
      </div>

      <div className="grid grid-cols-3 mx-auto">
      <Card image = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"/>
      <Card image = "https://imgnike-a.akamaihd.net/1300x1300/022595O6A10.jpg"/>
      <Card image = "https://imgnike-a.akamaihd.net/1300x1300/022595O6A10.jpg"/>
      
      </div>

      <div >
       <Footer />
      </div>
    </main>
  );
}
