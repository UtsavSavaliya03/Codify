import React from 'react';
import './FAQCard.scss';

export default function FAQCard(props) {

    const { id, question, answer } = props?.data;

    return (
        <div className='faq-card-container px-4 my-3'>
            <div className='d-flex align-items-center justify-content-between pt-3' id={id} data-toggle="collapse" data-target={`#collapse-${id}`} aria-controls={`collapse-${id}`}>
                <p className='question m-0 mb-3'>{question || ""}</p>
              <i className="plus-icon fa-light fa-plus fa-2x pb-4"></i>
            </div>
            <div id={`collapse-${id}`} className="collapse" aria-labelledby={id} data-parent="#accordionFAQ">
                <p className='answer m-0 mt-2 pb-3'>{answer || ""}</p>
            </div>
        </div>
    )
}
