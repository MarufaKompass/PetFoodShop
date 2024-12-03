import React, { useState } from 'react'
import FlightTrip from './flightTrip/FlightTrip';

export default function Flight() {
    const [selectedOption, setSelectedOption] = useState("option1");

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
  return (
    <div>
 <div className="flex gap-4">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="option"
            value="option1"
            className="h-4 w-4 accent-primary focus:ring-primary"
            checked={selectedOption === "option1"}
            onChange={handleChange}
          />
          <span className="text-[14px] font-[700] leading-[26px] text-heading font-manrope">
          One Way
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="option"
            value="option2"
            className="h-4 w-4 accent-primary focus:ring-primary"
            checked={selectedOption === "option2"}
            onChange={handleChange}
          />
          <span className="text-[14px] font-[700] leading-[26px] text-heading font-manrope">
           Round Way
          </span>
        </label>

        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="option"
            value="option3"
            className="h-4 w-4 accent-primary focus:ring-primary"
            checked={selectedOption === "option3"}
            onChange={handleChange}
          />
          <span className="text-[14px] font-[700] leading-[26px] text-heading font-manrope">
         Multi City
          </span>
        </label>
      </div>

      {/* Content below based on selected option */}
      <div className="mt-4">
        {selectedOption === "option1" && (
          <div className="text-gray-700">
            <FlightTrip></FlightTrip>
          </div>
        )}
        {selectedOption === "option2" && (
          <div className="text-gray-700">Content for Option 2</div>
        )}
        {selectedOption === "option3" && (
          <div className="text-gray-700">Content for Option 3</div>
        )}
      </div>
    </div>
  )
}
