import React from "react";
import productImg from "../../assets/images/product.webp";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const ProductImageCard = ({product}) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      className="mySwiper"
    >
      <SwiperSlide>
       <img src= {product.item.enrichment.images.primary_image_url} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={productImg} alt="image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={productImg} alt="image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductImageCard;
