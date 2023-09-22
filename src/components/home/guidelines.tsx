import React from "react";
import Container from "../partials/container";

export default function Guidelines() {
  return (
    <div className="relative">
      <Container>
        <div className="relative overflow-hidden">
          <div className="bg-[#140D27] py-16 flex flex-col-reverse lg:flex-row text-white items-center gap-x-14">
            <div className="space-y-4 relative text-center lg:text-left mt-6">
              <h2 className="text-xl w-[50%] mx-auto leading-10 lg:mx-0 md:text-[2rem] font-bold font-heading">
                Rules and {""}
                <span className="text-primary">Guidelines</span>
              </h2>
              <p className="font-body relative z-20 leading-7 text-sm sm:text-base">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
              <img
                className="absolute z-10 inset-0 -left-4 lg:left-0 -top-[400px] lg:-top-52 opacity-70"
                src="./images/lens-flare.png"
                alt=""
              />
              <img
                className="absolute h-[10px] w-[8px] lg:h-auto lg:w-auto top-[60px] lg:top-[250px] right-0 animate-pulse"
                src="./images/hero-star.png"
                alt=""
              />
              <img
                className="md:hidden absolute h-[10px] w-[8px] lg:h-auto lg:w-auto left-10 top-[380px] lg:top-[250px] right-0 animate-pulse"
                src="./images/hero-star.png"
                alt=""
              />
            </div>
            <img src="./images/guidelines-img.png" alt="Guidelines Image" />
          </div>
          <img
            className="absolute h-[13px] w-[11px] lg:h-auto lg:w-auto lg:left-60 top-48 animate-pulse"
            src="./images/dim-star.png"
            alt=""
          />
        </div>
        <img
          className="absolute z-20 top-0 right-0 opacity-70"
          src="./images/cut-flare.png"
          alt=""
        />
      </Container>
    </div>
  );
}
