import React, { useState, useEffect, useRef } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';

const sampleTopic = {
  title: "Patience, or Sabr",
  content: `
    In the Name of Allah, the Most Gracious, the Most Merciful

    Dear brothers and sisters,

    Today, I want to talk about a fundamental virtue in Islam: patience, or sabr. Sabr is more than simply waiting; it encompasses enduring hardships, maintaining a positive attitude, and having unwavering faith in Allah’s plan. It is a profound concept that permeates every aspect of a Muslim’s life.

    In the Qur'an, Allah repeatedly emphasizes the importance of patience. In Surah Al-Baqarah, verse 153, Allah says: "O you who have believed, seek help through patience and prayer. Indeed, Allah is with the patient." This verse highlights that patience is not a passive state but an active form of worship and a means of seeking Allah’s assistance.

    Patience manifests in various forms: enduring difficulties without complaint, resisting temptations, and remaining steadfast in our faith despite challenges. The Prophet Muhammad (peace be upon him) exemplified patience throughout his life. He faced persecution, loss, and immense challenges with unwavering patience and trust in Allah. His life serves as a powerful reminder that patience is key to overcoming adversity.

    Moreover, patience is not only about enduring hardships but also about practicing self-control in our daily lives. It teaches us to be tolerant with others, to control our anger, and to remain calm in stressful situations. By practicing patience, we cultivate a peaceful and resilient spirit.

    Patience also brings immense rewards. Allah promises great recompense for those who are patient. In Surah Az-Zumar, verse 10, Allah says: "Indeed, the patient will be given their reward without account." This promise encourages us to bear difficulties with patience, knowing that our efforts will be rewarded beyond measure.

    In conclusion, let us strive to embody the virtue of patience in our lives. Let us seek strength through prayer and remain steadfast in our faith. By doing so, we can navigate life's challenges with grace and fortitude, knowing that Allah is always with the patient. May Allah grant us all the strength to be patient and steadfast in our faith.

    Ameen.
  `
};

const SpeedRead = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState({ title: '', content: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(null);
  const [showWordDisplay, setShowWordDisplay] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const [wpm, setWpm] = useState(200); // Default WPM
  const intervalRef = useRef(null);

  useEffect(() => {
    // Initialize local storage with sample content if not already set
    const savedTopics = JSON.parse(localStorage.getItem('topics')) || [];
    if (savedTopics.length === 0) {
      localStorage.setItem('topics', JSON.stringify([sampleTopic]));
    }
    setTopics(JSON.parse(localStorage.getItem('topics')));
  }, []);

  const handleAddContent = () => {
    setIsAdding(true);
    setIsEditing(false);
    setNewTopic({ title: '', content: '' });
  };

  const handleEditContent = (index) => {
    setIsEditing(true);
    setIsAdding(false);
    setCurrentTopicIndex(index);
    setNewTopic({ ...topics[index] });
  };

  const handleSaveContent = () => {
    let updatedTopics;
    if (isEditing) {
      updatedTopics = topics.map((topic, index) =>
        index === currentTopicIndex ? newTopic : topic
      );
    } else {
      updatedTopics = [...topics, newTopic];
    }
    localStorage.setItem('topics', JSON.stringify(updatedTopics));
    setTopics(updatedTopics);
    setNewTopic({ title: '', content: '' });
    setIsAdding(false);
    setIsEditing(false);
  };

  const handleContentClick = (content) => {
    setSelectedContent(content);
    setShowWordDisplay(true);
  };

  const handleCloseWordDisplay = () => {
    setShowWordDisplay(false);
    setSelectedContent('');
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const WordDisplay = ({ content }) => {
    const [displayedWords, setDisplayedWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const words = content.split(' ');
    const wordDuration = (60 / wpm) * 1000; // Time per word in milliseconds

    useEffect(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      const displayWords = () => {
        if (currentIndex < words.length) {
          setDisplayedWords((prevWords) => [...prevWords, words[currentIndex]]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      };

      intervalRef.current = setInterval(displayWords, wordDuration);

      return () => clearInterval(intervalRef.current);
    }, [currentIndex, wpm]);

    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex items-center justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="mb-4">
            {displayedWords.join(' ')}
          </div>
          <button
            onClick={handleCloseWordDisplay}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-2xl font-bold">Speed Read Tool</h1>
        <button
          onClick={handleAddContent}
          className="flex items-center mt-2 text-blue-500"
        >
          <FaPlus className="mr-2" /> Add Content
        </button>
      </header>

      {(isAdding || isEditing) && (
        <div className="mb-4">
          <input
            type="text"
            value={newTopic.title}
            onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
            placeholder="Title"
            className="border p-2 w-full mb-2"
          />
          <textarea
            value={newTopic.content}
            onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
            placeholder="Content"
            className="border p-2 w-full"
          />
          <button
            onClick={handleSaveContent}
            className="mt-2 bg-blue-500 text-white py-2 px-4"
          >
            {isEditing ? 'Update' : 'Save'}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="p-4 border rounded cursor-pointer"
            onClick={() => handleContentClick(topic.content)}
          >
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p>{topic.content.slice(0, 100)}...</p> {/* Preview of content */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering content click
                handleEditContent(index);
              }}
              className="mt-2 text-blue-500 flex items-center"
            >
              <FaEdit className="mr-1" /> Edit
            </button>
          </div>
        ))}
      </div>

      {showWordDisplay && (
        <WordDisplay
          content={selectedContent}
        />
      )}

      <div className="mt-4">
        <label htmlFor="wpm" className="block mb-2">Words Per Minute (WPM):</label>
        <input
          type="range"
          id="wpm"
          min="50"
          max="500"
          step="10"
          value={wpm}
          onChange={(e) => setWpm(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-center">{wpm} WPM</div>
      </div>
    </div>
  );
};

export default SpeedRead;
