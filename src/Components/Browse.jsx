import React from "react";
import LogoutButton from "./LogoutButton";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
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
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage:
						"url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
				}}
			>
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
