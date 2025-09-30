import { Hono } from 'hono';
import { renderer } from './renderer';

export type Bindings = {
	INGRESS_QUEUE: Queue<any>;
}

const app = new Hono<{ Bindings: Bindings }>();

app.use(renderer);

app.get('/', (c) => {
	return c.render(<h1>Oh no!</h1>);
});

app.get('/hello', async (c) => {
	await c.env.INGRESS_QUEUE.send({ name: 'World' });
	return c.render(<h1>Hono World!</h1>);
});

export default app;
