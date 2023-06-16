import { authProviders } from "@/config/auth/appProvidets";
import NextAuth from "next-auth/next";


const handler = NextAuth(authProviders)

export { handler as GET, handler as POST}