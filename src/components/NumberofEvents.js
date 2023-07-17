import React from "react";

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
  const handleInputChanged = (value) => {
    onEventNumberChange(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="textbox"
        placeholder="Enter any Number"
        value={eventNumber}
        onChange={(e) => handleInputChanged(e.target.value)}
      />
    </div>
  );
};
export default NumberOfEvents;