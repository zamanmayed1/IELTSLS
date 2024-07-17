import { createSlice } from "@reduxjs/toolkit";

const primaryState = {
   books : [
    {
        "title": "English Grammar in Use",
        "subtitle": "A Self-study Reference and Practice Book for Intermediate Learners of English",
        "author": "Raymond Murphy",
        "coverPicture": "https://m.media-amazon.com/images/I/51a+XisfDsL._SL1024_.jpg",
        "price": 32.99,
        "isAvailable": true,
        "publisher": "Cambridge University Press",
        "isbn": "978-1108457651",
        "overview": "This is the world's best-selling grammar series for learners of English. Ideal for intermediate learners, this book contains simple explanations and lots of practice exercises.",
        "buyLink": "https://www.amazon.com/dp/1108457657",
        "readHours": 15,
        "reviews": 4.8
      },
      {
        "title": "Word Power Made Easy",
        "subtitle": "The Complete Handbook for Building a Superior Vocabulary",
        "author": "Norman Lewis",
        "coverPicture": "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX321_BO1,204,203,200_.jpg",
        "price": 8.99,
        "isAvailable": false,
        "publisher": "Goyal Publishers",
        "isbn": "978-8183071000",
        "overview": "An extensive vocabulary builder that helps readers improve their language skills with engaging exercises and tips.",
        "buyLink": "https://www.amazon.com/dp/8183071000",
        "readHours": 12,
        "reviews": 4.5
      },
      {
        "title": "The Elements of Style",
        "subtitle": "Classic Guide to Writing",
        "author": "William Strunk Jr.",
        "coverPicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGCdVONJ0yycfRG42N5wtt2ERufK2Ex2FZA&s",
        "price": 7.95,
        "isAvailable": true,
        "publisher": "Independently Published",
        "isbn": "978-1988236420",
        "overview": "This book is a must-read for anyone who wants to learn how to write well. It covers the fundamental principles of writing.",
        "buyLink": "https://www.amazon.com/dp/1988236420",
        "readHours": 8,
        "reviews": 4.7
      },
      {
        "title": "English Vocabulary in Use",
        "subtitle": "Upper-intermediate",
        "author": "Michael McCarthy",
        "coverPicture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3atzubIqrkPme9p6TAcnNtWJMTdJMrSZXQ&s",
        "price": 28.99,
        "isAvailable": true,
        "publisher": "Cambridge University Press",
        "isbn": "978-1108563154",
        "overview": "A popular book for upper-intermediate students who want to enrich their vocabulary.",
        "buyLink": "https://www.amazon.com/dp/1108563154",
        "readHours": 20,
        "reviews": 4.6
      },
      {
        "title": "Fluent English",
        "subtitle": "Perfect Natural Speech, Sharpen Your Grammar, Master Idioms, Speak Fluently",
        "author": "Barbara Raifsnider",
        "coverPicture": "https://archive.org/services/img/fluentenglish00raif/full/pct:200/0/default.jpg",
        "price": 18.00,
        "isAvailable": true,
        "publisher": "Living Language",
        "isbn": "978-1400020658",
        "overview": "A complete course that provides key grammar, pronunciation, and fluency skills for speaking English naturally.",
        "buyLink": "https://www.amazon.com/dp/1400020658",
        "readHours": 25,
        "reviews": 4.4
      },
      {
        "title": "Practical English Usage",
        "subtitle": "Grammar and Vocabulary",
        "author": "Michael Swan",
        "coverPicture": "https://m.media-amazon.com/images/I/61QVoeTS+cL._SL1333_.jpg",
        "price": 41.99,
        "isAvailable": false,
        "publisher": "Oxford University Press",
        "isbn": "978-0194202466",
        "overview": "A comprehensive and practical guide to English grammar and vocabulary.",
        "buyLink": "https://www.amazon.com/dp/0194202467",
        "readHours": 30,
        "reviews": 4.9
      },
      {
        "title": "English Idioms in Use",
        "subtitle": "Advanced",
        "author": "Michael McCarthy",
        "coverPicture": "https://m.media-amazon.com/images/I/61P8JGOZroL._AC_UF1000,1000_QL80_.jpg",
        "price": 26.99,
        "isAvailable": true,
        "publisher": "Cambridge University Press",
        "isbn": "978-1316629734",
        "overview": "Designed for advanced learners, this book helps students understand and use English idioms confidently.",
        "buyLink": "https://www.amazon.com/dp/1316629736",
        "readHours": 18,
        "reviews": 4.8
      },
      {
        "title": "English Collocations in Use",
        "subtitle": "Intermediate",
        "author": "Michael McCarthy",
        "coverPicture": "https://image.slidesharecdn.com/englishcollocationsinuseadvancedpdfdrive-220529033919-611e8590/85/English-Collocations-in-Use-Advanced-PDFDrive-pdf-1-320.jpg",
        "price": 26.99,
        "isAvailable": true,
        "publisher": "Cambridge University Press",
        "isbn": "978-1107465657",
        "overview": "A book designed to help intermediate students understand and use collocations in English.",
        "buyLink": "https://www.amazon.com/dp/1107465656",
        "readHours": 16,
        "reviews": 4.6
      },
      {
        "title": "Advanced Grammar in Use",
        "subtitle": "A Self-Study Reference and Practice Book for Advanced Learners of English",
        "author": "Martin Hewings",
        "coverPicture": "https://www.cambridge.es/var/ezdemo_site/storage/images/media/images/covers/gram-vocab-and-pron/grammar/9781108920216i_advgram_use_4ed/132443-1-eng-GB/9781108920216i_advgram_use_4ed.jpg",
        "price": 31.99,
        "isAvailable": false,
        "publisher": "Cambridge University Press",
        "isbn": "978-1107697386",
        "overview": "This book provides advanced learners of English with a comprehensive guide to grammar.",
        "buyLink": "https://www.amazon.com/dp/1107697380",
        "readHours": 22,
        "reviews": 4.7
      },
      {
        "title": "Oxford Guide to English Grammar",
        "subtitle": "A Comprehensive Guide to English Grammar",
        "author": "John Eastwood",
        "coverPicture": "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Oxford_Guide_to_English_Grammar-John_Eastwood-c4892-296041.jpg",
        "price": 22.99,
        "isAvailable": true,
        "publisher": "Oxford University Press",
        "isbn": "978-0194313421",
        "overview": "A thorough and comprehensive guide to English grammar, ideal for both students and teachers.",
        "buyLink": "https://www.amazon.com/dp/0194313425",
        "readHours": 18,
        "reviews": 4.5
      },
      {
        "title": "The Blue Book of Grammar and Punctuation",
        "subtitle": "An Easy-to-Use Guide with Clear Rules, Real-World Examples, and Reproducible Quizzes",
        "author": "Jane Straus",
        "coverPicture": "https://m.media-amazon.com/images/I/81YZguR+YlL._SL1500_.jpg",
        "price": 14.95,
        "isAvailable": true,
        "publisher": "Jossey-Bass",
        "isbn": "978-1118785560",
        "overview": "A practical and easy-to-use guide that provides clear rules, real-world examples, and quizzes for practice.",
        "buyLink": "https://www.amazon.com/dp/1118785568",
        "readHours": 10,
        "reviews": 4.8
      }
  ]
  
}

const booksLibrarySlice = createSlice({
    name: "bookslibrary",
    initialState: primaryState,
    reducers : {
        // all actions

    }
})

export default booksLibrarySlice.reducer