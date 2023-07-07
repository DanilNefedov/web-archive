'use client'

import { Provider } from "react-redux"
import {store} from '../../app/Redux/store'
import { ReactNode } from "react";


export interface ProvidersProps {
    children:ReactNode;
}


export function ProviderStore({children}:ProvidersProps){
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}