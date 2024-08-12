import React from "react";
import { Link } from "react-router-dom";

const FooterCopyright = () => {
  return (
    <div className="bg-black w-full">
      <div className="container py-3 flex justify-between items-center max-md:flex-col max-md:gap-3 max-md:py-4">
        <ul className="flex items-center gap-4 justify-start text-white text-11px ">
          <li>
            <Link to="/" className=" opacity-70 hover:opacity-100">Ternm & Conditions</Link>
          </li>
          <li>
            {" "}
            <Link to="/" className=" opacity-70 hover:opacity-100">Privacy Policy</Link>
          </li>
        </ul>
        <p className="text-end text-12px font-normal text-white opacity-80">
          Copyright &copy; 2024 <a href="#">PhoneFy</a>
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
