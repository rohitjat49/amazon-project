
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbarcomponent from './Navbarcomponent';

const CardDetailComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null); 
  const [savings, setSavings] = useState(null); 
  const [minutes, setMinutes] = useState(15); // Set initial time in minutes
  const [seconds, setSeconds] = useState(0);  // Set initial time in seconds
  const [isExpired, setIsExpired] = useState(false);
  const { state } = useLocation();
  const id = state ? state._id : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`https://ecommerce-vyte.onrender.com/getoneproduct/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        console.log('API Response:', response.data); // Log API response

        if (response.data && response.data.upload && response.data.upload.length > 0) {
          setData(response.data);
          setError(null);
        } else {
          setError('No image data found in the API response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch product data. Please try again later.');
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (data && data.price && data.discount && data.discount !== 0) {
      const discountAmount = (data.price * data.discount) / 100; 
      const finalPrice = data.price - discountAmount; 
      const savings = discountAmount; 
      
      setFinalPrice(Math.round(finalPrice));  
      setSavings(Math.round(savings));        
    }
  }, [data]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      setIsExpired(true); // Set expired state when timer ends
      return;
    }

    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, [minutes, seconds]);


  const handleAddToCart = () => {
    navigate('/card-form', { state: { productId: id } }); // Navigate to card-form page with product ID
  };
  
  const handleBuyNow = () => {
    navigate('/card-form', { state: { productId: id } }); // Navigate to card-form page with product ID
  };
  

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Navbarcomponent />
      <div className="container">
        {data.upload && data.upload.length > 0 ? (
          <div>
          <Slider {...settings}>
            {data.upload.slice(0, 4).map((image, index) => (
              <div key={index}>
                <img src={image.url} className="product-image mt-2" alt={`Product Image ${index}`} />
              </div>
            ))}
          </Slider>
          {/* <div className="other-images">
                {data.upload.slice(4).map((image, index) => (
                    <div key={index} className="thumbnail-image">
                        <img src={image.url} alt={`Thumbnail ${index}`} />
                    </div>
                ))}
            </div> */}

          </div>

          
        ) : (
          <div>No images found for this product.</div>
        )}
        <div className="d-flex justify-content-between">
          <div className="offer-badge fw-bold">{data.discount}%</div>
        </div>
        {/* <div className="px-0 font-weight-bold text-black mt-2">
          <div className="product-title">{data.description}</div>
        </div>
        <div className="px-0 product-price">
          <div className="buyingPrice font-weight-bold">
            <span className="symbol">&#8377;</span>
            <span className="price fw-bold ">
              {Math.round(data.price - (data.price * data.discount) / 100)}
            </span>
          </div>
          <div className="flex">
            <div className="savings text-success">
              You save: &#8377;{Math.round((data.price * data.discount) / 100)}
            </div>
          </div>
        </div> */}
        <div className='mt-5'>
         <div className="px-0 font-weight-bold text-black mt-2">
          <div className="product-title">{data.description}</div>
        </div>

        <div className="px-0 product-price">
          <div className="buyingPrice font-weight-bold">
            <span className="symbol">&#8377;</span>
            <span className="price fw-bold ">{finalPrice}</span>
          </div>
          <div className="flex">
            <div className="mrpPrice">
              <span className="symbol">MRP: </span>
              <span className="strike text-decoration-line-through">
                &#8377;{data.price}
              </span>
              <span className="savePrice text-danger"> Save &#8377;{savings}</span>
            </div>
          </div>
          <div className="priceimg">
            <img src="img/prime11.png" height="25px" weight="77px" alt="Prime" />
          </div>
        </div>
      </div>
      </div>

      <div className="container-fluid mt-2">
        <div className='retunsImg'>
          <img src='/img/alldelivered.png' width="100%"/>
        </div>
      </div>
      <div className="offerEnd text-center py-3">
        <h4>
          {isExpired ? (
            "Today's sale ended"
          ) : (
            <>
              Offer ends in
              <span className="offerTimer">
                {`${minutes < 10 ? '0' : ''}${minutes}min ${seconds < 10 ? '0' : ''}${seconds}sec`}
              </span>
            </>
          )}
        </h4>
      </div>

      <div className="other-images">
                {data.upload.slice(4).map((image, index) => (
                    <div key={index} className="thumbnail-image">
                        <img src={image.url} width="100%" alt={`Thumbnail ${index}`} />
                    </div>
                ))}
            </div>
       
            <div className='footer mt-3 mb-5 pb-5'>
        <img src='/img/footerimg.png' alt='' width="100%"/>
      </div>


      <div className="container-fluid mt-5 fixed-bottom">
        <div className="row">
          <div className="col-6 text-center">
            <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
          <div className="col-6 text-center">
            <button className="btn btn-buy-now btn-yellow"  onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailComponent;
