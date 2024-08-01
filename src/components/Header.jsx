import React, { useEffect, useRef, useState } from "react";
import { navCategory, navLinks } from "../constants";
import { Link } from "react-router-dom";
import logo from "../assets/phonefy_dark.svg";
import mobileLogo from "../assets/favicon.png";
import {
  BiArrowBack,
  BiArrowFromRight,
  BiArrowToRight,
  BiChevronRight,
  BiHelpCircle,
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
          {menuOpened && (
            <div className="max-lg:flex hidden w-full fixed bg-black bg-opacity-70 top-0 left-0 bottom-0 overflow-hidden">
              <div className="w-1/2 max-h-full max-sm:w-full bg-white fixed top-0 bottom-0 left-0 px-4 py-20 gap-8 flex flex-col justify-start overflow-hidden">
                <span className="absolute right-6 top-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px"
                    fill="currentColor"
                  >
                    <path d="M18.3 5.71a1 1 0 0 0-1.42-1.42L12 9.17 7.11 4.29A1 1 0 0 0 5.69 5.71L10.59 10.6 5.7 15.49a1 1 0 0 0 1.42 1.42L12 11.83l4.88 4.88a1 1 0 0 0 1.42-1.42l-4.88-4.88 4.89-4.89z" />
                  </svg>
                </span>
                <div className="gap-8 flex flex-col mt-10">
                  {navCategory.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center gap-1 text-24px font-bold w-full justify-between"
                    >
                      {item.label}
                      <BiChevronRight />
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    to="/"
                    className="flex items-center gap-1 text-18px font-semibold w-full justify-between"
                  >
                    <span className="flex items-center gap-1">
                      <BiHelpCircle />
                      Get Help
                    </span>
                    <BiChevronRight className="w-6 h-6 object-cover" />
                  </Link>
                </div>
                <div className="flex flex-col items-center gap-3 my-10 ">
                  <img
                    src={mobileLogo}
                    alt="logo"
                    className="w-8 h-8 object-contain"
                  />
                  <h4 className="font-bold text-24px">Create An Account</h4>
                  <p className="text-18px text-gray font-normal leading-tight text-center">
                    Get free shipping & returns, exclusive offers, and better
                    shopping experiences.
                  </p>
                  <Link
                    to="/register"
                    className="w-full bg-black text-white text-center leading-none font-normal text-12px py-3 px-3"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="bg-black flex flex-col gap-6 absolute bottom-0 w-full left-0 ring-0 px-3 py-8 text-white">
                  <Link
                    to="/"
                    className="flex items-center gap-1 text-18px font-semibold w-full justify-between"
                  >
                    <span className="flex items-center gap-3">
                      <BiArrowBack className="rotate-180" />
                      Send Us Feedback
                    </span>
                  </Link>
                  <div className="flex items-center justify-between">
                    <p className="text-18px font-light">India</p>
                    <span className="text-11px font-light text-end">
                      Copyright &copy; 2024 PhoneFy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
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
