import AppLayout from "@/components/layouts/app-layout";
import Hero from "@/components/home/hero";
import Intro from "@/components/home/intro";
import Guidelines from "@/components/home/guidelines";
import Criteria from "@/components/home/criteria";
import FAQS from "@/components/home/faqs";
import Timeline from "@/components/home/timeline";
import Rewards from "@/components/home/rewards";
import Partners from "@/components/home/partners";
import Privacy from "@/components/home/privacy";

export default function Home() {
  return (
    <main className={`bg-body-bg`}>
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
        <section className="border-b border-white/20">
          <Privacy />
        </section>
      </AppLayout>
    </main>
  );
}
