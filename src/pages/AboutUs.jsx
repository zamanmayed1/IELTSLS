import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div className="py-12">
      <Helmet>
        <title>About Us - IELTS Learning System</title>
      </Helmet>
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="relative bg-white shadow-md rounded-lg overflow-hidden mb-16">
          <img src="https://i.ibb.co/mbd9ZkS/photo-1491841651911-c44c30c34548.jpg" alt="About Us" className="w-full h-80 object-cover" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white">About Us</h1>
              <p className="mt-4 text-lg text-gray-200">
                Learn more about our mission, vision, and the team behind IELTS Learning System.
              </p>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to provide high-quality resources and support to help students succeed in the IELTS exam.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              Our vision is to become the leading platform for IELTS preparation, offering innovative tools and resources.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>Commitment to Excellence</li>
              <li>Innovative Solutions</li>
              <li>Integrity and Transparency</li>
              <li>Student-Centered Approach</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the dedicated professionals behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden border">
            <img src="https://n-immigrate.vercel.app/assets/images/team/team-1.jpg" alt="Team Member 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="mt-2 text-gray-600">Co-Founder & CEO</p>
              <p className="mt-2 text-gray-600">
                John is passionate about education and technology, and he leads the team with a vision to revolutionize IELTS preparation.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden border">
            <img src="hhttps://n-immigrate.vercel.app/assets/images/team/team-4.jpg" alt="Team Member 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="mt-2 text-gray-600">Chief Academic Officer</p>
              <p className="mt-2 text-gray-600">
                Jane has over 15 years of experience in teaching English and developing curriculum for language learners.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden border">
            <img src="https://n-immigrate.vercel.app/assets/images/team/team-2.jpg" alt="Team Member 3" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Michael Brown</h3>
              <p className="mt-2 text-gray-600">Head of Technology</p>
              <p className="mt-2 text-gray-600">
                Michael is an expert in software development and ensures that our platform runs smoothly and efficiently.
              </p>
            </div>
          </div>
          {/* Add more team members as needed */}
        </div>

        {/* Join Us Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900">Join Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            If you share our passion for education and innovation, we invite you to join our team and help us make a difference in the lives of students worldwide.
          </p>
          <a href="/careers" className="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700">
            View Careers
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
