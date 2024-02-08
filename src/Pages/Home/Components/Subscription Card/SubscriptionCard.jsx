import React from 'react';
import './SubscriptionCard.scss';

export default function SubscriptionCard(props) {

    const { time, price, servicePoint } = props?.data;
    const isDarkTheme = props?.isDarkTheme;

    return (
        <div className='subscription-card-container col-md-4'>
            <div className={`${isDarkTheme ? 'card-dark' : 'card-light'} p-3`}>
                <p className='time-tag m-0'>{time || ''}</p>
                <p className='price-tag m-0'>$ {price || 0}<span className='text-muted'>/mo</span></p>
                <div className='border-top w-100 my-4'></div>
                {
                    servicePoint?.map((point, index) => (
                        <div className='d-flex my-2' key={index}>
                            {isDarkTheme ? (<div className='check-mark-wrapper mt-2'><img src='/Assets/Images/check-mark-yellow.svg' height={15} alt='check-mark' /></div>) : (<div className='check-mark-wrapper mt-2'><img src='/Assets/Images/check-mark.svg' height={15} alt='check-mark' /></div>)}
                            <p className='mb-1 ml-3 service-point'>{point || '-'}</p>
                        </div>
                    ))
                }
                <div className='mb-5 pt-4 pb-2'>
                    <button class={`button button--winona w-100 ${isDarkTheme ? 'button-green' : ''}`} data-text="Schedule a Call"><span>Schedule a Call</span></button>
                </div>
            </div>
        </div>
    )
}
