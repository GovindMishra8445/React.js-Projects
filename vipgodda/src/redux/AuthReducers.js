import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

export const AuthSlice = createSlice({
    initialState,
    name : "auth",
    reducers: {
        logout(state) {
            state.user = null
        },
        setUser(state, action) {
            state.user = action.payload;
        }
    }
})

export const getUser = (state) => state.user;

export const { logout, setUser } = AuthSlice.actions;
export default AuthSlice.reducer;