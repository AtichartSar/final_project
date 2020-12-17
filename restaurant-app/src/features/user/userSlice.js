import { createSlice, current } from '@reduxjs/toolkit';
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: ''
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            console.log("stateuser",current(state));
        }
    }
})


export const {
    setUser,
} = userSlice.actions;
export const getUser = state => state.user.user;

export default userSlice.reducer;