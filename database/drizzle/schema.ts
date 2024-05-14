import {
  mysqlTable,
  serial,
  text,
  varchar,
  timestamp,
} from 'drizzle-orm/mysql-core'

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 100 }),
  content: text('content'),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
})

export type Post = typeof posts.$inferSelect // return type when queried
export type NewPost = typeof posts.$inferInsert // insert type
