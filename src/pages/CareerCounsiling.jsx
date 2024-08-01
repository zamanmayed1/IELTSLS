import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import dayjs from "dayjs";

const CareerCounseling = () => {
  const [showSlot, setShowSlot] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [today, setToday] = useState(dayjs().date());

  const availableSlots = [
    // Day 1 to 10
    { day: 1, timeSlot: ["8:00 - 8:30", "9:00 - 9:30"], paidOnly: false },
    { day: 2, timeSlot: ["10:00 - 10:30", "11:00 - 11:30"], paidOnly: true },
    { day: 3, timeSlot: ["12:00 - 12:30", "1:00 - 1:30"], paidOnly: false },
    { day: 4, timeSlot: ["2:00 - 2:30", "3:00 - 3:30"], paidOnly: true },
    { day: 5, timeSlot: ["4:00 - 4:30", "5:00 - 5:30"], paidOnly: false },
    { day: 6, timeSlot: ["6:00 - 6:30", "7:00 - 7:30"], paidOnly: true },
    { day: 7, timeSlot: ["8:00 - 8:30", "9:00 - 9:30"], paidOnly: false },
    { day: 8, timeSlot: ["10:00 - 10:30", "11:00 - 11:30"], paidOnly: true },
    { day: 9, timeSlot: ["12:00 - 12:30", "1:00 - 1:30"], paidOnly: false },
    { day: 10, timeSlot: ["2:00 - 2:30", "3:00 - 3:30"], paidOnly: true },
    
    // Day 11 to 20
    { day: 11, timeSlot: ["4:00 - 4:30", "5:00 - 5:30"], paidOnly: false },
    { day: 12, timeSlot: ["6:00 - 6:30", "7:00 - 7:30"], paidOnly: true },
    { day: 13, timeSlot: ["8:00 - 8:30", "9:00 - 9:30"], paidOnly: false },
    { day: 14, timeSlot: ["10:00 - 10:30", "11:00 - 11:30"], paidOnly: true },
    { day: 15, timeSlot: ["12:00 - 12:30", "1:00 - 1:30"], paidOnly: false },
    { day: 16, timeSlot: ["2:00 - 2:30", "3:00 - 3:30"], paidOnly: true },
    { day: 17, timeSlot: ["4:00 - 4:30", "5:00 - 5:30"], paidOnly: false },
    { day: 18, timeSlot: ["6:00 - 6:30", "7:00 - 7:30"], paidOnly: true },
    { day: 19, timeSlot: ["8:00 - 8:30", "9:00 - 9:30"], paidOnly: false },
    { day: 20, timeSlot: ["10:00 - 10:30", "11:00 - 11:30"], paidOnly: true },
    
    // Day 21 to 31
    { day: 21, timeSlot: ["12:00 - 12:30", "1:00 - 1:30"], paidOnly: false },
    { day: 22, timeSlot: ["2:00 - 2:30", "3:00 - 3:30"], paidOnly: true },
    { day: 23, timeSlot: ["4:00 - 4:30", "5:00 - 5:30"], paidOnly: false },
    { day: 24, timeSlot: ["6:00 - 6:30", "7:00 - 7:30"], paidOnly: true },
    { day: 25, timeSlot: ["8:00 - 8:30", "9:00 - 9:30"], paidOnly: false },
    { day: 26, timeSlot: ["10:00 - 10:30", "11:00 - 11:30"], paidOnly: true },
    { day: 27, timeSlot: ["12:00 - 12:30", "1:00 - 1:30"], paidOnly: false },
    { day: 28, timeSlot: ["2:00 - 2:30", "3:00 - 3:30"], paidOnly: true },
    { day: 29, timeSlot: ["4:00 - 4:30", "5:00 - 5:30"], paidOnly: false },
    { day: 30, timeSlot: ["6:00 - 6:30", "7:00 - 7:30"], paidOnly: true },
    { day: 31, timeSlot: ["8:00 - 8:30", "9:00 - 9:30"], paidOnly: false },
  ];
  
  useEffect(() => {
    const date = dayjs();
    const daysInMonth = date.daysInMonth();
    const daysArray = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = date.date(i);
      const isWeekend = currentDate.day() === 0 || currentDate.day() === 6; // Sunday or Saturday
      const isDisabled = i < today;
      daysArray.push({
        day: i,
        dayOfWeek: currentDate.format("ddd"),
        isWeekend,
        isDisabled,
      });
    }

    setDaysInMonth(daysArray);
    setCurrentMonth(date.format("MMMM"));
    setCurrentYear(date.format("YYYY"));
  }, [today]);

  const handleDateSelection = (day) => {
    if (!day.isDisabled) {
      const selected = availableSlots.find((slot) => slot.day === day.day);
      setSelectedDate(selected || { day: day.day, month: currentMonth, timeSlot: [], paidOnly: false });
      setSelectedTime(null);
    }
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${selectedDate.day} ${selectedDate.month} at ${selectedTime}`);
    } else {
      alert("Please select a date and time slot.");
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Career Counseling - Set & Achieve Goal!</title>
      </Helmet>
      <div className="mx-auto py-6 my-6 container cursor-pointer">
        {/* Appointment Header */}
        <div className="border p-2 relative max-h-min md:flex gap-4 items-center justify-between bg-white">
          <div>
            <h1 className="text-lg">Book an Appointment to Set Your Goal! (30 Min)</h1>
          </div>
          <div>
            {/* Button */}
            <div
              onClick={() => setShowSlot(!showSlot)}
              className="text-sm px-3 py-2 my-2 w-full text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max"
            >
              <b>Book Appointment Now</b>
            </div>
          </div>
        </div>
        {/* Appointment Slot Start */}
        {showSlot && (
          <div className="border transition-opacity p-2 mt-4 max-h-min gap-8 items-start bg-white flex flex-col md:flex-row">
            <div className="md:w-[80%] p-2">
              {/* Month and Year Display */}
              <div className="text-center my-4">
                <h2 className="text-xl font-bold">{currentMonth} {currentYear}</h2>
              </div>
              {/* Detector */}
              <div className="flex flex-wrap gap-6 p-1">
                <div className="flex gap-2 items-center">
                  <div className="bg-green-500 h-4 w-4"></div>
                  <h3>Available</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-orange-500 h-4 w-4"></div>
                  <h3>Paid Only</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-gray-400 h-4 w-4"></div>
                  <h3>Not Available</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-red-400 h-4 w-4"></div>
                  <h3>Holiday</h3>
                </div>
              </div>
              {/* Calendar Date Picker */}
              <div className="mt-4 p-1">
                <div className="grid grid-cols-7">
                  {/* Day of Week Headers */}
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayOfWeek, index) => (
                    <div key={index} className="text-center py-2 font-bold border">
                      {dayOfWeek}
                    </div>
                  ))}
                  {/* Calendar Dates */}
                  {daysInMonth.map((dayObj, index) => {
                    const slot = availableSlots.find((slot) => slot.day === dayObj.day);
                    const isSelected = selectedDate && selectedDate.day === dayObj.day;
                    const dayClass = isSelected ? "bg-blue-200" : dayObj.isDisabled ? "bg-gray-400 cursor-not-allowed" : dayObj.isWeekend ? "bg-red-400" : slot ? (slot.paidOnly ? "bg-orange-500" : "bg-green-500") : "bg-gray-400";
                    return (
                      <div
                        key={index}
                        onClick={() => handleDateSelection(dayObj)}
                        className={`cursor-pointer p-2 border text-center ${dayClass}`}
                      >
                        <h3>{dayObj.day}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="md:w-[20%]">
              <h2 className="text-md border-l p-2">
                <b>Select Time</b>
              </h2>
              {/* Time Slot */}
              {selectedDate && (
                <ul>
                  {selectedDate.timeSlot.map((time, index) => (
                    <li key={index} className="my-[10px] border-l p-2">
                      <input
                        type="checkbox"
                        name="timeSlot"
                        value={time}
                        checked={selectedTime === time}
                        onChange={() => handleTimeSelection(time)}
                      />
                      <label className="ml-2">{time}</label>
                    </li>
                  ))}
                </ul>
              )}
              <div>
                {/* Button */}
                <div
                  onClick={handleBooking}
                  className={`text-sm px-3 py-2 my-2 w-full text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max ${
                    selectedDate && selectedTime ? '' : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  <b>Pay & Book Appointment</b>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerCounseling;
