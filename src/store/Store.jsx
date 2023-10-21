import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import homeData from "./slice/homeData";
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        home:homeData.reducer
    },
    
})
export default store