import React from "react";
import LogoutButton from "./LogoutButton";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Context/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import {
	useGetAuthenticationQuery,
	useGetNowPlayingQuery,
	useGetUpcomingMoviesQuery,
} from "../Services/movieApi";
import { setMovies } from "../Context/Slices/movieSlice";
import VideoContainer from "./VideoContainer";
import CarouselContainer from "./CarouselContainer";

export default function Browse() {
	const { isAuthenticated, user } = useAuth0();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, error, isLoading } = useGetNowPlayingQuery();

	if (user) {
		dispatch(addUser(user));
	} else {
		navigate("/");
	}

	if (isLoading) {
		return null;
	} else {
		dispatch(setMovies(data.results));
	}
	// Null D
	return (
		<div>
			<Header />
			<VideoContainer />
			<div className="max-w-full w-11/12 mx-auto my-0 mb-5">
				<CarouselContainer />
			</div>
		</div>
		// Null Day
	);
}
