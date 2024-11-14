import React, { useState } from 'react';
import Slider from 'react-slick';
import rail from './Assets/railway-electricfication.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [rail, rail, rail, rail, rail];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerMode: false,
        centerPadding: '0',
        dots: true,
        dotsClass: 'slick-dots custom-dots',
        arrows: window.innerWidth >= 1024,
        beforeChange: (current, next) => {
            setIsTransitioning(true);
            setActiveIndex(next);
        },
        afterChange: (current) => {
            setIsTransitioning(false);
            setActiveIndex(current);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                },
            },
        ],
        appendDots: dots => (
            <div className="absolute bottom-[-50px] w-full">
                <ul className="flex justify-center items-center gap-3 p-0 m-0"> 
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const slider = document.querySelector('.slick-slider');
                                if (slider) {
                                    slider.slick.slickGoTo(index);
                                }
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out
                                ${index === activeIndex 
                                    ? 'bg-orange-500 w-6' 
                                    : 'bg-gray-400 hover:bg-gray-600'
                                }
                            `}
                        />
                    ))}
                </ul>
            </div>
        ),
    };

    return (
        <div className="relative w-full mb-16">
            <button
                className="absolute left-8 hidden lg:block bottom-[20%] text-white bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer z-10 hover:bg-orange-600 transition-colors"
                onClick={() => document.querySelector('.slick-prev')?.click()}
            >
                <ChevronLeft />
            </button>

            <button
                className="absolute hidden lg:block left-8 bottom-[30%] text-white bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer z-10 hover:bg-orange-600 transition-colors"
                onClick={() => document.querySelector('.slick-next')?.click()}
            >
                <ChevronRight />
            </button>

            <div className="relative h-[590px] lg:ml-40">
                <div className="absolute w-full max-w-screen overflow-hidden">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div 
                                key={index} 
                                className="transition-all duration-700 ease-in-out"
                                style={{ margin: 0, padding: 0 }}
                            >
                                <div 
                                    className={`
                                        relative overflow-hidden
                                        transition-all duration-700 ease-in-out
                                        ${index === activeIndex ? 'z-30' : 'z-10'}
                                    `}
                                >
                                    <div 
                                        className={`
                                            absolute inset-0 transition-all duration-700
                                            ${index === activeIndex ? 'bg-transparent' : 'bg-gradient-to-b from-gray-700 to-gray-900'}
                                        `} 
                                    />
                                    
                                    <div 
                                        className={`
                                            absolute inset-0 transition-opacity duration-700
                                            ${index === activeIndex ? 'opacity-0' : 'opacity-75 bg-gray-900'}
                                        `} 
                                    />
                                    
                                    <div className={`
                                        relative
                                        transition-all duration-700 ease-in-out
                                        ${index === activeIndex 
                                            ? 'lg:w-[560px] lg:h-[590px] md:w-[420px] md:h-[480px] w-[360px] h-[420px]' 
                                            : 'lg:w-[520px] lg:h-[540px] md:w-[380px] md:h-[440px] w-[320px] h-[380px]'
                                        }
                                    `}>
                                        <img
                                            src={image}
                                            alt={`Slide ${index + 1}`}
                                            className={`
                                                absolute top-0 left-0 w-full h-full
                                                transition-all duration-700 ease-in-out object-cover
                                                ${index === activeIndex ? 'scale-110 brightness-100' : 'scale-100 brightness-50'}
                                                ${index === activeIndex ? 'shadow-2xl' : ''}
                                            `}
                                        />
                                    </div>

                                    <div 
                                        className={`
                                            absolute inset-0 
                                            ${index === activeIndex ? 'opacity-0' : 'opacity-60 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900'}
                                            transition-opacity duration-700
                                        `}
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 
                                            className={`
                                                text-white font-semibold text-xl
                                                transition-all duration-700
                                                ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}
                                            `}
                                        >
                                            {`Slide ${index + 1}`}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Carousel;