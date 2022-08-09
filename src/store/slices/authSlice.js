import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    authUser: {},
    // isLoggedIn: !!JSON.parse(localStorage.getItem('user'))?.token,
    isLoggedIn: true,
    isLoadding: false,
    authError: null,
}

export const login = createAsyncThunk(
    'auth/login',
    async (payload, { rejectWithValue}) => {
        try {
            // const response = await
            // return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeAuthInfo: (state, action) => {
            state.isLoggedIn = false;
            state.authUser = {}
        }
    }
})

export default authSlice.reducer;
export const { removeAuthInfo } = authSlice.actions;