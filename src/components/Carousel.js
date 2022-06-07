import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NextArrow } from "./svg/Next";
import { PrevArrow } from "./svg/Prev";

let Gallery = [
    {
        img: "https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg?im_w=720",
        desc: 'Hosting my studio changed my life and gifted me with memorable experiences and people.',
        from: 'Hostess from Milan',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    },
    {
        img: "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720",
        desc: 'Receiving guests changed my life, gave me unforgettable impressions and friends.',
        from: 'Host in Chiang Mai',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    },
    {
        img: "https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg?im_w=720",
        desc: 'We’re able to keep our culture alive by hosting our pasta-making experience.',
        from: 'Hostess from Milan',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    },
    {
        img: "https://a0.muscache.com/im/pictures/b56f3d7c-5006-4ed2-967a-c421e3275b1f.jpg?im_w=720",
        desc: 'Airbnb has allowed me to create my own job doing what I love – taking care of guests in our home.',
        from: 'Host in Wadi Rum',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    },
    {
        img: "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720",
        desc: 'Receiving guests changed my life, gave me unforgettable impressions and friends.',
        from: 'Hostess from Milan',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    },
    {
        img: "https://a0.muscache.com/im/pictures/334530d8-2ad6-40e8-8fd2-4ac0835e693a.jpg?im_w=720",
        desc: 'Receiving guests changed my life, gave me unforgettable impressions and friends.',
        from: 'Hostess from Milan',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    },
    {
        img: "https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg?im_w=720",
        desc: 'Receiving guests changed my life, gave me unforgettable impressions and friends.',
        from: 'Hostess from Milan',
        thumb: 'https://a0.muscache.com/im/pictures/f2b0e082-6872-47a3-a9f6-d01a9c44a088.jpg?im_w=240',
    }
];
export const Carousel = ({ centeredSlides = true, slidesPerView = 3, spaceBetween = 18 }) => {
    const slides = Gallery.map(
        (el, index) => <>
            <div className="shadow-xl w-auto img_block rounded-lg">
                <img className="rounded-lg" src={el.img} alt="text" />
            </div>
            <div className="swiper-content w-auto md:max-w-md">
                <div key={index} className="text-base mt-9 mb-6 md:text-2xl md:mt-12 md:mb-14">{el.desc}</div>
                <div className=" md:text-base text-gray-500" >{el.from}</div>
            </div>
        </>
    );
    return (
        <div className="image-swiper relative">
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                centeredSlides={centeredSlides}
                grabCursor={true}
                breakpoints={{
                    320: {
                        slidesPerView: "auto",
                    },
                    480: {
                        slidesPerView: "auto",
                    },
                    640: {
                        slidesPerView: "auto",
                    }
                }}
                navigation={{ prevEl: '.prev', nextEl: '.next' }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {slides.map((slideContent, index) => (
                    <SwiperSlide className="w-4/5 max-w-440" key={index} virtualIndex={index}>
                        {slideContent}


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
