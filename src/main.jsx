import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
			domain="aryan-auth.eu.auth0.com"
			clientId="wIrsTCXx1dmfzjuhMCvocW9KFaxu4bh6"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Auth0Provider>
	</React.StrictMode>
);
