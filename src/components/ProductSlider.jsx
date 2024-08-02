import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { gsap } from 'gsap';

const products = [
  
];

const ProductSlider = () => {
  useEffect(() => {
    gsap.fromTo('.swiper-slide', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 });
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      onSlideChangeTransitionStart={() => {
        gsap.fromTo('.swiper-slide-active', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="p-4 bg-white shadow-lg">
            <img src={product.imageURL} alt={product.title} className="mb-2" />
            <h4 className="font-bold mb-1">{product.title}</h4>
            <p className="text-gray-700">${product.price}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
