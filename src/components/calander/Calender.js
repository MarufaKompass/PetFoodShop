import React, { useState } from "react";
import dayjs from "dayjs";

const Calendar = ({selectedDate, setSelectedDate}) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());


  const startDay = currentMonth.startOf("month").startOf("week");
  const endDay = currentMonth.endOf("month").endOf("week");
  const days = [];

  let day = startDay;
  while (day.isBefore(endDay)) {
    days.push(day);
    day = day.add(1, "day");
  }

  const handlePrevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const handleNextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          &lt;
        </button>
        <h2 className="text-lg font-semibold text-gray-800">
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <button
          onClick={handleNextMonth}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          &gt;
        </button>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-700">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 mt-2 text-center">
        {days.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(day)}
            className={`p-2 rounded-lg cursor-pointer ${
              day.month() === currentMonth.month()
                ? "text-gray-800"
                : "text-gray-400"
            } ${
              day.isSame(dayjs(), "day")
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            } ${
              selectedDate && day.isSame(selectedDate, "day")
                ? "bg-green-500 text-white"
                : ""
            }`}
          >
            {day.date()}
          </div>
        ))}
      </div>

      {/* Selected Date */}
    
    </div>
  );
};

export default Calendar;
