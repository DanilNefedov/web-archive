import type { AuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import DiscordProvider from "next-auth/providers/discord";
import connectDB from "@/lib/mongoose";
import User from "@/models/user";
import { RequestData } from "@/types/types";
import { postCall } from "../callsApi/postCall";
import type { Session } from '../../node_modules/next-auth/src/core/types';
import type { JWT } from '../../node_modules/next-auth/src/jwt/types';



export const authProviders: AuthOptions = {
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

            // --------------//--------------------//

            //Check and respond when a user is created with the same mail, but uses a different ISP

            // --------------//--------------------//


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

                console.log(profile)

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
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },

        session: async ({ session, token }:{session: Session, token:JWT}) => {
            if (session?.user) {
                session.user.id  = token.uid;
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
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/'
    }
}