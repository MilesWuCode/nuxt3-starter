import { useDB } from '~/database/drizzle/db'

export default defineEventHandler(async (event) => {
  const data = await useDB().query.posts.findMany()

  setResponseStatus(event, 200)

  return { data }
})
