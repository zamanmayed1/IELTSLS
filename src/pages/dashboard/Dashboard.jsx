import { useSelector } from "react-redux";
import { Outlet, Link, useLocation } from "react-router-dom";


const Dashboard = () => {
  const location = useLocation();
  const profiledata = useSelector(s => s?.profiledata?.mydata)
  // console.log(profiledata);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      {/* Dashboard Top Header */}
      <div
        className="shadow grid animat justify-center items-center w-full h-[250px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/002/885/318/non_2x/nature-green-tree-fresh-leaf-on-beautiful-blurred-soft-bokeh-sunlight-background-with-free-copy-space-spring-summer-or-environment-cover-page-template-web-banner-and-header-free-photo.jpg)`,
        }}
      >
        <div className="bg-glass shadow-sm py-2 px-2 md:px-4">
          <img
            src={profiledata.profilePhoto}
            alt="Profile"
            className="max-w-[120px] block mx-auto max-h-[120px] rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-xl md:text-2xl font-bold text-center">
            {profiledata.name}
          </h1>
          <p className="text-gray-600 text-center">{profiledata.email}</p>
        </div>
      </div>
      {/* Dashboard Navbar */}
      <nav className="bg-white shadow">
        <ul className="flex justify-center p-2">
          {["Profile", "Feed", "Settings"].map((tab, index) => {
            const path =
              tab === "Profile"
                ? "/dashboard"
                : `/dashboard/${tab.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <li
                key={index}
                className={`px-8 py-2 ${index < 2 ? "border-r" : ""}`}
              >
                <Link
                  to={path}
                  className={`font-semibold ${
                    isActive
                      ? "text-blue-700 border-b-2 border-blue-700"
                      : "text-blue-500 hover:text-blue-700"
                  }`}
                >
                  {tab}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Outlet for nested routes */}
      <div className="p-4 md:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
