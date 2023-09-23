import React from "react";
import Container from "@/components/partials/container";
import AppLayout from "@/components/layouts/app-layout";
import ContactInfo from "@/components/contact/contact-info";
import ContactForm from "@/components/contact/contact-form";
import AnimateY from "@/components/partials/animate-y";

export default function Contact() {
  return (
    <AppLayout title="Contact Us">
      <div className="relative">
        <Container>
          <AnimateY staggerAmount={0.35}>
            <section className="relative z-20 flex flex-col gap-y-[30px] py-[140px] lg:flex-row">
              <ContactInfo />

              <ContactForm />
            </section>
          </AnimateY>
        </Container>
      </div>
      <img
        className="absolute -left-20 bottom-[600px] z-10 opacity-[.68] lg:-bottom-40 lg:-left-60"
        src="./images/lens-flare.png"
        alt=""
      />
      <img
        className="absolute right-0 top-[200px] z-10 lg:top-[500px]"
        src="./images/cut-flare.png"
        alt=""
      />
    </AppLayout>
  );
}
