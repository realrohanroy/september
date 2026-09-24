import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Provide a dummy URL for build-time evaluation on Vercel if the env var is missing
const connectionString = process.env.DATABASE_URL || 'postgres://dummy:dummy@dummy/dummy';
const sql = neon(connectionString);
export const db = drizzle({ client: sql, schema });
