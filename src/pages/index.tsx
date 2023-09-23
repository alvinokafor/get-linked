import { Montserrat, Unica_One } from "next/font/google";
import localFont from "next/font/local";
import AppLayout from "@/components/layouts/app-layout";
import Container from "@/components/partials/container";
import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Guidelines from "@/components/home/guidelines";
import Criteria from "@/components/home/criteria";
import FAQS from "@/components/home/faqs";
import Timeline from "@/components/home/timeline";
import Rewards from "@/components/home/rewards";
import Partners from "@/components/home/partners";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--monteserrat-font",
});
const unicaOne = Unica_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--unicaOne-font",
});
const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Variable.woff2",
  variable: "--clashDisplay-font",
});
const typoHoop = localFont({
  src: "../../public/fonts/Typo Hoop_Regular_Demo.otf",
  variable: "--typoHoop-font",
});

export default function Home() {
  return (
    <main
      className={`bg-body-bg ${clashDisplay.variable} ${typoHoop.variable} ${unicaOne.variable} ${montserrat.variable}`}
    >
      <AppLayout>
        <section className="border-b border-white/20">
          <Hero />
        </section>
        <section className="border-b border-white/20">
          <Intro />
        </section>
        <section className="border-b border-white/20">
          <Guidelines />
        </section>
        <section className="border-b border-white/20">
          <Criteria />
        </section>
        <section className="border-b border-white/20">
          <FAQS />
        </section>
        <section className="border-b border-white/20">
          <Timeline />
        </section>
        <section className="border-b border-white/20">
          <Rewards />
        </section>
        <section className="border-b border-white/20">
          <Partners />
        </section>
      </AppLayout>
    </main>
  );
}
