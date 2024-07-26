import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaClock,
  FaTag,
  FaUser,
  FaDollarSign,
  FaArrowLeft,
} from "react-icons/fa";

const SingleCourse = () => {
  const params = useParams();
  const courseId = params.courseId;
  const navigate = useNavigate();

  // Fetching course data from Redux store
  const courseData = useSelector((state) => state?.coursedata.courses);

  // Finding the selected course based on the course ID
  const selectedCourse = courseData.find((course) => course.id === courseId);

  // Handle back button click
  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>{selectedCourse?.title || "Course Details"}</title>
      </Helmet>

      {/* Back Button */}
   

      {/* Background Image */}
      <div className="inset-0 z-0 bg-cover bg-center bg-no-repeat min-h-[250px] max-h-[250px] bg-[url('https://i.ibb.co/mbd9ZkS/photo-1491841651911-c44c30c34548.jpg')]">
      <button
        onClick={handleBackClick}
        className=" m-4 p-2 text-blue-600 bg-white rounded-full shadow-lg hover:text-blue-700 transition duration-300 z-50"
        aria-label="Back"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      </div>

      {/* Content Container */}
      <div className="z-10 max-w-3xl mx-auto p-6 bg-white rounded-lg my-7 -mt-36">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {selectedCourse?.title || "Course Title"}
        </h1>
        <h2 className="text-md text-gray-700 mb-6">
          {selectedCourse?.subTitle || "Course Subtitle"}
        </h2>

        {/* Responsive Grid Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm transition-transform transform hover:scale-105">
            <FaDollarSign className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Price</h3>
              <p className="text-gray-600">{`$${selectedCourse?.price || "N/A"}`}</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm transition-transform transform hover:scale-105">
            <FaClock className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-gray-600">{selectedCourse?.duration || "N/A"}</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm transition-transform transform hover:scale-105">
            <FaUser className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Instructor</h3>
              <p className="text-gray-600">{selectedCourse?.instructor || "N/A"}</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-white border rounded-lg shadow-sm transition-transform transform hover:scale-105">
            <FaTag className="text-blue-500 text-2xl mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Category</h3>
              <p className="text-gray-600">{selectedCourse?.category || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Tags Section */}
        {selectedCourse?.tags && selectedCourse.tags.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {selectedCourse.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1  text-gray-700 rounded-full text-sm border border-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Overview Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Course Overview</h3>
          <p className="text-gray-700 mb-4">
            Welcome to <strong>{selectedCourse?.title || "Course Title"}</strong>, an engaging and comprehensive course designed to help you master the essentials of <strong>{selectedCourse?.category || "Course Category"}</strong>. Whether you're looking to advance your skills, switch careers, or just explore a new interest, this course is the perfect opportunity to achieve your goals.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Course Duration:</strong> {selectedCourse?.duration || "N/A"} - This course is structured to fit into your busy schedule with a flexible duration. You can pace yourself through the material, allowing you to balance your learning with other commitments effectively.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Category:</strong> Dive deep into <strong>{selectedCourse?.category || "Course Category"}</strong> with expertly crafted modules that cover a range of topics relevant to the field. From foundational concepts to advanced techniques, this course offers a well-rounded approach to help you build a strong understanding and practical skill set.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Instructor:</strong> Learn from the best with <strong>{selectedCourse?.instructor || "Instructor Name"}</strong>, an experienced professional and expert in <strong>{selectedCourse?.category || "Course Category"}</strong>. With a rich background in the field and a passion for teaching, {selectedCourse?.instructor || "Instructor Name"} will guide you through the course with insightful lectures, hands-on activities, and real-world examples.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>What You'll Learn:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li><strong>Core Concepts:</strong> Gain a thorough understanding of the fundamental principles in {selectedCourse?.category || "Course Category"}.</li>
            <li><strong>Practical Skills:</strong> Develop the hands-on skills required to excel in {selectedCourse?.category || "Course Category"}.</li>
            <li><strong>Advanced Techniques:</strong> Explore more complex aspects of the subject matter to deepen your expertise.</li>
            <li><strong>Real-World Applications:</strong> Apply what you've learned to real-life scenarios and case studies.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Course Highlights:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li><strong>Interactive Lessons:</strong> Engage with interactive content designed to enhance your learning experience.</li>
            <li><strong>Hands-On Projects:</strong> Apply your knowledge through practical projects and exercises.</li>
            <li><strong>Quizzes and Assessments:</strong> Test your understanding and track your progress with regular quizzes and assessments.</li>
            <li><strong>Community Access:</strong> Join a vibrant community of learners to discuss topics, share insights, and network with peers.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Who Should Enroll:</strong> This course is ideal for:
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li><strong>Beginners:</strong> Those new to {selectedCourse?.category || "Course Category"} who want to build a solid foundation.</li>
            <li><strong>Intermediate Learners:</strong> Individuals looking to enhance their skills and knowledge.</li>
            <li><strong>Professionals:</strong> Those seeking to advance their careers or pivot to a new role within the field.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <strong>Enrollment Benefits:</strong>
          </p>
          <ul className="list-disc pl-5 mb-4 text-gray-700">
            <li><strong>Flexible Learning:</strong> Access course materials anytime, anywhere, and learn at your own pace.</li>
            <li><strong>Certification:</strong> Receive a certificate upon completion to showcase your new skills and knowledge.</li>
            <li><strong>Support:</strong> Benefit from dedicated support to assist you throughout your learning journey.</li>
          </ul>
          <p className="text-gray-700">
            <strong>How to Get Started:</strong> Enrolling in <strong>{selectedCourse?.title || "Course Title"}</strong> is easy. Click the "Enroll Now" button to get started and take the first step towards mastering {selectedCourse?.category || "Course Category"}. We look forward to supporting you in your learning journey and helping you achieve your goals.
          </p>
          <p className="text-gray-700 mt-4">
            For any questions or additional information, please feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
