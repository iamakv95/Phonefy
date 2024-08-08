import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ details,customCSS }) => {
  return (
    <div className={`container ${customCSS}`} style={{ backgroundImage: `url(${details.imageURL})` }}>
      {details.subTitle && <span className="text-12px font-bold uppercase text-red">{details.subTitle}</span>}
      {details.title && <h4 className="text-28px font-bold capitalize text-black">{details.title}</h4>}
      {details.descrpt && <p className="text-14px font-semibold capitalize text-black">{details.descrpt}</p>}
      {details.btnTitle && <Link to={details.href} className="text-12px font-bold uppercase text-black underline underline-offset-4 opacity-90 hover:opacity-100 transition-all duration-500 mt-4">{details.btnTitle}</Link>}
    </div>
  );
};

export default OfferCard;
