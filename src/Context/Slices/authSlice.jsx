import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
	language: "English",
	gptPage: true,
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
		toggleGpt: (state, action) => {
			state.gptPage = action.payload;
		},
	},
});

export const { addUser, removeUser, changeLanguage, toggleGpt } =
	authSlice.actions;

export default authSlice.reducer;
