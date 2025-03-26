import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json([{ message: 'Hello Hono!' }, { test: true }])
})

export default app
