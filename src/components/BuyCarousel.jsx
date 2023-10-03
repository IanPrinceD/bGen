import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Buy from '../json/Buy.json'
import '../css/BuyCarousel.css'

const BuyCarousel = () => {
  return (
    <Swiper className='swiperBuy'
      modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      effect={'fade'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Buy.map((checkout) => (
        <SwiperSlide key={checkout.image}>
          <img className="buy-slider-img" src={checkout.image}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BuyCarousel