import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../Context/Slices/authSlice";
export default function Header() {
	const { isAuthenticated, logout } = useAuth0();

	const dispatch = useDispatch();
	const userDetails = useSelector((state) => state.auth.value);
	console.log(userDetails);
	return (
		<>
			{isAuthenticated ? (
				<div className="navbar ">
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl">
							NETFLUX
						</a>
					</div>
					<div className="flex-none gap-2">
						<div className="form-control">
							<input
								type="text"
								placeholder="Search"
								className="input input-bordered w-24 md:w-auto"
							/>
						</div>
						<div className="dropdown dropdown-end">
							<label
								tabIndex={0}
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img src={userDetails?.picture} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li>
									<a
										onClick={() => {
											logout();
											dispatch(removeUser());
										}}
									>
										Logout
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			) : (
				<div className="navbar">
					<div className="flex-1">
						<a className="btn btn-ghost normal-case text-xl">
							NETFLUX
						</a>
					</div>
					{/* <div className="flex-none">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a>Link</a>
							</li>
							<li>
								<details>
									<summary>Parent</summary>
									<ul className="p-2 bg-base-100">
										<li>
											<a>Link 1</a>
										</li>
										<li>
											<a>Link 2</a>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div> */}
				</div>
			)}
		</>
	);
}
