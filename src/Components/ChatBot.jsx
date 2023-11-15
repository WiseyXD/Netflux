import { useRef } from "react";

import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import bgPic from "../assets/netflixbg.jpg";

import { openai } from "../Utils/openai";

export default function ChatBot() {
	const { isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	const searchText = useRef(null);
	if (!isAuthenticated) {
		navigate("/");
		return;
	}

	async function handleGptSearch() {
		const query = `Suggest only 5 Movies name for ${searchText.current.value} all of them should be seprated by comma`;
		const gptResult = await openai.chat.completions.create({
			messages: [{ role: "user", content: query }],
			model: "gpt-3.5-turbo",
		});
		console.log(gptResult);
	}

	return (
		<div>
			<Header />
			<div
				style={{
					backgroundImage: `url(${bgPic})`,
				}}
				className=" bg-opacity-10"
			>
				<div className="hero-overlay">
					<div className="max-w-full w-11/12 min-h-screen mx-auto my-0 flex justify-center">
						<form
							className="join w-3/4 mt-6 flex justify-center"
							onSubmit={(e) => e.preventDefault()}
						>
							<input
								className="input input-bordered join-item basis-3/4"
								placeholder="How is your mood ?"
								ref={searchText}
							/>

							<button
								className="btn btn-wide join-item basis-1/4 bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500"
								onClick={() => {
									handleGptSearch();
								}}
							>
								Suggest
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
