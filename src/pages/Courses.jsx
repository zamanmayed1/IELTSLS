import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(0);
  let courseCategories = useSelector((e) => e?.coursedata.courseCategories);
  let courses = useSelector((e) => e?.coursedata.courses);

  let thisSubjectCourses = courses.filter(
    (c) => c.category === courseCategories[activeCourse]
  );

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Courses - Learn Something Effective!</title>
      </Helmet>
      <div className="mx-auto my-6 px-2 lg:px-8 cursor-pointer">
        <div className="md:flex transition-opacity p-2 mt-4 max-h-min gap-8 items-start bg-white">
          <div className="md:w-1/4 border-r">
            <h2 className="text-md mb-3 text-lg">
              <b>Premium Courses</b>
              <hr />
            </h2>

            <div>
              {courseCategories.map((v, i) => (
                <li
                  onClick={() => setActiveCourse(i)}
                  className={`${
                    v === courseCategories[activeCourse] && "bg-blue-50"
                  } list-none text-blue-900 my-2 py-1 border-b hover:bg-blue-50 p-1 duration-300`}
                  key={i}
                >
                  {v}
                </li>
              ))}
            </div>
          </div>
          <div className="md:w-3/4 flex flex-col gap-y-4">
            {thisSubjectCourses.map((c, i) => (
              <div
                key={i}
                className="relative mt-4 p-1 border flex flex-col items-center md:flex-row gap-4 hover:shadow-md transition-shadow"
              >
                {/* course image */}
                <div className="w-full md:w-1/3   max-h-[170px] object-cover">
                  <img
                    className="w-full h-full object-cover"
                    src="https://www.algonquincollege.com/lts/files/2023/07/quality-framework.png"
                    alt=""
                  />
                </div>
                {/* course content */}
                <div className="w-full md:w-2/3 bg-white p-2">
                  <h1 className="text-lg mb-1 mt-4 md:mt-0 text-blue-950">
                    <b>{c.title}</b>
                  </h1>
                  <h2 className="text-sm mb-1">{c.subTitle}</h2>
                  <div className="flex flex-wrap -ml-2 mb-2">
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
                    <Link
                      to={`/course/${c.id}`}
                      className="text-sm px-3 py-2 w-[130px] text-center bg-[#081351] text-white shadow-inner hover:bg-green-700 duration-300"
                    >
                      <b>View Details</b>
                    </Link>
                  </div>
                </div>
                <div className="absolute shadow-inner right-0 top-0 p-2 text-2xl text-green-500">
                  <b>{c.price === 0 ? "Free" : "$" + c.price}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
