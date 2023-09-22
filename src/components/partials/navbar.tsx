import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Logo, LogoMobile } from "../assets/logo";
import Hamburger from "../assets/hamburger";
import Close from "../assets/close";
import Container from "./container";

const navLinks = [
  { name: "Timeline", href: "#timeline" },
  { name: "Overview", href: "#overview" },
  { name: "FAQS", href: "#faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="border-b relative font-body text-white border-white/20">
      <Container>
        <div className="pt-7 sm:pt-16 pb-6 flex items-center justify-between">
          <div className="hidden md:block">
            <Logo />
          </div>

          <div className="block md:hidden">
            <LogoMobile />
          </div>

          <div className="lg:flex items-center gap-x-[120px] hidden">
            <ul className="flex items-center gap-x-14">
              <li>Timeline</li>
              <li>Overview</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>

            <button className="py-4 z-30 px-[52px] rounded-md bg-gradient hover:bg-none border border-[#903AFF] hover:border-[#903AFF] transition-all duration-150">
              Register
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block lg:hidden"
          >
            <Hamburger />
          </button>
        </div>
      </Container>
      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="z-50 mx-auto w-full h-screen absolute inset-0 bg-body-bg sm:max-w-2xl sm:px-8 md:max-w-3xl"
        >
          <div className="w-full flex flex-col gap-y-7 px-6 bg-body-bg py-6 text-secondary lg:hidden">
            <button
              className="mb-14 self-end mt-10"
              onClick={() => setMenuOpen(false)}
            >
              <Close />
            </button>
            <ul className="flex flex-col gap-y-5 text-lg">
              {navLinks.map((link) => {
                return (
                  <li
                    className={`font-medium transition-all duration-100 hover:font-semibold`}
                    onClick={() => setMenuOpen(false)}
                    key={link.name}
                  >
                    {link.name}
                  </li>
                );
              })}
            </ul>

            <Link href="/register">
              <button className="py-4 px-[52px] rounded-md bg-gradient hover:bg-none border border-[#903AFF] hover:border-[#903AFF] transition-all duration-150">
                Register
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
