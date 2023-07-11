'use client'
import { collectionTheme, navTheme, navigation, theme } from "@/types/types"
import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState: navTheme = {
    status: false,
    error: false,
    collectionNavTheme: {
        connection_id: null,
        theme: [],
    }
}


export const fetchNavTheme = createAsyncThunk<collectionTheme, string, { rejectValue: string }>(
    'navTheme/fetchNavTheme',
    async function (id, { rejectWithValue }) {
        const response = await fetch(`/api/nav-theme?connection_id=${id}`);

        if (!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const data = await response.json();

        return data.navTheme[0]; 
    }
);






const navThemeSlice = createSlice({
    name: 'navTheme',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchNavTheme.pending, (state) =>{
                state.status = true,
                state.error = false
            })
            .addCase(fetchNavTheme.fulfilled, (state, action: PayloadAction<collectionTheme>) => {
                state.status = false
                state.error = false
                if(action.payload){
                    state.collectionNavTheme.connection_id = action.payload.connection_id
                    action.payload.theme.map(elementAction => {
                        const findTheme = state.collectionNavTheme.theme.find(el => el.theme_name?.toLowerCase() === elementAction?.theme_name?.toLowerCase())

                        if (!findTheme && findTheme !== null) {
                            state.collectionNavTheme.theme.push({
                                theme_name: elementAction.theme_name,
                                navigation: elementAction.navigation.map((el): navigation => ({
                                    nav_name: el.nav_name,
                                    description: el.description,
                                    title: el.title,
                                })),
                            });
                        }
                    })
                }
                
            })
            .addMatcher(isEror, (state, action: PayloadAction<boolean>) =>{
                state.error = action.payload,
                state.status = false
            })
    }
})

export default navThemeSlice.reducer

function isEror(action: AnyAction){
    return action.type.endsWith('rejected')
}