import { createSlice } from "@reduxjs/toolkit";

const primaryState = {
   datas :  [
    {
      id: 1,
      title: "Student Dashboard",
      description: [
        "Overview of progress and recent activities",
        "Quick access to different modules",
        "Personalized learning path and recommendations",
        "Upcoming tests and schedule"
      ],
      iconName: "FaTachometerAlt",
      isComingSoon: false
    },
    {
      id: 2,
      title: "Students Feed",
      description: [
        "Updates and announcements",
        "Discussion forums for students to interact",
        "Peer support and study groups",
        "Sharing study tips and resources"
      ],
      iconName: "FaComments",
      isComingSoon: false
    },
    {
      id: 3,
      title: "English Library",
      description: [
        "Extensive collection of reading materials",
        "Categorized by topics and difficulty levels",
        "Interactive reading exercises",
        "Bookmark and highlight features"
      ],
      iconName: "FaBook",
      isComingSoon: false
    },
    {
      id: 4,
      title: "Vocabulary Zone",
      description: [
        "Daily/weekly vocabulary lists",
        "Flashcards for practice",
        "Quizzes and games to reinforce learning",
        "Word usage examples and context"
      ],
      iconName: "FaRegLightbulb",
      isComingSoon: false
    },
    {
      id: 5,
      title: "Online Courses",
      description: [
        "Comprehensive IELTS preparation courses",
        "Self-paced and instructor-led options",
        "Video lectures and interactive content",
        "Regular assessments and feedback"
      ],
      iconName: "FaBookOpen",
      isComingSoon: false
    },
    {
      id: 6,
      title: "Private Batches",
      description: [
        "Exclusive small group sessions",
        "Personalized attention and guidance",
        "Flexible scheduling",
        "Interactive live classes"
      ],
      iconName: "FaUsers",
      isComingSoon: false
    },
    {
      id: 7,
      title: "Career Counselling",
      description: [
        "Guidance on career pathways",
        "Resume building and interview preparation",
        "Job search strategies",
        "One-on-one career coaching sessions"
      ],
      iconName: "FaBriefcase",
      isComingSoon: false
    }
  ]
  
}

const homodataSlice = createSlice({
    name: "homodata",
    initialState: primaryState,
    reducers : {
        // all actions

    }
})

export default homodataSlice.reducer