import React from "react";
import {FooterNewsletter,FooterFeatures,FooterMenus,FooterCopyright } from "../components"


const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center font-outfit">
     <FooterNewsletter/>
     <FooterFeatures/>
     <FooterMenus/>
     <FooterCopyright/>
    </footer>
  );
};

export default Footer;
