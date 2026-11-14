import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [gender, setGender] = useState("Male");
  const [size, setSize] = useState("Small");

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setGender(selectedGender);

    // Reset dropdown to the default value
    setSize(selectedGender === "Male" ? "Small" : "2");
  };

  return (
    <div className="container">
      <div className="content">
        <h2>Select your gender :</h2>

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={handleGenderChange}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={handleGenderChange}
          />
          Female
        </label>

        <h2>
          {gender === "Male"
            ? "Select you shirt size : "
            : "Select you dress size :"}
        </h2>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {gender === "Male" ? (
            <>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </>
          ) : (
            <>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </>
          )}
        </select>
      </div>
    </div>
  );
};

export default App;
