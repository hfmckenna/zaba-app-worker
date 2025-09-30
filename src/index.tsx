import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Oh no!</h1>)
})

app.get('/hello', (c) => {
	return c.render(<h1>Hono World!</h1>)
})

export default app
