'use client'
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Slices/userSlice'
import navThemeReducer from './Slices/nav-theme'

export const store = configureStore({
    reducer:{
        user:userReducer,
        navTheme:navThemeReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch