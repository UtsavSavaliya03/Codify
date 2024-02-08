import React, { useState } from 'react';
import './Home.scss';
import Layout from '../../Components/Layout/Layout.jsx';
import FAQCard from './Components/FAQs/FAQCard.jsx';
import CustomerSlider from './Components/Customer Slider/CustomerSlider.jsx';
import SubscriptionCard from './Components/Subscription Card/SubscriptionCard.jsx';
import ProjectSlider from './Components/Project Slider/ProjectSlider.jsx';
import OurServices from './Components/OurServices/OurServices.jsx';
import SuccessCard from './Components/SuccessCard/SuccessCard.jsx';
import BenefitsCard from './Components/Benefits Card/BenefitsCard.jsx';
import BrandSlider from './Components/BrandSlider/BrandSlider.jsx';
import FramerCard from './Components/Framer Card/FramerCard.jsx';

export default function Home() {

  const [FaqsData, setFaqsData] = useState([
    { id: 1, question: 'How do I submit designs requests?', answer: 'You and your team can request design work through a shared board we will set up for you in Asana. You can request as many designs as you like.' },
    { id: 2, question: 'How does onboarding work?', answer: 'Your account manager will set up a call to discuss your design needs. After that, you’ll receive an invitation to your design board on Asana, along with instructions on how to add your design requests.' },
    { id: 3, question: 'How fast will I receive my designs?', answer: 'You can set your own deadlines for designs but on average, we deliver a design within a couple of days.' },
    { id: 4, question: 'Do you work at our company?', answer: 'It may feel like it but we do not work at your company however we do stay in close touch to make sure we provide the best service possible.' },
    { id: 5, question: `Why wouldn't I just hire a full-time designer?`, answer: 'A full-time designer can be expensive and hard to source. Your company may not have enough work to keep a full-time designer busy.' },
    { id: 6, question: 'Can I order a one-time service, like a logo?', answer: `We offer a combined All-In-One plan to help you with all your design needs. You’re welcome to upgrade for one month to get the designs you need, then return to your previous plan for the following month.` },
    { id: 7, question: 'What programs do you use for design?', answer: 'We work in a wide range of design software, including Figma, Photoshop, Illustrator, After Effects, Canva, and many others.' },
    { id: 8, question: `Are there any refunds if I don't like the service?`, answer: 'Because we deliver custom design work it’s not possible to issue a refund.' }
  ]);

  const [SubscriptionData, setSubscriptionData] = useState([
    { time: 'Part-time', price: '2450', servicePoint: ['Fast delivery & response', 'Pause / cancel anytime', 'Dedicated project manager', 'Easy to manage design requests', '1 request at the time', '24/7 Priority Support', 'SEO Marketing', 'E-commerce Integration', 'Dedicated Account Manager', 'Part-time availability of a designer / developer'] },
    { time: 'Full-time', price: '3950', servicePoint: ['Fast delivery & response', 'Pause / cancel anytime', 'Dedicated project manager', 'Easy to manage design requests', '1 request at the time', '24/7 Priority Support', 'SEO Marketing', 'E-commerce Integration', 'Dedicated Account Manager', 'Part-time availability of a designer / developer'] },
    { time: 'Your own team', price: '5450', servicePoint: ['Fast delivery & response', 'Pause / cancel anytime', 'Dedicated project manager', 'Easy to manage design requests', '2 request at the time', '24/7 Priority Support', 'SEO Marketing', 'E-commerce Integration', 'Dedicated Account Manager', 'Your own team of professional designers & developers'] },
  ]);

  return (
    <Layout>
      <div className='home-container'>

        {/* ------ Power by Framer - Container ------ */}
        <div className='power-by-framer-container'>
          <div className='border-wrapper pt-2'>
            <div className='off-white-bg pt-3'>

              {/* ------ Header ------ */}
              <div className='side-padding pb-5'>
                <div className='d-flex align-items-center header-container'>
                  <img src='/Assets/Logo/logo.png' height={35} alt='logo' />
                  <p className='title m-0 ml-3'>Codify</p>
                </div>
              </div>

              <div className='side-padding pt-5'>
                <div className='power-wrapper'>
                  <div className='d-flex align-items-center justify-content-center mb-3'>
                    <p className='title-tag m-0 px-4 py-1'>Power by Framer</p>
                  </div>
                  <p className='title'>Elevating Your Brand with Innovative Design</p>
                  <p className='description px-md-5'>At Codify, we blend artistry and strategy to create designs that not only captivate but also elevate.</p>
                  <div className='d-flex align-item-center justify-content-center mt-5'>
                    <button className="button button--winona button-black mr-3" data-text="Schedule a Call"><span>Schedule a Call</span></button>
                    <button className="button button--winona" data-text="Our work"><span>Our work</span></button>
                  </div>
                </div>
              </div>

              <div>
                <FramerCard />
              </div>

              <div className='mt-5'>
                <BrandSlider />
              </div>
            </div>
          </div>
        </div>

        {/* ------ Benefits - Container ------ */}
        <div className='benefits-container py-md-5'>
          <div className='side-padding my-5'>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <p className='title-tag m-0 px-4 py-1'>Benefits</p>
            </div>
            <div className='benefits-wrapper pb-2'>
              <p className='title'>Discover Why We Stand Out</p>
              <p className='description px-md-5'>Web design involves creating and designing websites, including layout, content, and user experience.</p>
            </div>
            <div className='mt-5'>
              <BenefitsCard />
            </div>
          </div>
        </div>

        {/* ------ Our services - Container ------ */}
        <div className='our-services-container py-5'>
          <div className='side-padding'>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <p className='title-tag m-0 px-4 py-1'>Our services</p>
            </div>
            <div className='service-title-wrapper mb-5'>
              <p className='title'>Expert Services That Define Our Excellence.</p>
              <p className='description px-md-5'>From creative design to technical solutions, our services define industry excellence.</p>
            </div>
            <div>
              <OurServices />
            </div>
          </div>
        </div>

        {/* ------ Navigating Success - Container ------ */}
        <div className='navigating-success-container py-5'>
          <div className='side-padding'>
            <div className='row m-0 px-0 py-md-5'>
              <div className='col-md-6 pr-md-5'>
                <div className='d-flex align-items-center'>
                  <p className='title-tag m-0 px-4 py-1'>Navigating Success Together</p>
                </div>
                <div className='mt-4 mr-md-3'>
                  <p className='title'>We lead you through every step</p>
                  <p className='description'>From creative design to technical solutions, our services define industry excellence.</p>
                </div>
              </div>
              <div className='col-md-6 pl-md-5'>
                <SuccessCard />
              </div>
            </div>
          </div>
        </div>

        {/* ------ Project Info - Container ------ */}
        <div className='project-info-container pt-5'>
          <div className='side-padding pt-md-5'>
            <div>
              <p className='title'>We lead you through every step</p>
              <p className='description pb-2'>From creative design to technical solutions, our services define industry excellence.</p>
              <div className='mt-4 mb-5 pb-5'>
                <button class='button button--winona button-green' data-text="Schedule a Call"><span>Schedule a Call</span></button>
              </div>
            </div>
          </div>
          <div>
            <ProjectSlider />
          </div>
        </div>


        {/* ------ Happy Customers - Container ------ */}
        <div className='customers-container pt-md-5'>
          <div className='side-padding my-5'>
            <div className='customers-wrapper mb-5'>
              <p className='title'>Our happy customers</p>
              <p className='description'>From creative design to technical solutions, our services define industry excellence.</p>
            </div>
            <div className='py-md-5'>
              <CustomerSlider />
            </div>
          </div>
        </div>


        {/* ------ Your Growth - Container ------ */}
        <div className='growth-container'>
          <div className='side-padding'>
            <div className='d-flex align-items-center justify-content-center mb-3'>
              <p className='title-tag m-0 px-4 py-1'>Pricing</p>
            </div>
            <p className='title'>Unlock Your Growth</p>
            <div className='row m-0 p-0 mt-5'>
              {
                SubscriptionData?.map((plan, index) => (
                  <SubscriptionCard data={plan} key={index} isDarkTheme={index % 2 != 0} />
                ))
              }
            </div>
            <div className='design-guaranteed-box mx-3 my-5 p-3 p-md-4'>
              <div className='check-mark-box-wrapper'>
                <img src='/Assets/Images/check-mark-box.png' height={34} alt='icon' />
              </div>
              <div className='ml-4'>
                <p className='title mb-3'>Designs you'll love, guaranteed!</p>
                <p className='description m-0'>If you're not happy with our designs in the first 14 days, we'll refund the amount in full.</p>
              </div>
            </div>

            <div className='row m-0 p-0 call-description mb-5'>
              <div className='col-md-4 pr-md-5'>
                <p className='call-title m-0'>What Awaits You When You Book a Call?</p>
              </div>
              <div className='col-md-8'>
                <div className='row m-0 p-0'>
                  <div className='col-md-4'>
                    <div className='icon-wrapper-purple mb-3'></div>
                    <p className='title mb-1'>Introduction call</p>
                    <p className='description'>Free 30-minute video intro call, first meeting on us.</p>
                  </div>
                  <div className='col-md-4'>
                    <div className='icon-wrapper-pink mb-3'></div>
                    <p className='title mb-1'>Design board</p>
                    <p className='description'>Your company gains exclusive access to a dedicated design board.</p>
                  </div>
                  <div className='col-md-4'>
                    <div className='icon-wrapper-green mb-3'><i class="fa-solid fa-sparkles"></i></div>
                    <p className='title mb-1'>Request designs</p>
                    <p className='description'>Begin with your initial design request for the journey!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------ FAQs - Container ------ */}
        <div className='faq-container py-5'>
          <div className='side-padding mb-5'>
            <p className='main-title mb-5'>FAQs</p>
            <div className='faq-wrapper'>
              <div className="accordion" id='accordionFAQ'>
                {
                  FaqsData?.map((faq, index) => (
                    <FAQCard key={index} data={faq} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        {/* ------ Schedule a Call - Container ------ */}
        <div className='call-container py-5'>
          <div className='side-padding my-5'>
            <div className='call-wrapper'>
              <p className='title'>We make your SaaS business shine</p>
              <p className='description'>Book a call to see how Perspective Design can help elevate your company's designs to the next level.</p>
              <div className='d-flex align-item-center justify-content-center mt-5'>
                <button className="button button--winona" data-text="Schedule a Call"><span>Schedule a Call</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
