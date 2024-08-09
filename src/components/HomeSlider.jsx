import React from "react";
import { homeSliders } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      spaceBetween={8}
      slidesPerView={1}
      navigation
      effect= "fade"
      className="mySwiper h-full rounded-lg"
    >
      {homeSliders.map((slide) => (
        <SwiperSlide key={slide.id} className="h-auto">
          <div
            className={`flex flex-1 bg-cover min-h-[400px] w-full bg-no-repeat h-full flex-col justify-start gap-1 p-10`}
            style={{ backgroundImage: `url(${slide.imageURL})` }}
          >
            <h5 className="text-12px font-semibold uppercase text-black">
              {slide.subTitle}
            </h5>
            <h3 className="text-50px leading-tight font-bold capitalize text-black">
              {slide.title}
            </h3>
            <p className="text-12px font-normal leading-tight w-1/3 max-lg:w-1/2 max-md:w-[80%] text-black">
              {slide.descrpt}
            </p>
            <Link
              to={slide.href}
              className="mt-4 text-12px font-semibold uppercase text-red bg-white rounded-md max-w-max py-3 px-5 text-opacity-80 transition-all duration-300 hover:text-opacity-100"
            >
              {slide.btnTitle}
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
