import { createSlice } from "@reduxjs/toolkit";

const primaryState = {
   datas : [
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
        title: "Translator",
        description: [
          "Real-time text translation",
          "Support for multiple languages",
          "Pronunciation guide",
          "Translation history"
        ],
        iconName: "FaGlobe",
        isComingSoon: true
      },
      {
        id: 6,
        title: "Mock Test System",
        description: [
          "Full-length IELTS practice tests",
          "Section-wise tests (Listening, Reading, Writing, Speaking)",
          "Timed and untimed modes",
          "Performance analytics and feedback"
        ],
        iconName: "FaClipboardList",
        isComingSoon: true
      },
      {
        id: 7,
        title: "IELTS Speaking Test System",
        description: [
          "Simulated speaking tests",
          "AI-driven feedback and scoring",
          "Tips and suggestions for improvement",
          "Recording and playback features for self-assessment"
        ],
        iconName: "FaCommentsDollar",
        isComingSoon: true
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