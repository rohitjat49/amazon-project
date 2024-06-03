// import React from 'react'
// import NavbarForm from './NavbarForm'
// import { useNavigate } from "react-router-dom";
// import FooterForm from './FooterForm';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   return (
//    <>
//    <NavbarForm/>
//    <div className='container'>
//    <div className='fw-bold fs-2 mt-3'>Order Now</div>
//    <div className='box mt-3 border border-1 p-2'>
//     <div className='yellow '> 
//     <p className='p-one'>One-time password required at the time of delivery</p>
//     </div>  
//    </div>



//    {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
//     <p>address</p>
//    </div> */}


//    <div className='row mt-3'>
    // <div className='col-6'>
    //     <p>Items</p>
    //     <p>Delivery</p>
    //     <p>Total</p>
    //     <p>Promotion Applied</p>
    //     <p className='fw-bold fs-6'>Order Total</p>
    //     </div>

//         <div className='col-6 text-end'>
//             <p>1</p>
//             <p>₹0</p>
//             <p>₹1500</p>
//             <p>-75% off</p>
//             <p className='fw-bold fs-5'>₹1500</p>
//         </div>
//    </div>
//    <hr/>

//    <div className='saving'>
//     <p className='savingColor fw-bold fs-6'>Your Saving: UPTO 96% </p>
//     <ul>
//         <li>Free Delivery</li>
//         <li>Item Discount</li>
//     </ul>
//    </div>
//    <hr/>

//    <div className='pay'>
//     <p className='savingColor fw-bold fs-6'>Pay with</p>
//     <p className='pay-with'>Pay With Debit/Credit/ATM Card</p>
//     <p className='pay-with'>Add Gift Card or Promo Card</p>

//     <input className='py-2' type='text' placeholder='Unavailable'></input>
//     <span className='px-3'>
//     <button className='btn-pay py-2 px-3 text-white'> Apply</button>
//     </span>
//    </div>

//    {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
//     <p>address</p>
//    </div> */}

//    <div className='pra-text mt-2 mb-5 pb-5 fs-7'>
//     <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
//     <p>When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card or debit card), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
//     <p>See Amazon.in's Return Policy.</p>
//     <p className=''>Go to the Amazon.in homepage without completing your order.</p>
//    </div>



//    </div>
//    <div className="container-fluid mt-5 place-button">
//             <button
//               className="btn btn-buy-now place-btn"
//               onClick={() => {
//                 navigate("/payment-method");
//               }}
             
//             >
//               Place Your Order
//             </button>
//           </div>
//           <FooterForm/>
   
//    </>
//   )
// }

// export default OrderNowComponent

// import React, { useState, useEffect } from 'react';
// import NavbarForm from './NavbarForm';
// import { useNavigate, useParams } from 'react-router-dom';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const [offerPrice, setOfferPrice] = useState(0);
//   const [discount, setDiscount] = useState(0);
//   const [id] = useParams

//   useEffect(() => {
//     // Fetch product data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://ecommerce-ryoy.onrender.com/getproduct${id}`);
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
//         <div className='pay'>
//     <p className='savingColor fw-bold fs-6'>Pay with</p>
//     <p className='pay-with'>Pay With Debit/Credit/ATM Card</p>
//     <p className='pay-with'>Add Gift Card or Promo Card</p>

//     <input className='py-2' type='text' placeholder='Unavailable'></input>
//     <span className='px-3'>
//     <button className='btn-pay py-2 px-3 text-white'> Apply</button>
//     </span>
//    </div>

//    {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
//     <p>address</p>
//    </div> */}

//    <div className='pra-text mt-2 mb-5 pb-5 fs-7'>
//     <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
//     <p>When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card or debit card), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
//     <p>See Amazon.in's Return Policy.</p>
//     <p className=''>Go to the Amazon.in homepage without completing your order.</p>
//    </div>
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


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Navbarcomponent from './Navbarcomponent';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [finalPrice, setFinalPrice] = useState(null); 
//   const [savings, setSavings] = useState(null); 
//   const [minutes, setMinutes] = useState(15); // Set initial time in minutes
//   const [seconds, setSeconds] = useState(0);  // Set initial time in seconds
//   const [isExpired, setIsExpired] = useState(false);
//   const { state } = useLocation();
//   const id = state ? state._id : null;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get(`https://ecommerce-ryoy.onrender.com/getoneproduct/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         console.log('API Response:', response.data); // Log API response

//         if (response.data && response.data.upload && response.data.upload.length > 0) {
//           setData(response.data);
//           setError(null);
//         } else {
//           setError('No image data found in the API response.');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Failed to fetch product data. Please try again later.');
//       }
//     };

//     if (id) {
//       fetchData();
//     }
//   }, [id]);

//   useEffect(() => {
//     if (data && data.price && data.discount && data.discount !== 0) {
//       const discountAmount = (data.price * data.discount) / 100; 
//       const finalPrice = data.price - discountAmount; 
//       const savings = discountAmount; 
      
//       setFinalPrice(Math.round(finalPrice));  
//       setSavings(Math.round(savings));        
//     }
//   }, [data]);

//   useEffect(() => {
//     if (minutes === 0 && seconds === 0) {
//       setIsExpired(true); // Set expired state when timer ends
//       return;
//     }

//     const timer = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       } else if (seconds === 0) {
//         if (minutes === 0) {
//           clearInterval(timer);
//         } else {
//           setMinutes(minutes - 1);
//           setSeconds(59);
//         }
//       }
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup the interval on component unmount
//   }, [minutes, seconds]);


//   const handleAddToCart = () => {
//     navigate('/card-form', { state: { productId: id } }); // Navigate to card-form page with product ID
//   };

//   const handleBuyNow = () => {
//     navigate('/card-form', { state: { productId: id } }); // Navigate to card-form page with product ID
//   };

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <>
//       <Navbarcomponent />
//       <div className="container">
//         {data.upload && data.upload.length > 0 ? (
//           <div>
//           <Slider {...settings}>
//             {data.upload.slice(0, 4).map((image, index) => (
//               <div key={index}>
//                 <img src={image.url} className="product-image mt-2" alt={`Product Image ${index}`} />
//               </div>
//             ))}
//           </Slider>
//           {/* <div className="other-images">
//                 {data.upload.slice(4).map((image, index) => (
//                     <div key={index} className="thumbnail-image">
//                         <img src={image.url} alt={`Thumbnail ${index}`} />
//                     </div>
//                 ))}
//             </div> */}

//           </div>

          
//         ) : (
//           <div>No images found for this product.</div>
//         )}
//         <div className="d-flex justify-content-between">
//           <div className="offer-badge fw-bold">{data.discount}%</div>
//         </div>
//         {/* <div className="px-0 font-weight-bold text-black mt-2">
//           <div className="product-title">{data.description}</div>
//         </div>
//         <div className="px-0 product-price">
//           <div className="buyingPrice font-weight-bold">
//             <span className="symbol">&#8377;</span>
//             <span className="price fw-bold ">
//               {Math.round(data.price - (data.price * data.discount) / 100)}
//             </span>
//           </div>
//           <div className="flex">
//             <div className="savings text-success">
//               You save: &#8377;{Math.round((data.price * data.discount) / 100)}
//             </div>
//           </div>
//         </div> */}
//         <div className='mt-5'>
//          <div className="px-0 font-weight-bold text-black mt-2">
//           <div className="product-title">{data.description}</div>
//         </div>

//         <div className="px-0 product-price">
//           <div className="buyingPrice font-weight-bold">
//             <span className="symbol">&#8377;</span>
//             <span className="price fw-bold ">{finalPrice}</span>
//           </div>
//           <div className="flex">
//             <div className="mrpPrice">
//               <span className="symbol">MRP: </span>
//               <span className="strike text-decoration-line-through">
//                 &#8377;{data.price}
//               </span>
//               <span className="savePrice text-danger"> Save &#8377;{savings}</span>
//             </div>
//           </div>
//           <div className="priceimg">
//             <img src="img/prime11.png" height="25px" weight="77px" alt="Prime" />
//           </div>
//         </div>
//       </div>
//       </div>

//       <div className="container-fluid mt-2">
//         <div className='retunsImg'>
//           <img src='/img/alldelivered.png' width="100%"/>
//         </div>
//       </div>
//       <div className="offerEnd text-center py-3">
//         <h4>
//           {isExpired ? (
//             "Today's sale ended"
//           ) : (
//             <>
//               Offer ends in
//               <span className="offerTimer">
//                 {`${minutes < 10 ? '0' : ''}${minutes}min ${seconds < 10 ? '0' : ''}${seconds}sec`}
//               </span>
//             </>
//           )}
//         </h4>
//       </div>

//       <div className="other-images">
//                 {data.upload.slice(4).map((image, index) => (
//                     <div key={index} className="thumbnail-image">
//                         <img src={image.url} width="100%" alt={`Thumbnail ${index}`} />
//                     </div>
//                 ))}
//             </div>
       
//             <div className='footer mt-3 mb-5 pb-5'>
//         <img src='/img/footerimg.png' alt='' width="100%"/>
//       </div>


//       <div className="container-fluid mt-5 fixed-bottom">
//         <div className="row">
//           <div className="col-6 text-center">
//             <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//           </div>
//           <div className="col-6 text-center">
//             <button className="btn btn-buy-now btn-yellow"  onClick={handleBuyNow}>
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrderNowComponent;

// import React, { useState, useEffect } from 'react';
// import NavbarForm from './NavbarForm';
// import FooterForm from './FooterForm';
// import { useNavigate } from 'react-router-dom';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const productId = 'your_product_id'; // Replace 'your_product_id' with the actual ID

//   useEffect(() => {
//     console.log("Fetching product details for ID:", productId);
//     fetchProductDetails();
//   }, []);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`https://ecommerce-ryoy.onrender.com/getproduct?id=${productId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch product details');
//       }
//       const data = await response.json();
//       console.log("Product details:", data);
//       setProduct(data);
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     }
//   };

//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="fw-bold fs-2 mt-3">Order Now</div>
//         {/* Your existing JSX for order details */}
//         {product && (
//           <div className="row mt-3">
//             <div className="col-6">
//               <p>Items</p>
//               <p>Delivery</p>
//               <p>Total</p>
//               <p>Promotion Applied</p>
//               <p className="fw-bold fs-6">Order Total</p>
//             </div>
//             <div className="col-6 text-end">
//               <p>{product.items}</p>
//               <p>{product.delivery}</p>
//               <p>₹{product.price}</p>
//               <p>{product.promotion}</p>
//               <p className="fw-bold fs-5">₹{product.orderTotal}</p>
//             </div>
//           </div>
//         )}
//         {/* Your existing JSX for saving and payment */}
//         <div className="container-fluid mt-5 place-button">
//           <button className="btn btn-buy-now place-btn" onClick={() => navigate("/payment-method")}>
//             Place Your Order
//           </button>
//         </div>
//       </div>
//       <FooterForm />
//     </>
//   );
// };

// export default OrderNowComponent;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import NavbarForm from './NavbarForm';
// import FooterForm from './FooterForm';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [finalPrice, setFinalPrice] = useState(null); 
//   const [savings, setSavings] = useState(null); 
//   const { state } = useLocation();
//   const [product, setProduct] = useState(null);
//   const productId = 'your_product_id'; // Replace 'your_product_id' with the actual ID
//   const id = state ? state._id : null;

  


//   useEffect(() => {
//     console.log("Fetching product details for ID:", productId);
//     fetchProductDetails();
//   }, []);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await fetch(`https://ecommerce-ryoy.onrender.com/getproduct?id=${productId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch product details');
//       }
//       const data = await response.json();
//       console.log("Product details:", data);
//       setProduct(data.photos[0]); // Assuming you want to display details of the first product only
//     } catch (error) {
//       console.error('Error fetching product details:', error);
//     }

    
//   };
//   useEffect(() => {
//     if (data && data.price && data.discount && data.discount !== 0) {
//       const discountAmount = (data.price * data.discount) / 100; 
//       const finalPrice = data.price - discountAmount; 
//       const savings = discountAmount; 
      
//       setFinalPrice(Math.round(finalPrice));  
//       setSavings(Math.round(savings));        
//     }
//   }, [data]);

//   return (
    
//     <>
//       {/* <NavbarForm />
//       <div className="container">
//         <div className="fw-bold fs-2 mt-3">Order Now</div>

//         {product && (
//           <div className="row mt-3">
//             <div className="col-6">
//               <p>Description: {product.description}</p>
//               <p>Rating: {product.rating}</p>
//               <p>Crating: {product.crating}</p>
//               <p>Price: ₹{product.price}</p>
//               <p>Discount: {product.discount}%</p>
//             </div>
//           </div>
//         )}
    
//         <div className="container-fluid mt-5 place-button">
//           <button className="btn btn-buy-now place-btn" onClick={() => navigate("/payment-method")}>
//             Place Your Order
//           </button>
//         </div>
//       </div>
//       <FooterForm /> */}
//       <>
//    <NavbarForm/>
//    <div className='container'>
//    <div className='fw-bold fs-2 mt-3'>Order Now</div>
//    <div className='box mt-3 border border-1 p-2'>
//     <div className='yellow '> 
//     <p className='p-one'>One-time password required at the time of delivery</p>
//     </div>  
//    </div>



//    {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
//     <p>address</p>
//    </div> */}

//     {product && (
//    <div className='row mt-3'>
//     <div className='col-6'>
//         <p>Items</p>
//         <p>Delivery</p>
//         <p>Total</p>
//         <p>Promotion Applied</p>
//         <p className='fw-bold fs-6'>Order Total</p>
//         </div>


//         <div className='col-6 text-end'>
//             <p>1</p>
//             <p>₹0</p>
//             <p>{product.price}</p>
//             <p>{product.discount} % off</p>
//             <p className='fw-bold fs-5'>{finalPrice}</p>
//         </div>
//    </div>
//     )}
//    <hr/>

//    <div className='saving'>
//     <p className='savingColor fw-bold fs-6'>Your Saving: UPTO 96% </p>
//     <ul>
//         <li>Free Delivery</li>
//         <li>Item Discount</li>
//     </ul>
//    </div>
//    <hr/>

//    <div className='pay'>
//     <p className='savingColor fw-bold fs-6'>Pay with</p>
//     <p className='pay-with'>Pay With Debit/Credit/ATM Card</p>
//     <p className='pay-with'>Add Gift Card or Promo Card</p>

//     <input className='py-2' type='text' placeholder='Unavailable'></input>
//     <span className='px-3'>
//     <button className='btn-pay py-2 px-3 text-white'> Apply</button>
//     </span>
//    </div>

//    {/* <div className=' address py-3 px-3 d-flex justify-content-between align-items-center border border-1 mt-3'>
//     <p>address</p>
//    </div> */}

//    <div className='pra-text mt-2 mb-5 pb-5 fs-7'>
//     <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
//     <p>When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card or debit card), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
//     <p>See Amazon.in's Return Policy.</p>
//     <p className=''>Go to the Amazon.in homepage without completing your order.</p>
//    </div>



//    </div>
//    <div className="container-fluid mt-5 place-button">
//             <button
//               className="btn btn-buy-now place-btn"
//               onClick={() => {
//                 navigate("/payment-method");
//               }}
             
//             >
//               Place Your Order
//             </button>
//           </div>
//           <FooterForm/>
   
//    </>
//     </>
//   );
// };

// export default OrderNowComponent;


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import NavbarForm from './NavbarForm';
// import FooterForm from './FooterForm';
// import axios from 'axios';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [finalPrice, setFinalPrice] = useState(null); 
//   const [savings, setSavings] = useState(null); 
//   const { state } = useLocation();
//   // const productId = 'your_product_id'; // Replace 'your_product_id' with the actual ID
//   const id = state ? state._id : null;

//   const location = useLocation();
//   const { productId } = location.state || {};

//   useEffect(()=>{

//   const SaveData =async () =>{
//     try {
//       const result = await axios.get(`https://ecommerce-ryoy.onrender.com/getproduct?id=`)
//       console.log(result.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   SaveData()
// },[productId])
//   // useEffect(() => {
//   //   console.log("Fetching product details for ID:", productId);
//   //   fetchProductDetails();
//   //   console.log("productId",productId)
//   // }, [productId]);

//   // const fetchProductDetails = async () => {
//   //   try {
//   //     const response = await fetch(`https://ecommerce-ryoy.onrender.com/getproduct?id=${productId}`);
//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch product details');
//   //     }
//   //     const data = await response.json();
//   //     console.log("Product details:", data);
//   //     const productDetails = data.photos[0]; // Assuming you want to display details of the first product only
//   //     setProduct(productDetails);
      
//   //     // Calculate final price and savings
//   //     if (productDetails.price && productDetails.discount && productDetails.discount !== 0) {
//   //       const discountAmount = (productDetails.price * productDetails.discount) / 100; 
//   //       const calculatedFinalPrice = productDetails.price - discountAmount; 
//   //       const calculatedSavings = discountAmount; 
        
//   //       setFinalPrice(Math.round(calculatedFinalPrice));  
//   //       setSavings(Math.round(calculatedSavings)); 
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching product details:', error);
//   //   }
//   // };

//   return (
//     <>
//       <NavbarForm/>
//       <div className='container'>
//         <div className='fw-bold fs-2 mt-3'>Order Now</div>
//         <div className='box mt-3 border border-1 p-2'>
//           <div className='yellow'> 
//             <p className='p-one'>One-time password required at the time of delivery</p>
//           </div>  
//         </div>

//         {product && (
//           <div className='row mt-3'>
//             <div className='col-6'>
//               <p>Items</p>
//               <p>Delivery</p>
//               <p>Total</p>
//               <p>Promotion Applied</p>
//               <p className='fw-bold fs-6'>Order Total</p>
//             </div>

//             <div className='col-6 text-end'>
//               <p>1</p>
//               <p>₹0</p>
//               <p>{product.price}</p>
//               <p>{product.discount} % off</p>
//               <p className='fw-bold fs-5'>{finalPrice}</p>
//             </div>
//           </div>
//         )}

//         <hr/>

//         <div className='saving'>
//           <p className='savingColor fw-bold fs-6'>Your Saving: UPTO {savings ? savings : 0}%</p>
//           <ul>
//             <li>Free Delivery</li>
//             <li>Item Discount</li>
//           </ul>
//         </div>
//         <hr/>

//         <div className='pay'>
//           <p className='savingColor fw-bold fs-6'>Pay with</p>
//           <p className='pay-with'>Pay With Debit/Credit/ATM Card</p>
//           <p className='pay-with'>Add Gift Card or Promo Card</p>

//           <input className='py-2' type='text' placeholder='Unavailable'></input>
//           <span className='px-3'>
//             <button className='btn-pay py-2 px-3 text-white'> Apply</button>
//           </span>
//         </div>

//         <div className='pra-text mt-2 mb-5 pb-5 fs-7'>
//           <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
//           <p>When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card or debit card), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
//           <p>See Amazon.in's Return Policy.</p>
//           <p className=''>Go to the Amazon.in homepage without completing your order.</p>
//         </div>

//       </div>
//       <div className="container-fluid mt-5 place-button">
//         <button
//           className="btn btn-buy-now place-btn"
//           onClick={() => {
//             navigate("/payment-method");
//           }}
//         >
//           Place Your Order
//         </button>
//       </div>
//       <FooterForm/>
//     </>
//   );
// };

// export default OrderNowComponent;

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import NavbarForm from './NavbarForm';
// import FooterForm from './FooterForm';
// import axios from 'axios';

// const OrderNowComponent = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { productId } = location.state || {};
//   const [product, setProduct] = useState(null);
//   const [finalPrice, setFinalPrice] = useState(null);
//   const [savings, setSavings] = useState(null);
//   const { state } = useLocation();

//   const id = state ? state._id : null; 

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(`https://ecommerce-ryoy.onrender.com/getoneproduct/${productId}`);
//         if (response.data && response.data._id === productId) {
//           const productDetails = response.data;
          
//           setProduct(productDetails);
          
//           // Calculate final price and savings
//           if (productDetails.price && productDetails.discount && productDetails.discount !== 0) {
//             const discountAmount = (productDetails.price * productDetails.discount) / 100;
//             const calculatedFinalPrice = productDetails.price - discountAmount;
//             const calculatedSavings = discountAmount;
            
//             setFinalPrice(Math.round(calculatedFinalPrice));
//             setSavings(Math.round(calculatedSavings));
//           }
//         } else {
//           console.error("Product ID mismatch or no product data found.");
//         }
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//       }
//     };

//     if (productId) {
//       fetchProductDetails();
//     }
//   }, [productId]);

//   // const handlePlaceOrder = () => {
//   //   navigate.push("/payment-method", { productId }); // Passing productId to the next page
//   // };
//   const handleAddToCart = () => {
//     navigate('/payment-method', { state: { productId: id } }); // Navigate to card-form page with product ID
//   };
  

//   return (
//     <>
//       <NavbarForm/>
//       <div className='container'>
//         <div className='fw-bold fs-2 mt-3'>Order Now</div>
//         <div className='box mt-3 border border-1 p-2'>
//           <div className='yellow'> 
//             <p className='p-one'>One-time password required at the time of delivery</p>
//           </div>  
//         </div>

//         {product && (
//           <div className='row mt-3'>
//             <div className='col-6'>
//               <p>Items</p>
//               <p>Delivery</p>
//               <p>Total</p>
//               <p>Promotion Applied</p>
//               <p className='fw-bold fs-6'>Order Total</p>
//             </div>

//             <div className='col-6 text-end'>
//               <p>1</p>
//               <p>₹0</p>
//               <p>{product.price}</p>
//               <p>{product.discount} % off</p>
//               <p className='fw-bold fs-5'>{finalPrice}</p>
//             </div>
//           </div>
//         )}

//         <hr/>

//         <div className='saving'>
//           <p className='savingColor fw-bold fs-6'>Your Saving: UPTO {savings ? savings : 0}%</p>
//           <ul>
//             <li>Free Delivery</li>
//             <li>Item Discount</li>
//           </ul>
//         </div>
//         <hr/>

//         <div className='pay'>
//           <p className='savingColor fw-bold fs-6'>Pay with</p>
//           <p className='pay-with'>Pay With Debit/Credit/ATM Card</p>
//           <p className='pay-with'>Add Gift Card or Promo Card</p>

//           <input className='py-2' type='text' placeholder='Unavailable'></input>
//           <span className='px-3'>
//             <button className='btn-pay py-2 px-3 text-white'> Apply</button>
//           </span>
//         </div>

//         <div className='pra-text mt-2 mb-5 pb-5 fs-7'>
//           <p>By placing your order, you agree to Amazon's privacy notice and conditions of use.</p>
//           <p>When your order is placed, we'll send you an e-mail message acknowledging receipt of your order. If you choose to pay using an electronic payment method (credit card or debit card), you will be directed to your bank's website to complete your payment. Your contract to purchase an item will not be complete until we receive your electronic payment and dispatch your item. If you choose to pay using Pay on Delivery (POD), you can pay using cash/card/net banking when you receive your item.</p>
//           <p>See Amazon.in's Return Policy.</p>
//           <p className=''>Go to the Amazon.in homepage without completing your order.</p>
//         </div>
//       </div>
//       <div className="container-fluid mt-5 place-button">
//         <button
//           className="btn btn-buy-now place-btn"
//           onClick={handleAddToCart}
//         >
//           Place Your Order
//         </button>
//       </div>
//       <FooterForm/>
//     </>
//   );
// };

// export default OrderNowComponent;
 

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
        const response = await axios.get(`https://ecommerce-ryoy.onrender.com/getoneproduct/${productId}`);
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

















