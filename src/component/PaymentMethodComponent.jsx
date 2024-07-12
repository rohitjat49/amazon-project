

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import NavbarForm from './NavbarForm';
import FooterForm from './FooterForm';

const PaymentMethodComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productId, setProductId] = useState(null); // State to hold the product ID
  
  useEffect(() => {
    // Extract productId from location state and set it in the component state
    if (location.state && location.state.productId) {
      setProductId(location.state.productId);
      console.log("Product ID:", location.state.productId); // Log productId to console
    }
  }, [location.state]);

  const handleContinue = () => {
    // Pass the productId to the next page
    navigate("/card-debit", { state: { productId: productId } });
  };

  return (
    <>
      <NavbarForm />
      <div className='container mt-4'>
        <div className="fw-bold fs-5 mt-2">Select A Payment Method</div>
        <div className='payment-img d-flex justify-content-between align-items-center'>
          <input type='radio' name id checked/>
          <img src='/img/download.png' width="100%" alt='' />
        </div>
        <div className='card p-2'>
          <p>Add Debit/Credit/ATM Card</p>
          <p>You can save your cards as per new RBI guidelines. </p>
        </div>
        <div className='options mt-3'>
          <div className='emi p-2 d-flex justify-content-start align-items-center'>
            <input type='radio' name id disabled />
            <p className='px-2 mb-0'>EMI Unavailable Why?</p>
          </div>
          <div className='pay p-2 d-flex justify-content-start align-items-center'>
            <input type='radio' name id disabled />
            <p className='px-2 mb-0'>Pay on Delivery</p>
          </div>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-buy-now place-btn"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
        <div className='img mt-2 bg-white'>
          <img src='/img/protection.png' alt='' width="100%" />
        </div>
      </div>
      <div className="mt-3">
        <FooterForm />
      </div>
    </>
  );
};

export default PaymentMethodComponent;

