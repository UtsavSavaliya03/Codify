import React from 'react';
import './Footer.scss';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-top-belt py-2'>
        <marquee>
          <div className='d-flex align-items-center py-1'>
            <div className='d-flex align-items-center'><img src='/Assets/Images/flash-icon.png' className='mx-5' height={20} alt='logo' /><p className='m-0 title'>Web Design</p></div>
            <div className='d-flex align-items-center'><img src='/Assets/Images/flash-icon.png' className='mx-5' height={20} alt='logo' /><p className='m-0 title'>Branding</p></div>
            <div className='d-flex align-items-center'><img src='/Assets/Images/flash-icon.png' className='mx-5' height={20} alt='logo' /><p className='m-0 title'>Product design</p></div>
            <div className='d-flex align-items-center'><img src='/Assets/Images/flash-icon.png' className='mx-5' height={20} alt='logo' /><p className='m-0 title'>No-code development</p></div>
            <div className='d-flex align-items-center'><img src='/Assets/Images/flash-icon.png' className='mx-5' height={20} alt='logo' /><p className='m-0 title'>Digital marketing</p></div>
            <div className='d-flex align-items-center'><img src='/Assets/Images/flash-icon.png' className='mx-5' height={20} alt='logo' /><p className='m-0 title'>Framer Partner</p></div>
          </div>
        </marquee>
      </div>
      <div className='side-padding mb-5'>
        <div className='row m-0 p-0 my-5'>
          <div className='col-md-5'>
            <div className='d-flex align-items-center'>
              <img src='/Assets/Logo/logo.png' height={40} alt='logo' />
              <p className='title m-0 ml-3'>Codify</p>
            </div>
            <p className='descriptions m-0 mt-4'>Your Ultimate Task Management Solution for Enhanced Productivity and Efficiency</p>
            <div className='d-flex align-items-center mt-5'>
              <div className='social-icon-wrapper p-1 mr-2'>
                <img src='/Assets/Images/twitter.svg' alt='icon' />
              </div>
              <div className='social-icon-wrapper p-1 mr-2'>
                <img src='/Assets/Images/globe.svg' alt='icon' />
              </div>
              <div className='social-icon-wrapper p-1 mr-2'>
                <img src='/Assets/Images/instagram.svg' alt='icon' />
              </div>
              <div className='social-icon-wrapper p-1'>
                <img src='/Assets/Images/linkedin.svg' alt='icon' />
              </div>
            </div>
          </div>
          <div className='col-md-7 mt-md-0 mt-5'>
            <div className='row m-0 p-0 footer-link'>
              <div className='col-md-4'>
                <p className='title mb-2'>Company</p>
                <p className='link mb-2'>Home</p>
                <p className='link mb-2'>About</p>
                <p className='link mb-2'>Contact</p>
                <p className='link mb-2'>Our work</p>
                <p className='link mb-2'>Careers</p>
              </div>
              <div className='col-md-4'>
                <p className='title mb-2'>Services</p>
                <p className='link mb-2'>Framer development</p>
                <p className='link mb-2'>Brand identiy</p>
                <p className='link mb-2'>Design system</p>
              </div>
              <div className='col-md-4'>
                <p className='title mb-2'>Resources</p>
                <p className='link mb-2'>Blog</p>
                <p className='link mb-2'>Help center</p>
                <p className='link mb-2'>Affiliate program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-belt mt-5'>
        <div className='side-padding'>
          <div className='row m-o p-o'>
            <div className='col-md-8'>
              <div className='d-flex align-items-center flex-wrap footer-link'>
                <p className='link m-0 mr-4 my-2'>Privacy Policy</p>
                <p className='link m-0 mr-4 my-2'>Licensing</p>
                <p className='link m-0 mr-4 my-2'>Refund Policy</p>
                <p className='link m-0 my-2'>Terms of Use</p>
              </div>
            </div>
            <div className='col-md-4'><p className='my-2 tandc-line text-right'>© 2023 Codify INC. All rights reserved.</p></div>
          </div>
        </div>
      </div>
    </div >
  )
}