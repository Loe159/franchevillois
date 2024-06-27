import AboutSectionOne from "@/components/About/AboutSectionOne";
import Story from "@/components/About/Story";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Shop from "src/components/Shop";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Actus from "@/components/Actus";

export const metadata: Metadata = {
  title: "FC Franchevillois",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Actus />
      <Story />
      <Shop />
      <Brands />
    </>
  );
}
