import React from "react";
import Container from "../partials/container";
import Check from "../assets/check";
import AnimateY from "../partials/animate-y";

export default function Privacy() {
  return (
    <div className="relative pb-20 pt-[71px] font-body lg:pb-40 lg:pt-24">
      <Container>
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-white lg:flex-row lg:justify-between lg:text-left">
          <div className="basis-1/2">
            <div className="relative space-y-4">
              <AnimateY staggerAmount={0.25}>
                <h1 className="mx-auto w-[80%] font-heading text-xl font-bold leading-10 md:text-[2rem] lg:mx-0 lg:w-[60%]">
                  Privacy Policy and <span className="text-primary">Terms</span>{" "}
                </h1>
              </AnimateY>

              <AnimateY staggerAmount={0.35}>
                <p className="font-body text-sm text-white/75">
                  Last updated on September 12, 2023
                </p>
              </AnimateY>

              <img
                className="absolute right-0 top-52 h-[13px] w-[11px] animate-pulse lg:top-32 lg:h-auto lg:w-auto"
                src="./images/purple-star1.png"
                alt=""
              />
              <img
                className="absolute -top-10 right-10 h-[10px] w-[8px] animate-pulse lg:-top-10 lg:left-80 lg:h-auto lg:w-auto"
                src="./images/dim-star.png"
                alt=""
              />
            </div>

            <AnimateY staggerAmount={0.45}>
              <p className="mt-[30px] text-[0.75rem] leading-[188%] lg:w-[428px] lg:text-base">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </AnimateY>

            <AnimateY staggerAmount={0.55}>
              <div className="relative mt-[69px] flex flex-col justify-center rounded-md border border-primary bg-[#D9D9D9]/[0.03] px-3 pb-[50px] pt-[60px] text-[0.75rem] lg:px-[72px] lg:text-base">
                <p className="leading-[216%]">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>

                <div className="mt-6 text-left">
                  <h2 className="font-bold leading-[216%] text-primary">
                    Licensing Policy
                  </h2>
                  <p className="text-[0.75rem] font-bold leading-[216%] lg:text-sm">
                    Here are terms of our Standard License:
                  </p>
                </div>

                <div className="mt-[18px] space-y-[18px] text-left">
                  <div className="flex items-start gap-3.5">
                    <Check />
                    <p>
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <Check />
                    <p>
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </p>
                  </div>
                </div>

                <button className="z-30 mx-auto mt-5 rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 text-center transition-all duration-150 hover:border-[#903AFF] hover:bg-none">
                  Read More
                </button>

                <img
                  className="absolute -left-10 top-[500px] h-[13px] w-[11px] animate-pulse lg:top-[350px] lg:h-auto lg:w-auto"
                  src="./images/purple-star1.png"
                  alt=""
                />
              </div>
            </AnimateY>
          </div>

          <div className="mt-12 basis-1/2 lg:mt-0">
            <img
              className="z-20 mb-24 sm:h-[852px] sm:w-[513px] lg:mb-0 2xl:h-auto 2xl:w-auto"
              src="./images/privacy-img.png"
              alt="Rewards"
            />
          </div>
        </div>
      </Container>

      <img
        className="absolute -left-20 bottom-[600px] z-10 opacity-[.68] lg:-bottom-40 lg:-left-60"
        src="./images/lens-flare.png"
        alt=""
      />
    </div>
  );
}
