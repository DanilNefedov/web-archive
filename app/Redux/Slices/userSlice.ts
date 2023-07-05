'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
// /dist/createSlice

export type UserState = {
    name:string | null,
    email:string | null
}


const initialState:UserState ={
    name : null,
    email: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser(state, action: PayloadAction<UserState>){
            state.name = action.payload.name
            state.email = action.payload.email
        },

       
    }
})


export const { addUser} = userSlice.actions


export default userSlice.reducer