import React from "react";
import Container from "../partials/container";
import AnimateY from "../partials/animate-y";

export default function Rewards() {
  return (
    <div className="relative pb-[149px] pt-[74px]">
      <Container>
        <div className="flex flex-col items-center gap-x-9 font-body lg:flex-row">
          <div className="z-20 mb-10 block space-y-4 text-center text-white lg:hidden">
            <h1 className="mx-auto w-[40%] font-heading text-xl font-bold md:text-[2rem]">
              Prize and <span className="text-primary">Rewards</span>{" "}
            </h1>
            <p className="text-[0.75rem] md:text-sm">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <img
            className="z-20 mb-24 sm:h-[444px] sm:w-[448px] lg:mb-0 2xl:h-auto 2xl:w-auto"
            src="./images/rewards-img.png"
            alt="Rewards"
          />

          <div className="z-20 text-white">
            <AnimateY staggerAmount={0.25}>
              <div className="mb-[220px] hidden space-y-4 pl-28 lg:block">
                <h1 className="w-2/5 font-heading text-[2rem] font-bold">
                  Prize and <span className="text-primary">Rewards</span>{" "}
                </h1>
                <p className="w-4/5">
                  Highlight of the prizes or rewards for winners and for
                  participants.
                </p>
              </div>
            </AnimateY>

            <div className="flex gap-x-3.5 lg:gap-x-8">
              <AnimateY staggerAmount={0.35}>
                <div className="relative text-center text-[2rem] font-bold">
                  <img
                    className="absolute -top-12 left-0 h-[86px] w-[86px] lg:-top-24 lg:left-4 lg:h-[180px] lg:w-[180px]"
                    src="./images/silver-medal.png"
                    alt="Silver Medal"
                  />
                  <div className="rounded-lg border border-primary bg-primary/[.12] px-2 pb-8 pt-12 lg:px-[26px] lg:pb-9 lg:pt-28">
                    <h1 className="text-[0.75rem] font-semibold lg:text-2xl">
                      2nd
                    </h1>
                    <h2 className="text-[0.75rem] font-semibold lg:text-2xl">
                      Runner
                    </h2>

                    <h3 className="mt-[14px] text-sm text-primary lg:mt-6 lg:text-[2rem]">
                      N300,000
                    </h3>
                  </div>
                </div>
              </AnimateY>

              <AnimateY staggerAmount={0.45}>
                <div className="relative text-center text-[0.75rem] font-bold lg:text-[2rem]">
                  <div className="absolute -left-5 -top-20 h-[125px] w-[125px] lg:-left-11 lg:-top-[170px] lg:h-[296px] lg:w-[296px]">
                    <img
                      className="object-cover"
                      src="./images/gold-medal.png"
                      alt="Gold Medal"
                    />
                  </div>
                  <div className="rounded-lg border border-[#903AFF] bg-[#903AFF]/[.12] px-2 pb-6 pt-16  lg:px-6 lg:pb-9 lg:pt-[149px]">
                    <h1>1st</h1>
                    <h2 className="text-[0.75rem] font-semibold lg:text-2xl">
                      Runner
                    </h2>

                    <h3 className="mt-[14px] text-sm text-primary lg:mt-10 lg:text-[2rem]">
                      N400,000
                    </h3>
                  </div>
                </div>
              </AnimateY>

              <AnimateY staggerAmount={0.55}>
                <div className="relative text-center text-[2rem] font-bold">
                  <img
                    className="absolute -top-12 left-0 h-[86px] w-[86px] lg:-top-24 lg:left-4 lg:h-[180px] lg:w-[180px]"
                    src="./images/bronze-medal.png"
                    alt="Bronze Medal"
                  />
                  <div className="rounded-lg border border-primary bg-primary/[.12] px-2 pb-8 pt-12 lg:px-[26px] lg:pb-9 lg:pt-28">
                    <h1 className="text-[0.75rem] font-semibold lg:text-2xl">
                      3rd
                    </h1>
                    <h2 className="text-[0.75rem] font-semibold lg:text-2xl">
                      Runner
                    </h2>

                    <h3 className="mt-[14px] text-sm text-primary lg:mt-6 lg:text-[2rem]">
                      N150,000
                    </h3>
                  </div>
                </div>
              </AnimateY>
            </div>
          </div>
        </div>
      </Container>
      <img
        className="absolute -left-14 top-12 z-10 lg:top-0"
        src="./images/lens-flare.png"
        alt=""
      />
      <img
        className="absolute right-0 top-60 z-10"
        src="./images/cut-flare.png"
        alt=""
      />
      <img
        className="absolute right-20 top-[100px] block h-[16px] w-[14px] animate-pulse lg:left-60 lg:top-20 lg:hidden lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute left-10 top-10 h-[16px] w-[14px] animate-pulse lg:left-60 lg:top-20 lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute bottom-20 right-28 h-[12px] w-[10px] animate-pulse lg:left-[600px] lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />
      <img
        className="absolute right-24 top-[200px] hidden h-[12px] w-[10px] animate-pulse lg:right-24 lg:top-[300px] lg:block lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />
      <img
        className="absolute right-24 top-[500px] h-[12px] w-[10px] animate-pulse lg:right-[280px] lg:top-[820px] lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />

      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
