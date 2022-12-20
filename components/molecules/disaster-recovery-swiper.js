import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.min.css';

import { M } from 'styles/breakpoints';

export default function Component({ children }) {
  const params = {
    slidesPerView: 3,
    spaceBetween: 75,
    freeMode: true,
    mousewheel: true,
    slidesOffsetBefore: 200,
    slidesOffsetAfter: 200,
    breakpoints: {
      [M + 150]: {
        slidesPerView: 2,
        spaceBetween: 50,
        slidesOffsetBefore: 75,
        slidesOffsetAfter: 75,
      },
    },
  }

  return <Swiper {...params}>{children}</Swiper>
}
