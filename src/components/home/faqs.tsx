import React from "react";
import Container from "../partials/container";
import FaqItem from "./faq-item";
import { faqs } from "@/utils/data";
import AnimateY from "../partials/animate-y";

export default function FAQS() {
  return (
    <div className="" id="faqs">
      <Container>
        <div className="relative">
          <div className="flex flex-col items-center gap-x-24 bg-[#140D27] py-16 text-white lg:flex-row">
            <AnimateY staggerAmount={0.25}>
              <div className="mt-6 space-y-4 text-center lg:text-left">
                <h2 className="mx-auto w-[90%] font-heading text-xl font-bold leading-10 md:text-[2rem] lg:mx-0 lg:w-3/4">
                  Frequently Asked{" "}
                  <span className="text-primary">Questions</span>
                </h2>
                <p className="pb-11 pt-4 font-body text-[12px] leading-7 sm:text-sm lg:w-4/5 lg:pb-[68px]">
                  We got answers to the questions that you might want to ask
                  about <strong>getlinked Hackathon 1.0</strong>
                </p>

                <div className="space-y-6">
                  {faqs.map((faq) => (
                    <FaqItem key={faq.id} {...faq} />
                  ))}
                </div>
              </div>
            </AnimateY>

            <img
              className="mt-16 sm:h-[605px] sm:w-[541px] lg:mt-0 2xl:h-auto 2xl:w-auto"
              src="./images/faq-img.png"
              alt=""
            />
          </div>
          <img
            className="absolute -left-10 top-20 h-[13px] w-[11px] animate-pulse lg:h-auto lg:w-auto"
            src="./images/purple-star1.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}
