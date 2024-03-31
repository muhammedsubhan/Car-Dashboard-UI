import NextAuth from "next-auth";
import authconfig from "./authconfig";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/app/libs/db";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authconfig,
});
