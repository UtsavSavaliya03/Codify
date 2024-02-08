import React from 'react';
import './FramerCard.scss';

export default function FramerCard() {

    const CardData = [{ type: 'IMG', img: '/Assets/Images/row-3-3.webp' }, { type: 'IMG', img: '/Assets/Images/row-2-3.webp' }, { type: 'VID', vid: '/Assets/Videos/framer-vid.mp4' }, { type: 'IMG', img: '/Assets/Images/row-1-1.webp' }, { type: 'IMG', img: '/Assets/Images/row-1-3.webp' },];

    return (
        <div className='fram-card-container my-5'>
            {
                CardData?.map((card, index) => (
                    <div className='' key={index}>
                        {
                            card?.type == 'IMG' ? (
                                <div className='img-card m-2'>
                                    <img src={card?.img} className='h-100 w-100' alt='img' />
                                </div>
                            ) : (
                                <div className='vid-card m-2'>
                                    <video className='h-100 w-100' autoPlay loop muted playsInline   >
                                        <source src={card?.vid} type="video/mp4"></source>
                                    </video>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}
