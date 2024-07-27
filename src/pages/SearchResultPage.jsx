import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultPage = () => {
  const query = useQuery();
  const searchQuery = query.get("query");
  let courses = useSelector((e) => e?.coursedata.courses);
  let courseCategories = useSelector((e) => e?.coursedata.courseCategories);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  console.log(filteredCourses);
  return (
    <div className="container mx-auto py-8 min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">
          Search Results for - {searchQuery}
        </h1>
        <span className=" w-8 h-8 text-xl shadow-inner flex items-center justify-center font-bold bg-gray-50 rounded-full">
          {filteredCourses?.length}
        </span>
      </div>
      <hr />
      {filteredCourses.length > 0 ? (
        <div className="md:flex transition-opacity max-h-min gap-8 items-start ">
          <div className="md:w-3/4 flex flex-col gap-y-4">
            {filteredCourses.map((c, i) => (
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
                      className="py-2 bg-[#081351] text-white rounded-lg hover:bg-green-700 transition-colors px-4"
                    >
                      <b>View Details</b>
                    </Link>
                  </div>
                </div>
                <div className="absolute shadow-inner right-0 top-0 p-2 text-2xl text-green-500">
                  <b>{c.price === 0 ? "Free" : "€" + c.price}</b>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-1/4 mt-2">
            {courseCategories.map((v, i) => (
              <li className="list-none cursor-pointer text-center max-w-max inline-block px-3 py-1 border m-1 rounded-full" key={i}>{v}</li>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-600">No courses found.</p>
      )}
    </div>
  );
};

export default SearchResultPage;
