import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Settings = () => {
  const [themeColor, setThemeColor] = useState("#ffffff");
  const [profilePicture, setProfilePicture] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(false);

  const handleThemeChange = (e) => {
    setThemeColor(e.target.value);
    document.documentElement.style.setProperty("--theme-color", e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveSettings = () => {
    // Save settings logic here (e.g., API call)
    alert("Settings saved!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 border border-gray-300 rounded-lg">
      <Helmet>
        <title>Settings - Customize Your Kingdom!</title>
      </Helmet>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Theme Color</h2>
        <input 
          type="color" 
          value={themeColor} 
          onChange={handleThemeChange} 
          className=" rounded-lg w-14 h-8"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Picture</h2>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleProfilePictureChange} 
          className="border border-gray-300 rounded-lg p-2"
        />
        {profilePicture && (
          <img 
            src={profilePicture} 
            alt="Profile" 
            className="mt-4 w-32 h-32 rounded-full object-cover"
          />
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Display Name</h2>
        <input 
          type="text" 
          value={displayName} 
          onChange={(e) => setDisplayName(e.target.value)} 
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter your display name"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Email</h2>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter your email"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Password</h2>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter your new password"
        />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={(e) => setNotifications(e.target.checked)} 
            className="mr-2"
          />
          Enable notifications
        </label>
      </div>

      <button 
        onClick={handleSaveSettings} 
        className="bg-blue-500 text-white p-2 rounded-lg shadow-md mt-4"
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
