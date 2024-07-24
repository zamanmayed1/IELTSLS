import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  let courseCategories = [
    "IELTS Academic",
    "IELTS General Training",
    "Reading",
    "Writing",
    "Speaking",
    "Listening",
    "Grammar",
  ];

  let courses = [
    {
      id: "1AIA",
      title: "IELTS Academic Materclass!",
      subTitle:
        "All in One Course | Masterclass | Enroll Now | Free Certificate",
      category: "IELTS Academic",
      tags: ["IELTS", "Academic", "Free Certificate", "Video Course"],
      price: 125,
      duration: "10Hr 25Min",
      instructor: "Mohammad Ali",
      coverImage: "/",
    },
    {
      id: "2AIA",
      title: "Basic IELTS Academic - Course for Begainer",
      subTitle: "Basic to Advance | Articulate | Enroll Now | Free Certificate",
      category: "IELTS Academic",
      tags: ["IELTS", "Academic", "Basic", "Free Certificate", "Video Course"],
      price: 75,
      duration: "4Hr 20Min",
      instructor: "Mohammad Ali",
      coverImage: "/",
    },
    {
      id: "3AIGT",
      title: "IELTS General Training- Basic to Advance!",
      subTitle: "Articulate | Enroll Now | Free Certificate",
      category: "IELTS General Training",
      tags: [
        "IELTS",
        "General Training",
        "Basic to Advance",
        "Free Certificate",
        "Video Course",
      ],
      price: 85,
      duration: "12Hr 35Min",
      instructor: "Rimon Morol",
      coverImage: "/",
    },
    {
      id: "4AR",
      title: "Reading Masterclass - Read Like Native!",
      subTitle: "Masterclass | Enroll Now | Free Certificate",
      category: "Reading",
      tags: [
        "Reading",
        "Free",
        "Basic to Advance",
        "Free Certificate",
        "Video Course",
      ],
      price: 0,
      duration: "12Hr 35Min",
      instructor: "Kamruzzaman Mayed",
      coverImage: "/",
    },
  ];

  let thisSubjectCourses = courses.filter(
    (c) => c.category === courseCategories[activeCourse]
  );

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Courses - Learn Something Effective!</title>
      </Helmet>
      <div className="mx-auto   my-6 px-2 lg:px-8  cursor-pointer">
        <div
          className={`md:flex  transition-opacity p-2  mt-4 max-h-min  gap-8 items-start bg-white`}
        >
          <div className="md:w-[20%] border-r">
            <h2 className="text-md  mb-3 text-lg">
              <b>Premium Courses</b>
              <hr />
            </h2>

            <div>
              {courseCategories.map((v, i) => (
                <li
                  onClick={() => setActiveCourse(i)}
                  className={` ${
                    v === courseCategories[activeCourse] && "bg-blue-50"
                  } list-none text-blue-900 my-2 py-1 border-b hover:bg-blue-50 p-1 duration-300`}
                  key={i}
                >
                  {v}
                </li>
              ))}
            </div>
          </div>
          <div className="md:w-[80%] flex flex-col gap-y-4">
            {thisSubjectCourses.map((c, i) => (
              <div
                key={i}
                className=" relative mt-4 p-1 border flex gap-4 min-h-[170px] items-start"
              >
                {/* course image */}
                <div className="w-4/12 border min-h-[170px] max-h-[170px] contain-content">
                  <img src="/public/placeholder.png" alt="" />
                </div>
                {/* course content */}
                <div className="w-8/12">
                  <h1 className="text-lg mb-1 mt-8 md:mt-0 text-blue-950">
                    <b>{c.title}</b>
                  </h1>
                  <h2 className="text-sm mb-1 mt-8 md:mt-0">{c.subTitle}</h2>
                  <div className="flex flex-wrap -ml-2">
                    <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                      <b>Category:</b> {c.category}
                    </div>
                    <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                      <b>Durations:</b> {c.duration}
                    </div>
                    <div className="text-sm px-3 py-1 m-1 max-w-max border rounded-full">
                      <b>Instructors:</b> {c.instructor}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div
                      className={` text-sm px-3 py-2 w-[130px] text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300 max-h-max `}
                    >
                      <b>View Details</b>
                    </div>
                  </div>
                </div>
                <div className="absolute  shadow-inner right-0 top-0 p-2 text-2xl text-green-500">
                  <b> {c.price === 0 ? "Free": "$" + c.price }</b>
                </div>
              </div>
            ))}
            {/* Course Card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
