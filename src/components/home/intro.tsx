import React from "react";
import Container from "../partials/container";

export default function Intro() {
  return (
    <Container>
      <div className="relative">
        <div className="bg-[#140D27] py-16 flex flex-col lg:flex-row text-white items-center gap-x-24">
          <img
            className="hidden lg:block"
            src="./images/intro-img.png"
            alt=""
          />
          <img className="lg:hidden" src="./images/intro-img2.png" alt="" />

          <div className="space-y-4 text-center lg:text-left mt-6">
            <h2 className="text-xl w-[90%] mx-auto leading-10 lg:mx-0 md:text-[2rem] lg:w-3/4 font-bold font-heading">
              Introduction to getlinked{" "}
              <span className="text-primary">tech Hackathon 1.0</span>
            </h2>
            <p className="font-body leading-7 text-sm sm:text-base">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        <img
          className="absolute h-[13px] w-[11px] lg:h-auto lg:w-auto top-28 animate-pulse"
          src="./images/purple-star1.png"
          alt=""
        />
        <img
          className="absolute h-[10px] w-[8px] lg:h-auto lg:w-auto top-[410px] lg:top-[220px] right-0 animate-pulse"
          src="./images/purple-star2.png"
          alt=""
        />
      </div>
    </Container>
  );
}
