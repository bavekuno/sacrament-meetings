import { neon } from '@neondatabase/serverless';

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set');
  }
  return neon(databaseUrl);
}

export type User = {
  id: number;
  email: string;
  name: string | null;
  passwordHash: string;
};

export async function getUserByEmail(email: string): Promise<User | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, email, name, password_hash AS "passwordHash"
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `;
  return (rows[0] as User) ?? null;
}

export async function createUser(email: string, passwordHash: string, name?: string | null): Promise<User> {
  const sql = getSql();
  const rows = await sql`
    INSERT INTO users (email, name, password_hash)
    VALUES (${email}, ${name ?? null}, ${passwordHash})
    RETURNING id, email, name, password_hash AS "passwordHash"
  `;
  return rows[0] as User;
}
