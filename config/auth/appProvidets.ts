import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from "next-auth/providers/discord";
import connectDB from "@/lib/mongoose";
import User from "@/models/user";
import { RequestData } from "@/types/types";
import { postCall } from "../callsApi/postCall";




export const authProviders: AuthOptions = {
    // session: {
    //     strategy: 'jwt',
    // },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),

        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT as string,
            clientSecret: process.env.DISCORD_SECRET as string,

        })

    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            const isAllowedToSignIn = true

            if (isAllowedToSignIn) {
                const data = {
                    name: user.name,
                    email: user.email,
                    provider: account?.provider,
                    img: user.image,
                    connection_id: user.id,
                }
                const requestData: RequestData<typeof data> = {
                    url: 'http://localhost:3000/api/user',
                    data: data,
                };
                await connectDB();
                const existingUser = await User.findOne({ connection_id: user.id });


                if (!existingUser) {
                    postCall(requestData)
                        .then(response => response.json())
                        .then(responseData => {
                            console.log('Successful answer:', responseData.message);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                        });
                }

                return true
            } else {
                return false

            }
        },
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.uid;
            }

            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    pages: {
        signIn: '/'
    }
}