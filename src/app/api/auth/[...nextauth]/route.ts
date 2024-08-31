import prisma from "@/utils/prismaClient";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// Define NextAuth options
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email/Password",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        try {
          // Fetch user by email from the database
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user) {
            return null; // User not found
          }

          // Compare hashed passwords
          const isValidPassword = await bcrypt.compare(credentials.password, user.password);

          if (!isValidPassword) {
            return null; // Invalid password
          }

          // Return user object (remove password before returning)
          const { password, ...userWithoutPassword } = user;
          return userWithoutPassword;
        } catch (e) {
          console.error("Error during user authorization:", e);
          throw new Error("Authorization failed");
        }
      },
    }),
  ]
};

// Create handler for NextAuth
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
