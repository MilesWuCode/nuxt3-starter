import { useDB } from '~/database/drizzle/db'

export default defineEventHandler(async () => {
  const data = await useDB()
    .query.posts.findMany()
    .catch((error) => {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
      })
    })

  return { data }
})
