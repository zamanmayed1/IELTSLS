import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

import { fetchVocabs } from "../redux-toolkit/vocabvault.slice";

const VocabVault = () => {
  const dispatch = useDispatch();
  const vocabs = useSelector((state) => state.vocabvault.vocabs);
  const vocabStatus = useSelector((state) => state.vocabvault.status);
  const error = useSelector((state) => state.vocabvault.error);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [pronouncingWord, setPronouncingWord] = useState(null);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (vocabStatus === "idle") {
      dispatch(fetchVocabs());
    }
    loadProgress();
  }, [vocabStatus, dispatch]);

  const loadProgress = () => {
    const savedIndex = localStorage.getItem("vocabVaultProgress");
    if (savedIndex) {
      setExpandedIndex(Number(savedIndex));
    }
  };

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
    setPronouncingWord(word);
    setPoints((prev) => prev + 1);
    setTimeout(() => {
      setPronouncingWord(null);
    }, 2000);
  };

  const handleUnlockTopic = (index) => {
    if (expandedIndex === index - 1) {
      setExpandedIndex(index);
      localStorage.setItem("vocabVaultProgress", index);
    }
  };

  if (vocabStatus === "loading") {
    return (
      <div className="flex justify-center items-center py-20">Loading...</div>
    );
  }

  if (vocabStatus === "failed") {
    return (
      <div className="flex justify-center items-center py-20">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto py-6 px-4 lg:px-8">
      <Helmet>
        <title>Vocab Vault - Unlock Your Word Power!</title>
      </Helmet>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Points: {points}</h2>
      </div>
      <div className="relative w-full h-2 bg-gray-200 rounded mb-4">
        <div
          className="absolute h-full bg-blue-600 rounded transition-all duration-500"
          style={{ width: `${((expandedIndex + 1) / vocabs.length) * 100}%` }}
        ></div>
      </div>

      <div>
        {vocabs.map((topic, index) => (
          <div
            key={topic.id}
            className={`rounded-lg p-4 transition-transform transform my-4 border  ${
              index <= expandedIndex ? "opacity-100" : "opacity-50"
            }`}
            style={{
              transform: index <= expandedIndex ? "scale(1)" : "scale(0.95)",
              transition: "transform 0.2s",
            }}
          >
            <h2
              className="text-2xl font-semibold mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-300"
              onClick={() => handleUnlockTopic(index)}
            >
              {topic.topic}
            </h2>
            {index <= expandedIndex && (
              <ul className="list-disc list-inside mb-2 flex flex-wrap">
                {topic.words.map((word, wordIndex) => (
                  <li
                    key={wordIndex}
                    className={`text-gray-700 list-none px-3 py-2 border m-1 min-w-max capitalize cursor-pointer transition-transform duration-200 ${
                      pronouncingWord === word ? "bg-blue-600 text-white" : ""
                    }`}
                    onClick={() => pronounceWord(word)}
                  >
                    {word}
                  </li>
                ))}
              </ul>
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

      {expandedIndex === vocabs.length - 1 && (
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setExpandedIndex(null);
              localStorage.removeItem("vocabVaultProgress");
            }}
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
