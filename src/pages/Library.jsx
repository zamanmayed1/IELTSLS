import { useState } from "react";
import { Helmet } from "react-helmet-async";

const books = [
  {
    id: 1,
    title: "Cambridge IELTS 1",
    author: "Cambridge University Press",
    cover: "link-to-cover1.jpg",
  },
  {
    id: 2,
    title: "Cambridge IELTS 2",
    author: "Cambridge University Press",
    cover: "link-to-cover2.jpg",
  },
  {
    id: 3,
    title: "Cambridge IELTS 3",
    author: "Cambridge University Press",
    cover: "link-to-cover3.jpg",
  },
  {
    id: 4,
    title: "Cambridge IELTS 4",
    author: "Cambridge University Press",
    cover: "link-to-cover4.jpg",
  },
  {
    id: 5,
    title: "Cambridge IELTS 5",
    author: "Cambridge University Press",
    cover: "link-to-cover5.jpg",
  },
  {
    id: 6,
    title: "Cambridge IELTS 6",
    author: "Cambridge University Press",
    cover: "link-to-cover6.jpg",
  },
  {
    id: 7,
    title: "Cambridge IELTS 7",
    author: "Cambridge University Press",
    cover: "link-to-cover7.jpg",
  },
  {
    id: 8,
    title: "Cambridge IELTS 8",
    author: "Cambridge University Press",
    cover: "link-to-cover8.jpg",
  },
  {
    id: 9,
    title: "Cambridge IELTS 9",
    author: "Cambridge University Press",
    cover: "link-to-cover9.jpg",
  },
  {
    id: 10,
    title: "Cambridge IELTS 10",
    author: "Cambridge University Press",
    cover: "link-to-cover10.jpg",
  },
  {
    id: 11,
    title: "Cambridge IELTS 11",
    author: "Cambridge University Press",
    cover: "link-to-cover11.jpg",
  },
  {
    id: 12,
    title: "Cambridge IELTS 12",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97813166/37821/cover/9781316637821.jpg",
  },
  {
    id: 13,
    title: "Cambridge IELTS 13",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97811084/50492/cover/9781108450492.jpg",
  },
  {
    id: 14,
    title: "Cambridge IELTS 14",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97811087/17779/cover/9781108717779.jpg",
  },
  {
    id: 15,
    title: "Cambridge IELTS 15",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97811087/81619/cover/9781108781619.jpg",
  },
  {
    id: 16,
    title: "Cambridge IELTS 16",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97811089/33858/cover/9781108933858.jpg",
  },
  {
    id: 17,
    title: "Cambridge IELTS 17",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97811089/33810/cover/9781108933810.jpg",
  },
  {
    id: 18,
    title: "Cambridge IELTS 18",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97810092/75187/cover/9781009275187.jpg",
  },
  {
    id: 19,
    title: "Cambridge IELTS 19",
    author: "Cambridge University Press",
    cover:
      "https://assets.cambridge.org/97810094/54735/cover/9781009454735.jpg",
  },
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
      <div className="container mx-auto p-4">
        <div className="flex justify-center mb-4">
          <input
            type="text"
            placeholder="Search books by title or author"
            className="border rounded-md py-2 px-4 w-full max-w-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="border rounded-md p-4  hover:shadow-lg transition-shadow"
            >
              <img
                src={`https://picsum.photos/seed/${book.id}/200/300`}
                alt={book.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-600 text-sm">{book.author}</p>
              <button className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Read Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
