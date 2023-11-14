import React from "react";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export default function ChatBot() {
	const { isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	if (!isAuthenticated) {
		navigate("/");
		return;
	}
	return (
		<div>
			<Header />
			<div className="max-w-full w-11/12 mx-auto my-0 mb-5 flex justify-center items-center">
				<div className="join w-3/4 mt-6 flex justify-center">
					<input
						className="input input-bordered join-item basis-3/4"
						placeholder="How is your mood ?"
					/>

					<button
						className="btn btn-wide join-item basis-1/4 bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
						onClick={() => {
							navigate("/browse/gpt");
						}}
					>
						Suggest
					</button>
				</div>
			</div>
		</div>
	);
}
