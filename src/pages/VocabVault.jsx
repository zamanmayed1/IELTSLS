import { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const VocabVault = () => {
  const [topics, setTopics] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [pronouncingWord, setPronouncingWord] = useState(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('/public/VocabVault.json');
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      }
    };

    fetchTopics();
    loadProgress();
  }, []);

  const loadProgress = () => {
    const savedIndex = localStorage.getItem('vocabVaultProgress');
    if (savedIndex) {
      setExpandedIndex(Number(savedIndex));
    }
  };

  const handleUnlockTopic = (index) => {
    setExpandedIndex(index);
    localStorage.setItem('vocabVaultProgress', index);
  };

  const handleResetTopics = () => {
    setExpandedIndex(null);
    localStorage.removeItem('vocabVaultProgress');
  };

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
    setPronouncingWord(word);
    playSoundEffect(); // Play sound effect
    setTimeout(() => {
      setPronouncingWord(null);
    }, 2000); // Adjust as needed
  };

  const playSoundEffect = () => {
    const audio = new Audio('/click-sound.mp3'); // Path to your sound effect
    audio.play();
  };

  if (topics.length === 0) {
    return <div className="flex justify-center items-center py-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
        <Helmet>
            <title>Vocab Vault - Unlock Your Word Power!</title>
        </Helmet>
      <div className="mb-4">
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className="absolute h-full bg-blue-600 rounded"
            style={{ width: `${(expandedIndex + 1) / topics.length * 100}%` }}
          ></div>
        </div>
      </div>

      <div>
        {topics.map((topic, index) => (
          <div
            key={topic.id}
            className={`bg-white rounded-lg p-4 transition-transform transform my-2 border ${
              index <= expandedIndex ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <h2
              className="text-2xl font-semibold mb-2 cursor-pointer"
              onClick={() => handleUnlockTopic(index)}
            >
              {topic.topic}
            </h2>
            {index <= expandedIndex && (
              <>
                <ul className="list-disc list-inside mb-2 flex flex-wrap">
                  {topic.words.map((word, wordIndex) => (
                    <li
                      key={wordIndex}
                      className={`text-gray-700 list-none px-3 py-2 border m-1 capitalize cursor-pointer ${
                        pronouncingWord === word ? 'bg-blue-600 text-white' : ''
                      }`}
                      onClick={() => pronounceWord(word)}
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {index > expandedIndex && (
              <button
                onClick={() => handleUnlockTopic(index)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Unlock Topic
              </button>
            )}
          </div>
        ))}
      </div>

      {expandedIndex === topics.length - 1 && (
        <div className="text-center mt-6">
          <button
            onClick={handleResetTopics}
            className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
          >
            Lock All Topics Again
          </button>
        </div>
      )}
    </div>
  );
};

export default VocabVault;
