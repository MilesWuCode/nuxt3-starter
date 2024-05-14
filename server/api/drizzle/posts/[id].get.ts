import { db } from '~/database/drizzle/db'
import { posts } from '~/database/drizzle/schema'
import { and, asc, desc, eq, or } from 'drizzle-orm'

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'id') || '')

  if (!Number.isInteger(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
  }

  const data = await db.query.posts.findFirst({ where: eq(posts.id, id) })

  if (!data) {
    setResponseStatus(event, 404)

    return {
      code: 404,
      message: 'The requested resource was not found',
    }
  }

  return data
})
