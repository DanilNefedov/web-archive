import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from "next-auth/providers/discord";


export const authProviders: AuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,//for TS
            clientSecret:process.env.GOOGLE_SECRET as string//for TS
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT as string,
            clientSecret: process.env.DISCORD_SECRET as string
        })

    ],
    pages:{
        signIn:'/'
    }
}