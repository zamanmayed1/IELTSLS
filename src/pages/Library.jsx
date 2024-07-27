import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import {
  FaSearch,
  FaUser,
  FaBuilding,
  FaDollarSign,
  FaBarcode,
  FaStar,
  FaClock,
} from "react-icons/fa";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const books = useSelector((s) => s?.bookslibrary?.books);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Helmet>
        <title>Library - Read More, Learn More</title>
      </Helmet>
      <div className="mx-auto container py-6 ">
        <div className="flex justify-center mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search books by title or author"
              className="border rounded-md py-2 px-4 w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <div className="cursor-pointer grid grid-cols-1  md:grid-cols-2  gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="border p-2 relative  max-h-min md:flex gap-4 items-center bg-white hover:shadow-md transition-shadow"
            >
              <img
                className="border p-1 left-0 my-auto  md:min-w-[120px] min-h-[170px] md:max-w-[120px] max-h-[170px]"
                src={book.coverPicture}
                alt={book.title}
              />
              <div>
                <h1 className="text-lg mb-1">{book.title}</h1>
                <p className="text-xs mb-1">{book.subtitle}</p>
                <div className="flex items-center mb-1">
                  <FaUser className="mr-2 text-gray-600" />
                  <h1 className="text-sm">Author: {book.author}</h1>
                </div>
                <div className="flex items-center mb-1">
                  <FaBuilding className="mr-2 text-gray-600" />
                  <h1 className="text-sm">Publisher: {book.publisher}</h1>
                </div>
                <div className="flex items-center mb-1">
                  <FaDollarSign className="mr-2 text-gray-600" />
                  <h1 className="text-sm">Price: €{book.price}</h1>
                </div>
                <div className="flex items-center mb-1">
                  <FaBarcode className="mr-2 text-gray-600" />
                  <h1
                    className="text-sm"
                    title="The International Standard Book Number"
                  >
                    ISBN: {book.isbn}
                  </h1>
                </div>
                <div className="flex items-center mb-1">
                  <FaStar className="mr-2 text-gray-600" />
                  <h1 className="text-sm" title="Ratings">
                    Ratings: {book.reviews}
                  </h1>
                </div>
                <div className="flex items-center mb-1">
                  <FaClock className="mr-2 text-gray-600" />
                  <h1 className="text-sm">Read Hours: {book.readHours}</h1>
                </div>
                {book.isAvailable === false && (
                  <div className="py-1 bg-glassonly text-black w-full text-center text-lg absolute top-0 bottom-0 my-auto max-h-max left-0 right-0 mx-auto">
                    Not Available
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
