import {
  BiPackage,
  BiHelpCircle,
  BiHeart,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoYoutube,
  BiGlobe,
  BiDollar,
  BiCart,
  BiUser
} from "react-icons/bi";

export const topNavLinks = [
  { iconURL: BiGlobe, href: "/", label: "EN" },
  { iconURL: BiDollar, href: "/", label: "USD" },
  { iconURL: BiPackage, href: "/", label: "Track Order" },
  { iconURL: BiHelpCircle, href: "/", label: "Help" },
];
export const navLinks = [
  {iconURL: BiUser, href: "/", label: "Account" },
  {iconURL: BiHeart, href: "/", label: "Wishlist" },
  {iconURL: BiCart, href: "/animes", label: "Cart" },
];

export const navCategory = [
  {href: "/", label: "Phone" },
  {href: "/", label: "Tablet" },
  {href: "/", label: "Covers" },
  {href: "/", label: "Wearable" },
  {href: "/", label: "Audio" },
]

export const hero = {
  subTitle: "AnimeFlex",
  buttonLabel: "Browse Animes",
  buttonLink: "/animes",
  mainTitle: "Unlimited Anime Movies, Shows & More.",
  btnICON: BiPlay,
};

export const newsletter = {
  titletop: "TRIAL START FIRST 30 DAYS.",
  titlebottom: "Enter your email to create or restart your membership.",
};

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

// export const payments = [
//   { iconURL: BiLogoMastercard, href: "/", key: "Mastercard" },
//   { iconURL: BiLogoVisa, href: "/", key: "visa" },
//   { iconURL: BiLogoPaypal, href: "/", key: "paypal" },
//   { iconURL: BiCreditCard, href: "/", key: "credit card" },
// ];
