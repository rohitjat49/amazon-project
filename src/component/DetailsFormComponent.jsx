// import React, { useState } from "react";

// const DetailsFormComponent = () => {
//   const [pinCode, setPinCode] = useState("");

//   const handleChange = (event) => {
//     const newPinCode = event.target.value.replace(/\D/g, "").slice(0, 6);
//     setPinCode(newPinCode);
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
//   const state = [
//     { name: "Madhya Pradesh", code: "MP" },
//     { name: "Uttar Pradesh", code: "UP" },
//     { name: "Andhra Pradesh", code: "AP" },
//   ];
//   const address = [
//     { name: "Home (7 am - 9 pm delivery)" },
//     { name: "Office/Commercial (10 AM - 6 PM delivery)" },
//   ];
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChanged = (event) => {
//     setIsChecked(event.target.checked);
//   };
//   return (
//     <div class="container bg-light">
//     <div class="row">
//       <div class="col-12 py-2 px-4 px-md-12">
//         <h1 class="font-weight-medium text-2xl">Add a new address</h1>
//         <div class="dropdown py-6">
//           <select class="form-select py-3 px-2 w-100 rounded">
//           <option value="">Select Country</option>
//             {countries.map((country) => (
//               <option key={country.code} value={country.code}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div class="form-group full-name-input">
//           <label class="font-weight-semibold ml-1" for="firstName">Full Name:</label>
//           <input type="text" id="firstName" name="firstName" placeholder="Enter your Full Name" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="form-group mobile-number-input mt-2">
//           <label class="font-weight-semibold ml-1" for="mobileNumber">Mobile Number</label>
//           <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="10-digit mobile number without prefixes" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="form-group pin-code-input mt-2">
//           <label class="font-weight-semibold ml-1" for="pinCode">PIN Code</label>
//           <input type="text" id="pinCode" name="pinCode" maxlength="6" placeholder="6 digits [0-9] PIN Code" value="" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="form-group address-input mt-2">
//           <label for="flatNo" class="font-weight-semibold ml-1">Flat, House no., Building, Company, Apartment</label>
//           <input type="text" id="flatNo" name="flatNo" placeholder="" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="form-group address-input mt-2">
//           <label for="flatNo" class="font-weight-semibold ml-1">Area, Street, Sector, Village</label>
//           <input type="text" id="flatNo" name="flatNo" placeholder="" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="form-group address-input mt-2">
//           <label for="flatNo" class="font-weight-semibold ml-1">Landmark</label>
//           <input type="text" id="flatNo" name="flatNo" placeholder="E.g. near apollo hospital" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="form-group address-input mt-2">
//           <label for="flatNo" class="font-weight-semibold ml-1">Town/City</label>
//           <input type="text" id="flatNo" name="flatNo" placeholder="" class="form-control py-3 px-2 border border-dark rounded" />
//         </div>
//         <div class="dropdown py-6">
//           <select class="form-select py-3 px-2 w-100 rounded">
//           <option value="">Select State</option>
//             {state.map((stat) => (
//               <option key={stat.code} value={stat.code}>
//                 {stat.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div class="default-address-checkbox space-x-3 form-check mt-2">
//         <input
//             type="checkbox"
//             id="defaultAddress"
//             name="defaultAddress"
//             checked={isChecked}
//             onChange={handleChanged}
//             className="default-address-input size-5"
//           />
//           <label for="defaultAddress" class="font-weight-normal text-dark form-check-label">Make this my default address</label>
//         </div>
//         <h2 class="mt-3 font-weight-bold text-xl">Add delivery instructions</h2>
//         <p class="mt-2 text-dark from-neutral-900">
//           Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.
//         </p>
//         <div class="dropdown py-6">
//           <label for="flatNo" class="font-weight-semibold ml-1">Address Type</label>
//           <select class="form-select py-3 px-2 w-100 rounded">
//           <option value="">Select an Address Type</option>
//             {address.map((addres) => (
//               <option key={addres.code} value={addres.code}>
//                 {addres.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button class="btn btn-warning w-100 py-3 rounded">
//           Use this address
//         </button>
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default DetailsFormComponent;

import React, { useState } from "react";

const DetailsFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    mobileNumber: "",
    pinCode: "",
    flatNo: "",
    area: "",
    landmark: "",
    town: "",
    state: "",
    country: "",
    addressType: "",
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePinCodeChange = (event) => {
    const newPinCode = event.target.value.replace(/\D/g, "").slice(0, 6);
    setFormData({
      ...formData,
      pinCode: newPinCode,
    });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = "Full Name is required";
    }
    if (!formData.mobileNumber.match(/^\d{10}$/)) {
      errors.mobileNumber = "Mobile number must be 10 digits";
    }
    if (!formData.pinCode.match(/^\d{6}$/)) {
      errors.pinCode = "PIN Code must be 6 digits";
    }
    if (!formData.flatNo.trim()) {
      errors.flatNo = "Flat/House no. is required";
    }
    if (!formData.town.trim()) {
      errors.town = "Town/City is required";
    }
    if (!formData.state) {
      errors.state = "State is required";
    }
    if (!formData.country) {
      errors.country = "Country is required";
    }
    if (!formData.addressType) {
      errors.addressType = "Address Type is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Form submission logic here
      console.log("Form submitted successfully", formData);
    }
  };

  const countries = [
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "Algeria", code: "DZ" },
    { name: "Afghanistan", code: "AF" },
    { name: "Australia", code: "AU" },
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "American Samoa", code: "AS" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Anguilla", code: "AI" },
    { name: "Antarctica", code: "AQ" },
    { name: "Antigua and Barbuda", code: "AG" },
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
    { name: "Jammu and Kashmir", code: "JK" }
  ];
  

  const addresses = [
    { name: "Home (7 am - 9 pm delivery)" },
    { name: "Office/Commercial (10 AM - 6 PM delivery)" },
  ];

  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-12 py-2 px-4 px-md-12">
          <h1 className="font-weight-medium text-2xl">Add a new address</h1>
          <form onSubmit={handleSubmit}>
            <div className="dropdown py-6">
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
              {errors.country && <small className="text-danger">{errors.country}</small>}
            </div>
            <div className="form-group full-name-input">
              <label className="font-weight-semibold ml-1" htmlFor="firstName">Full Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your Full Name"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
            </div>
            <div className="form-group mobile-number-input mt-2">
              <label className="font-weight-semibold ml-1" htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="10-digit mobile number without prefixes"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && <small className="text-danger">{errors.mobileNumber}</small>}
            </div>
            <div className="form-group pin-code-input mt-2">
              <label className="font-weight-semibold ml-1" htmlFor="pinCode">PIN Code</label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                maxLength="6"
                placeholder="6 digits [0-9] PIN Code"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.pinCode}
                onChange={handlePinCodeChange}
              />
              {errors.pinCode && <small className="text-danger">{errors.pinCode}</small>}
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="flatNo" className="font-weight-semibold ml-1">Flat, House no., Building, Company, Apartment</label>
              <input
                type="text"
                id="flatNo"
                name="flatNo"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.flatNo}
                onChange={handleChange}
              />
              {errors.flatNo && <small className="text-danger">{errors.flatNo}</small>}
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="area" className="font-weight-semibold ml-1">Area, Street, Sector, Village</label>
              <input
                type="text"
                id="area"
                name="area"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.area}
                onChange={handleChange}
              />
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="landmark" className="font-weight-semibold ml-1">Landmark</label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                placeholder="E.g. near apollo hospital"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.landmark}
                onChange={handleChange}
              />
            </div>
            <div className="form-group address-input mt-2">
              <label htmlFor="town" className="font-weight-semibold ml-1">Town/City</label>
              <input
                type="text"
                id="town"
                name="town"
                className="form-control py-3 px-2 border border-dark rounded"
                value={formData.town}
                onChange={handleChange}
              />
              {errors.town && <small className="text-danger">{errors.town}</small>}
            </div>
            <div className="dropdown py-6">
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                {states.map((stat) => (
                  <option key={stat.code} value={stat.code}>
                    {stat.name}
                  </option>
                ))}
              </select>
              {errors.state && <small className="text-danger">{errors.state}</small>}
            </div>
            <div className="default-address-checkbox space-x-3 form-check mt-2">
              <input
                type="checkbox"
                id="defaultAddress"
                name="defaultAddress"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="default-address-input size-5"
              />
              <label htmlFor="defaultAddress" className="font-weight-normal text-dark form-check-label">Make this my default address</label>
            </div>
            <h2 className="mt-3 font-weight-bold text-xl">Add delivery instructions</h2>
            <p className="mt-2 text-dark from-neutral-900">
              Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.
            </p>
            <div className="dropdown py-6">
              <label htmlFor="addressType" className="font-weight-semibold ml-1">Address Type</label>
              <select
                className="form-select py-3 px-2 w-100 rounded"
                name="addressType"
                value={formData.addressType}
                onChange={handleChange}
              >
                <option value="">Select an Address Type</option>
                {addresses.map((addres) => (
                  <option key={addres.name} value={addres.name}>
                    {addres.name}
                  </option>
                ))}
              </select>
              {errors.addressType && <small className="text-danger">{errors.addressType}</small>}
            </div>
            <button className="btn btn-warning w-100 py-3 rounded"
            //  onClick={() => {
            //   // navigate(`/second-page/${item?._id}`);
            //   navigate("/card-dedit");
            // }}
            type="submit">
              Use this address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsFormComponent;

