import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AuctionSlider = () => {
    return (
        <div className='flex justify-between'>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={20}
                breakpoints={{
                    256: {
                        width: 256,
                        slidesPerView: 1
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 2.4
                    },
                }}
                slidesPerView={2.3}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className='bg-[url("../public/bid-1.png")] w-[485px] h-[260px] md:h-[396px] bg-contain bg-no-repeat flex items-center justify-center'>
                        <p className='text-white bg-[#F5F4F43D] font-stix max-w-[340px] w-[85%] md:w-full flex justify-center self-end absolute mb-8 bottom-[19%] md:text-3xl lg:text-[40px]'>
                            6hr: 30m: 15s
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url("../public/bid-2.png")] w-[485px] h-[260px] md:h-[396px] bg-contain bg-no-repeat flex items-center justify-center'>
                        <p className='text-white bg-[#F5F4F43D] font-stix flex justify-center max-w-[340px] w-[85%] md:w-full self-end absolute mb-8 bottom-[19%] md:text-3xl lg:text-[40px]'>
                            6hr: 30m: 15s
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url("../public/bid-3.png")] w-[485px] h-[260px] md:h-[396px] bg-contain bg-no-repeat flex items-center justify-center'>
                        <p className='text-white bg-[#F5F4F43D] flex font-stix justify-center max-w-[340px] w-[85%] md:w-full self-end absolute mb-8 bottom-[19%] md:text-3xl lg:text-[40px]'>
                            6hr: 30m: 15s
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url("../public/bid-1.png")] w-[485px] h-[260px] md:h-[396px] bg-contain bg-no-repeat flex items-center justify-center'>
                        <p className='text-white bg-[#F5F4F43D] font-stix flex justify-center max-w-[340px] w-[85%] md:w-full self-end absolute mb-8 bottom-[19%] md:text-3xl lg:text-[40px]'>
                            6hr: 30m: 15s
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    )
};

export default AuctionSlider;
