
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarForm from "./NavbarForm";
import FooterForm from "./FooterForm";
import { useLocation, useNavigate } from 'react-router-dom';

const OtpComponent = () => {
  const [product, setProduct] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { cardHolderName, productId } = location.state || {};

  useEffect(() => {
    if (location.state && location.state.productId) {
      setProduct(location.state.productId);
    } else {
      console.error("Product ID is missing.");
    }
  }, [location.state]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://ecommerce-vyte.onrender.com/getoneproduct/${productId}`);
        if (response.data && response.data._id === productId) {
          const productDetails = response.data;
          setProduct(productDetails);
          if (productDetails.price && productDetails.discount && productDetails.discount !== 0) {
            const discountAmount = (productDetails.price * productDetails.discount) / 100;
            const calculatedFinalPrice = productDetails.price - discountAmount;
            const calculatedSavings = discountAmount;
            setFinalPrice(Math.round(calculatedFinalPrice));
          }
        } else {
          console.error("Product ID mismatch or no product data found.");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const handleChange = (e) => {
    const input = e.target.value;
    const sixDigitNumber = /^\d{0,6}$/;
    if (sixDigitNumber.test(input)) {
      setOtp(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp.match(/^\d{6}$/)) {
      setError('OTP must be a 6-digit number');
      setPopupMessage('Invalid OTP. Please enter a valid 6-digit OTP or click Resend OTP to receive a new one.');
      setShowPopup(true);
      return;
    }

    try {
      const response = await fetch('https://ecommerce-vyte.onrender.com/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, cardHolderName, productId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('OTP verified successfully', data);

      setOtp('');
      setError('');
      setPopupMessage('Invalid OTP, New OTP Resent Please Enter New OTP!');
      setShowPopup(true);
    } catch (error) {
      console.error('There was a problem with the OTP verification:', error);
      setPopupMessage('OTP verification failed. Please try again.');
      setShowPopup(true);
      setError('OTP verification failed. Please try again.');
    }
  };

  return (
    <>
      <NavbarForm />
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <p>Paying To</p>
            <p>TOTAL AMOUNT</p>
          </div>
          <div className="col-6">
            <p>AMAZON</p>
            <p>{finalPrice}</p>
          </div>
        </div>
        <hr />
        <div className="text-center fw-bold ">Verification Required</div>
        <div className="text-center">
          To continue, complete this verification step. We've sent an OTP to
          your mobile number. Please enter it below to complete verification
        </div>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-3">
            <label htmlFor="otp" className="form-label">
              Enter OTP
            </label>
            <input
              type="text"
              className={`form-control ${error ? "is-invalid" : ""}`}
              id="otp"
              value={otp}
              onChange={handleChange}
              placeholder="Enter the 6-digit OTP"
            />
            {error && <div className="invalid-feedback">{error}</div>}
          </div>
          <button type="submit" className="mt-2 btn-buy-now place-btn w-100">
            Continue
          </button>
          {/* <button type="button" className="mt-2 btn-resend-otp place-btn w-100" onClick={() => {
            setPopupMessage('New OTP resent successfully!');
            setShowPopup(true);
            // Add logic here to resend OTP
          }}>
            Resend OTP
          </button> */}
        </form>
        <div className="text-center mt-3">
          Not received the code? Please resend in Resend Otp
        </div>
      </div>
      <div>
        <img src="/img/otppage.png" alt="" width="100%"/>
      </div>
      <FooterForm />

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={() => setShowPopup(false)} className="btn-buy-now">OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default OtpComponent;













