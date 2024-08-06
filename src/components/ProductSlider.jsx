import React from 'react'
import {ProductCard} from "../components"
import {Swiper,SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'

const ProductSlider = () => {
  return (
    <Swiper modules={[Navigation]}
    spaceBetween={8}
    slidesPerView={5}
    navigation
    breakpoints={{
      0: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }}
    className="mySwiper px-12"
  >
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
    <SwiperSlide><ProductCard/></SwiperSlide>
  </Swiper>
  )
}

export default ProductSlider
