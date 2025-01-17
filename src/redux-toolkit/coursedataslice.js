import { createSlice } from "@reduxjs/toolkit";

const primaryState = {
   courses : [
    {
      id: "1AIA",
      title: "IELTS Academic Masterclass!",
      subTitle:
        "All in One Course | Masterclass | Enroll Now | Free Certificate",
      category: "IELTS Academic",
      tags: ["IELTS", "Academic", "Free Certificate", "Video Course"],
      price: 125,
      duration: "10Hr 25Min",
      instructor: "Mohammad Ali",
      coverImage: "/",
    },
    {
      id: "2AIA",
      title: "Basic IELTS Academic - Course for Beginner",
      subTitle: "Basic to Advance | Articulate | Enroll Now | Free Certificate",
      category: "IELTS Academic",
      tags: ["IELTS", "Academic", "Basic", "Free Certificate", "Video Course"],
      price: 75,
      duration: "4Hr 20Min",
      instructor: "Mohammad Ali",
      coverImage: "/",
    },
    {
      id: "3AIGT",
      title: "IELTS General Training - Basic to Advance!",
      subTitle: "Articulate | Enroll Now | Free Certificate",
      category: "IELTS General Training",
      tags: [
        "IELTS",
        "General Training",
        "Basic to Advance",
        "Free Certificate",
        "Video Course",
      ],
      price: 85,
      duration: "12Hr 35Min",
      instructor: "Rimon Morol",
      coverImage: "/",
    },
    {
      id: "4AR",
      title: "Reading Masterclass - Read Like Native!",
      subTitle: "Masterclass | Enroll Now | Free Certificate",
      category: "Reading",
      tags: [
        "Reading",
        "Free",
        "Basic to Advance",
        "Free Certificate",
        "Video Course",
      ],
      price: 0,
      duration: "12Hr 35Min",
      instructor: "Kamruzzaman Mayed",
      coverImage: "/",
    },
    {
      id: "5WW",
      title: "Writing Essentials - Improve Your Writing Skills",
      subTitle: "Comprehensive Writing Course | Enroll Now",
      category: "Writing",
      tags: ["Writing", "Skills", "Advanced", "Video Course"],
      price: 95,
      duration: "8Hr 50Min",
      instructor: "Jessica Smith",
      coverImage: "/",
    },
    {
      id: "6SPK",
      title: "Speaking Fluency Mastery",
      subTitle: "Become Fluent in Speaking | Enroll Now",
      category: "Speaking",
      tags: ["Speaking", "Fluency", "Advanced", "Video Course"],
      price: 110,
      duration: "6Hr 40Min",
      instructor: "David Johnson",
      coverImage: "/",
    },
    {
      id: "7LST",
      title: "Listening Skills Enhancement",
      subTitle: "Improve Listening Skills | Enroll Now",
      category: "Listening",
      tags: ["Listening", "Skills", "Intermediate", "Video Course"],
      price: 80,
      duration: "5Hr 15Min",
      instructor: "Emily Brown",
      coverImage: "/",
    },
    {
      id: "8GR",
      title: "Mastering Grammar",
      subTitle: "Grammar Essentials | Enroll Now",
      category: "Grammar",
      tags: ["Grammar", "Essentials", "Intermediate", "Video Course"],
      price: 65,
      duration: "7Hr 30Min",
      instructor: "Michael White",
      coverImage: "/",
    },
    {
      id: "9BTF",
      title: "Business English - The Professional Edge",
      subTitle: "Business Communication Skills | Enroll Now",
      category: "Others",
      tags: [
        "Business English",
        "Communication",
        "Professional",
        "Video Course",
      ],
      price: 135,
      duration: "9Hr 20Min",
      instructor: "Sophie Johnson",
      coverImage: "/",
    },
    {
      id: "10FL",
      title: "Financial Literacy",
      subTitle: "Essential Skills for Managing Finances | Enroll Now",
      category: "Others",
      tags: ["Finance", "Financial Literacy", "Management", "Video Course"],
      price: 100,
      duration: "6Hr 55Min",
      instructor: "Andrew Clark",
      coverImage: "/",
    },
    {
      id: "11MKT",
      title: "Digital Marketing Fundamentals",
      subTitle: "Introduction to Digital Marketing | Enroll Now",
      category: "Others",
      tags: ["Digital Marketing", "Marketing", "Fundamentals", "Video Course"],
      price: 95,
      duration: "7Hr 45Min",
      instructor: "Emma Davis",
      coverImage: "/",
    },
    {
      id: "12PH",
      title: "Photography Masterclass",
      subTitle: "Mastering Photography Techniques | Enroll Now",
      category: "Others",
      tags: ["Photography", "Techniques", "Masterclass", "Video Course"],
      price: 120,
      duration: "11Hr 10Min",
      instructor: "Daniel White",
      coverImage: "/",
    },
    {
      id: "13DS",
      title: "Data Science Essentials",
      subTitle: "Foundations of Data Science | Enroll Now",
      category: "Others",
      tags: ["Data Science", "Foundations", "Essentials", "Video Course"],
      price: 150,
      duration: "14Hr 30Min",
      instructor: "Jennifer Lee",
      coverImage: "/",
    },
    {
      id: "14WE",
      title: "Web Development Bootcamp",
      subTitle: "Learn Web Development from Scratch | Enroll Now",
      category: "Others",
      tags: ["Web Development", "Bootcamp", "Beginner", "Video Course"],
      price: 110,
      duration: "10Hr 55Min",
      instructor: "Mark Johnson",
      coverImage: "/",
    },
    {
      id: "15EC",
      title: "Entrepreneurship 101",
      subTitle: "Startup Essentials for Entrepreneurs | Enroll Now",
      category: "Others",
      tags: ["Entrepreneurship", "Startups", "Essentials", "Video Course"],
      price: 90,
      duration: "8Hr 15Min",
      instructor: "Sophia Brown",
      coverImage: "/",
    },
    {
      id: "16PM",
      title: "Project Management Mastery",
      subTitle: "Advanced Project Management Techniques | Enroll Now",
      category: "Others",
      tags: ["Project Management", "Mastery", "Advanced", "Video Course"],
      price: 130,
      duration: "12Hr 40Min",
      instructor: "Robert Taylor",
      coverImage: "/",
    },
    {
      id: "17AI",
      title: "Artificial Intelligence Fundamentals",
      subTitle: "Introduction to AI | Enroll Now",
      category: "Others",
      tags: ["Artificial Intelligence", "AI", "Fundamentals", "Video Course"],
      price: 140,
      duration: "13Hr 20Min",
      instructor: "Alexa Johnson",
      coverImage: "/",
    },
    {
      id: "18CL",
      title: "Leadership Skills Development",
      subTitle: "Developing Effective Leadership Skills | Enroll Now",
      category: "Others",
      tags: ["Leadership", "Skills", "Development", "Video Course"],
      price: 110,
      duration: "9Hr 30Min",
      instructor: "Christopher Green",
      coverImage: "/",
    },
    {
      id: "19HR",
      title: "Human Resources Management",
      subTitle: "Essentials of HR Management | Enroll Now",
      category: "Others",
      tags: ["Human Resources", "HR Management", "Essentials", "Video Course"],
      price: 95,
      duration: "7Hr 55Min",
      instructor: "Sophie Roberts",
      coverImage: "/",
    },
    {
      id: "20CS",
      title: "Cybersecurity Fundamentals",
      subTitle: "Introduction to Cybersecurity | Enroll Now",
      category: "Others",
      tags: ["Cybersecurity", "Fundamentals", "Security", "Video Course"],
      price: 120,
      duration: "10Hr 10Min",
      instructor: "David Brown",
      coverImage: "/",
    },
  ],
  courseCategories: [
    "IELTS Academic",
    "IELTS General Training",
    "Reading",
    "Writing",
    "Speaking",
    "Listening",
    "Grammar",
    "Others",
  ]
}

const courseDataslice = createSlice({
    name: "coursedata",
    initialState: primaryState,
    reducers : {
        // all actions

    }
})

export default courseDataslice.reducer