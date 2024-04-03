import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./app/data/user";

export default {
  providers: [
    Credentials({
      authorize: async (credentials: any) => {
        const { email, password } = credentials;
        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;
        const passwordMatch = user.password === password;
        if (passwordMatch) return user;
        return null;
      },
    }),
  ],
  secret: "ce75553cad34242a5b7ec38e8d0b3fda", // Use your secret key from the environment variable
} satisfies NextAuthConfig;
