import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addUser: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value = action.payload;
		},
		removeUser: (state) => {
			state.value = null;
		},
	},
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
