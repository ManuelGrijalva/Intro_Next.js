// Autenticación temporalmente deshabilitada
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';

// Función mock para evitar errores de base de datos
async function getUser(email: string): Promise<User | undefined> {
  // Usuario mock para bypass temporalmente
  if (email === 'admin@empresa.com') {
    return {
      id: '1',
      name: 'Admin',
      email: 'admin@empresa.com',
      password: 'admin123'
    } as User;
  }
  return undefined;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          // Comparación simple sin bcrypt para testing
          const passwordsMatch = password === user.password;

          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
