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

export type navTheme = [{
    connection_id:string | null,
    theme:theme[]
}]
