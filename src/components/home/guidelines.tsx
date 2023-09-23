import React from "react";
import Container from "../partials/container";
import AnimateY from "../partials/animate-y";

export default function Guidelines() {
  return (
    <div className="relative" id="overview">
      <Container>
        <div className="relative overflow-hidden">
          <div className="flex flex-col-reverse items-center gap-x-14 bg-[#140D27] py-16 text-white lg:flex-row">
            <div className="relative mt-6 space-y-4 text-center lg:text-left">
              <AnimateY staggerAmount={0.25}>
                <h2 className="mx-auto w-[50%] font-heading text-xl font-bold leading-10 md:text-[2rem] lg:mx-0">
                  Rules and {""}
                  <span className="text-primary">Guidelines</span>
                </h2>
                <p className="relative z-20 font-body text-sm leading-7 sm:text-base">
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you're a coding genius, a design maverick, or a concept
                  wizard, you'll have the chance to transform your ideas into
                  reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the
                  world, that's what we're all about!
                </p>
              </AnimateY>
              <img
                className="absolute inset-0 -left-4 -top-[400px] z-10 opacity-70 lg:-top-52 lg:left-0"
                src="./images/lens-flare.png"
                alt=""
              />
              <img
                className="absolute right-0 top-[60px] h-[10px] w-[8px] animate-pulse lg:top-[250px] lg:h-auto lg:w-auto"
                src="./images/hero-star.png"
                alt=""
              />
              <img
                className="absolute left-10 right-0 top-[380px] h-[10px] w-[8px] animate-pulse md:hidden lg:top-[250px] lg:h-auto lg:w-auto"
                src="./images/hero-star.png"
                alt=""
              />
            </div>

            <img src="./images/guidelines-img.png" alt="Guidelines Image" />
          </div>
          <img
            className="absolute top-48 h-[13px] w-[11px] animate-pulse lg:left-60 lg:h-auto lg:w-auto"
            src="./images/dim-star.png"
            alt=""
          />
        </div>
        <img
          className="absolute right-0 top-0 z-20 opacity-70"
          src="./images/cut-flare.png"
          alt=""
        />
      </Container>
    </div>
  );
}
