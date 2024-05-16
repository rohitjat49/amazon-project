// // import React from 'react'

// // const DeditCardForm = () => {
// //   return (
// //     <div>
// //           <div className="container mt-5">
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <div className="card">
// //             <div className="card-header">
// //               <h3 className="text-center">Debit Card Information</h3>
// //             </div>
// //             <div className="card-body">
// //               <form>
// //                 <div className="form-group mb-3">
// //                   <label htmlFor="cardNumber">Card Number</label>
// //                   <input type="text" className="form-control" id="cardNumber" placeholder="Enter card number" required />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                   <label htmlFor="cardName">Cardholder Name</label>
// //                   <input type="text" className="form-control" id="cardName" placeholder="Enter cardholder name" required />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                   <label htmlFor="expiryDate">Expiry Date</label>
// //                   <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
// //                 </div>
// //                 <div className="form-group mb-3">
// //                   <label htmlFor="cvv">CVV</label>
// //                   <input type="text" className="form-control" id="cvv" placeholder="Enter CVV" required />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary w-100">Submit</button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     <div class="form-container">
// //   <form>
// //     <div class="form-group">
// //       <label for="cardNumber">Card Number</label>
// //       <input type="text" id="cardNumber" placeholder="Enter card number" required/>
// //     </div>
// //     <div class="form-group">
// //       <label for="cardName">Cardholder Name</label>
// //       <input type="text" id="cardName" placeholder="Enter cardholder name" required/>
// //     </div>
// //     <div class="form-group">
// //       <label for="expiryDate">Expiry Date</label>
// //       <input type="text" id="expiryDate" placeholder="MM/YY" required/>
// //     </div>
// //     <div class="form-group">
// //       <label for="cvv">CVV</label>
// //       <input type="text" id="cvv" placeholder="Enter CVV" required/>
// //     </div>
// //     <div class="checkbox-group">
// //       <label>
// //         <input type="checkbox" name="cardType" value="debit"/> Debit Card
// //       </label>
// //       <label>
// //         <input type="checkbox" name="cardType" value="credit"/> Credit Card
// //       </label>
// //     </div>
// //     <button type="submit" class="submit-button">Submit</button>
// //   </form>
// // </div>

// //     </div>
// //   )
// // }

// // export default DeditCardForm

// import React, { useState } from 'react';

// const DebitCreditForm = () => {
//   const [selectedCardType, setSelectedCardType] = useState('debit');

//   const handleCardTypeChange = (event) => {
//     setSelectedCardType(event.target.value);
//   };

//   return (
//     <div className="form-container">
//       <form>
//         <div className="form-group">
//           <label htmlFor="cardNumber">Card Number</label>
//           <input type="text" id="cardNumber" placeholder="Enter card number" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cardName">Cardholder Name</label>
//           <input type="text" id="cardName" placeholder="Enter cardholder name" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="expiryDate">Expiry Date</label>
//           <input type="text" id="expiryDate" placeholder="MM/YY" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="cvv">CVV</label>
//           <input type="text" id="cvv" placeholder="Enter CVV" required />
//         </div>
//         <div className="checkbox-group">
//           <label>
//             <input
//               type="radio"
//               name="cardType"
//               value="debit"
//               checked={selectedCardType === 'debit'}
//               onChange={handleCardTypeChange}
//             /> Debit Card
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="cardType"
//               value="credit"
//               checked={selectedCardType === 'credit'}
//               onChange={handleCardTypeChange}
//             /> Credit Card
//           </label>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default DebitCreditForm;

// import React, { useState } from 'react';

// const DebitCreditForm = () => {
//   const [formData, setFormData] = useState({
//     cardNumber: '',
//     cardName: '',
//     expiryDate: '',
//     cvv: '',
//     cardType: 'debit'
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   const handleCardTypeChange = (e) => {
//     setFormData({ ...formData, cardType: e.target.value });
//   };

//   const validate = () => {
//     let errors = {};

//     if (!formData.cardNumber.match(/^\d{16}$/)) {
//       errors.cardNumber = 'Card number must be 16 digits';
//     }
//     if (formData.cardName.trim() === '') {
//       errors.cardName = 'Cardholder name is required';
//     }
//     if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
//       errors.expiryDate = 'Expiry date must be in MM/YY format';
//     }
//     if (!formData.cvv.match(/^\d{3}$/)) {
//       errors.cvv = 'CVV must be 3 digits';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       // Submit the form
//       console.log('Form submitted', formData);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <div className="card">
//             <div className="card-header text-center">
//               <h3>Debit/Credit Card Information</h3>
//             </div>
//             <div className="card-body">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="cardNumber" className="form-label">Card Number</label>
//                   <input
//                     type="text"
//                     id="cardNumber"
//                     className="form-control"
//                     value={formData.cardNumber}
//                     onChange={handleInputChange}
//                     placeholder="Enter card number"
//                     required
//                   />
//                   {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="cardName" className="form-label">Cardholder Name</label>
//                   <input
//                     type="text"
//                     id="cardName"
//                     className="form-control"
//                     value={formData.cardName}
//                     onChange={handleInputChange}
//                     placeholder="Enter cardholder name"
//                     required
//                   />
//                   {errors.cardName && <small className="text-danger">{errors.cardName}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
//                   <input
//                     type="text"
//                     id="expiryDate"
//                     className="form-control"
//                     value={formData.expiryDate}
//                     onChange={handleInputChange}
//                     placeholder="MM/YY"
//                     required
//                   />
//                   {errors.expiryDate && <small className="text-danger">{errors.expiryDate}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="cvv" className="form-label">CVV</label>
//                   <input
//                     type="text"
//                     id="cvv"
//                     className="form-control"
//                     value={formData.cvv}
//                     onChange={handleInputChange}
//                     placeholder="Enter CVV"
//                     required
//                   />
//                   {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
//                 </div>
//                 <div className="mb-3">
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="cardType"
//                       id="debit"
//                       value="debit"
//                       checked={formData.cardType === "debit"}
//                       onChange={handleCardTypeChange}
//                     />
//                     <label className="form-check-label" htmlFor="debit">Debit Card</label>
//                   </div>
//                   <div className="form-check form-check-inline">
//                     <input
//                       className="form-check-input"
//                       type="radio"
//                       name="cardType"
//                       id="credit"
//                       value="credit"
//                       checked={formData.cardType === "credit"}
//                       onChange={handleCardTypeChange}
//                     />
//                     <label className="form-check-label" htmlFor="credit">Credit Card</label>
//                   </div>
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100">Submit</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DebitCreditForm;

import React, { useState } from "react";

const DebitCreditForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    cardType: "debit",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleCardTypeChange = (event) => {
    setFormData({
      ...formData,
      cardType: event.target.value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.cardNumber.match(/^\d{16}$/)) {
      errors.cardNumber = "Card number must be 16 digits";
    }
    if (!formData.cardName.trim()) {
      errors.cardName = "Cardholder name is required";
    }
    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
      errors.expiryDate = "Expiry date must be in MM/YY format";
    }
    if (!formData.cvv.match(/^\d{3}$/)) {
      errors.cvv = "CVV must be 3 digits";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Form submission logic here
      console.log("Form submitted successfully", formData);
      // Clear form data
      setFormData({
        cardNumber: "",
        cardName: "",
        expiryDate: "",
        cvv: "",
        cardType: "debit",
      });
      setErrors({});
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-header text-center">
              <h3>Debit/Credit Card Information</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Enter card number"
                    required
                  />
                  {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="cardName" className="form-label">Cardholder Name</label>
                  <input
                    type="text"
                    id="cardName"
                    className="form-control"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="Enter cardholder name"
                    required
                  />
                  {errors.cardName && <small className="text-danger">{errors.cardName}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="form-control"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                  {errors.expiryDate && <small className="text-danger">{errors.expiryDate}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    className="form-control"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="Enter CVV"
                    required
                  />
                  {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
                </div>
                <div className="mb-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cardType"
                      id="debit"
                      value="debit"
                      checked={formData.cardType === "debit"}
                      onChange={handleCardTypeChange}
                    />
                    <label className="form-check-label" htmlFor="debit">Debit Card</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="cardType"
                      id="credit"
                      value="credit"
                      checked={formData.cardType === "credit"}
                      onChange={handleCardTypeChange}
                    />
                    <label className="form-check-label" htmlFor="credit">Credit Card</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCreditForm;

