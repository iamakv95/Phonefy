import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SingleProductSlider = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const primaryImage =
    product?.product?.item?.enrichment?.image_info?.primary_image;
  const alternateImages =
    product?.product?.item?.enrichment?.image_info?.alternate_images;

  const allImages = [primaryImage, ...alternateImages];

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productImage_main_slider"
      >
        {allImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={image.image_name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="productImage_slider_thumbs"
      >
        {allImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.url} alt={image.image_name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SingleProductSlider;
