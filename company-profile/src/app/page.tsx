import Aboutus from "@/components/aboutus";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Welcome from "@/components/welcome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Page Home",
  openGraph: {},
};

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="w-full flex justify-center items-center mt-[50px]">
        <Welcome />
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
