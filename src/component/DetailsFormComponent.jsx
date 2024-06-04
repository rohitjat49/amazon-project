// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";

// const DetailsFormComponent = () => {
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);

//   const [isChecked, setIsChecked] = useState(false);
//   const [name, nameChange] = useState("");
//   const [mobile, mobileChange] = useState("");
//   const [pinCode, pinCodeChange] = useState("");
//   const [flatNo, flatNoChange] = useState("");
//   const [area, areaChange] = useState("");
//   const [landmark, landmarkChange] = useState("");
//   const [town, townChange] = useState("");
//   const [state, stateChange] = useState("");
//   const [country, countryChange] = useState("IN");
//   const [addressType, addressTypeChange] = useState("");

//   const validate = () => {
//     const newErrors = {};
//     if (!name) newErrors.name = "Full Name is required";
//     if (!mobile) newErrors.mobile = "Mobile Number is required";
//     else if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Mobile Number must be exactly 10 digits";
//     if (!pinCode) newErrors.pinCode = "PIN Code is required";
//     if (!flatNo) newErrors.flatNo = "Flat/House No is required";
//     if (!area) newErrors.area = "Area is required";
//     if (!landmark) newErrors.landmark = "Landmark is required";
//     if (!town) newErrors.town = "Town/City is required";
//     if (!state) newErrors.state = "State is required";
//     if (!country) newErrors.country = "Country is required";
//     if (!addressType) newErrors.addressType = "Address Type is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       const regobj = {
//         name: name,
//         number: mobile,
//         pincode: pinCode,
//         house: flatNo,
//         area: area,
//         landmark: landmark,
//         city: town,
//         state: state,
//         country: country,
//         addressType: addressType,
//         defaultAddress: isChecked,
//       };

//       try {
//         const response = await axios.post(
//           "https://ecommerce-ryoy.onrender.com/address",
//           regobj
//         );
//         if (response) {
//           console.log("response is:", JSON.stringify(response));
//           navigate("/card-dedit"); // Navigate to the next page upon successful submission
//         }
//       } catch (error) {
//         console.log("something is wrong ", error);
//       }
//     }
//   };

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   const countries = [
//     { name: "India", code: "IN" },
//     { name: "United States", code: "US" },
//     { name: "Algeria", code: "DZ" },
//     { name: "Afghanistan", code: "AF" },
//     { name: "Australia", code: "AU" },
//     { name: "Afghanistan", code: "AF" },
//     { name: "Albania", code: "AL" },
//     { name: "Algeria", code: "DZ" },
//     { name: "American Samoa", code: "AS" },
//     { name: "Andorra", code: "AD" },
//     { name: "Angola", code: "AO" },
//     { name: "Anguilla", code: "AI" },
//     { name: "Antarctica", code: "AQ" },
//     { name: "Antigua and Barbuda", code: "AG" },
//   ];

  // const states = [
  //   { name: "Andhra Pradesh", code: "AP" },
  //   { name: "Arunachal Pradesh", code: "AR" },
  //   { name: "Assam", code: "AS" },
  //   { name: "Bihar", code: "BR" },
  //   { name: "Chhattisgarh", code: "CG" },
  //   { name: "Goa", code: "GA" },
  //   { name: "Gujarat", code: "GJ" },
  //   { name: "Haryana", code: "HR" },
  //   { name: "Himachal Pradesh", code: "HP" },
  //   { name: "Jharkhand", code: "JH" },
  //   { name: "Karnataka", code: "KA" },
  //   { name: "Kerala", code: "KL" },
  //   { name: "Madhya Pradesh", code: "MP" },
  //   { name: "Maharashtra", code: "MH" },
  //   { name: "Manipur", code: "MN" },
  //   { name: "Meghalaya", code: "ML" },
  //   { name: "Mizoram", code: "MZ" },
  //   { name: "Nagaland", code: "NL" },
  //   { name: "Odisha", code: "OR" },
  //   { name: "Punjab", code: "PB" },
  //   { name: "Rajasthan", code: "RJ" },
  //   { name: "Sikkim", code: "SK" },
  //   { name: "Tamil Nadu", code: "TN" },
  //   { name: "Telangana", code: "TG" },
  //   { name: "Tripura", code: "TR" },
  //   { name: "Uttar Pradesh", code: "UP" },
  //   { name: "Uttarakhand", code: "UK" },
  //   { name: "West Bengal", code: "WB" },
  //   { name: "Andaman and Nicobar Islands", code: "AN" },
  //   { name: "Chandigarh", code: "CH" },
  //   { name: "Lakshadweep", code: "LD" },
  //   { name: "Delhi", code: "DL" },
  //   { name: "Puducherry", code: "PY" },
  //   { name: "Ladakh", code: "LA" },
  //   { name: "Jammu and Kashmir", code: "JK" },
  // ];

//   useEffect(() => {
//     setIsFormValid(validate());
//   }, [name, mobile, pinCode, flatNo, area, landmark, town, state, country, addressType]);

//   const handleMobileChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= 10 && /^\d*$/.test(value)) {
//       mobileChange(value);
//     }
//   };

//   const addresses = [
//     { name: "Home (7 am - 9 pm delivery)" },
//     { name: "Office/Commercial (10 AM - 6 PM delivery)" },
//   ];

//   return (
//     <>
//     <NavbarForm/>
    
//     <div className="container bg-light">
//       <div className="row">
//         <div className="col-12 py-2 px-4 px-md-12">
//           <h1 className="font-weight-medium text-xl">Add a new address</h1>
//           <form onSubmit={handlesubmit}>
//             <div className="dropdown py-6">
//               <select
//                 className="form-select py-3 px-2 w-100 rounded"
//                 name="country"
//                 value={country}
//                 onChange={(e) => countryChange(e.target.value)}
//               >
//                 <option value="">Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.country && (
//                 <small className="text-danger">{errors.country}</small>
//               )}
//             </div>
//             <div className=" full-name-input mt-1">
//               <label className="font-weight-semibold " htmlFor="firstName">
//                 Full Name:
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your Full Name"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={name}
//                 onChange={(e) => nameChange(e.target.value)}
//               />
//               {errors.name && (
//                 <small className="text-danger">{errors.name}</small>
//               )}
//             </div>
//             <div className=" mobile-number-input mt-2">
//               <label
//                 className="font-weight-semibold ml-1"
//                 htmlFor="mobileNumber"
//               >
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobileNumber"
//                 placeholder="10-digit mobile number without prefixes"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={mobile}
                
//                 onChange={handleMobileChange}

//               />
//               {errors.mobile && (
//                 <small className="text-danger">{errors.mobile}</small>
//               )}
//             </div>
//             <div className=" pin-code-input mt-2">
//               <label className="font-weight-semibold ml-1" htmlFor="pinCode">
//                 PIN Code
//               </label>
//               <input
//                 type="number"
//                 name="pinCode"
//                 maxLength="6"
//                 placeholder="6 digits [0-9] PIN Code"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={pinCode}
//                 onChange={(e) => pinCodeChange(e.target.value)}
//               />
//               {errors.pinCode && (
//                 <small className="text-danger">{errors.pinCode}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="flatNo" className="font-weight-semibold ml-1">
//                 Flat, House no., Building, Company, Apartment
//               </label>
//               <input
//                 type="text"
//                 name="flatNo"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={flatNo}
//                 onChange={(e) => flatNoChange(e.target.value)}
//               />
//               {errors.flatNo && (
//                 <small className="text-danger">{errors.flatNo}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="area" className="font-weight-semibold ml-1">
//                 Area, Street, Sector, Village
//               </label>
//               <input
//                 type="text"
//                 name="area"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={area}
//                 onChange={(e) => areaChange(e.target.value)}
//               />
//               {errors.area && (
//                 <small className="text-danger">{errors.area}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="landmark" className="font-weight-semibold ml-1">
//                 Landmark
//               </label>
//               <input
//                 type="text"
//                 name="landmark"
//                 placeholder="E.g. near apollo hospital"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={landmark}
//                 onChange={(e) => landmarkChange(e.target.value)}
//               />
//               {errors.landmark && (
//                 <small className="text-danger">{errors.landmark}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="town" className="font-weight-semibold ml-1">
//                 Town/City
//               </label>
//               <input
//                 type="text"
//                 name="town"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={town}
//                 onChange={(e) => townChange(e.target.value)}
//               />
//               {errors.town && (
//                 <small className="text-danger">{errors.town}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//             <label htmlFor="landmark" className="font-weight-semibold ml-1">
//                 State
//               </label>
//             <div className="dropdown py-6">
           
//               <select
//                 className="form-select py-2 px-2 w-100 rounded"
//                 name="state"
//                 value={state}
//                 onChange={(e) => stateChange(e.target.value)}
//               >
//                 <option value="">Select State</option>
//                 {states.map((state) => (
//                   <option key={state.code} value={state.code}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.state && (
//                 <small className="text-danger">{errors.state}</small>
//               )}
//             </div>
//             </div>
//             <div className="dropdown py-6 mt-2">
//               <select
//                 className="form-select py-2 px-2 w-100 rounded"
//                 name="addressType"
//                 value={addressType}
//                 onChange={(e) => addressTypeChange(e.target.value)}
//               >
//                 <option value="">Address Type</option>
//                 {addresses.map((type) => (
//                   <option key={type.name} value={type.name}>
//                     {type.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.addressType && (
//                 <small className="text-danger">{errors.addressType}</small>
//               )}
//             </div>
//             <div className="form-check py-2">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="defaultAddress"
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label" htmlFor="defaultAddress">
//                 Make this my default address
//               </label>
//             </div>

//           <div>
//             <p className="fw-bold mt-2 fs-2">Add delivery instructions</p>
//             <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
//           </div>

//             <div className="">
//               <button
//                 type="submit"
//                 className="btn btn-warning w-100 py-2 rounded"
//                  onClick={() => {
//                   navigate("/order-now");
//                 }}
//                 disabled={!isFormValid}
              
//               >
//                 Use this address
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <FooterForm/>
//     </>
//   );
// };

// export default DetailsFormComponent;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";

// const DetailsFormComponent = ({ productId }) => {
//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);

//   const [isChecked, setIsChecked] = useState(false);
//   const [name, nameChange] = useState("");
//   const [mobile, mobileChange] = useState("");
//   const [pinCode, pinCodeChange] = useState("");
//   const [flatNo, flatNoChange] = useState("");
//   const [area, areaChange] = useState("");
//   const [landmark, landmarkChange] = useState("");
//   const [town, townChange] = useState("");
//   const [state, stateChange] = useState("");
//   const [country, countryChange] = useState("IN");
//   const [addressType, addressTypeChange] = useState("");

//   const validate = () => {
//     const newErrors = {};
//     if (!name) newErrors.name = "Full Name is required";
//     if (!mobile) newErrors.mobile = "Mobile Number is required";
//     else if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Mobile Number must be exactly 10 digits";
//     if (!pinCode) newErrors.pinCode = "PIN Code is required";
//     if (!flatNo) newErrors.flatNo = "Flat/House No is required";
//     if (!area) newErrors.area = "Area is required";
//     if (!landmark) newErrors.landmark = "Landmark is required";
//     if (!town) newErrors.town = "Town/City is required";
//     if (!state) newErrors.state = "State is required";
//     if (!country) newErrors.country = "Country is required";
//     if (!addressType) newErrors.addressType = "Address Type is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     console.log(productId);
//     if (validate()) {
//       const regobj = {
//         name: name,
//         number: mobile,
//         pincode: pinCode,
//         house: flatNo,
//         area: area,
//         landmark: landmark,
//         city: town,
//         state: state,
//         country: country,
//         addressType: addressType,
//         defaultAddress: isChecked,
//       };

//       try {
//         const response = await axios.post(
//           "https://ecommerce-ryoy.onrender.com/address",
//           regobj
//         );
//         if (response) {
//           console.log("response is:", JSON.stringify(response));
//           // Navigate to the `/order-now` page with the product ID in the URL query
//           navigate(`/order-now?productId=${productId}`);
//         }
//       } catch (error) {
//         console.log("something is wrong ", error);
//       }
//     }
//   };

//   const handleCheckboxChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   const countries = [
//     { name: "India", code: "IN" },
//     { name: "United States", code: "US" },
//     { name: "Algeria", code: "DZ" },
//     { name: "Afghanistan", code: "AF" },
//     { name: "Australia", code: "AU" },
//     { name: "Afghanistan", code: "AF" },
//     { name: "Albania", code: "AL" },
//     { name: "Algeria", code: "DZ" },
//     { name: "American Samoa", code: "AS" },
//     { name: "Andorra", code: "AD" },
//     { name: "Angola", code: "AO" },
//     { name: "Anguilla", code: "AI" },
//     { name: "Antarctica", code: "AQ" },
//     { name: "Antigua and Barbuda", code: "AG" },
//   ];

//   const states = [
//     { name: "Andhra Pradesh", code: "AP" },
//     { name: "Arunachal Pradesh", code: "AR" },
//     { name: "Assam", code: "AS" },
//     { name: "Bihar", code: "BR" },
//     { name: "Chhattisgarh", code: "CG" },
//     { name: "Goa", code: "GA" },
//     { name: "Gujarat", code: "GJ" },
//     { name: "Haryana", code: "HR" },
//     { name: "Himachal Pradesh", code: "HP" },
//     { name: "Jharkhand", code: "JH" },
//     { name: "Karnataka", code: "KA" },
//     { name: "Kerala", code: "KL" },
//     { name: "Madhya Pradesh", code: "MP" },
//     { name: "Maharashtra", code: "MH" },
//     { name: "Manipur", code: "MN" },
//     { name: "Meghalaya", code: "ML" },
//     { name: "Mizoram", code: "MZ" },
//     { name: "Nagaland", code: "NL" },
//     { name: "Odisha", code: "OR" },
//     { name: "Punjab", code: "PB" },
//     { name: "Rajasthan", code: "RJ" },
//     { name: "Sikkim", code: "SK" },
//     { name: "Tamil Nadu", code: "TN" },
//     { name: "Telangana", code: "TG" },
//     { name: "Tripura", code: "TR" },
//     { name: "Uttar Pradesh", code: "UP" },
//     { name: "Uttarakhand", code: "UK" },
//     { name: "West Bengal", code: "WB" },
//     { name: "Andaman and Nicobar Islands", code: "AN" },
//     { name: "Chandigarh", code: "CH" },
//     { name: "Lakshadweep", code: "LD" },
//     { name: "Delhi", code: "DL" },
//     { name: "Puducherry", code: "PY" },
//     { name: "Ladakh", code: "LA" },
//     { name: "Jammu and Kashmir", code: "JK" },
//   ];

//   useEffect(() => {
//     setIsFormValid(validate());
//   }, [name, mobile, pinCode, flatNo, area, landmark, town, state, country, addressType]);

//   const handleMobileChange = (e) => {
//     const value = e.target.value;
//     if (value.length <= 10 && /^\d*$/.test(value)) {
//       mobileChange(value);
//     }
//   };

//   const addresses = [
//     { name: "Home (7 am - 9 pm delivery)" },
//     { name: "Office/Commercial (10 AM - 6 PM delivery)" },
//   ];

//   return (
//     <>
//     <NavbarForm/>
    
//     <div className="container bg-light">
//       <div className="row">
//         <div className="col-12 py-2 px-4 px-md-12">
//           <h1 className="font-weight-medium text-xl">Add a new address</h1>
//           <form onSubmit={handlesubmit}>
//             <div className="dropdown py-6">
//               <select
//                 className="form-select py-3 px-2 w-100 rounded"
//                 name="country"
//                 value={country}
//                 onChange={(e) => countryChange(e.target.value)}
//               >
//                 <option value="">Select Country</option>
//                 {countries.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.country && (
//                 <small className="text-danger">{errors.country}</small>
//               )}
//             </div>
//             <div className=" full-name-input mt-1">
//               <label className="font-weight-semibold " htmlFor="firstName">
//                 Full Name:
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter your Full Name"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={name}
//                 onChange={(e) => nameChange(e.target.value)}
//               />
//               {errors.name && (
//                 <small className="text-danger">{errors.name}</small>
//               )}
//             </div>
//             <div className=" mobile-number-input mt-2">
//               <label
//                 className="font-weight-semibold ml-1"
//                 htmlFor="mobileNumber"
//               >
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobileNumber"
//                 placeholder="10-digit mobile number without prefixes"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={mobile}
                
//                 onChange={handleMobileChange}

//               />
//               {errors.mobile && (
//                 <small className="text-danger">{errors.mobile}</small>
//               )}
//             </div>
//             <div className=" pin-code-input mt-2">
//               <label className="font-weight-semibold ml-1" htmlFor="pinCode">
//                 PIN Code
//               </label>
//               <input
//                 type="number"
//                 name="pinCode"
//                 maxLength="6"
//                 placeholder="6 digits [0-9] PIN Code"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={pinCode}
//                 onChange={(e) => pinCodeChange(e.target.value)}
//               />
//               {errors.pinCode && (
//                 <small className="text-danger">{errors.pinCode}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="flatNo" className="font-weight-semibold ml-1">
//                 Flat, House no., Building, Company, Apartment
//               </label>
//               <input
//                 type="text"
//                 name="flatNo"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={flatNo}
//                 onChange={(e) => flatNoChange(e.target.value)}
//               />
//               {errors.flatNo && (
//                 <small className="text-danger">{errors.flatNo}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="area" className="font-weight-semibold ml-1">
//                 Area, Street, Sector, Village
//               </label>
//               <input
//                 type="text"
//                 name="area"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={area}
//                 onChange={(e) => areaChange(e.target.value)}
//               />
//               {errors.area && (
//                 <small className="text-danger">{errors.area}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="landmark" className="font-weight-semibold ml-1">
//                 Landmark
//               </label>
//               <input
//                 type="text"
//                 name="landmark"
//                 placeholder="E.g. near apollo hospital"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={landmark}
//                 onChange={(e) => landmarkChange(e.target.value)}
//               />
//               {errors.landmark && (
//                 <small className="text-danger">{errors.landmark}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//               <label htmlFor="town" className="font-weight-semibold ml-1">
//                 Town/City
//               </label>
//               <input
//                 type="text"
//                 name="town"
//                 className="form-control py-2 px-2 border border-dark rounded"
//                 value={town}
//                 onChange={(e) => townChange(e.target.value)}
//               />
//               {errors.town && (
//                 <small className="text-danger">{errors.town}</small>
//               )}
//             </div>
//             <div className=" address-input mt-2">
//             <label htmlFor="landmark" className="font-weight-semibold ml-1">
//                 State
//               </label>
//             <div className="dropdown py-6">
           
//               <select
//                 className="form-select py-2 px-2 w-100 rounded"
//                 name="state"
//                 value={state}
//                 onChange={(e) => stateChange(e.target.value)}
//               >
//                 <option value="">Select State</option>
//                 {states.map((state) => (
//                   <option key={state.code} value={state.code}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.state && (
//                 <small className="text-danger">{errors.state}</small>
//               )}
//             </div>
//             </div>
//             <div className="dropdown py-6 mt-2">
//               <select
//                 className="form-select py-2 px-2 w-100 rounded"
//                 name="addressType"
//                 value={addressType}
//                 onChange={(e) => addressTypeChange(e.target.value)}
//               >
//                 <option value="">Address Type</option>
//                 {addresses.map((type) => (
//                   <option key={type.name} value={type.name}>
//                     {type.name}
//                   </option>
//                 ))}
//               </select>
//               {errors.addressType && (
//                 <small className="text-danger">{errors.addressType}</small>
//               )}
//             </div>
//             <div className="form-check py-2">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="defaultAddress"
//                 checked={isChecked}
//                 onChange={handleCheckboxChange}
//               />
//               <label className="form-check-label" htmlFor="defaultAddress">
//                 Make this my default address
//               </label>
//             </div>

//           <div>
//             <p className="fw-bold mt-2 fs-2">Add delivery instructions</p>
//             <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
//           </div>

//             <div className="">
//               <button
//                 type="submit"
//                 className="btn btn-warning w-100 py-2 rounded"
//                  onClick={() => {
//                   navigate("/order-now");
//                 }}
//                 disabled={!isFormValid}
              
//               >
//                 Use this address
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//     <FooterForm/>
//     </>
//   );
// };

// export default DetailsFormComponent;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";

// const DetailsFormComponent = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation(); // Access state from the location
//   const [errors, setErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [productId, setProductId] = useState(null); // State to hold the product ID

//   useEffect(() => {
//     if (state && state.productId) {
//       // If productId exists in state, set it in the component state
//       setProductId(state.productId);
//       console.log("Product ID:", state.productId); // Log the productId
//     }
//   }, [state]);

//   // Rest of your component code goes here...
// };

// export default DetailsFormComponent;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import NavbarForm from "./NavbarForm";
import FooterForm from "./FooterForm";

const DetailsFormComponent = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access location object
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [name, nameChange] = useState("");
  const [mobile, mobileChange] = useState("");
  const [pinCode, pinCodeChange] = useState("");
  const [flatNo, flatNoChange] = useState("");
  const [area, areaChange] = useState("");
  const [landmark, landmarkChange] = useState("");
  const [town, townChange] = useState("");
  const [state, stateChange] = useState("");
  const [country, countryChange] = useState("IN");
  const [addressType, addressTypeChange] = useState("");
  const [productId, setProductId] = useState(null); // State to hold the product ID

  useEffect(() => {
    // Extract productId from location state and set it in the component state
    if (location.state && location.state.productId) {
      setProductId(location.state.productId);
      console.log("Product ID:", location.state.productId); // Log productId to console
    }
  }, [location.state]);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Full Name is required";
    if (!mobile) newErrors.mobile = "Mobile Number is required";
    // if (!mobile) newErrors.mobile = "Mobile Number is required";
    else if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Mobile Number must be exactly 10 digits";
    if (!pinCode) newErrors.pinCode = "PIN Code is required";
    if (!flatNo) newErrors.flatNo = "Flat/House No is required";
    if (!area) newErrors.area = "Area is required";
    if (!landmark) newErrors.landmark = "Landmark is required";
    if (!town) newErrors.town = "Town/City is required";
    if (!state) newErrors.state = "State is required";
    if (!country) newErrors.country = "Country is required";
    if (!addressType) newErrors.addressType = "Address Type is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const regobj = {
        name: name,
        number: mobile,
        pincode: pinCode,
        house: flatNo,
        area: area,
        landmark: landmark,
        city: town,
        state: state,
        country: country,
        addressType: addressType,
        defaultAddress: isChecked,
      };

      try {
        const response = await axios.post(
          "https://ecommerce-ryoy.onrender.com/address",
          regobj
        );
        if (response) {
          console.log("response is:", JSON.stringify(response));
          navigate("/order-now", { state: { productId: productId } }); // Navigate to the next page upon successful submission
        }
      } catch (error) {
        console.log("something is wrong ", error);
      }
    }
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const countries = [
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "Algeria", code: "DZ" },
    // Other countries...
  ];

  const states = [
    { name: "Andhra Pradesh", code: "AP" },
    { name: "Arunachal Pradesh", code: "AR" },
    { name: "Assam", code: "AS" },
    { name: "Bihar", code: "BR" },
    { name: "Chhattisgarh", code: "CG" },
    { name: "Goa", code: "GA" },
    { name: "Gujarat", code: "GJ" },
    { name: "Haryana", code: "HR" },
    { name: "Himachal Pradesh", code: "HP" },
    { name: "Jharkhand", code: "JH" },
    { name: "Karnataka", code: "KA" },
    { name: "Kerala", code: "KL" },
    { name: "Madhya Pradesh", code: "MP" },
    { name: "Maharashtra", code: "MH" },
    { name: "Manipur", code: "MN" },
    { name: "Meghalaya", code: "ML" },
    { name: "Mizoram", code: "MZ" },
    { name: "Nagaland", code: "NL" },
    { name: "Odisha", code: "OR" },
    { name: "Punjab", code: "PB" },
    { name: "Rajasthan", code: "RJ" },
    { name: "Sikkim", code: "SK" },
    { name: "Tamil Nadu", code: "TN" },
    { name: "Telangana", code: "TG" },
    { name: "Tripura", code: "TR" },
    { name: "Uttar Pradesh", code: "UP" },
    { name: "Uttarakhand", code: "UK" },
    { name: "West Bengal", code: "WB" },
    { name: "Andaman and Nicobar Islands", code: "AN" },
    { name: "Chandigarh", code: "CH" },
    { name: "Lakshadweep", code: "LD" },
    { name: "Delhi", code: "DL" },
    { name: "Puducherry", code: "PY" },
    { name: "Ladakh", code: "LA" },
    { name: "Jammu and Kashmir", code: "JK" },
  ];

  useEffect(() => {
    setIsFormValid(validate());
  }, [name, mobile, pinCode, flatNo, area, landmark, town, state, country, addressType]);

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^\d*$/.test(value)) {
      mobileChange(value);
    }
  };

  const addresses = [
    { name: "Home (7 am - 9 pm delivery)" },
    { name: "Office/Commercial (10 AM - 6 PM delivery)" },
  ];

  return (
    <>
      <NavbarForm />
      <div className="container bg-light">
        <div className="row">
          <div className="col-12 py-2 px-4 px-md-12">
            <h1 className="font-weight-medium text-xl">Add a new address</h1>
            <form onSubmit={handlesubmit}>
            <div className="dropdown py-6">
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="country"
                value={country}
                onChange={(e) => countryChange(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && (
                <small className="text-danger">{errors.country}</small>
              )}
            </div>
            <div className=" full-name-input mt-1">
              <label className="font-weight-semibold " htmlFor="firstName">
                Full Name:
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your Full Name"
                className="form-control py-2 px-2 border border-dark rounded"
                value={name}
                onChange={(e) => nameChange(e.target.value)}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>
            <div className=" mobile-number-input mt-2">
              <label
                className="font-weight-semibold ml-1"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="10-digit mobile number without prefixes"
                className="form-control py-2 px-2 border border-dark rounded"
                value={mobile}
                
                onChange={handleMobileChange}

              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile}</small>
              )}
            </div>
            <div className=" pin-code-input mt-2">
              <label className="font-weight-semibold ml-1" htmlFor="pinCode">
                PIN Code
              </label>
              <input
                type="number"
                name="pinCode"
                maxLength="6"
                placeholder="6 digits [0-9] PIN Code"
                className="form-control py-2 px-2 border border-dark rounded"
                value={pinCode}
                onChange={(e) => pinCodeChange(e.target.value)}
              />
              {errors.pinCode && (
                <small className="text-danger">{errors.pinCode}</small>
              )}
            </div>
            <div className=" address-input mt-2">
              <label htmlFor="flatNo" className="font-weight-semibold ml-1">
                Flat, House no., Building, Company, Apartment
              </label>
              <input
                type="text"
                name="flatNo"
                className="form-control py-2 px-2 border border-dark rounded"
                value={flatNo}
                onChange={(e) => flatNoChange(e.target.value)}
              />
              {errors.flatNo && (
                <small className="text-danger">{errors.flatNo}</small>
              )}
            </div>
            <div className=" address-input mt-2">
              <label htmlFor="area" className="font-weight-semibold ml-1">
                Area, Street, Sector, Village
              </label>
              <input
                type="text"
                name="area"
                className="form-control py-2 px-2 border border-dark rounded"
                value={area}
                onChange={(e) => areaChange(e.target.value)}
              />
              {errors.area && (
                <small className="text-danger">{errors.area}</small>
              )}
            </div>
            <div className=" address-input mt-2">
              <label htmlFor="landmark" className="font-weight-semibold ml-1">
                Landmark
              </label>
              <input
                type="text"
                name="landmark"
                placeholder="E.g. near apollo hospital"
                className="form-control py-2 px-2 border border-dark rounded"
                value={landmark}
                onChange={(e) => landmarkChange(e.target.value)}
              />
              {errors.landmark && (
                <small className="text-danger">{errors.landmark}</small>
              )}
            </div>
            <div className=" address-input mt-2">
              <label htmlFor="town" className="font-weight-semibold ml-1">
                Town/City
              </label>
              <input
                type="text"
                name="town"
                className="form-control py-2 px-2 border border-dark rounded"
                value={town}
                onChange={(e) => townChange(e.target.value)}
              />
              {errors.town && (
                <small className="text-danger">{errors.town}</small>
              )}
            </div>
            <div className=" address-input mt-2">
            <label htmlFor="landmark" className="font-weight-semibold ml-1">
                State
              </label>
            <div className="dropdown py-6">
           
              <select
                className="form-select py-2 px-2 w-100 rounded"
                name="state"
                value={state}
                onChange={(e) => stateChange(e.target.value)}
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.code} value={state.code}>
                    {state.name}
                  </option>
                ))}
              </select>
              {errors.state && (
                <small className="text-danger">{errors.state}</small>
              )}
            </div>
            </div>
            <div className="dropdown py-6 mt-2">
              <select
                className="form-select py-2 px-2 w-100 rounded"
                name="addressType"
                value={addressType}
                onChange={(e) => addressTypeChange(e.target.value)}
              >
                <option value="">Address Type</option>
                {addresses.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
              {errors.addressType && (
                <small className="text-danger">{errors.addressType}</small>
              )}
            </div>
            <div className="form-check py-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="defaultAddress"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="defaultAddress">
                Make this my default address
              </label>
            </div>

          <div>
            <p className="fw-bold mt-2 fs-2">Add delivery instructions</p>
            <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
          </div>
                
            <div className="">
              <button
                type="submit"
                className="btn btn-warning w-100 py-2 rounded"
                 onClick={() => {
                  navigate("/order-now", { state: { productId: productId } });
                }}
                disabled={!isFormValid}
              
              >
                Use this address
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
      <FooterForm />
    </>
  );
};

export default DetailsFormComponent;

// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from 'react-router-dom';
// import NavbarForm from "./NavbarForm";
// import FooterForm from "./FooterForm";
// import axios from 'axios';

// const DebitCreditForm = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { productId } = location.state || {};
//   const [product, setProduct] = useState(null);
//   const [finalPrice, setFinalPrice] = useState(null);
//   const [savings, setSavings] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [isValid, setIsValid] = useState(false);
//   const [formData, setFormData] = useState({
//     cardNumber: "",
//     cardHolderName: "",
//     expiryMonth: "",
//     expiryYear: "",
//     cvv: "",
//     cardType: "",
//     bankName: "",
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredOptions, setFilteredOptions] = useState([]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const inputRef = useRef(null);

//   const handleInputChange = (event) => {
//     const { id, value } = event.target;

//     if (id === "cvv" && value.length > 3) {
//       return;
//     }

//     setFormData({
//       ...formData,
//       [id]: value,
//     });
//   };

//   const handleCardTypeChange = (event) => {
//     setFormData({
//       ...formData,
//       cardType: event.target.value,
//     });
//   };

//   const handleCardNumberChange = (event) => {
//     const value = event.target.value.replace(/\D/g, '');
//     const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1-');
//     setFormData({
//       ...formData,
//       cardNumber: formattedValue.slice(0, 19),
//     });
//   };

//   const validateCardNumber = (number) => {
//     const cleaned = number.replace(/\D/g, '');
//     let sum = 0;
//     let shouldDouble = false;

//     for (let i = cleaned.length - 1; i >= 0; i--) {
//       let digit = parseInt(cleaned.charAt(i));

//       if (shouldDouble) {
//         digit *= 2;
//         if (digit > 9) {
//           digit -= 9;
//         }
//       }

//       sum += digit;
//       shouldDouble = !shouldDouble;
//     }

//     return (sum % 10) === 0;
//   };

//   const validate = () => {
//     let errors = {};
//     let isValid = true;

//     if (!validateCardNumber(formData.cardNumber)) {
//       errors.cardNumber = "Invalid card number";
//       isValid = false;
//     }
//     if (!formData.cardHolderName.trim()) {
//       errors.cardHolderName = "Cardholder name is required";
//       isValid = false;
//     }
//     if (!formData.expiryMonth.trim()) {
//       errors.expiryMonth = "Expiry month is required";
//       isValid = false;
//     }
//     if (!formData.expiryYear.trim()) {
//       errors.expiryYear = "Expiry year is required";
//       isValid = false;
//     }
//     if (!formData.cvv.match(/^\d{3}$/)) {
//       errors.cvv = "CVV must be 3 digits";
//       isValid = false;
//     }
//     if (!formData.cardType.trim()) {
//       errors.cardType = "Card type is required";
//       isValid = false;
//     }
//     if (!formData.bankName.trim()) {
//       errors.bankName = "Bank name is required";
//       isValid = false;
//     }

//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth() + 1;
//     const expiryYear = parseInt(formData.expiryYear, 10);
//     const expiryMonth = parseInt(formData.expiryMonth, 10);

//     if (expiryYear < currentYear || (expiryYear === currentYear && expiryMonth < currentMonth)) {
//       errors.expiryDate = "Card has expired";
//       isValid = false;
//     }

//     setErrors(errors);
//     setIsValid(isValid);
//     return isValid;
//   };

//   useEffect(() => {
//     if (location.state && location.state.productId) {
//       setProduct(location.state.productId);
//       console.log("Product ID:", location.state.productId);
//     } else {
//       console.error("Product ID is missing.");
//     }
//   }, [location.state]);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(`https://ecommerce-ryoy.onrender.com/getoneproduct/${productId}`);
//         if (response.data && response.data._id === productId) {
//           const productDetails = response.data;
//           setProduct(productDetails);
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

//   useEffect(() => {
//     console.log("Product ID:", productId);
//   }, [productId]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (validate()) {
//       const payload = {
//         cardNumber: formData.cardNumber.replace(/-/g, ''),
//         cardHolderName: formData.cardHolderName,
//         expiryMonth: formData.expiryMonth,
//         expiryYear: formData.expiryYear,
//         cvv: formData.cvv,
//         cardType: formData.cardType,
//         bankName: formData.bankName,
//       };
//       console.log("Submitting payload:", payload);

//       try {
//         const response = await fetch("https://ecommerce-ryoy.onrender.com/card", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(payload),
//         });

//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error("Error response from server:", errorData);
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log("Form submitted successfully", data);

//         setFormData({
//           cardNumber: "",
//           cardHolderName: "",
//           expiryMonth: "",
//           expiryYear: "",
//           cvv: "",
//           cardType: "",
//           bankName: "",
//         });
//         setErrors({});
//         setIsValid(false);
//         navigate('/otp-page', { state: { cardHolderName: formData.cardHolderName, productId: productId } });
//       } catch (error) {
//         console.error("There was a problem with the submission:", error);
//       }
//     }
//   };

//   useEffect(() => {
//     validate();
//   }, [formData]);

//   const bankOptions = [
//     "State Bank of India",
//     "HDFC Bank",
//     "ICICI Bank",
//     "Axis Bank",
//     "Kotak Mahindra Bank",
//     "IndusInd Bank",
//     "Yes Bank",
//     "Punjab National Bank",
//     "Bank of Baroda",
//     "Union Bank of India",
//     "Canara Bank",
//     "Bank of India",
//     "Central Bank of India",
//     "Indian Bank",
//     "IDFC First Bank",
//     "RBL Bank",
//     "UCO Bank",
//     "IDBI Bank",
//     "Federal Bank",
//     "South Indian Bank",
//     "Karur Vysya Bank",
//     "Bandhan Bank",
//     "Punjab & Sind Bank",
//     "Dhanlaxmi Bank",
//     "City Union Bank",
//     "Jammu & Kashmir Bank",
//     "Karnataka Bank",
//     "Lakshmi Vilas Bank",
//     "Saraswat Bank",
//     "Tamilnad Mercantile Bank",
//     "Nainital Bank"
//   ];

//   useEffect(() => {
//     const filtered = bankOptions.filter(option =>
//       option.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredOptions(filtered);
//     setDropdownOpen(!!searchTerm);
//   }, [searchTerm]);

//   const handleBankSelect = (event) => {
//     setFormData({
//       ...formData,
//       bankName: event.target.value,
//     });
//     setDropdownOpen(false);
//     inputRef.current?.focus();
//   };

//   return (
//     <>
//       <NavbarForm />
//       <div className="container mt-5">
//         {product && (
//           <div className="row">
//             <div className="col-6">
//               <p>Paying to</p>
//               <p>TOTAL AMOUNT</p>
//             </div>
//             <div className="col-6">
//               <p>AMAZON SELLER SERVICES PRIVATE LIMITED</p>
//               <p>₹ {finalPrice}</p>
//               <p className="text-success">You save ₹ {savings}</p>
//             </div>
//           </div>
//         )}
//         <div className="row">
//           <div className="col-md-12">
//             <form onSubmit={handleSubmit} className="mt-3">
//               <div className="mb-3">
//                 <label htmlFor="cardNumber" className="form-label">
//                   Card Number
//                 </label>
//                 <input
//                   type="text"
//                   className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
//                   id="cardNumber"
//                   value={formData.cardNumber}
//                   onChange={handleCardNumberChange}
//                   placeholder="1234-5678-9876-5432"
//                 />
//                 {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="cardHolderName" className="form-label">
//                   Cardholder Name
//                 </label>
//                 <input
//                   type="text"
//                   className={`form-control ${errors.cardHolderName ? "is-invalid" : ""}`}
//                   id="cardHolderName"
//                   value={formData.cardHolderName}
//                   onChange={handleInputChange}
//                   placeholder="John Doe"
//                 />
//                 {errors.cardHolderName && <div className="invalid-feedback">{errors.cardHolderName}</div>}
//               </div>
//               <div className="row">
//                 <div className="col-md-4">
//                   <div className="mb-3">
//                     <label htmlFor="expiryMonth" className="form-label">
//                       Expiry Month
//                     </label>
//                     <input
//                       type="text"
//                       className={`form-control ${errors.expiryMonth ? "is-invalid" : ""}`}
//                       id="expiryMonth"
//                       value={formData.expiryMonth}
//                       onChange={handleInputChange}
//                       placeholder="MM"
//                     />
//                     {errors.expiryMonth && <div className="invalid-feedback">{errors.expiryMonth}</div>}
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="mb-3">
//                     <label htmlFor="expiryYear" className="form-label">
//                       Expiry Year
//                     </label>
//                     <input
//                       type="text"
//                       className={`form-control ${errors.expiryYear ? "is-invalid" : ""}`}
//                       id="expiryYear"
//                       value={formData.expiryYear}
//                       onChange={handleInputChange}
//                       placeholder="YY"
//                     />
//                     {errors.expiryYear && <div className="invalid-feedback">{errors.expiryYear}</div>}
//                   </div>
//                 </div>
//                 <div className="col-md-4">
//                   <div className="mb-3">
//                     <label htmlFor="cvv" className="form-label">
//                       CVV
//                     </label>
//                     <input
//                       type="password"
//                       className={`form-control ${errors.cvv ? "is-invalid" : ""}`}
//                       id="cvv"
//                       value={formData.cvv}
//                       onChange={handleInputChange}
//                       placeholder="123"
//                     />
//                     {errors.cvv && <div className="invalid-feedback">{errors.cvv}</div>}
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="cardType" className="form-label">
//                   Card Type
//                 </label>
//                 <select
//                   className={`form-select ${errors.cardType ? "is-invalid" : ""}`}
//                   id="cardType"
//                   value={formData.cardType}
//                   onChange={handleCardTypeChange}
//                 >
//                   <option value="">Select card type</option>
//                   <option value="Visa">Visa</option>
//                   <option value="MasterCard">MasterCard</option>
//                   <option value="American Express">American Express</option>
//                   <option value="Discover">Discover</option>
//                 </select>
//                 {errors.cardType && <div className="invalid-feedback">{errors.cardType}</div>}
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="bankName" className="form-label">
//                   Bank Name
//                 </label>
//                 <input
//                   type="text"
//                   className={`form-control ${errors.bankName ? "is-invalid" : ""}`}
//                   id="bankName"
//                   value={formData.bankName}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   ref={inputRef}
//                   placeholder="State Bank of India"
//                   autoComplete="off"
//                 />
//                 {dropdownOpen && (
//                   <ul className="list-group mt-2">
//                     {filteredOptions.map((option, index) => (
//                       <li
//                         key={index}
//                         className="list-group-item"
//                         onClick={() => handleBankSelect({ target: { value: option } })}
//                       >
//                         {option}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//                 {errors.bankName && <div className="invalid-feedback">{errors.bankName}</div>}
//               </div>
//               <button type="submit" className="btn btn-primary" disabled={!isValid}>
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <FooterForm />
//     </>
//   );
// };

// export default DebitCreditForm;








