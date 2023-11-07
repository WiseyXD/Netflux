import { useState } from "react";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";
import Browse from "./Components/Browse";
import Header from "./Components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
function App() {
	const [count, setCount] = useState(0);
	const { isAuthenticated, user } = useAuth0();
	// console.log(user, isAuthenticated);
	return (
		<>
			{/* <Header /> */}
			{/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
			<Routes>
				<Route path="/" element={<LoginButton />} />
				<Route path="/browse" element={<Browse />} />
			</Routes>
		</>
	);
}

export default App;
