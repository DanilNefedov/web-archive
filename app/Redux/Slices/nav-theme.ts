'use client'
import { navTheme, navigation, theme } from "@/types/types"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState: navTheme = [{
    connection_id: null,
    theme: [{
        theme_name: null,
        navigation: [{
            nav_name: null,
            title: null,
            description: null,
        }]
    }],
}]


export const fetchNavTheme = createAsyncThunk<navTheme[], string, {rejectValue:string}>(
    'navTheme/fetchNavTheme',
    async function (id , {rejectWithValue}){
        const response = await fetch(`/api/nav-theme?connection_id=${id}`);

        if(!response.ok){
            return rejectWithValue('Server Error!')
        }

        const data = await response.json()
        
        return data
        
    }
)






const navThemeSlice = createSlice({
    name: 'navTheme',
    initialState,
    reducers: {
        setConnectionId(state, action: PayloadAction<{connection_id: string}>){
            state.push({
                connection_id: action.payload.connection_id,
                theme: []
            })
        },
        addTheme(state, action: PayloadAction<{connection_id:string, theme_name:string}>){
            const findConnection = state.find(el => el.connection_id === action.payload.connection_id)
            if(findConnection){
                findConnection.theme.push({
                    theme_name: action.payload.theme_name,
                    navigation: []
                })
            }
        },
        addNavigation(state, action:PayloadAction<{connection_id:string, navigation: navigation, nav_name: string, title:string, description: string, theme_name:string}> ){
            const findConnection = state.find(el => el.connection_id === action.payload.connection_id)
            if(findConnection && findConnection.theme){
                const findNameTheme = findConnection.theme.find(el => el.theme_name === action.payload.theme_name)
                if(findNameTheme){
                    findNameTheme.navigation.push({
                        nav_name: action.payload.nav_name,
                        title: action.payload.title,
                        description: action.payload.description,
                    })
                }
            }
        }

    },

    extraReducers: (builder) =>{
        builder
        .addCase(fetchNavTheme.fulfilled, (state, action) => {
            console.log(action.payload)
        })
    }
})


export const { setConnectionId, addTheme, addNavigation } = navThemeSlice.actions


export default navThemeSlice.reducer