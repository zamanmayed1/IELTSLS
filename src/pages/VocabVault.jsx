import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
const VocabVault = () => {
  const vocabs = useSelector((state) => state.vocabvault.vocabs);
  console.log(vocabs);
  const [pronouncingWord, setPronouncingWord] = useState(null);

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
    setPronouncingWord(word);
    setTimeout(() => {
      setPronouncingWord(null);
    }, 2000);
  };

  return (
    <div className="mx-auto py-6 container">
      <Helmet>
        <title>Vocab Vault - Unlock Your Word Power!</title>
      </Helmet>

      <div>
        {vocabs.map((topic) => (
          <div
            key={topic.id}
            className={`rounded-lg p-4  my-6 border  hover:shadow-md transition-shadow relative overflow-hidden`}
          >
            <h2 className="text-2xl font-semibold mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-300">
              {topic.topic}
            </h2>
            <div className="w-12 py-2 border absolute right-0 top-0 text-center border-t-0 border-r-0 rounded-l-full shadow-inner">
              {topic.words.length}
            </div>

            <ul className="mb-4 flex flex-wrap ">
              {topic.words.map((word, wordIndex) => (
                <li
                  key={wordIndex}
                  className={`capitalize list-none min-w-min max-w-max px-3 py-2 text-pretty border-b  m-1  cursor-pointer ${
                    pronouncingWord === word ? "bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => pronounceWord(word)}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabVault;
