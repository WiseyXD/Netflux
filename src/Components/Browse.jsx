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
} from "../Services/movieApi";
import { setMovies } from "../Context/Slices/movieSlice";

export default function Browse() {
	const { isAuthenticated, user } = useAuth0();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, error, isLoading } = useGetNowPlayingQuery();
	const topMovie = useSelector((state) => state.movie.movies[0]);
	console.log(topMovie);

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

	return (
		<div>
			<Header />
			<div className="hero min-h-screen">
				<iframe
					src="https://www.youtube.com/embed/Gw77Nx4eBMc?si=IRZ9l8OPM4MA2YG9"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
					className="w-full min-h-screen"
				></iframe>
				<div className="hero-overlay bg-opacity-60 flex justify-start">
					<div className="hero-content text-center text-neutral-conten">
						<div className="max-w-md">
							<h1 className="mb-5 text-5xl font-bold">
								Hello there
							</h1>
							<p className="mb-5">
								Provident cupiditate voluptatem et in. Quaerat
								fugiat ut assumenda excepturi exercitationem
								quasi. In deleniti eaque aut repudiandae et a id
								nisi.
							</p>
							<button className="btn btn-primary">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
