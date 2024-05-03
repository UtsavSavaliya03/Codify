import React from 'react';
import './SuccessCard.scss';

export default function SuccessCard() {

    const SuccessData = [
        { title: 'Idea', description: 'We meet with your team to learn more about your project idea and goals. After that, our team will work together to create an action plan and proposal for your project.', img: '/Assets/Images/idea-bulb.svg', color: '#f1f8e9', border: '#dce7ce' },
        { title: 'Research', description: 'We will share a detailed questionnaire to analyze your business in-depth. After that, we will be able to create a tailor-made design to reach your business goals.', img: '/Assets/Images/search.svg', color: '#ecf0f3', border: '#d2e0e7' },
        { title: 'Web Design', description: 'We will design a mockup or prototype of your website and present it to you. Once with the initial mockup, we will start the revision process to perfect it.', img: '/Assets/Images/card.svg', color: '#f3e5f5', border: '#e6d8e8' },
        { title: 'No-code development', description: 'We develop websites using the best practices and standards. So you have a perfectly responsive, SEO-friendly, and highly conversion-oriented website.', img: '/Assets/Images/code.svg', color: '#feefdb', border: '#f0dfc7' },
        { title: 'Launch', description: 'When the project is completed, we will schedule a 2hr session to train your team on using, editing, and taking advantage of your new website.', img: '/Assets/Images/launch.svg', color: '#e1f5fe', border: '#e0ebed' },
        { title: 'Support', description: 'We keep a close relationship and communication with your team so we can help you with future design or development needs in the long term.', img: '/Assets/Images/support.svg', color: '#ecf0f3', border: '#dae7ed' },
    ];

    return (
        <div className='success-card-container'>
                {
                    SuccessData?.map((card, index) => (
                        <div className='success-card my-3 p-4' style={{ backgroundColor: card?.color, borderColor: card?.border }} key={index}>
                            <div className='d-flex'>
                                <img className='mt-1' src={card?.img} height={20} alt='icon' />
                                <div className='ml-3'>
                                    <p className='title'>{card?.title}</p>
                                    <p className='description m-0'>{card?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}
