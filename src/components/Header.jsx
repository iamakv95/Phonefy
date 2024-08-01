import React, { useEffect, useRef, useState } from "react";
import { navCategory, navLinks } from "../constants";
import { Link } from "react-router-dom";
import logo from "../assets/phonefy_dark.svg";
import {
  BiCloset,
  BiCross,
  BiMenu,
  BiMenuAltLeft,
  BiSearch,
} from "react-icons/bi";
import { gsap } from "gsap";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const inputRef = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        gsap.to(inputRef.current, {
          opacity: 0,
          width: 0,
          duration: 0.5,
          ease: "power4.inOut",
        });
      } else {
        gsap.to(inputRef.current, {
          opacity: 1,
          width: "auto",
          duration: 0.5,
          ease: "power4.inOut",
        });
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="font-outfit">
      <div className="container py-1 flex items-center justify-between text-18px text-black leading-none font-semibold">
        <div className="flex items-center justify-start gap-8">
          <div className="hidden max-lg:flex items-center justify-center text-28px">
            {menuOpened ? <BiMenuAltLeft /> : <BiMenu />}
          </div>
          <Link to="/" className="w-36 object-contain">
            <img src={logo} alt="logo" />
          </Link>
          <div className="max-lg:hidden flex items-center justify-start gap-4">
            {navCategory.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-1 nav-link relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
                <span className="border-bottom absolute left-0 bottom-[-3px] bg-black h-[2px] w-0"></span>
              </Link>
            ))}
          </div>
          <div className="max-lg:flex hidden w-full h-full fixed bg-black top-0 left-0">
            <div className="w-1/2 max-sm:w-2/3 bg-white relative px-10 py-20 gap-8 flex flex-col text-24px">
              <span className="absolute right-10 top-4">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="8"
                    y1="8"
                    x2="16"
                    y2="16"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="16"
                    x2="16"
                    y2="8"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              {navCategory.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="flex items-center gap-1 nav-link relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label}
                  <span className="border-bottom absolute left-0 bottom-[-3px] bg-black h-[2px] w-0"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" gap-4 justify-end flex items-center">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-1 font-bold"
            >
              <item.iconURL />
            </Link>
          ))}
          <div className="flex bg-black items-stretch justify-between gap-0 text-white cursor-pointer">
            <input
              className=" text-white bg-black py-4 px-2 max-md:hidden placeholder:text-white font-normal outline-none"
              type="text"
              disabled
              name="search"
              placeholder="Search"
              ref={inputRef}
            />
            <span className="text-white bg-black p-4 flex items-center">
              <BiSearch />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
