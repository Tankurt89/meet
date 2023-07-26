import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

  const [number, setNumber] = useState(32)

  const handleInputChanged = (event) => {
    const value = event.target.value
    setNumber(value)
    setCurrentNOE(value)
  
    let infoText
    if (isNaN () && (value <= 0)) {
      infoText = "Please enter a positive number"
    } else {
      infoText = ""
    }
    setErrorAlert(infoText)
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        id="number-of-events"
        className="number-of-events"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
