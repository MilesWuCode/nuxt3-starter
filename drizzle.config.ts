import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'mysql',
  schema: './database/drizzle/schema.ts',
  out: './database/drizzle/migrations',

  // npx drizzle-kit studio
  // dbCredentials: {
  //   host: process.env.DB_HOST ?? 'localhost',
  //   user: process.env.DB_USER ?? 'root',
  //   password: process.env.DB_PASSWORD ?? 'password',
  //   database: process.env.DB_NAME ?? 'demo',
  // },
})
