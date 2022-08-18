import { Router } from 'express';
import { carritosDao } from '../daos/daoSwitch.js';
import { productosApi } from './productosRouter.js';

const carritoRouter = new Router();

const carritosApi = carritosDao;

carritoRouter.get('/', async (req, res) => {
	res.json((await carritosApi.getAll()).map((carrito) => carrito.id));
});

carritoRouter.post('/', async (req, res) => {
	res.json({ id: await carritosApi.save({ productos: [] }) });
});

carritoRouter.delete('/:id', async (req, res) => {
	res.json(await carritosApi.delete(req.params.id));
});

carritoRouter.get('/:id/productos', async (req, res) => {
	const carrito = await carritosApi.get(req.params.id);
	res.json(carrito.productos);
});

carritoRouter.post('/:id/:productos', async (req, res) => {
	const carrito = await carritosApi.get(req.params.id);
	const producto = await productosApi.get(req.params.productos);
	carrito.productos.push(producto);
	await carritosApi.update(carrito, req.params.id);
	res.end();
});

carritoRouter.delete('/:id/productos/:id_prod', async (req, res) => {
	const carrito = await carritosApi.get(req.params.id);
	let index = carrito.productos.findIndex(
		(producto) => producto.id == req.params.id_prod
	);

	if (index != -1) {
		carrito.productos.splice(index, 1);
		await carritosApi.update(carrito, req.params.id);
	}
	res.end();
});

export default carritoRouter;
