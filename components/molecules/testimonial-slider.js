import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';
import { XS } from '@/styles/breakpoints';

export default function Component({ children }) {
  const params = {
    a11y: true,
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 125,
    mousewheel: false,
    keyboard: { enabled: true, onlyInViewport: false },
    centeredSlides: true,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="page-bullet ${className}" />0${index + 1}</span>`
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      2000: {
        spaceBetween: 200,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      [XS]: {
        spaceBetween: 35,
      },
    },
  }

  return <Swiper {...params}>{children}</Swiper>
}
