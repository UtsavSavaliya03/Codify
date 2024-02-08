import React from 'react';
import './CustomerSlider.scss';
import Slider from "react-slick";

// Import css files Slick Slider (CSS)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomerSlider() {

    const bannerData = [
        { id: '1', img: '/Assets/Images/review-1.jpg', review: `Codify's Framer Development team is top-notch. They seamlessly integrated interactivity into our website, making it a standout in our industry. A great partner for success.`, name: 'Samantha R.', designation: 'Marketing Manager, Stellar Brands Inc.' },
        { id: '2', img: '/Assets/Images/review-2.jpg', review: `Codify's Framer Development services are truly exceptional. They transformed our project into a seamless and engaging user experience. I highly recommend their expertise.`, name: 'John M', designation: 'CEO, InnovateTech Solutions' },
        { id: '3', img: '/Assets/Images/review-3.jpg', review: `Working with Codify was a game-changer for our company. Their Framer Development expertise turned our ideas into a reality. We're thrilled with the results!`, name: 'Emma S', designation: 'Founder, TechForward Innovations' },
    ]

    let sliderSettings = {
        dots: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='review-slider-container'>
            <Slider {...sliderSettings}>
                {
                    bannerData?.map((banner, index) => (
                        <div key={index}>
                            <div className='row m-0 p-0'>
                                <div className='col-md-5'>
                                    <img className='review-img' src={banner?.img} alt='user-img' />
                                </div>
                                <div className='col-md-7 text-left'>
                                    <i className="fa-sharp fa-solid fa-quote-left fa-3x mb-4"></i>
                                    <p className='review-text'>{banner?.review}</p>

                                    <div className='customer-info pl-3 mt-5'>
                                        <p className='name m-0'>{banner?.name}</p>
                                        <p className='designation m-0'>{banner?.designation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
