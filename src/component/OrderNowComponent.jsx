import React from 'react'
import NavbarForm from './NavbarForm'
import { useNavigate } from "react-router-dom";
import FooterForm from './FooterForm';

const OrderNowComponent = () => {
  const navigate = useNavigate();
  return (
   <>
   <NavbarForm/>
   <div className='container'>
   <div className='fw-bold fs-2 mt-3'>Order Now</div>
   <div className='box mt-3 border border-1 p-2'>
    <div className='yellow '> 
    <p className='p-one'>One-time password required at the time of delivery</p>
    </div>  
   </div>



   {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
    <p>address</p>
   </div> */}


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
            <p>₹1500</p>
            <p>-75% off</p>
            <p className='fw-bold fs-5'>₹1500</p>
        </div>
   </div>
   <hr/>

   <div className='saving'>
    <p className='savingColor fw-bold fs-6'>Your Saving: UPTO 96% </p>
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

   {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
    <p>address</p>
   </div> */}

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
              onClick={() => {
                navigate("/payment-method");
              }}
             
            >
              Place Your Order
            </button>
          </div>
          <FooterForm/>
   
   </>
  )
}

export default OrderNowComponent

// import React, { useState, useEffect } from 'react';
// import NavbarForm from './NavbarForm';
// import { useNavigate } from 'react-router-dom';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const [offerPrice, setOfferPrice] = useState(0);
//   const [discount, setDiscount] = useState(0);

//   useEffect(() => {
//     // Fetch product data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://ecommerce-ryoy.onrender.com/getproduct');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         // Assuming data contains the price and discount information
//         const price = data.price;
//         const discount = data.discount;
//         const calculatedOfferPrice = price - (price * (discount / 100));
//         setOfferPrice(calculatedOfferPrice);
//         setDiscount(discount);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <NavbarForm />
//       <div className='container'>
//         <div className='fw-bold fs-2 mt-3'>Order Now</div>
//         {/* Other components */}
//         <div className='row mt-3'>
//           <div className='col-6'>
//             <p>Items</p>
//             {/* Other details */}
//             <p className='fw-bold fs-6'>Order Total</p>
//           </div>
//           <div className='col-6 text-end'>
//             <p>1</p>
//             {/* Other details */}
//             <p className='fw-bold fs-5'>₹{offerPrice}</p> {/* Display offer price */}
//           </div>
//         </div>
//         <hr />
//         <div className='saving'>
//           <p className='savingColor fw-bold fs-6'>Your Saving: UPTO 96% </p>
//           <ul>
//             <li>Free Delivery</li>
//             <li>Item Discount</li>
//             {/* Display applied promotion */}
//             <li>{discount}% off</li>
//           </ul>
//         </div>
//         <hr />
//         {/* Other components */}
//         <div className='container-fluid mt-5 place-button'>
//           <button
//             className='btn btn-buy-now place-btn'
//             onClick={() => {
//               navigate('/payment-method');
//             }}
//           >
//             Place Your Order
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderNowComponent;
