import React from 'react';
import './BenefitsCard.scss';

export default function BenefitsCard() {

    const BenefitsData = [
        { title: 'Expertise in Specialized B2B Design', description: 'Elevate your B2B brand with specialized design expertise, enhancing industry presence.', img: '/Assets/Images/specialized-b2b.png', color: '#feefdb', border: '#f0dec6' },
        { title: 'Optimized Sites for Ranking ', description: 'Dominate search results with our precision-tailored sites designed for top rankings and visibility.', img: '/Assets/Images/optimized-sites.png', color: '#ecf0f3', border: '#d0dfe6' },
        { title: 'Scale and Thrive with Framer', description: `Expand and flourish with Framer's innovation and design expertise, propelling your success.`, img: '/Assets/Images/scale-and-thrive.png', color: '#f1f8e9', border: '#dce7ce' }
    ];

    return (
        <div className='benefits-card-container'>
            <div className='row m-0 p-0'>
                {
                    BenefitsData?.map((benefits, index) => (
                        <div key={index} className='col-md-4'>
                            <div className='benefits-card py-4 m-2' style={{ backgroundColor: benefits?.color, borderColor: benefits?.border }}>
                                <div className='img-wrapper'>
                                    <img src={benefits?.img} className='w-100' alt='img' />
                                </div>
                                <div className='px-md-4 px-3 py-2 mt-5'>
                                    <p className='title px-md-2'>{benefits?.title}</p>
                                    <p className='description px-md-2'>{benefits?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
