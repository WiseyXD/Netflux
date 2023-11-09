import React from "react";
import LogoutButton from "./LogoutButton";
import Header from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addUser } from "../Context/Slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useGetAuthenticationQuery } from "../Services/movieApi";
import { useEffect } from "react";
export default function Browse() {
	const { isAuthenticated, user } = useAuth0();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data, error } = useGetAuthenticationQuery();
	console.log(data);

	if (user) {
		dispatch(addUser(user));
	} else {
		navigate("/");
	}

	return (
		<div>
			<Header />
			Browse
			<LogoutButton />
		</div>
	);
}
