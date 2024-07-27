import { Helmet } from "react-helmet-async";

const PrivateBatch = () => {
  // Array of batch objects
  const batches = [
    {
      id: 1,
      date: "15 September 2024",
      title: "Spoken Masterclass - Speak Fluently!",
      price: "75",
      batchId: "SP/BD01/53",
      seats: 30,
      duration: "3 Months",
      instructors: "Alexa Hilton, Mohammed Ali",
      schedule: "Sat, Mon, Tue, Fri",
      image: "https://www.kapwing.com/resources/content/images/size/w1200/2021/02/how-to-put-a-picture-on-zoom-cover.png"
    },
    {
      id: 2,
      date: "01 November 2024",
      title: "IELTS Full Course - Target Band 8.5!",
      price: "135",
      batchId: "SP/BD01/53",
      seats: 30,
      duration: "6 Months",
      instructors: "Rimon Morol, Mohammed Ali",
      schedule: "Sat, Mon, Tue, Fri",
      image: "https://www.kapwing.com/resources/content/images/size/w1200/2021/02/how-to-put-a-picture-on-zoom-cover.png"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-6">
      <Helmet>
        <title>Private Batch - Learn Something Special!</title>
      </Helmet>
      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {batches.map((batch) => (
          <div key={batch.id} className="border p-2 relative bg-white hover:shadow-lg transition-shadow rounded-lg">
            <div className="relative mb-4">
              {/* Cover */}
              <img
                className="w-full h-48 object-cover rounded-lg"
                src={batch.image}
                alt={`Cover for ${batch.title}`}
              />
              <div className="absolute top-2 left-2 bg-green-700 text-white text-sm px-2 py-1 rounded">
                <b>{batch.date}</b>
              </div>
            </div>
            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {batch.title}
              </h2>
              <div className="flex flex-wrap gap-1 mb-4">
                <div className="text-sm px-3 py-1 border rounded-full ">
                  <b>Price:</b> €{batch.price}
                </div>
                <div className="text-sm px-3 py-1 border rounded-full ">
                  <b>Batch ID:</b> {batch.batchId}
                </div>
                <div className="text-sm px-3 py-1 border rounded-full ">
                  <b>Seats:</b> {batch.seats}
                </div>
                <div className="text-sm px-3 py-1 border rounded-full ">
                  <b>Duration:</b> {batch.duration}
                </div>
                <div className="text-sm px-3 py-1 border rounded-full ">
                  <b>Instructors:</b> {batch.instructors}
                </div>
                <div className="text-sm px-3 py-1 border rounded-full ">
                  <b>Class Schedule:</b> {batch.schedule}
                </div>
              </div>
              <button className="w-full py-2 bg-[#081351] text-white rounded-lg hover:bg-green-700 transition-colors">
                <b>Pay & Join</b>
              </button>
            </div>
            {/* Content End */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateBatch;
