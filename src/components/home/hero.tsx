import React, { useEffect, useRef, useState } from "react";
import Container from "../partials/container";
import { Curve, CurveMobile } from "../assets/curve";
import { distance } from "framer-motion";

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
        (timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
          className="absolute w-[10px] top-[90px] h-[12px] sm:w-auto sm:h-auto animate-pulse left-14 lg:top-16"
          src="./images/hero-star.png"
          alt=""
        />
        <div className="mb-8 flex flex-col">
          <h1 className="font-bold text-center text-sm italic sm:text-xl lg:text-4xl sm:text-right">
            Igniting a Revolution in HR Innovation
          </h1>

          <div className="self-end">
            <Curve />
            <CurveMobile />
          </div>
        </div>
        <img
          className="absolute right-[20px] h-[6px] w-[8px] sm:w-auto sm:h-auto animate-pulse lg:top-[146px] lg:right-[500px]"
          src="./images/dim-star.png"
          alt=""
        />
        <div className="lg:absolute flex flex-col items-center lg:items-start z-20 mt-20">
          <div className="font-heading text-[2rem] justify-center sm:text-7xl text-center lg:text-left lg:text-hero font-bold">
            <div className="relative">
              <img
                className="absolute h-[26px] w-[18px] right-10 -top-3 sm:h-auto sm:w-auto sm:right-20 sm:-top-14 lg:right-36 lg:-top-14"
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
          <p className="text-center mt-2s text-sm sm:text-base lg:text-left mx-auto lg:mx-0 font-body lg:w-3/4 mb-10">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <button className="py-4 w-max font-body px-[52px] rounded-md bg-gradient hover:bg-none border border-[#903AFF] hover:border-[#903AFF] transition-all duration-150">
            Register
          </button>

          <div className="relative flex gap-x-10 mt-4 sm:mt-20">
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
            className="absolute animate-pulse h-[6px] w-[8px] sm:w-auto sm:h-auto right-0 bottom-[410px] lg:bottom-24 lg:right-40"
            src="./images/dim-star.png"
            alt=""
          />
        </div>

        <img
          className="object-cover relative lg:-right-[450px] z-10 basis-1/5"
          src="./images/hero-img.png"
          alt=""
        />

        <img
          className="hidden lg:block absolute h-[550px] top-0 -right-20"
          src="./images/matrix.png"
          alt="matrix pattern"
        />

        <img
          className="hidden lg:block absolute z-20 opacity-50 lg:left-[450px] -top-[170px]"
          src="./images/purple-lens-flare.png"
          alt="lens flare"
        />

        <img
          className="absolute top-52 right-[100px] lg:-top-[150px] lg:right-[250px] opacity-60"
          src="./images/purple-lens-flare.png"
          alt="lens flare"
        />
      </div>
    </Container>
  );
}
