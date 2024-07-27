import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa';

const SearchModal = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div
      className="fixed z-50 inset-0 flex items-center justify-center bg-blue-900 bg-opacity-90"
      onClick={onClose}
    >
      <div
        className="bg-opacity-90 p-6 rounded-lg w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border-b border-gray-300 py-2">
          <input
            type="text"
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="flex-shrink-0 text-gray-500 hover:text-gray-700 mr-3"
            >
              <FaTimes />
            </button>
          )}
          <button
            onClick={handleSearch}
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
