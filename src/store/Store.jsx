import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import homeData from "./slice/homeData";
import searchResults from "./slice/searchResults";
const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        home:homeData.reducer,
        searchData:searchResults.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store