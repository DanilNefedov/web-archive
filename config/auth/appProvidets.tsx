import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'


export const authProviders: AuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,//for TS
            clientSecret:process.env.GOOGLE_SECRET as string//for TS
        })
    ]
}