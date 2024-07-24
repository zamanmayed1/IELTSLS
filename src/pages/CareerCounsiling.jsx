import { useState } from "react";
import { Helmet } from "react-helmet-async";

const CareerCounsiling = () => {
  const [showSlot, setShowSlot] = useState(false);
  console.log(showSlot);
// Example Time Slot Array of Object in real time the array come from backend

let AvailableSlots = [
    {
        day : "03",
        month: "July",
        timeSlot : ["6:00 - 6:30" , "6:30 - 7:00"],
        paidOnly : false


    },
    {
        day : "03",
        month: "July",
        timeSlot : ["5:00 - 5:30" , "7:30 - 7:30"],
        paidOnly : false

    },
    {
        day : "05",
        month: "July",
        timeSlot : ["5:00 - 5:30" , "7:30 - 7:30", "7:30 - 8:00"],
        paidOnly : true

    },
]


  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Career Counsiling - Set & Achieve Goal!</title>
      </Helmet>
      <div className="mx-auto py-6  my-6 px-2 lg:px-8  cursor-pointer">
        {/* Appoinment Header */}
        <div className="border p-2 relative  max-h-min md:flex gap-4 items-center justify-between bg-white">
          <div >
            <h1 className="text-lg">
              Book an Appoinment to Achieve Your Goal! (30 Min)
            </h1>
          </div>
          <div>
            {/* Button */}
            <div onClick={()=>setShowSlot(!showSlot)} className="text-sm px-3 py-2 my-2 w-full text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max">
              <b>Book Appoinment Now</b>
            </div>
          </div>
          {/* Content End*/}
        </div>

        {/* Appoinment Header  End*/}
        {/* Appoinment Slot Start */}
        <div className={`${showSlot ? "block md:flex" : "none hidden"} border transition-opacity p-2  mt-4 max-h-min  gap-8 items-start bg-white`}>
          <div className="md:w-[80%]  p-2">
            {/* Detector */}
            <div className="flex flex-wrap gap-6 p-1 ">
              <div className="flex gap-2 items-center">
                <div className=" bg-green-500 min-h-4 min-w-4  max-h-4 max-w-4"></div>
                <h3>Available</h3>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" bg-orange-500 min-h-4 min-w-4  max-h-4 max-w-4"></div>
                <h3>Paid Only</h3>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" bg-gray-400 min-h-4 min-w-4  max-h-4 max-w-4"></div>
                <h3>Not Available</h3>
              </div>
              <div className="flex gap-2 items-center">
                <div className=" bg-red-400 min-h-4 min-w-4  max-h-4 max-w-4"></div>
                <h3>Holiday</h3>
              </div>
            </div>
            {/* Calender date Picker */}
            <div className="mt-4 p-1 ">
              {/* Instructions */}
              <p className="text-red-500">
                *Display this month calender here with day and holiday also map
                the dates and appoinment all category from array of object also
                time slot max 5 time a day!
              </p>
            </div>
          </div>
          <div className="md:w-[20%] ">
            <h2 className="text-md border-l p-2">
              <b>Select Time</b>
            </h2>
            {/* Time Slot */}
            {/*  This Time slot also mapped from array of object, one user Only Can Select a date and a time only  user only can select */}
            <ul>
              <li className="my-[10px]  border-l p-2">
                <input type="checkbox" name="" id="" value={"6:30 - 7:00 PM"} />
              </li>
              <li className="my-[10px]  border-l p-2">
                <input type="checkbox" name="" id="" value={"6:30 - 7:00 PM"} />
              </li>
              <li className="my-[10px]  border-l p-2">
                <input type="checkbox" name="" id="" value={"7:00 - 7:30 PM"} />
              </li>
              <li className="my-[10px]  border-l p-2">
                <input type="checkbox" name="" id="" value={"7:30 - 8:00 PM"} />
              </li>
              <li className="my-[10px]  border-l p-2">
                <input type="checkbox" name="" id="" value={"8:00 - 8:30 PM"} />
              </li>
            </ul>
            <div>
            {/* Button */}
            {/* Primaryly this button will disabled or hided after select date and time it will show for active */}
            <div onClick={()=>setShowSlot(!showSlot)} className="text-sm px-3 py-2 my-2 w-full text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max">
              <b>Pay & Book Appoinment</b>
            </div>
          </div>
          </div>
          {/* Content End*/}
        </div>
      </div>
    </div>
  );
};

export default CareerCounsiling;
