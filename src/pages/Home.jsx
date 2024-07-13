import {
  FaTachometerAlt,
  FaComments,
  FaBook,
  FaRegLightbulb,
  FaGlobe,
  FaClipboardList,
  FaCommentsDollar,
} from "react-icons/fa";

const Home = () => {
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
      <section className="bg-white py-10 px-2 lg:px-8  mx-auto">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card */}
            <FeatureCard
              title="Student Dashboard"
              icon={
                <FaTachometerAlt className="text-blue-600 w-12 h-12 mb-4" />
              }
            >
              <ul>
                <li>Overview of progress and recent activities</li>
                <li>Quick access to different modules</li>
                <li>Personalized learning path and recommendations</li>
                <li>Upcoming tests and schedule</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              title="Students Feed"
              icon={<FaComments className="text-blue-600 w-12 h-12 mb-4" />}
            >
              <ul>
                <li>Updates and announcements</li>
                <li>Discussion forums for students to interact</li>
                <li>Peer support and study groups</li>
                <li>Sharing study tips and resources</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              title="English Library"
              icon={<FaBook className="text-blue-600 w-12 h-12 mb-4" />}
            >
              <ul>
                <li>Extensive collection of reading materials</li>
                <li>Categorized by topics and difficulty levels</li>
                <li>Interactive reading exercises</li>
                <li>Bookmark and highlight features</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              title="Vocabulary Zone"
              icon={<FaRegLightbulb className="text-blue-600 w-12 h-12 mb-4" />}
            >
              <ul>
                <li>Daily/weekly vocabulary lists</li>
                <li>Flashcards for practice</li>
                <li>Quizzes and games to reinforce learning</li>
                <li>Word usage examples and context</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              title="Translator"
              icon={<FaGlobe className="text-blue-600 w-12 h-12 mb-4" />}
              badge="Coming Soon"
            >
              <ul>
                <li>Real-time text translation</li>
                <li>Support for multiple languages</li>
                <li>Pronunciation guide</li>
                <li>Translation history</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              title="Mock Test System"
              icon={
                <FaClipboardList className="text-blue-600 w-12 h-12 mb-4" />
              }
              badge="Coming Soon"
            >
              <ul>
                <li>Full-length IELTS practice tests</li>
                <li>
                  Section-wise tests (Listening, Reading, Writing, Speaking)
                </li>
                <li>Timed and untimed modes</li>
                <li>Performance analytics and feedback</li>
              </ul>
            </FeatureCard>

            <FeatureCard
              title="IELTS Speaking Test System"
              icon={
                <FaCommentsDollar className="text-blue-600 w-12 h-12 mb-4" />
              }
              badge="Coming Soon"
            >
              <ul>
                <li>Simulated speaking tests</li>
                <li>AI-driven feedback and scoring</li>
                <li>Tips and suggestions for improvement</li>
                <li>Recording and playback features for self-assessment</li>
              </ul>
            </FeatureCard>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, icon, children, badge }) => {
  return (
    <div className="bg-white rounded-lg border p-6 transition-transform duration-300 hover:scale-105 flex flex-col items-center relative">
      {icon}
      <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
      {badge && (
        <span className="absolute top-2 right-2 bg-[#2563eb] text-white text-xs px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
      <ul className="list-disc list-inside text-gray-700 text-left">
        {children}
      </ul>
    </div>
  );
};

export default Home;
