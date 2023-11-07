import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Context/store.js";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
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
		</Provider>
	</React.StrictMode>
);
