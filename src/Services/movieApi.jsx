import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, API_TOKEN } from "../Utils/constants";

// const createReq = (url) => ({ url, options: API_OPTIONS });

export const movieApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
		prepareHeaders: (headers, { getState }) => {
			const token = "Bearer " + API_TOKEN;
			headers.set("Authorization", token);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getAuthentication: builder.query({
			query: () => "authentication",
		}),
		getNowPlaying: builder.query({
			query: () => "movie/now_playing?language=en-US&page=1",
		}),
		getUpcomingMovies: builder.query({
			query: () => "movie/upcoming",
		}),
		getTopMovies: builder.query({
			query: () => "movie/top_rated",
		}),
		getPopularMovies: builder.query({
			query: () => "movie/popular",
		}),
		getTopMovieTrailer: builder.query({
			query: (movie_id) => `movie/${movie_id}/videos`,
		}),
	}),
});

export const {
	useGetAuthenticationQuery,
	useGetNowPlayingQuery,
	useGetTopMovieTrailerQuery,
	useGetUpcomingMoviesQuery,
	useGetTopMoviesQuery,
	useGetPopularMoviesQuery,
} = movieApi;
