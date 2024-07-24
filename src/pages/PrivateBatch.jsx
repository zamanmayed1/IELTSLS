import { Helmet } from "react-helmet-async";

const PrivateBatch = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Private Batch - Learn Something Special!</title>
      </Helmet>
      <div className="mx-auto py-6  my-6 px-2 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        {/* Card 1 */}
        <div className="border p-2 relative  max-h-min md:flex gap-4 items-start bg-white hover:shadow-md transition-shadow min-h-[125px] ">
          <div>
            {/* Cover */}
            <img
              className="min-w-[170px] w-full md:max-w-[170px] max-h-[220px]  min-h-[220px]  border "
              src="/public/placeholder.png"
              alt=""
            />
            <div className="text-sm px-3 py-1 max-w-max   absolute  bg-green-700 text-white shadow-inner min-w-[170px]">
              <b>15 September 2024</b>
            </div>
          </div>
          {/* Content */}
          <div>
            <h1 className="text-lg mb-1 mt-8 md:mt-0">
              <b>Spoken Masterclass - Speak Fluently!</b>
            </h1>
            <div className="flex flex-wrap -ml-2">
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Price:</b> $75
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Batch ID:</b> SP/BD01/53
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Seat:</b> 30
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Durations:</b> 3 Month's
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Instructors:</b> Alexa Hilton, Mohammed Ali
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Class Schedule:</b> Sat, Mon, Tue, Fri
              </div>
            </div>
            <div
              className={` text-sm px-3 py-2 my-2 w-full text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max `}
            >
              <b>Pay & Join</b>
            </div>
          </div>
          {/* Content End*/}
        </div>

        {/* Card 2 */}
        <div className="border p-2 relative  max-h-min md:flex gap-4 items-start bg-white hover:shadow-md transition-shadow min-h-[125px] ">
          <div>
            {/* Cover */}
            <img
              className="min-w-[170px] w-full md:max-w-[170px] max-h-[220px]  min-h-[220px]  border "
              src="/public/placeholder.png"
              alt=""
            />
            <div className="text-sm px-3 py-1 max-w-max   absolute  bg-green-700 text-white shadow-inner min-w-[170px]">
              <b>01 November 2024</b>
            </div>
          </div>
          {/* Content */}
          <div>
            <h1 className="text-lg mb-1 mt-8 md:mt-0">
              <b>IELTS Full Course - Target Band 8.5!</b>
            </h1>
            <div className="flex flex-wrap -ml-2">
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Price:</b> $135
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Batch ID:</b> SP/BD01/53
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Seat:</b> 30
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Durations:</b> 6 Month's
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Instructors:</b> Rimon Morol, Mohammed Ali
              </div>
              <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                <b>Class Schedule:</b> Sat, Mon, Tue, Fri
              </div>
            </div>
            <div
              className={` text-sm px-3 py-2 my-2 w-full text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max `}
            >
              <b>Pay & Join</b>
            </div>
          </div>
          {/* Content End*/}
        </div>
      </div>
    </div>
  );
};

export default PrivateBatch;
