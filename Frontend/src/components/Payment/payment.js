import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Payment = () => {
  const [shipping, setShipping] = useState({ name: '', address: '', city: '', pinCode: '',});
  const [placeOrder, setPlaceOrder] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShipping((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPlaceOrder(true);
  };

  return (
    <div>
      <div className='main-container'>
        {placeOrder ? (
          <div className='success-container'>
            <p className='confirmation'>Order Confirmed !</p>
            <button type="button" className='payment-button'>
              <Link to="/" className="link-text">
                Go to Home
              </Link>
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className='payment-form'>
            <h2 className='form-heading'>Payment</h2>
            <div className='form-row'>
              <label className='form-label'>
                Name:
                <input
                  type="text"
                  name="name"
                  value={shipping.name}
                  onChange={handleInputChange}
                  className='form-input'
                  required
                />
              </label>
              <label className='form-label'>
                Address:
                <input
                  type="text"
                  name="address"
                  value={shipping.address}
                  onChange={handleInputChange}
                  className='form-input'
                  required
                />
              </label>
            </div>
            <div className='form-row'>
              <label className='form-label'>
                City:
                <input
                  type="text"
                  name="city"
                  value={shipping.city}
                  onChange={handleInputChange}
                  className='form-input'
                  required
                />
              </label>
              <label className='form-label'>
                Pin Code:
                <input
                  type="text"
                  name="pinCode"
                  value={shipping.pinCode}
                  onChange={handleInputChange}
                  className='form-input'
                  required
                />
              </label>
            </div>
            <h2 className='form-heading'>Card Details</h2>
            <div className='form-row'>
              <label className='form-label'>
                Enter mode of Payment:
                <select className='form-input'>
                  <option value='cards'>Credit / Debit Card</option>
                </select>
              </label>
              <label className='form-label'>
                Card Number:
                <input type='text'  className='form-input' required />
              </label>
            </div>
            <div className='form-row'>
              <label className='form-label'>
                Expiry Date:
                <input type="date" className='form-input' />
              </label>
              <label className='form-label'>
                Enter CVV:
                <input type="password" className='form-input' required />
              </label>
            </div>
            <button type="submit" className='payment-button'>Place Order</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Payment;
