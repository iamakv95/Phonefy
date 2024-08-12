import React from "react";
import { footerFeatures } from "../../constants";
import { Link } from "react-router-dom";

const FooterFeatures = () => {
  return (
    <div className=" border-t mt-20 w-full border-b  border-gray border-opacity-25">
      <div className="container flex justify-center flex-wrap">
        {footerFeatures.map((item, index) => (
          <div
            key={index}
            className={`py-8 px-6 flex w-1/3 max-md:w-1/2 max-md:px-2 flex-col items-center justify-start ${
              index === 0 || index === 1
                ? "border-r border-gray border-opacity-25 max-md:border-b"
                : ""
            } ${ index === 1
                ? "max-md:border-r-0 border-gray border-opacity-25"
                : ""
            }`}
          >
            <img src={item.iconURL} alt={item.title} className="w-12" />
            <h4 className="text-center mt-2 text-24px max-md:text-18px">{item.title}</h4>
            <p className="text-center max-lg:w-full w-2/3 mb-3 mt-1 opacity-70">
              {item.descr}
            </p>
            <Link to={item.href} className="hover:opacity-80 underline underline-offset-4">{item.btnTitle}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFeatures;
