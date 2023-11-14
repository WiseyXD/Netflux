import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
	language: "English",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.value = action.payload;
		},
		removeUser: (state) => {
			state.value = null;
		},
		changeLanguage: (state, action) => {
			state.language = action.payload;
		},
	},
});

export const { addUser, removeUser, changeLanguage } = authSlice.actions;

export default authSlice.reducer;
