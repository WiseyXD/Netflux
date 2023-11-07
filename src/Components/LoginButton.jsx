import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import bgPic from "../assets/netflixbg.jpg";

export default function LoginButton() {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	if (isAuthenticated) {
		navigate("/browse");
		return;
	}
	return (
		<div>
			<Header />
			<div
				className="hero min-h-screen"
				style={{
					backgroundImage: `url(${bgPic})`,
				}}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button
							className="btn btn-primary"
							onClick={() => loginWithRedirect()}
						>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
