import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	movies: null,
	topMovie: null,
	upcomingMovies: null,
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
		setUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
	},
});

export const { setMovies, setTopMovie, setUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;
