import React, { useState } from "react";
import OtpComponent from "./OtpComponent";
import DeditCardForm from "./DeditCardForm"; // Assuming this is the form component

const ParentComponent = () => {
  const [cardDetails, setCardDetails] = useState(null);

  const handleFormSubmit = (details) => {
    setCardDetails(details);
  };

  return (
    <div>
      {cardDetails ? (
        <OtpComponent cardHolderName={cardDetails.cardHolderName} />
      ) : (
        <DeditCardForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default ParentComponent;
