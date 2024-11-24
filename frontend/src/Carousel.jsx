import React, { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import power  from './Assets/powerslide1.jpg'
import woven from './Assets/wovenslide.jpeg'
import weld from './Assets/weldslide.jpeg'
import fence from './Assets/fenceslide.jpg'
import gabions from './Assets/gabionslide.jpeg'
import wires from './Assets/Wires.webp'
import other from './Assets/other.jpeg'
import rail from './Assets/railwayslide.jpeg';
const slides = [
    { image: power, title: 'Power Transmission and Distribution' },
    { image: woven, title: 'Woven Mesh' },
    { image: weld, title: 'Weld Mesh Fence' },
    { image: gabions, title: 'Gabions' },
    { image: other, title: 'Other Welded Mesh' },
    { image: fence, title: 'Fence Add Ons' },
    { image: wires, title: 'Wires' },
    { image: rail, title: 'Railway Electrification Structures' }
];

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const settings = {
        infinite: true,
        slidesToShow: 3,
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
    };

    return (
        <div className="relative w-full -mb-20 md:mb-10">
            <button
                className="absolute left-14 hidden lg:block bottom-[20%] text-white bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer z-10 hover:bg-orange-600 transition-colors"
                onClick={() => document.querySelector('.slick-prev')?.click()}
            >
                <ChevronLeft />
            </button>

            <button
                className="absolute hidden lg:block left-14 bottom-[30%] text-white bg-orange-500 p-2 rounded-full shadow-lg cursor-pointer z-10 hover:bg-orange-600 transition-colors"
                onClick={() => document.querySelector('.slick-next')?.click()}
            >
                <ChevronRight />
            </button>

            <div className="relative h-[590px] lg:ml-40">
                <div className="absolute w-full max-w-screen overflow-hidden">
                    <Slider {...settings}>
                        {slides.map(({ image, title }, index) => (
                            <div 
                                key={index} 
                                className="transition-all duration-700 ease-in-out"
                                style={{ margin: 0, padding: 0 }}
                            >
                                <div 
                                    className={`
                                        relative overflow-hidden
                                        transition-all duration-700 ease-in-out
                                        ${index === activeIndex ? 'z-0' : 'z-10'}
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
                                            ${index === activeIndex  ? 'opacity-0' : 'opacity-75 bg-gray-900'}
                                        `} 
                                    />
                                    
                                    <div className={`
                                        relative
                                        transition-all duration-700 ease-in-out
                                        ${(index === activeIndex)
                                            ? 'lg:w-[560px] lg:h-[590px] md:w-[420px] md:h-[480px] sm:w-[360px] sm:h-[420px] w-[320px] h-[380px]' 
                                            : 'lg:w-[520px] lg:h-[540px] md:w-[380px] md:h-[440px] sm:w-[320px] sm:h-[380px] w-[280px] h-[340px]'
                                        }
                                    `}>
                                        <img
                                            src={image}
                                            alt={title}
                                            className={`
                                                absolute top-0 left-0 w-full h-full
                                                transition-all duration-700 ease-in-out object-fill
                                                ${index === activeIndex ? 'scale-70' : 'scale-100 brightness-50'}
                                                ${index === activeIndex  ? 'shadow-2xl' : ''}
                                            `}
                                        />
                                    </div>

                                    <div 
                                        className={`
                                            absolute inset-0 
                                            ${index === activeIndex  ? 'opacity-0' : 'opacity-60 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900'}
                                            transition-opacity duration-700
                                        `}
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 
                                            className={`
                                                text-primary-turquoise font-semibold
                                                transition-all duration-700 leading-tight
                                                max-w-[90%]
                                                lg:text-2xl md:text-xl sm:text-lg text-base
                                                ${index === activeIndex
                                                    ? 'opacity-100 translate-y-0' 
                                                    : 'opacity-50 translate-y-2'
                                                }
                                            `}
                                        >
                                            {title}
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