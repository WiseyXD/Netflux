import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./Slices/authSlice";
import movieReducer from "./Slices/movieSlice";
import { movieApi } from "../Services/movieApi";
export const store = configureStore({
	reducer: {
		auth: authReducer,
		movie: movieReducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);
