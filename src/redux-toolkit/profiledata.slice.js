import { createSlice } from "@reduxjs/toolkit";

const primaryState = {
   mydata : {
    name : "Kamruzzaman Mayed",
    email : "zamanmayed01@gmail.com",
    profilePhoto: "https://i.ibb.co/whHfRs9/Fotolia-106071621-Subscription-Yearly-XXL-PLUS-square.jpg"
   } 
}

const profiledataSlice = createSlice({
    name: "profiledata",
    initialState: primaryState,
    reducers : {
        // all actions

    }
})

export default profiledataSlice.reducer