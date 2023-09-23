import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
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
  const pathName = usePathname();

  const handleOpenMobileMenu = () => {
    setMenuOpen(true);
    // Disables Background Scrolling whilst the menu is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflowY = "hidden";
    }
  };

  const handleCloseMobileMenu = () => {
    setMenuOpen(false);
    // enables Background Scrolling whilst the menu is closed
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflowY = "auto";
    }
  };

  // scrolls to target id
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="relative z-30 border-b border-white/20 font-body text-white">
      <Container>
        <div className="flex items-center justify-between pb-6 pt-7 sm:pt-16">
          <div className="hidden md:block">
            <Link href={`/`}>
              <Logo />
            </Link>
          </div>

          <div className="block md:hidden">
            <Link href={`/`}>
              <LogoMobile />
            </Link>
          </div>

          <div className="hidden items-center gap-x-[120px] lg:flex">
            <ul className="flex items-center gap-x-14">
              <li onClick={() => handleClickScroll("#timeline")}>
                <a href="#timeline">Timeline</a>
              </li>
              <li onClick={() => handleClickScroll("#overview")}>
                <a href="#overview">Overview</a>{" "}
              </li>
              <li onClick={() => handleClickScroll("#faqs")}>
                {" "}
                <a href="#faqs">FAQs</a>
              </li>
              <Link href={`/contact`}>
                <li
                  className={`${
                    pathName === "/contact" ? "active_link" : "text-white"
                  }`}
                >
                  Contact
                </li>
              </Link>
            </ul>

            <Link href={`/register`}>
              <button className="z-30 rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 transition-all duration-150 hover:border-[#903AFF] hover:bg-none">
                Register
              </button>
            </Link>
          </div>

          <button onClick={handleOpenMobileMenu} className="block lg:hidden">
            <Hamburger />
          </button>
        </div>
      </Container>
      {menuOpen && (
        <motion.div
          animate={{ x: 0 }}
          initial={{ x: -250 }}
          className="absolute inset-0 z-50 mx-auto h-screen w-full bg-body-bg sm:max-w-2xl sm:px-8 md:max-w-3xl"
        >
          <div className="text-secondary flex w-full flex-col gap-y-7 bg-body-bg px-6 py-6 lg:hidden">
            <button
              className="mb-14 mt-10 self-end"
              onClick={handleCloseMobileMenu}
            >
              <Close />
            </button>
            <ul className="flex flex-col gap-y-5 text-lg">
              {navLinks.map((link) => {
                return (
                  <Link href={link.href}>
                    <li
                      className={`font-medium transition-all duration-100 hover:font-semibold`}
                      onClick={handleCloseMobileMenu}
                      key={link.name}
                    >
                      {link.name}
                    </li>
                  </Link>
                );
              })}
            </ul>

            <Link href="/register">
              <button className="rounded-md border border-[#903AFF] bg-gradient px-[52px] py-4 transition-all duration-150 hover:border-[#903AFF] hover:bg-none">
                Register
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
