import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // Passwordless / email sign in
    EmailProvider({
      from: 'yTUBE <no-reply@example.com>',
      server: process.env.EMAIL_SERVER
    }),
  ],
})
