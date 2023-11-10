import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: null,
	topMovie: null,
};

const movieSlice = createSlice({
	name: "movie",
	initialState,
	reducers: {
		setMovies: (state, action) => {
			state.movies = action.payload;
		},
		setTopMovie: (state, action) => {
			state.topMovie = action.payload;
		},
	},
});

export const { setMovies, setTopMovie } = movieSlice.actions;

export default movieSlice.reducer;
