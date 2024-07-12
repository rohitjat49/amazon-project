
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarForm from './NavbarForm';
import FooterForm from './FooterForm';
import axios from 'axios';

const OrderNowComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = location.state || {};
  const [product, setProduct] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [savings, setSavings] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://ecommerce-vyte.onrender.com/getoneproduct/${productId}`);
        if (response.data && response.data._id === productId) {
          const productDetails = response.data;
          setProduct(productDetails);
          // Calculate final price and savings
          if (productDetails.price && productDetails.discount && productDetails.discount !== 0) {
            const discountAmount = (productDetails.price * productDetails.discount) / 100;
            const calculatedFinalPrice = productDetails.price - discountAmount;
            const calculatedSavings = discountAmount;
            setFinalPrice(Math.round(calculatedFinalPrice));
            setSavings(Math.round(calculatedSavings));
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

  useEffect(() => {
    console.log("Product ID:", productId); // Log productId to console
  }, [productId]);

  const handleAddToCart = () => {
    navigate('/payment-method', { state: { productId } }); // Navigate to payment-method page with product ID
  };

  return (
    <>
      <NavbarForm/>
      <div className='container'>
        <div className='fw-bold fs-2 mt-3'>Order Now</div>
        <div className='box mt-3 border border-1 p-2'>
          <div className='yellow'> 
            <p className='p-one'>One-time password required at the time of delivery</p>
          </div>  
        </div>

        <div className='box mt-3 border border-1 p-2'>
          <div className='yellow'> 
            <p className='p-one'> Get Extra Discount On Credit Card</p>
          </div>  
        </div>

        {product && (
          <div className='row mt-3'>
            <div className='col-6'>
              <p>Items</p>
              <p>Delivery</p>
              <p>Total</p>
              <p>Promotion Applied</p>
              <p className='fw-bold fs-6'>Order Total</p>
            </div>

            <div className='col-6 text-end'>
              <p>1</p>
              <p>₹0</p>
              <p>{product.price}</p>
              <p>{product.discount} % off</p>
              <p className='fw-bold fs-5'>{finalPrice}</p>
            </div>
          </div>
        )}

        <hr/>

        <div className='saving'>
          <p className='savingColor fw-bold fs-6'>Your Saving: UPTO {savings ? savings : 0}%</p>
          <ul>
            <li>Free Delivery</li>
            <li>Item Discount</li>
          </ul>
        </div>
        <hr/>

        <div className='pay'>
          <p className='savingColor fw-bold fs-6'>Pay with</p>
          <p className='pay-with'>Pay With Debit/Credit/ATM Card</p>
          <p className='pay-with'>Add Gift Card or Promo Card</p>

          <input className='py-2' type='text' placeholder='Unavailable'></input>
          <span className='px-3'>
            <button className='btn-pay py-2 px-3 text-white'> Apply</button>
          </span>
        </div>

        <div className='pra-text mt-2 mb-5 pb-5 fs-7'>
          <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
          <p>When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card or debit card), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
          <p>See Amazon.in's Return Policy.</p>
          <p className=''>Go to the Amazon.in homepage without completing your order.</p>
        </div>
      </div>
      <div className="container-fluid mt-5 place-button">
        <button
          className="btn btn-buy-now place-btn"
          onClick={handleAddToCart}
        >
          Place Your Order
        </button>
      </div>
      <FooterForm/>
    </>
  );
};

export default OrderNowComponent;

















