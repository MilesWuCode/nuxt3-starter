import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'

const { dbHost, dbUser, dbPassword, dbName } = useRuntimeConfig()

export const connection = mysql.createPool({
  // mode: 'default'
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  multipleStatements: true,

  // mode: 'planetscale'
  // uri: process.env.PLANETSCALE_DATABASE_URL,
  // uri: 'mysql://root:password@localhost:3306/demo',
})

export const db = drizzle(connection, { schema, mode: 'default' })
