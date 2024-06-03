
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const CardComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('https://ecommerce-ryoy.onrender.com/getproduct', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json'
//           }
//         });
//         console.log("first", token)
       
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const result = await response.json();
//         console.log('API Data:', result); // Log API data to console
//         setData(result.photos);
//         setLoading(false);
//       } catch (error) {
//         setError(error);
//         setLoading(false);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const handleClickByNowButton = (_id) => {
//     navigate("/card-details", { state: { _id } });
//   };

//   return (
//     <div className="row">
//       {data.map((item) => (
//         <div key={item._id} className="col-6 mt-3">
//           <div className="card h-100 mb-3">
//             <div className="card-body text-center">
//               <div className="image-container">
//                 {item.upload && item.upload[0] && (
//                   <img
//                     className="card-img-top img-fluid" // Added img-fluid class
//                     src={item.upload[0].url}
//                     width={200}
//                     height={200}
//                     alt=""
//                   />
//                 )}
//               </div>
//               <div className="price-details mt-1">
//                 <div className="old-price">
//                   <span className="symbol">&#8377;</span>{item.price}
//                 </div>
//                 <div className="discount fw-bold">{item.discount}% off</div>
//               </div>
//               <div className="card-title mt-2">
//                 <div className="description"  style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.description}</div>
//               </div>
//               <div className="price-with-discount text-danger">
//                 <img src="/img/prime11.png" alt="" className="prime-icon" />
//                 <br />
//                 <div className="buyingPrice font-weight-bold">
//                   <span className="symbol">&#8377;</span>
//                   <span className="price fw-bold ">{Math.round(item.price - (item.price * item.discount / 100))}</span>
//                 </div>
//               </div>
//               <div className="text-center">
//                 <button
//                   className="btn btn-warning btn-buy-now"
//                   onClick={() => handleClickByNowButton(item._id)}
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponent;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('https://ecommerce-ryoy.onrender.com/getproduct', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        console.log("first", token)
       
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        console.log('API Data:', result); // Log API data to console
        setData(result.photos);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleClickByNowButton = (_id) => {
    navigate("/card-details", { state: { _id } });
  };

  const handleClickCard = (_id) => {
    navigate("/card-details", { state: { _id } });
  };

  return (
    <div className="row">
      {data.map((item) => (
        <div key={item._id} className="col-6 mt-3">
          <div className="card h-100 mb-3">
            <div className="card-body text-center">
              <div className="image-container"  onClick={() => handleClickCard(item._id)}>
                {item.upload && item.upload[0] && (
                  <img
                    className="card-img-top img-fluid" // Added img-fluid class
                    src={item.upload[0].url}
                    width={200}
                    height={200}
                    alt=""
                  />
                )}
              </div>
              <div className="price-details mt-1">
                <div className="old-price">
                  <span className="symbol">&#8377;</span>{item.price}
                </div>
                <div className="discount fw-bold">{item.discount}% off</div>
              </div>
              <div className="card-title mt-2">
                <div className="description"  style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.description}</div>
              </div>
              <div className="price-with-discount text-danger">
                <img src="/img/prime11.png" alt="" className="prime-icon" />
                <br />
                <div className="buyingPrice font-weight-bold">
                  <span className="symbol">&#8377;</span>
                  <span className="price fw-bold ">{Math.round(item.price - (item.price * item.discount / 100))}</span>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-warning btn-buy-now"
                  onClick={() => handleClickByNowButton(item._id)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;

