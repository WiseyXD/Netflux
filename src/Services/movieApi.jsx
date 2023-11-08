import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_OPTIONS, baseUrl } from "../Utils/constants";

// const createReq = (url) => ({ url, options: API_OPTIONS });

export const movieApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
	endpoints: (builder) => ({
		getAuthentication: builder.query({
			query: () => "authentication",
			headers: {
				accept: "application/json",
				Authorization: "Bearer 8413b7f31999de398c3c90d77fd00e41",
			},
		}),
	}),
});

export const { useGetAuthenticationQuery } = movieApi;
