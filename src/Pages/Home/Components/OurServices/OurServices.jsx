import React, { useState } from 'react';
import './OurServices.scss';

export default function OurServices() {

    const [activeCard, setActiveCard] = useState({ id: 'A1', title: 'Framer Development', description: 'Crafting digital excellence, one line of code at a time. Join us in the journey of Framer Development.', color: '#ecf0f3', border: '#d0dfe6', img: '/Assets/Images/service-1.svg', imgBorder: '#78909c' });
    const ServicesData = [
        { id: 'A1', title: 'Framer Development', description: 'Crafting digital excellence, one line of code at a time. Join us in the journey of Framer Development.', color: '#ecf0f3', border: '#d0dfe6', img: '/Assets/Images/service-1.svg', imgBorder: '#78909c' },
        { id: 'A2', title: 'Brand identity', description: `Elevate your brand with our strategic expertise. From concept to recognition, we'll define your unique identity.`, color: '#f3e5f5', border: '#e5d7e7', img: '/Assets/Images/service-2.webp', imgBorder: '#af7ffd' },
        { id: 'A3', title: 'Design system', description: 'Our digital marketing expertise drives growth, engages audiences, and maximizes your digital presence.', color: '#f9fbe7', border: '#e6e7d9', img: '/Assets/Images/service-3.webp', imgBorder: '#cede3f' },
        { id: 'A4', title: 'SEO', description: 'Our SEO strategies enhance rankings, boost traffic, and drive your website to the top', color: '#e6e7d9', border: '#f1dfdd', img: '/Assets/Images/service-4.svg', imgBorder: '#ffaa93' },
        { id: 'A5', title: 'Product design', description: 'Product design solutions that blend creativity and functionality, crafting experiences users love.', color: '#f1f8e9', border: '#f1dfdd', img: '/Assets/Images/service-5.svg', imgBorder: '#a2e701' },
        { id: 'A6', title: 'Animation', description: 'Bring your brand to life with captivating animations that engage, inform, and leave a lasting impression.', color: '#d4e2e8', border: '#d4e2e8', img: '/Assets/Images/service-6.webp', imgBorder: '#29b6f6' },
    ];

    return (
        <div className='service-container'>
            <div className="accordion" id='accordionService'>
                {
                    ServicesData.map((service, index) => (
                        <div className='w-100' key={index}>
                            <div onClick={() => setActiveCard(service)}>
                                <div className='px-4 mb-3 service-info-box' style={{ backgroundColor: `${activeCard?.id == service?.id ? service?.color : ''}`, borderColor: `${activeCard?.id == service?.id ? service?.border : ''}` }}>
                                    <div className='d-flex align-items-center py-2' id={service?.id} data-toggle="collapse" data-target={`#collapse-${service?.id}`} aria-controls={`collapse-${service?.id}`}>
                                        <div className='icon-wrapper' style={{ backgroundColor: service?.color }}>
                                            <img src='/Assets/Images/diamond.svg' height={20} alt='icon' />
                                        </div>
                                        <p className='title mb-0 ml-3'>{service?.title || ""}</p>
                                    </div>
                                    <div id={`collapse-${service?.id}1`} className={`collapse ${activeCard?.id == service?.id ? 'show' : ''}`} aria-labelledby={service?.id} data-parent="#accordionService">
                                        <p className='description mb-0 ml-5 pb-3'>{service?.description || ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='service-img-container pl-md-5'>
                {
                    ServicesData.map((service, index) => (
                        activeCard?.id == service?.id ? (
                            <div className='service-img-wrapper pt-4 pl-4 pt-md-5 pl-md-5' key={index} style={{ backgroundColor: `${activeCard?.id == service?.id ? service?.color : ''}`, borderColor: `${activeCard?.id == service?.id ? service?.border : ''}` }}>
                                <img src={service?.img} style={{ borderColor: `${activeCard?.id == service?.id ? service?.imgBorder : ''}` }} className='w-100' alt='img' />
                            </div>
                        ) : (null)
                    ))
                }
            </div>
        </div>
    )
}
