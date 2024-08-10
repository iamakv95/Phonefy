import {gsap} from "gsap";
import React from "react";
import { footerLinks, socialMedia } from "../constants";
import { Link } from "react-router-dom";

const FooterMenus = () => {
  const handleMouseEnter = (event) => {
    gsap.to(event.currentTarget.querySelector(".border-bottom"), {
      width: "100%",
      duration: 0.5,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = (event) => {
    gsap.to(event.currentTarget.querySelector(".border-bottom"), {
      width: "0%",
      duration: 0.5,
      ease: "power4.out",
    });
  };
  return (
    <div className="container py-10 flex justify-between max-md:flex-col max-md:gap-10">
      <div className="flex flex-col gap-3 justify-start w-2/3 max-md:w-full">
        <h4 className="font-semibold">Quick Links:</h4>
        <div className=" flex items-center justify-start gap-4">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-1 nav-link relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.label}
              <span className="border-bottom absolute left-0 bottom-[-1px] bg-black h-[1px] w-0"></span>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-start  w-1/3 max-md:w-full">
        <h4 className="font-semibold">Follow Us:</h4>
        <div className="flex gap-8 items-center">
          {socialMedia.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="p-3 border border-black text-24px hover:border-gray transition-all duration-300"
            >
              <item.iconURL />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMenus;
