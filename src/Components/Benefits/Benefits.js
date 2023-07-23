import React from 'react'
import './Benefits.css'
import coursesIcon from '../../assets/coursesIcon.png';
import hoursIcon from '../../assets/hoursIcon.png';
import liveIcon from '../../assets/liveIcon.png';
import scholarshipIcon from '../../assets/scholarshipIcon.png';
import noAdsIcon from '../../assets/noAdsIcon.png'

export const Benefits = () => {
  return (
    <div className='benefits-container'>
      <h2 className='header-title'>Access curated courses worth ₹ <span className='old-price'>18500</span> at just <span className='new-price'>₹ 99</span> per year!</h2>
      <ul className='benefit-list'>
        <li className='benefit-item'>
          <img src={coursesIcon} alt="Icon" className='benefit-icon' />
          <p className='benefit-desc'>
            <span className='highlight-benefit'>
              100+
            </span>
            Job relevant courses
          </p>
        </li>
        <li className='benefit-item'>
          <img src={hoursIcon} alt="Icon" className='benefit-icon' />
          <p className='benefit-desc'>
            <span className='highlight-benefit'>
              20,000+
            </span>
            Hours of content
          </p>
        </li>
        <li className='benefit-item'>
          <img src={liveIcon} alt="Icon" className='benefit-icon' />
          <p className='benefit-desc'>
            <span className='highlight-benefit'>
              Exclusive
            </span>
            webinar access
          </p>
        </li>
        <li className='benefit-item'>
          <img src={scholarshipIcon} alt="Icon" className='benefit-icon' />
          <p className='benefit-desc'>
            Scholarship wort
            <span className='highlight-benefit'>
              ₹ 94500
            </span>
          </p>
        </li>
        <li className='benefit-item'>
          <img src={noAdsIcon} alt="Icon" className='benefit-icon' />
          <p className='benefit-desc'>
            <span className='highlight-benefit'>
              Ad Free
            </span>
            learning experience
          </p>
        </li>
      </ul>
    </div>
  )
}
