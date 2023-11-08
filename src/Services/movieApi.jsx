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
				Authorization: "Bearer 381319eaecf52258b28d671a4643a236",
			},
		}),
	}),
});

export const { useGetAuthenticationQuery } = movieApi;
