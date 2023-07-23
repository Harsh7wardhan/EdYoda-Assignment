import React, { useState } from 'react'
import './Pricing.css'
import limitedTimeIcon from '../../assets/limitedTimeIcon.png'
import razorpayIcon from '../../assets/razorpayIcon.png'
export const Pricing = () => {
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(179);
  const subscriptionFee = 18500;

  //To set the selected plan price
  const handleChange = (price) => {
    setSelectedPlanPrice(price)
  }

  return (
    <div className='pricing-container'>

      <div className='pricing-progress-bar'>
        <div className='progress-bar'>
          <button>1</button>
          <span>Sign Up</span>
        </div>
        <div className='progress-bar'>
          <button>2</button>
          <span>Subscribe</span>
        </div>
      </div>

      <h2 className='subscription-heading'>Select your subscription plan</h2>

      <form className='form-container'>

        <div className="form-inner-container expired-offer-container">
          <p className='legend'>offer expired</p>
          <div className='input-box'>
            <input type="radio" name="" id="plan1" checked={true} className='expired-plan-input' disabled={true} />
            <label htmlFor="plan1">12 Months Subscription</label>
          </div>
          <div className='input-detail-box'>
            <div className='input-total-box'>
              <span className='input-total'>Total</span>
              <span className='input-total-price'>₹99</span>
            </div>
            <div className='input-validity'>
              <span className='per-month'>₹8</span>
              <span className='month'>/mo</span>
            </div>
          </div>
        </div>

        <div className="form-inner-container recommended-plan">
          <p className='legend recommended'>recommended</p>
          <div className='input-box available-plan recommended-available-plan'>
            <input type="radio" name="pricing" id="plan2" checked={selectedPlanPrice === 179} onChange={() => handleChange(179)} />
            <i className="fa fa-solid fa-check"></i>
            <label htmlFor="plan2">12 Months Subscription</label>
          </div>
          <div className='input-detail-box'>
            <div className='input-total-box'>
              <span className='input-total'>Total</span>
              <span className='input-total-price'>₹179</span>
            </div>
            <div className='input-validity'>
              <span className='per-month'>₹15</span>
              <span className='month'>/mo</span>
            </div>
          </div>
        </div>

        <div className="form-inner-container">
          <div className='input-box available-plan'>
            <input type="radio" name="pricing" id="plan3" checked={selectedPlanPrice === 149} onChange={() => handleChange(149)} />
            <i className="fa fa-solid fa-check"></i>
            <label htmlFor="plan3">6 Months Subscription</label>
          </div>
          <div className='input-detail-box'>
            <div className='input-total-box'>
              <span className='input-total'>Total</span>
              <span className='input-total-price'>₹149</span>
            </div>
            <div className='input-validity'>
              <span className='per-month'>₹25</span>
              <span className='month'>/mo</span>
            </div>
          </div>
        </div>

        <div className="form-inner-container">
          <div className='input-box available-plan'>
            <input type="radio" name="pricing" id="plan4" checked={selectedPlanPrice === 99} onChange={() => handleChange(99)} />
            <i className="fa fa-solid fa-check"></i>
            <label htmlFor="plan4">3 Months Subscription</label>
          </div>
          <div className='input-detail-box'>
            <div className='input-total-box'>
              <span className='input-total'>Total</span>
              <span className='input-total-price'>₹99</span>
            </div>
            <div className='input-validity'>
              <span className='per-month'>₹33</span>
              <span className='month'>/mo</span>
            </div>
          </div>
        </div>

      </form>

      <p className='for-border'></p>

      <div className='subscription-fee'>
        <p>Subscription Fee</p>
        <p>₹{subscriptionFee.toLocaleString()}</p>
      </div>

      <div className='alert-box'>
        <div className='alert-box-inner'>
          <div className='alert-box-offer'>
            <p className='alert-header'>Limited time offer</p>
            <p>-₹{(subscriptionFee - selectedPlanPrice).toLocaleString()}</p>
          </div>

          <div className='offer-time'>
            <img src={limitedTimeIcon} alt="Icon" className='limited-time-icon' />
            <p>Offer valid till 25th Mar 2023</p>
          </div>
        </div>

      </div>

      <div className='subscription-tax'>
        <p><span className='tax-total-heading'>Total</span> (Incl. of 18% GST)</p>
        <h3 className='tax-total-amt'>₹{selectedPlanPrice}</h3>
      </div>

      <div className='pricing-buttons'>
        <button className='cancel-btn'>cancel</button>
        <button className='proceed-btn'>proceed to pay</button>
      </div>

      <div className='gateway-container'>
        <img src={razorpayIcon} alt="gateway" />
      </div>
    </div>
  )
}
