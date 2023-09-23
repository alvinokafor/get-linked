import React from "react";
import Instagram from "../assets/instagram";
import Twitter from "../assets/twitter";
import Facebook from "../assets/facebook";
import Linkedin from "../assets/linkedin";

export default function ContactInfo() {
  return (
    <div className="relative basis-1/2 space-y-9 font-body text-white">
      <div className="space-y-5">
        <h1 className="font-heading text-[2rem] font-bold text-primary">
          Get in touch
        </h1>

        <p className="lg:w-[96px]">Contact Information</p>
        <p className="lg:w-[115px]">27,Alara Street Yaba 100012 Lagos State</p>
        <p>Call Us : 07067981819</p>
        <p className="lg:w-[266px]">
          we are open from Monday-Friday 08:00am - 05:00pm
        </p>
      </div>

      <div className="space-y-3.5">
        <p className="text-primary">Share On</p>
        <div className="flex items-center gap-x-5">
          <Instagram />
          <Twitter />
          <Facebook />
          <Linkedin />
        </div>
      </div>
      <img
        className="absolute -top-20 left-48 h-[16px] w-[14px] animate-pulse lg:-top-28 lg:left-0 lg:h-auto lg:w-auto"
        src="./images/purple-star1.png"
        alt=""
      />
    </div>
  );
}
