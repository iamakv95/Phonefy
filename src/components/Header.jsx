import React, { useState } from "react";
import { navCategory, navLinks } from "../constants";
import { Link } from "react-router-dom";
import {phonefy_dark} from "../assets";
import {
  BiMenu,
  BiMenuAltLeft,
} from "react-icons/bi";
import { gsap } from "gsap";
import {MobileMenu, HeaderSearch} from "../components"

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

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
    <header className="font-outfit">
      <div className="container py-1 flex items-center justify-between text-18px text-black leading-none font-semibold">
        <div className="flex items-center justify-start gap-8 w-1/2">
          <div className="hidden max-lg:flex items-center justify-center text-28px">
            <button onClick={() => setMenuOpened(true)}>
              {menuOpened ? <BiMenuAltLeft /> : <BiMenu />}
            </button>
          </div>
          <Link to="/" className="w-36 object-contain">
            <img src={phonefy_dark} alt="logo" />
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
            <MobileMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
          )}
        </div>

        <div className=" gap-4 justify-end flex items-center w-1/2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="flex items-center gap-1 font-bold"
            >
              <item.iconURL />
            </Link>
          ))}
          <HeaderSearch/>
        </div>
      </div>
    </header>
  );
};

export default Header;
