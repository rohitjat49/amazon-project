// import React, { useState } from 'react' 
// import { Typography, Rating } from '@mui/material';

// const RatingComponent = () => {
//     const  [value, setValue] = useState("")
//   return (
//     <>
//     <div className='container'>
//     <div className='row'>
//         <div className='col-4'>
//          <div>
//             <h6>Customer Reviews</h6>
//          </div>
//          <div>
//          <Rating name="half-rating" defaultValue={3} precision={0.5} />
//           <span className='fs-5 '> 4.6 out of 5</span>
//          </div>
//         </div>
//         <div className='col-8'>
//             <div>
//             <h6>Reviws </h6>
//             </div>
//             <div>
//             {/* <Typography component="legend">Controlled</Typography>
// <Rating
//   name="simple-controlled"
//   value={5}
//   onChange={(event, newValue) => {
//     setValue(newValue);
//   }}
// /> */}
// {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}

//             </div>
//             </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default RatingComponent

// import React, { useEffect, useState } from 'react';

// const RatingComponent = () => {
//   const [ratings, setRatings] = useState({
//     5: 120,
//     4: 60,
//     3: 30,
//     2: 15,
//     1: 5,
//   });
//   const [totalReviews, setTotalReviews] = useState(230);
  
//   const [imageUrls, setImageUrls] = useState([
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//     'https://via.placeholder.com/150',
//   ]);

//   useEffect(() => {
//     // Here you can fetch the data and update the state if needed
//   }, []);

//   return (
//     <>
//     <div className="container mt-5">
//       <div className="row">
//         {/* <div className="col-4 text-center mb-4">
//           <h3>Customer Ratings</h3>
//           <div className=" offset-md-3">
//           {[5, 4, 3, 2, 1].map((star) => {
//             const percentage = ((ratings[star] / totalReviews) * 100).toFixed(1);
//             return (
//               <div key={star} className="rating-item d-flex align-items-center mb-2">
//                 <div className="d-flex align-items-center">
//                   <span>{star}</span>
//                   <i className="fas fa-star text-warning"></i>
//                 </div>
//                 <div className="rating-bar w-75 mx-3">
//                   <div
//                     className="rating-bar-fill"
//                     style={{ width: `${percentage}%` }}
//                   ></div>
//                 </div>
//                 <p className="mb-0">{percentage}%</p>
//               </div>
//             );
//           })}
//           <div className="text-center mt-4">
         
//           </div>
//         </div>
//         </div> */}

// <div className="col-4 text-center mb-4">
//           <h3>Customer Ratings</h3>
//           <div className="offset-md-1">
//             {[5, 4, 3, 2, 1].map((star) => {
//               const percentage = ((ratings[star] / totalReviews) * 100).toFixed(1);
//               return (
//                 <div key={star} className="rating-item mb-2 d-flex align-items-center">
//                   <div className="d-flex align-items-center mr-3">
//                     <span>{star}</span>
//                     <i className="fas fa-star text-warning ml-1 mx-2"></i>
//                   </div>
//                   <div className="progress flex-grow-1">
//                     <div
//                       className="progress-bar bg-warning "
//                       role="progressbar"
//                       style={{ width: `${percentage}%` }}
//                       aria-valuenow={percentage}
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     >
//                       {percentage}%
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
           
//           </div>
//         </div>

//         <div className="col-8">
//           <div className="d-flex flex-wrap">
//             {imageUrls.map((url, index) => (
//               <div key={index} className="p-2">
//                 <img
//                   id={`product-image-${index}`}
//                   src={url}
//                   alt={`Product ${index + 1}`}
//                   className="img-fluid"
//                   style={{ maxWidth: '110px' }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
       
//       </div>
//     </div>

    
//     </>
//   );
// };

// export default RatingComponent;



import React, { useEffect, useState } from 'react';


const RatingComponent = () => {
  const [ratings, setRatings] = useState({
    5: 120,
    4: 60,
    3: 30,
    2: 15,
    1: 5,
  });
  const [totalReviews, setTotalReviews] = useState(230);
  const [imageUrls, setImageUrls] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ]);

  useEffect(() => {
    // Here you can fetch the data and update the state if needed
  }, []);

  // Calculate the average rating
  const averageRating = Object.keys(ratings).reduce(
    (acc, curr) => acc + parseInt(curr) * ratings[curr], 0
  ) / totalReviews;

  // Function to render fractional stars
  const renderStars = () => {
    const integerPart = Math.floor(averageRating);
    const fractionalPart = averageRating - integerPart;
    const stars = [];
    // Add integer part stars
    for (let i = 0; i < integerPart; i++) {
      stars.push(<i key={i} className="fas fa-star text-warning mx-1"></i>);
    }
    // Add fractional part star if it's greater than 0
    if (fractionalPart > 0) {
      stars.push(<i key="fractional" className="fas fa-star-half-alt text-warning mx-1"></i>);
    }
    return stars;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 text-center mb-4">
          <h3>Customer Ratings</h3>
          <div className="offset-md-1">
            <div className="rating-item mb-2 d-flex align-items-center">
              {renderStars()}
              <span className="ml-2">{averageRating.toFixed(1)} out of 5</span>
            </div>
            {/* Displaying individual star ratings */}
            {[5, 4, 3, 2, 1].map((star) => {
              const percentage = ((ratings[star] / totalReviews) * 100).toFixed(1);
              return (
                <div key={star} className="rating-item mb-2 d-flex align-items-center">
                  <div className="d-flex align-items-center mr-3">
                    <span>{star}</span>
                    <i className="fas fa-star text-warning ml-1 mx-2"></i>
                  </div>
                  <div className="progress flex-grow-1">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow={percentage}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {percentage}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-8 ">
          <div className='fw-bold'>Reviews with images</div>
          <div className='d-flex flex-wrap'>
          {imageUrls.map((url, index) => (
            <div key={index} className="p-2">
              <img
                id={`product-image-${index}`}
                src={url}
                alt={`Product ${index + 1}`}
                className="img-fluid"
                style={{ maxWidth: '100px' }}
              />
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;


