import React from "react";
import { Link } from "react-router-dom";
import { ProductSlider } from "../components";

const Home = () => {
  return (
    <>
    <section className="mb-16">
      <div className="container flex items-center justify-between font-outfit">
        <h1 className="text-28px font-medium capitalize text-black">
          Popular Products
        </h1>
        <Link
          to="/"
          className="text-13px font-medium underline underline-offset-2 opacity-80 hover:opacity-100 transition-all duration-300"
        >
          See All Products
        </Link>
      </div>
      <div className="container mt-10">
        <ProductSlider/>
      </div>
    </section>
     <section className="mb-16">
     <div className="container flex items-center justify-between font-outfit">
       <h1 className="text-28px font-medium capitalize text-black">
       Our Featured Offers
       </h1>
       <Link
         to="/"
         className="text-13px font-medium underline underline-offset-2 opacity-80 hover:opacity-100 transition-all duration-300"
       >
         See All Offers
       </Link>
     </div>
     <div className="container mt-10">
       <ProductSlider/>
     </div>
   </section>
   </>
  );
};

export default Home;
