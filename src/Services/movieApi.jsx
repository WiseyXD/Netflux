import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_OPTIONS, baseUrl } from "../Utils/constants";

const createReq = (url) => ({ url, options: API_OPTIONS });

export const movieApi = createApi({
	reducerPath: "movieApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
	endpoints: (builder) => ({
		getMovieAuth: builder.query({
			query: () => createReq(`/3/authentication`),
		}),
	}),
});

export const { useGetMovieAuthQuery } = movieApi;
