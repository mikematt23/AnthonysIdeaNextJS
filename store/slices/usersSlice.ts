import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    isLoggedIn: boolean
}

const initialState = {
    isLoggedIn : true,
    user: 0
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logIn(state,action){
            state.isLoggedIn = true
            state.user = action.payload.user
        },
        logOut(state){
            state.isLoggedIn = false
        }
    }
})

export const {logIn, logOut} = userSlice.actions
export default userSlice.reducer