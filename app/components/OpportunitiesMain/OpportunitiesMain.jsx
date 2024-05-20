'use client';

import styles from './styles.module.scss';
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OpportunitiesMain = () => {
  return (
    <div className={styles.OpportunitiesMain}>
      <h2 className={styles.title}>Можливості ботів</h2>
      <div className={styles.imageSwipe + ' ' + 'imageSwiper'}>
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          loop={true}
          speed={1500}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className={styles.slide}>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/img/screen.webp' alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.buttonWrapper}>
        <button>Замовити розробку</button>
        <button>Детальніше...</button>
      </div>
    </div>
  );
};

export default OpportunitiesMain;
