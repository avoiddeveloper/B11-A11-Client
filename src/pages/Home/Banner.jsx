import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../assets/slides/slide1.jpg';
import slide2 from '../../assets/slides/slide2.jpg';
import slide3 from '../../assets/slides/slide3.jpg';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../../src/App.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <img src={slide1} alt="slide1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="slide2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide3" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;