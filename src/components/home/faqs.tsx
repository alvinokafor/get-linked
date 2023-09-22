import React from "react";
import Container from "../partials/container";
import FaqItem from "./faq-item";
import { faqs } from "@/utils/data";

export default function FAQS() {
  return (
    <div className="">
      <Container>
        <div className="relative">
          <div className="bg-[#140D27] py-16 flex flex-col lg:flex-row text-white items-center gap-x-24">
            <div className="space-y-4 text-center lg:text-left mt-6">
              <h2 className="text-xl w-[90%] mx-auto leading-10 lg:mx-0 md:text-[2rem] lg:w-3/4 font-bold font-heading">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="font-body pb-11 lg:pb-[68px] pt-4 leading-7 lg:w-4/5 text-[12px] sm:text-sm">
                We got answers to the questions that you might want to ask about{" "}
                <strong>getlinked Hackathon 1.0</strong>
              </p>

              <div className="space-y-6">
                {faqs.map((faq) => (
                  <FaqItem key={faq.id} {...faq} />
                ))}
              </div>
            </div>

            <img
              className="sm:w-[541px] mt-16 lg:mt-0 sm:h-[605px] 2xl:w-auto 2xl:h-auto"
              src="./images/faq-img.png"
              alt=""
            />
          </div>
          <img
            className="absolute h-[13px] w-[11px] lg:h-auto lg:w-auto -left-10 top-20 animate-pulse"
            src="./images/purple-star1.png"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}
