import { db } from '~/server/database/drizzle/db'

export default defineEventHandler(async (event) => {
  const data = await db.query.posts.findMany()

  setResponseStatus(event, 200)

  return { data }
})
