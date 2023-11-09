import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_OPTIONS, baseUrl } from "../Utils/constants";

// const createReq = (url) => ({ url, options: API_OPTIONS });

export const movieApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.themoviedb.org/3/",
		prepareHeaders: (headers, { getState }) => {
			const token =
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODEzMTllYWVjZjUyMjU4YjI4ZDY3MWE0NjQzYTIzNiIsInN1YiI6IjY1NGJjNGVhMjg2NmZhMDBmZTAxYjMxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._h5PkIUYfbfD-bA_miksXaxjsUKNaFEzm5cNAU5FjVw";
			headers.set("Authorization", token);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getAuthentication: builder.query({
			query: () => "authentication",
		}),
	}),
});

export const { useGetAuthenticationQuery } = movieApi;
