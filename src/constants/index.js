import {
  BiHeart,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
  BiCart,
  BiUser,
} from "react-icons/bi";

import {
  home_featured_1,
  home_featured_2,
  home_featured_3,
  home_featured_4,
} from "../assets";

import { fast, quickReturn, support } from "../assets";

export const navLinks = [
  { iconURL: BiUser, href: "", label: "Account" },
  { iconURL: BiHeart, href: "", label: "Wishlist" },
  { iconURL: BiCart, href: "", label: "Cart" },
];

export const navCategory = [
  { href: "/", label: "Phone" },
  { href: "/", label: "Tablet" },
  { href: "/", label: "Covers" },
  { href: "/", label: "Wearable" },
  { href: "/", label: "Audio" },
];

export const newsletter = {
  titletop: "Get Exclusive Offers & Updates",
  titlebottom: "  Get recommendations, tips, updates, promotions and more.",
};

export const featuredOffer = [
  {
    id: "1",
    imageURL: home_featured_4,
    href: "/",
    title: "Save up to $50 on selected ipads & tablets",
    btnTitle: "Shop Now",
  },
  {
    id: "2",
    imageURL: home_featured_3,
    href: "/",
    title: "Save up to 35% on furniture items",
    btnTitle: "Shop Now",
  },
  {
    id: "3",
    imageURL: home_featured_2,
    href: "/",
    title: "Save up to $50 on select fragrances",
    btnTitle: "Shop Now",
  },
  {
    id: "4",
    imageURL: home_featured_1,
    href: "/",
    title: "Save up to 20% on footwear",
    btnTitle: "Shop Now",
  },
];

export const footerFeatures = [
  {
    iconURL: fast,
    href: "/",
    title: "Fast, Free Shipping",
    descr: "Free shipping on every order above $200.",
    btnTitle: "Learn More",
  },
  {
    iconURL: quickReturn,
    href: "/",
    title: "Worry-Free Returns",
    descr: "Return your purchase for free within 7 days.",
    btnTitle: "Learn More",
  },
  {
    iconURL: support,
    href: "/",
    title: "24/7 Support",
    descr: "Want to talk? Choose chat or call us.",
    btnTitle: "Get Support",
  },
];

export const socialMedia = [
  { iconURL: BiLogoFacebook, href: "/", key: "facebook" },
  { iconURL: BiLogoTwitter, href: "/", key: "twitter" },
  { iconURL: BiLogoInstagram, href: "/", key: "instagram" },
  { iconURL: BiLogoYoutube, href: "/", key: "youtube" },
];

export const footerLinks = [
  { href: "/", label: "FAQs" },
  { href: "/", label: "Returns & Refunds" },
  { href: "/", label: "Payments" },
  { href: "/", label: "Contact Us" },
];
