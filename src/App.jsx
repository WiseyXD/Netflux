import { useState } from "react";
import LoginButton from "./Components/LoginButton";

import Browse from "./Components/Browse";

import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

import ChatBot from "./Components/ChatBot";

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
				<Route path="/browse/gpt" element={<ChatBot />} />
			</Routes>
		</>
	);
}

export default App;
