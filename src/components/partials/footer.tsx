import React from "react";
import Container from "./container";
import { Logo } from "../assets/logo";
import Phone from "../assets/phone";
import GPS from "../assets/gps";
import Linkedin from "../assets/linkedin";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";
import Instagram from "../assets/instagram";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-footer-bg pb-10 pt-[70px] font-body text-white">
      <Container>
        <div className="flex flex-col justify-between md:flex-row">
          <div className="mb-8 flex flex-col gap-y-[72px] lg:mb-0">
            <div className="space-y-[6px]">
              <Logo />
              <p className="w-[271px] text-[0.75rem] leading-[172%] sm:w-[408px]">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>

            <div className="flex gap-x-3 divide-x-2 divide-primary text-[0.75rem]">
              <p>Terms of Use</p>
              <p className="pl-2">Privacy Policy</p>
            </div>
          </div>

          <div className="mb-[61px] space-y-[6px]">
            <h3 className="text-sm font-semibold text-primary">Useful Links</h3>
            <ul className="space-y-3 text-[0.75rem]">
              <li>Overview</li>
              <li>Timeline</li>
              <li>FAQs</li>

              <li>
                {" "}
                <Link href={`/register`}>Register</Link>
              </li>

              <li className="flex items-center gap-x-4 text-primary">
                <span>Follow us</span>
                <span className="flex items-center gap-x-5">
                  <Instagram />
                  <Twitter />
                  <Facebook />
                  <Linkedin />
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-primary">Contact Us</h3>
            <div>
              <div className="flex items-center gap-x-4 text-[0.75rem]">
                <Phone />
                <a href="tel:+234 679 81819">+234 679 81819</a>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-x-4">
                <GPS />
                <p className="w-[86px] text-[0.75rem]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <p className="mt-14 text-center text-[0.75rem]">
        All rights reserved. © getlinked Ltd.
      </p>
      <img
        className="absolute bottom-20 left-[50%] right-0  h-[13px] w-[11px] animate-pulse lg:top-80 lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
      <img
        className="absolute bottom-[400px] right-40 h-[10px] w-[8px] animate-pulse lg:right-80 lg:top-20 lg:h-auto lg:w-auto"
        src="./images/dim-star.png"
        alt=""
      />
      <img
        className="absolute bottom-20 left-[20px] top-32 h-[12px] w-[10px] animate-pulse lg:left-[20px] lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />
      <img
        className="absolute right-28 top-[600px] h-[12px] w-[10px] animate-pulse lg:right-10 lg:top-52 lg:h-auto lg:w-auto"
        src="./images/hero-star.png"
        alt=""
      />
    </footer>
  );
}
