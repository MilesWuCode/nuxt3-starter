import {
  mysqlTable,
  serial,
  text,
  varchar,
  timestamp,
} from 'drizzle-orm/mysql-core'

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 100 }).notNull(),
  content: text('content').default(''),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export type Post = typeof posts.$inferSelect // return type when queried
export type NewPost = typeof posts.$inferInsert // insert type
