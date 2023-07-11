export interface RequestData <T>{
    url: string;
    data: T;
}




export type navigation = {
    nav_name: string | null
    title: string | null
    description: string | null
}

export type theme = {
    theme_name: string | null
    navigation:navigation[]
}

export type collectionTheme =  {
    // collectionNavTheme :{
        connection_id: null,
        theme: [{
            theme_name: string | null,
            navigation: [{
                nav_name: null,
                title: null,
                description: null,
            }]
        }],
    // }
}

export type navTheme = {
    status: boolean,
    error: boolean,
    collectionNavTheme:{
        connection_id:string | null,
        theme:theme[]
    }
}


