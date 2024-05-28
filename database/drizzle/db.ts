import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'

export const connection = mysql.createPool({
  // mode: 'default'
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,

  // mode: 'planetscale'
  // uri: process.env.PLANETSCALE_DATABASE_URL,
  // uri: 'mysql://root:password@localhost:3306/demo',
})

export const db = drizzle(connection, { schema, mode: 'default' })

export function useDB() {
  const { dbHost, dbUser, dbPassword, dbName } = useRuntimeConfig()

  const connection = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
  })

  return drizzle(connection, { schema, mode: 'default' })
}
