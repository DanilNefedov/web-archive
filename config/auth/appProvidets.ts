import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from "next-auth/providers/discord";
import connectDB from "@/lib/mongoose";
import User from "@/models/user";
import { useAppDispatch, useAppSelector } from "@/app/Redux/hook";


export const authProviders: AuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_SECRET as string
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT as string,
            clientSecret: process.env.DISCORD_SECRET as string
        })

    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            const isAllowedToSignIn = true

            if (isAllowedToSignIn) {
                const data = {
                    name: user.name,
                    email: user.email
                }
                try{
                    await connectDB();
                    const existingUser = await User.findOne({ email: user.email });
                    console.log(existingUser)
                    if (!existingUser) {
                       const res = await fetch('http://localhost:3000/api/user',{
                            method: 'POST',
                            headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                        })

                        if(res.ok){
                            const result = await res.json();
                            console.log(result)
                        }else{
                            console.error( res.status);
                        }
                    }
                    
                    
                }catch(error){
                    console.log(error)
                }
              return true
            } else {
              // Return false to display a default error message
              return false
              // Or you can return a URL to redirect to:
              // return '/unauthorized'
            }
          }
    },
    pages:{
        signIn:'/'
    }
}