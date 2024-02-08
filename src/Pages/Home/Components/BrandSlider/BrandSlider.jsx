import React from 'react';
import './BrandSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function BrandSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className='brand-slider-container py-5'>
            <Slider {...settings}>
                <img src='/Assets/Images/ncr.png' className='mt-1' alt='Image' />
                <img src='/Assets/Images/monday.png' alt='Image' />
                <img src='/Assets/Images/message-bird.png' alt='Image' />
                <img src='/Assets/Images/mastercard.png' className='mt-1' alt='Image' />
                <img src='/Assets/Images/discord.png' className='mt-3' alt='Image' />
                <img src='/Assets/Images/lottie-files.png' className='mt-2' alt='Image' />
            </Slider>
        </div>
    )
}
