import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function LoginButton() {
	const { loginWithRedirect, isAuthenticated } = useAuth0();
	const navigate = useNavigate();
	if (isAuthenticated) {
		navigate("/browse");
	}
	return (
		<div>
			<button onClick={() => loginWithRedirect()}>Log In</button>
		</div>
	);
}
