
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import NavbarForm from "./NavbarForm";
import FooterForm from "./FooterForm";
import OtpComponent from "./OtpComponent";

const DebitCreditForm = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardType: "",
    bankName: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    if (id === "cvv" && value.length > 3) {
      return;
    }

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

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-');
    setFormData({
      ...formData,
      cardNumber: formattedValue.slice(0, 19),
    });
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!formData.cardNumber.match(/^\d{4}-\d{4}-\d{4}-\d{4}$/)) {
      errors.cardNumber = "Card number must be exactly 16 digits";
      isValid = false;
    }
    if (!formData.cardHolderName.trim()) {
      errors.cardHolderName = "Cardholder name is required";
      isValid = false;
    }
    if (!formData.cvv.match(/^\d{3}$/)) {
      errors.cvv = "CVV must be 3 digits";
      isValid = false;
    }
    if (!formData.cardType.trim()) {
      errors.cardType = "Card type is required";
      isValid = false;
    }
    if (!formData.bankName.trim()) {
      errors.bankName = "Bank name is required";
      isValid = false;
    }

    setErrors(errors);
    setIsValid(isValid);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      const payload = {
        cardNumber: formData.cardNumber.replace(/-/g, ''),
        cardHolderName: formData.cardHolderName,
        expiryMonth: formData.expiryMonth,
        expiryYear: formData.expiryYear,
        cvv: formData.cvv,
        cardType: formData.cardType,
        bankname: formData.bankName,
      };
      console.log("Submitting payload:", payload);

      try {
        const response = await fetch("https://ecommerce-ryoy.onrender.com/card", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response from server:", errorData);
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Form submitted successfully", data);

        setFormData({
          cardNumber: "",
          cardHolderName: "",
          expiryMonth: "",
          expiryYear: "",
          cvv: "",
          cardType: "",
          bankName: "",
        });
        setErrors({});
        setIsValid(false);
        navigate('/otp-page');
      } catch (error) {
        console.error("There was a problem with the submission:", error);
      }
    }
  };

  useEffect(() => {
    validate();
  }, [formData]);

  const bankOptions = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Union Bank of India",
    "Canara Bank",
    "Bank of India",
    "Central Bank of India",
    "Indian Bank",
    "IDFC First Bank",
    "RBL Bank",
    "UCO Bank",
    "IDBI Bank",
    "Federal Bank",
    "South Indian Bank",
    "Karur Vysya Bank",
    "Bandhan Bank",
    "Punjab & Sind Bank",
    "Dhanlaxmi Bank",
    "City Union Bank",
    "Jammu & Kashmir Bank",
    "Karnataka Bank",
    "Lakshmi Vilas Bank",
    "Saraswat Bank",
    "Tamilnad Mercantile Bank",
    "Nainital Bank"
  ];

  useEffect(() => {
    const filtered = bankOptions.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOptions(filtered);
    setDropdownOpen(!!searchTerm);
  }, [searchTerm]);

  const handleBankSelect = (event) => {
    setFormData({
      ...formData,
      bankName: event.target.value,
    });
    setDropdownOpen(false);
    inputRef.current?.focus();
  };

  return (
    <>
      <NavbarForm/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <p>Paying to</p>
            <p>TOTAL AMOUNT</p>
          </div>
          <div className="col-6">
            <p>AMAZON</p>
            <p>₹ 1500</p>
          </div>
        </div>
        <p className="payment-para">
          <span>Note:</span>
          If you pay via Credit Card. You will get 10% instant discount.
        </p>
        <div>
          <img src="/img/paycard.png" alt="" width="100%" />
        </div>
        <div className="row justify-content-center mt-2">
          <div className="col-md-8 col-lg-6">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label fw-bold">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="Enter card number"
                    required
                  />
                  {errors.cardNumber && <small className="text-danger">{errors.cardNumber}</small>}
                </div>
               
              
               
                
                <div className="mb-3">
                  <label htmlFor="cardHolderName" className="form-label fw-bold">Cardholder Name</label>
                  <input
                    type="text"
                    id="cardHolderName"
                    className="form-control"
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                    placeholder="Enter cardholder name"
                    required
                  />
                  {errors.cardHolderName && <small className="text-danger">{errors.cardHolderName}</small>}
                </div>
                <div className="row">
                <div className=" col-6 mb-3">
                  <label htmlFor="expiryMonth" className="form-label fw-bold">Expiry Month</label>
                  <input
                    type="text"
                    id="expiryMonth"
                    className="form-control"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    placeholder="MM"
                    required
                  />
                  {errors.expiryMonth && <small className="text-danger">{errors.expiryMonth}</small>}
                </div>
                <div className="col-6 mb-3">
                  <label htmlFor="expiryYear" className="form-label fw-bold">Expiry Year</label>
                  <input
                    type="text"
                    id="expiryYear"
                    className="form-control"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    placeholder="YY"
                    required
                  />
                  {errors.expiryYear && <small className="text-danger">{errors.expiryYear}</small>}
                </div>
                </div>
                <div className="row">
                  <div className="col-6 mb-3">
                    <label htmlFor="cvv" className="form-label fw-bold">CVV</label>
                    <input
                      type="number"
                      id="cvv"
                      className="form-control"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      placeholder="Enter CVV"
                      required
                      maxLength={3}
                    />
                    {errors.cvv && <small className="text-danger">{errors.cvv}</small>}
                  </div>
                  <div className=" col-6 mb-3">
                  <label htmlFor="search" className="form-label fw-bold">Bank Name</label>
                  {/* <input
                    type="text"
                    id="search"
                    className="form-control"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search for bank"
                  /> */}
                  <select
                    id="bankName"
                    className="form-control mt-2"
                    value={formData.bankName}
                    onChange={handleBankSelect} // Update selected bank name
                    size={dropdownOpen ? filteredOptions.length + 1 : 1} // Expand dropdown if search term is not empty
                    required
                  >
                    <option value="">Select a bank</option>
                    {filteredOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.bankName && <small className="text-danger">{errors.bankName}</small>}
                </div>
                </div>
                <div className="row">
                <div className=" col-6 mb-3">
                  <label htmlFor="cardType" className="form-label fw-bold">Card Type</label>
                  <input
                    type="text"
                    id="cardType"
                    className="form-control"
                    value={formData.cardType}
                    onChange={handleInputChange}
                    placeholder="Enter card type"
                    required
                  />
                  {errors.cardType && <small className="text-danger">{errors.cardType}</small>}
                </div>
                </div>
                
                <button type="submit" className="btn btn-buy-now place-btn w-100" disabled={!isValid}>
                  Proceed
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showOtpPopup && <OtpComponent />}
      <FooterForm/>
    </>
  );
};

export default DebitCreditForm;
