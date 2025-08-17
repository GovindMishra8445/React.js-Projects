import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../../src/assets/banner1.jpg'
import banner2 from '../../src/assets/banner2.jpg'
import banner3 from '../../src/assets/banner3.jpg'


export default function Banner() {
    // const slides = [
    //     { id: 1, image: '../../src/assets/banner1.jpg' },
    //     { id: 2, image: '../../src/assets/banner2.jpg' },
    //     { id: 3, image: '../../src/assets/banner3.jpg' }
    // ];
    
    const slides = [
        { id: 1, image: banner1 },
        { id: 2, image: banner2 },
        { id: 3, image: banner3 },
    ];

    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                className="w-full h-[500px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.image} alt={`Slide ${slide.id}`} className="w-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
