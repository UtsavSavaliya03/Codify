import React from 'react';
import './ProjectSlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProjectSlider() {

    const RowOne = ['/Assets/Images/row-1-1.webp', '/Assets/Images/row-1-2.webp', '/Assets/Images/row-1-3.webp', '/Assets/Images/row-1-4.webp', '/Assets/Images/row-1-5.webp'];
    const RowTwo = ['/Assets/Images/row-2-1.webp', '/Assets/Images/row-2-2.webp', '/Assets/Images/row-2-3.webp', '/Assets/Images/row-2-4.webp', '/Assets/Images/row-2-5.webp'];
    const RowThree = ['/Assets/Images/row-3-1.webp', '/Assets/Images/row-3-2.webp', '/Assets/Images/row-3-3.webp', '/Assets/Images/row-3-4.webp', '/Assets/Images/row-3-5.webp'];

    const settingsLTR = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        variableWidth: true,
        arrows: false,
        rtl: true
    };

    const settingsRTL = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: true,
        variableWidth: true,
        arrows: false,
    };

    return (
        <div className='project-slider-container'>
            <Slider {...settingsLTR}>
                {RowOne.map((url, index) => (
                    <div key={index} className='img-box'>
                        <div className='btn-box'>
                            <button className='btn-visit d-block'>Visit Project</button>
                            <button className='btn-details d-block mt-2'>Details</button>
                        </div>
                        <div className='img-wrapper'>
                            <img src={url} className='m-3 slider-img' alt={`Image ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
            <Slider {...settingsRTL}>
                {RowTwo.map((url, index) => (
                    <div key={index} className='img-box'>
                        <div className='btn-box'>
                            <button className='btn-visit d-block'>Visit Project</button>
                            <button className='btn-details d-block mt-2'>Details</button>
                        </div>
                        <div className='img-wrapper'>
                            <img src={url} className='m-3 slider-img' alt={`Image ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
            <Slider {...settingsLTR}>
                {RowThree.map((url, index) => (
                    <div key={index} className='img-box'>
                        <div className='btn-box'>
                            <button className='btn-visit d-block'>Visit Project</button>
                            <button className='btn-details d-block mt-2'>Details</button>
                        </div>
                        <div className='img-wrapper'>
                            <img src={url} className='m-3 slider-img' alt={`Image ${index + 1}`} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div >
    )
}
