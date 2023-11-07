import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { removeUser } from "../Context/Slices/authSlice";
export default function LogoutButton() {
	const { logout } = useAuth0();
	const dispatch = useDispatch();

	return (
		<div>
			<button
				onClick={() => {
					logout();
					dispatch(removeUser());
				}}
			>
				Logout
			</button>
		</div>
	);
}
