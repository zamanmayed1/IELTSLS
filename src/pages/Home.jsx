import {
  FaTachometerAlt,
  FaComments,
  FaBook,
  FaRegLightbulb,
  FaGlobe,
  FaClipboardList,
  FaCommentsDollar,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Home = () => {
  const homodata = useSelector((s) => s.homodata.datas);
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaTachometerAlt":
        return <FaTachometerAlt className="text-blue-600 w-12 h-12 mb-4" />;
      case "FaComments":
        return <FaComments className="text-blue-600 w-12 h-12 mb-4" />;
      case "FaBook":
        return <FaBook className="text-blue-600 w-12 h-12 mb-4" />;
      case "FaRegLightbulb":
        return <FaRegLightbulb className="text-blue-600 w-12 h-12 mb-4" />;
      case "FaGlobe":
        return <FaGlobe className="text-blue-600 w-12 h-12 mb-4" />;
      case "FaClipboardList":
        return <FaClipboardList className="text-blue-600 w-12 h-12 mb-4" />;
      case "FaCommentsDollar":
        return <FaCommentsDollar className="text-blue-600 w-12 h-12 mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-6">
        <div className=" mx-auto text-center">
          <h1 className="text-4xl font-bold">
            IELTS Learning System (IELTSLS)
          </h1>
          <p className="mt-2 text-lg">
            Your path to IELTS success starts here!
          </p>
        </div>
      </header>

      {/* Features */}
      <section className="bg-white py-10 px-2 lg:px-4  mx-auto w-full">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {homodata.map((feature) => (
              <div
                key={feature.id}
                className="bg-white  hover:shadow-md transition-shadow overflow-hidden  border flex flex-col  relative"
              >
                <div className=" border-b w-full h-[100px] flex">
                  {/* icon */}
                  <div className="border-r w-[25%] flex justify-center items-center">
                    {renderIcon(feature.iconName)}
                  </div>
                  {/* title */}
                  <div className="w-[75%] flex justify-center items-center">
                    <h3 className="text-xl font-semibold mb-4 ">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {feature.isComingSoon && (
                  <span className="absolute z-10 top-2 right-2 bg-[#2563eb] text-white text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
                <ul className="p-4  text-gray-700 text-left">
                  {feature.description.map((desc, index) => (
                    <li className="list-decimal ml-2  py-1 " key={index}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
