import axios from "axios";
import React, { useEffect, useState } from "react";
import Wacth from "../img/watch.jpg";
import Prime from "../img/prime11.png";
import { useNavigate } from "react-router-dom";

const CardComponent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [finalPrice, setFinalPrice] = useState(null); 
  const [savings, setSavings] = useState(null); 

  useEffect(() => {
    axios
      .get("https://amazon-e5nh.onrender.com/getproduct")
      .then((res) => {
        console.log("API Response:", res.data); // Log the API response
        setData(res.data); // Set the fetched data to the state variable
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Calculate final price when data changes
    if (data && data.price && data.discount && data.discount !== 0) {
      const finalPriceValue = data.price - (data.price * data.discount / 100);
      setFinalPrice(finalPriceValue); // Update the final price state
    }
  }, [data]);

  return (
    <div className="container">
      <div className="row gx-3 pt-4">
        {data.map((item, index) => (
          <div key={index} onClick={() => {}} className="col-md-6 col-sm-6  ">
            <div className="card h-100 mb-3">
              <div className="card-body text-center">
                <div className="image-container">
                  <img
                    className="card-img-top"
                    // src={`https://ik.imagekit.io/dev24/${item?.url}`}
                    src={item.url}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="card-title mt-2">{item.description}</div>
                <div className="price-details">
                  <div className="old-price "> <span className="symbol">&#8377;</span>{item.price}</div>
                  <div className="discount fw-bold">{item.discount}% off</div>
                </div>
                <div className="price-with-discount text-danger">
                  <img src={Prime} alt="" className="prime-icon" />
                  <br />
                  <b>Price: {finalPrice}</b>
                </div>
                {/* <a href={`SingleProduct6aa1.html?id=${item.id}`}> */}
                  <div className="text-center">
                    <button
                      className="btn btn-warning btn-buy-now"
                      onClick={() => {
                        
                        navigate(`/card-details/${item?._id}`);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                {/* </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
