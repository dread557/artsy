import Image from 'next/image';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay'

import hero1 from '/public/hero-1.png'
import hero2 from '/public/hero-2.png'
import hero3 from '/public/hero-3.png'
import hero4 from '/public/hero-4.png'
import hero5 from '/public/hero-5.png'


const Slider = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className='md:flex space-x-4 mt-6 hidden slide'>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Image className='object-contain' src={hero1} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero2} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero3} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero4} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero5} alt='hero' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Image className='object-contain' src={hero2} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero3} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero4} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero5} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero1} alt='hero' />
        </SwiperSlide>
        ...
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Image className='object-contain' src={hero3} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero4} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero5} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero1} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero2} alt='hero' />
        </SwiperSlide>
        ...
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Image className='object-contain' src={hero4} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero5} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero1} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero2} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero3} alt='hero' />
        </SwiperSlide>
        ...
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <Image className='object-contain' src={hero5} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero1} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero2} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero3} alt='hero' />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='object-contain' src={hero4} alt='hero' />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}

export default Slider