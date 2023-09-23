import React, { useEffect, useRef, useState } from "react";
import Container from "../partials/container";
import { Curve, CurveMobile } from "../assets/curve";
import AnimateX from "../partials/animate-x";
import AnimateY from "../partials/animate-y";

export default function Hero() {
  const [timerHours, setHours] = useState<string | number>("00");
  const [timerMins, setMins] = useState<string | number>("00");
  const [timerSeconds, setSeconds] = useState<string | number>("00");

  let interval = useRef<number>();

  const startTimer = () => {
    const countdownDate = new Date("September 30, 2023 00:00:00").getTime();
    //@ts-ignore
    interval = setInterval(() => {
      const now = new Date().getTime();
      const timeBetween = countdownDate - now;

      const hours = Math.floor(
        (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

      if (timeBetween < 0) {
        clearInterval(interval.current);
      } else {
        setHours(hours);
        setMins(mins);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <Container>
      <div className="relative pt-8 font-body text-white">
        <img
          className="absolute left-14 top-[90px] h-[12px] w-[10px] animate-pulse sm:h-auto sm:w-auto lg:top-16"
          src="./images/hero-star.png"
          alt=""
        />
        <AnimateY staggerAmount={0.45}>
          <div className="mb-8 flex flex-col">
            <h1 className="text-center text-sm font-bold italic sm:text-right sm:text-xl lg:text-4xl">
              Igniting a Revolution in HR Innovation
            </h1>

            <div className="self-end">
              <Curve />
              <CurveMobile />
            </div>
          </div>
        </AnimateY>
        <img
          className="absolute right-[20px] h-[6px] w-[8px] animate-pulse sm:h-auto sm:w-auto lg:right-[500px] lg:top-[146px]"
          src="./images/dim-star.png"
          alt=""
        />
        <AnimateY staggerAmount={0.25}>
          <div className="z-20 mt-20 flex flex-col items-center lg:absolute lg:items-start">
            <div className="justify-center text-center font-heading text-[2rem] font-bold sm:text-7xl lg:text-left lg:text-hero">
              <div className="relative">
                <img
                  className="absolute -top-3 right-10 h-[26px] w-[18px] sm:-top-14 sm:right-20 sm:h-auto sm:w-auto lg:-top-14 lg:right-36"
                  src="./images/light-bulb.png"
                />

                <h1>getlinked Tech</h1>
              </div>
              <div className="flex items-center">
                <h1>
                  Hackathon <span className="text-primary">1.0</span>
                </h1>
                <div className="h-[32px] w-[54px] md:h-[86px] md:w-[144px]">
                  <img className="w-full" src="./images/emoji.png" alt="" />
                </div>
              </div>
            </div>
            <p className="mt-2s mx-auto mb-10 text-center font-body text-sm sm:text-base lg:mx-0 lg:w-3/4 lg:text-left">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <button className="w-max rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 font-body transition-all duration-150 hover:border-[#903AFF] hover:bg-none">
              Register
            </button>

            <div className="relative mt-4 flex gap-x-10 sm:mt-20">
              <p className="text-countdown">
                <span className="font-mono text-5xl sm:text-countdown">
                  {timerHours}
                </span>
                <span className="text-sm">H</span>
              </p>
              <p className="text-countdown">
                <span className="font-mono text-5xl sm:text-countdown">
                  {timerMins}
                </span>
                <span className="text-sm">M</span>
              </p>
              <p className="text-countdown">
                <span className="font-mono text-5xl sm:text-countdown">
                  {timerSeconds}
                </span>
                <span className="text-sm">S</span>
              </p>
            </div>

            <img
              className="absolute bottom-[410px] right-0 h-[6px] w-[8px] animate-pulse sm:h-auto sm:w-auto lg:bottom-24 lg:right-40"
              src="./images/dim-star.png"
              alt=""
            />
          </div>
        </AnimateY>

        <AnimateX staggerAmount={0.35} direction={-40}>
          <img
            className="relative z-10 basis-1/5 object-cover lg:-right-[450px]"
            src="./images/hero-img.png"
            alt=""
          />
        </AnimateX>

        <img
          className="absolute -right-20 top-0 hidden h-[550px] lg:block"
          src="./images/matrix.png"
          alt="matrix pattern"
        />

        <img
          className="absolute -top-[170px] z-20 hidden opacity-50 lg:left-[450px] lg:block"
          src="./images/purple-lens-flare.png"
          alt="lens flare"
        />

        <img
          className="absolute right-[100px] top-52 opacity-60 lg:-top-[150px] lg:right-[250px]"
          src="./images/purple-lens-flare.png"
          alt="lens flare"
        />
      </div>
    </Container>
  );
}
