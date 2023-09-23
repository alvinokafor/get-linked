import React from "react";
import { VerticalPartnerBar, HorizontalPartnerBar } from "../assets/bar";
import Container from "../partials/container";
import AnimateY from "../partials/animate-y";

export default function Partners() {
  return (
    <div className="relative pb-32 pt-10 md:pt-28">
      <Container>
        <div>
          <div className="relative z-20 mb-10 mt-[72px] space-y-3 text-center font-body text-white md:mb-[91px]">
            <h1 className="font-heading text-xl font-bold md:text-[2rem]">
              Partners and Sponsors
            </h1>
            <p className="mx-auto text-[0.75rem] md:text-xs lg:w-[30%]">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors.
            </p>
          </div>

          <div className="relative z-20 rounded-md border border-primary py-8 lg:py-[144px]">
            <div className="hidden lg:block">
              <AnimateY staggerAmount={0.25}>
                <div className="flex items-center gap-12 rounded-md px-[180px]">
                  <div className=" basis-3/5">
                    <div className="relative left-10 pb-6">
                      <img src="./images/liberty-assured.png" alt="" />
                    </div>
                  </div>
                  <VerticalPartnerBar />
                  <div className="h-full w-full basis-3/5">
                    <div className=" pb-6">
                      <div>
                        <img src="./images/liberty-pay.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <VerticalPartnerBar />
                  <div className="w-full basis-3/5 ">
                    <div className=" pb-6">
                      <div>
                        <img src="./images/winwise.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateY>

              <div className="flex  gap-12 px-[180px]">
                <HorizontalPartnerBar paddingRight="pr-10" />

                <HorizontalPartnerBar />

                <HorizontalPartnerBar paddingLeft="pl-10" />
              </div>

              <AnimateY staggerAmount={0.35}>
                <div className="mt-6 flex items-center gap-12 rounded-md px-[180px]">
                  <div className=" basis-3/5">
                    <div className="mx-auto pb-6">
                      <img
                        className="relative left-8"
                        src="./images/whispersms.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <VerticalPartnerBar />

                  <div className="h-full w-full basis-3/5">
                    <div className=" pb-6">
                      <div>
                        <img src="./images/paybox.png" alt="" />
                      </div>
                    </div>
                  </div>

                  <VerticalPartnerBar />

                  <div className="w-full basis-3/5 ">
                    <div className=" pb-6">
                      <div>
                        <img src="./images/vizual-plus.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateY>
            </div>

            <img
              className="mx-auto px-[45px] lg:hidden"
              src="./images/Partner and Sponsors.png"
              alt=""
            />
          </div>
        </div>
      </Container>

      <img
        className="absolute left-48 top-[290px] h-[16px] w-[14px] animate-pulse lg:left-40 lg:top-80 lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute bottom-[130px] right-28 h-[12px] w-[10px] animate-pulse lg:bottom-[200px] lg:left-[750px] lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />
      <img
        className="absolute left-16 top-[250px] h-[16px] w-[14px] animate-pulse lg:left-[750px] lg:top-[500px] lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute -left-40 top-12 z-10 opacity-[.68] lg:-top-40"
        src="./images/lens-flare.png"
        alt=""
      />
      <img
        className="absolute right-0 top-[200px] z-10 lg:top-[500px]"
        src="./images/cut-flare.png"
        alt=""
      />
    </div>
  );
}
