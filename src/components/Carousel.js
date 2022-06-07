import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NextArrow } from "./svg/Next";
import { PrevArrow } from "./svg/Prev";

let MoreText = 'Hosting guests, I was able to become an entrepreneur and take a step towards financial independence.';
let Img = 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240';
let From = 'Hostess from Milan';
export const Carousel = ({ centeredSlides = true, slidesPerView = 4, spaceBetween = 30 }) => {

    const slides = Array.from({ length: 10 }).map(
        (el, index) => <><div key={index} className="text-base mt-8 mb-6 md:text-2xl md:my-12">{MoreText}</div><div className="block w-auto h-8"><img className="object-contain h-full" src={Img} alt="text" /></div><div className="mt-3 md:mt-6 md:text-base text-gray-500" >{From}</div></>
    );
    return (
        <div className="image-swiper relative">
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                centeredSlides={centeredSlides}
                breakpoints={{
                    320: {
                        slidesPerView: "auto",
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: "auto",
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: "auto",
                        spaceBetween: 40
                    }
                }}
                navigation={{ prevEl: '.prev', nextEl: '.next' }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide className="w-4/5 md:w-auto" key={index} virtualIndex={index}>
                        <div className="max-w-xs shadow-xl w-auto md:max-w-md">
                            <img src="https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg?im_w=720" alt="text" />
                        </div>
                        <div className="swiper-content w-auto md:max-w-md">
                            {slideContent}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="navigation-elemnts absolute z-10">
                <div className="prev inline-block  mr-3 w-8"><div className="arrow"><span className="relative" ><PrevArrow /></span></div></div>
                <div className="next inline-block w-8"><div className="arrow"><span className="relative"><NextArrow /></span></div></div>
            </div>

        </div>
    );
}
