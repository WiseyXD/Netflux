import { useState } from "react";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
	const [count, setCount] = useState(0);
	const { isAuthenticated, user } = useAuth0();
	console.log(user);
	return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
}

export default App;
