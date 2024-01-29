export default defineEventHandler(async (event) => {
  const bodyOdy = await readBody(event)
  return {
    message: bodyOdy,
  }
})
