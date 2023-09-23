import React from "react";
import Container from "../partials/container";
import AnimateX from "../partials/animate-x";
import AnimateY from "../partials/animate-y";

export default function Intro() {
  return (
    <Container>
      <div className="relative">
        <div className="flex flex-col items-center gap-x-24 bg-[#140D27] py-16 text-white lg:flex-row">
          <img
            className="hidden lg:block"
            src="./images/intro-img.png"
            alt=""
          />

          <img className="lg:hidden" src="./images/intro-img2.png" alt="" />

          <AnimateY staggerAmount={0.35}>
            <div className="mt-6 space-y-4 text-center lg:text-left">
              <h2 className="mx-auto w-[90%] font-heading text-xl font-bold leading-10 md:text-[2rem] lg:mx-0 lg:w-3/4">
                Introduction to getlinked{" "}
                <span className="text-primary">tech Hackathon 1.0</span>
              </h2>
              <p className="font-body text-sm leading-7 sm:text-base">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </AnimateY>
        </div>
        <img
          className="absolute top-28 h-[13px] w-[11px] animate-pulse lg:h-auto lg:w-auto"
          src="./images/purple-star1.png"
          alt=""
        />
        <img
          className="absolute right-0 top-[410px] h-[10px] w-[8px] animate-pulse lg:top-[220px] lg:h-auto lg:w-auto"
          src="./images/purple-star2.png"
          alt=""
        />
      </div>
    </Container>
  );
}
