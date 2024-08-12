import React, { useEffect} from "react";
import { BiArrowBack, BiChevronRight, BiHelpCircle } from "react-icons/bi";
import mobileLogo from "../../assets/images/favicon.png";
import { gsap } from "gsap";
import { navCategory } from "../../constants";
import { Link } from "react-router-dom";

const MobileMenu = ({menuOpened, setMenuOpened}) => {
  useEffect(() => {
    if (menuOpened) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".mobile_menu_container",
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      ).fromTo(
        ".mobile_menu_div",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.3 },
        "+=0.002"
      );
    }
  }, [menuOpened]);
  return (
    <div className="max-lg:flex z-40 hidden mobile_menu_container w-full fixed bg-black bg-opacity-70 top-0 left-0 bottom-0 overflow-hidden">
      <div className="w-1/2 -z-50 max-h-full mobile_menu_div max-sm:w-full bg-white fixed top-0 bottom-0 left-0 px-4 py-20 gap-8 flex flex-col justify-start overflow-hidden">
        <span className="absolute right-6 top-6">
          <button onClick={() => setMenuOpened(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30px"
              height="30px"
              fill="currentColor"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.42-1.42L12 9.17 7.11 4.29A1 1 0 0 0 5.69 5.71L10.59 10.6 5.7 15.49a1 1 0 0 0 1.42 1.42L12 11.83l4.88 4.88a1 1 0 0 0 1.42-1.42l-4.88-4.88 4.89-4.89z" />
            </svg>
          </button>
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
          <img src={mobileLogo} alt="logo" className="w-8 h-8 object-contain" />
          <h4 className="font-bold text-24px">Create An Account</h4>
          <p className="text-18px text-gray font-normal leading-tight text-center">
            Get free shipping & returns, exclusive offers, and better shopping
            experiences.
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
  );
};

export default MobileMenu;
