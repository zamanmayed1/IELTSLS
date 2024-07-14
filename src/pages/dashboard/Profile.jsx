import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';

const Profile = () => {
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [socialLinks, setSocialLinks] = useState([]);
  const [website, setWebsite] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');
  const [achievements, setAchievements] = useState([]);
  const [interests, setInterests] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('profileData'));
    if (storedData) {
      setBio(storedData.bio);
      setLocation(storedData.location);
      setContactInfo(storedData.contactInfo);
      setSocialLinks(storedData.socialLinks);
      setWebsite(storedData.website);
      setWorkExperience(storedData.workExperience);
      setEducation(storedData.education);
      setSkills(storedData.skills);
      setProjects(storedData.projects);
      setAchievements(storedData.achievements || []);
      setInterests(storedData.interests);
    }
  }, []);

  const handleSave = () => {
    const profileData = {
      bio,
      location,
      contactInfo,
      socialLinks,
      website,
      workExperience,
      education,
      skills,
      projects,
      achievements,
      interests,
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
    setEditing(false);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=cd70f8cec054dd9b24fe9d4902c4ba10', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          const uniqueId = uuidv4();
          const newAchievement = { id: uniqueId, src: data.data.url };
          
          setAchievements((prev) => [...prev, newAchievement]);
          
          const updatedData = { ...JSON.parse(localStorage.getItem('profileData')), achievements: [...achievements, newAchievement] };
          localStorage.setItem('profileData', JSON.stringify(updatedData));
        }
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    }
  };

  const removeAchievement = (id) => {
    const updatedAchievements = achievements.filter(achievement => achievement.id !== id);
    setAchievements(updatedAchievements);
    const updatedData = { ...JSON.parse(localStorage.getItem('profileData')), achievements: updatedAchievements };
    localStorage.setItem('profileData', JSON.stringify(updatedData));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 border border-gray-300 rounded-lg">
      <Helmet>
        <title>My Profile</title>
      </Helmet>

      <section className="space-y-6">
        <div className="bio border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Bio</h2>
          {editing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{bio || 'No bio available.'}</p>
          )}
        </div>

        <div className="location border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Location</h2>
          {editing ? (
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{location || 'Location not provided.'}</p>
          )}
        </div>

        <div className="contact-info border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          {editing ? (
            <>
              <input
                type="text"
                placeholder="Email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                className="w-full p-2 border rounded-lg mb-2"
              />
              <input
                type="text"
                placeholder="Phone"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            </>
          ) : (
            <>
              <p className="text-gray-700">Email: {contactInfo.email || 'No email provided.'}</p>
              <p className="text-gray-700">Phone: {contactInfo.phone || 'No phone provided.'}</p>
            </>
          )}
        </div>

        <div className="social-media border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Social Media Links</h2>
          {editing ? (
            <div className="space-y-1">
              {socialLinks.map((link, index) => (
                <input
                  key={index}
                  type="text"
                  value={link}
                  onChange={(e) => {
                    const updatedLinks = [...socialLinks];
                    updatedLinks[index] = e.target.value;
                    setSocialLinks(updatedLinks);
                  }}
                  className="w-full p-2 border rounded-lg"
                  placeholder={`Link ${index + 1}`}
                />
              ))}
              <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setSocialLinks([...socialLinks, ''])}
              >
                Add Link
              </button>
            </div>
          ) : (
            <ul className="list-disc list-inside space-y-1">
              {socialLinks.length > 0 ? (
                socialLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link} className="text-blue-500 hover:underline">
                      {link}
                    </a>
                  </li>
                ))
              ) : (
                <li>No social links available.</li>
              )}
            </ul>
          )}
        </div>

        <div className="website border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Website/Portfolio Link</h2>
          {editing ? (
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{website || 'No website provided.'}</p>
          )}
        </div>

        <div className="work-experience border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Work Experience</h2>
          {editing ? (
            <textarea
              value={workExperience}
              onChange={(e) => setWorkExperience(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{workExperience || 'No work experience listed.'}</p>
          )}
        </div>

        <div className="education border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Education</h2>
          {editing ? (
            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{education || 'No education information available.'}</p>
          )}
        </div>

        <div className="skills border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Skills</h2>
          {editing ? (
            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{skills || 'No skills listed.'}</p>
          )}
        </div>

        <div className="projects border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          {editing ? (
            <textarea
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{projects || 'No projects listed.'}</p>
          )}
        </div>

        <div className="achievements border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Achievements</h2>
          {editing ? (
            <>
              <input
                type="file"
                onChange={handleImageUpload}
                className="mb-2"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="border border-gray-300 p-4 rounded-lg">
                    <img src={achievement.src} alt="Achievement" className="w-full h-32 object-cover mb-2" />
                    <button
                      className="mt-2 px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                      onClick={() => removeAchievement(achievement.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.length > 0 ? (
                achievements.map((achievement) => (
                  <div key={achievement.id} className="border border-gray-300 p-4 rounded-lg">
                    <img src={achievement.src} alt="Achievement" className="w-full h-32 object-cover mb-2" />
                  </div>
                ))
              ) : (
                <p>No achievements uploaded.</p>
              )}
            </div>
          )}
        </div>

        <div className="interests border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold">Interests</h2>
          {editing ? (
            <textarea
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="w-full p-2 border rounded-lg"
            />
          ) : (
            <p className="text-gray-700">{interests || 'No interests listed.'}</p>
          )}
        </div>

        <div className="flex justify-between">
          {editing ? (
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={handleSave}
            >
              Save
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Profile;
