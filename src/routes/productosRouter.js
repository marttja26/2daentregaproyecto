import { Router } from 'express';
import { productosDao } from '../daos/daoSwitch.js';
import { onlyAdm } from '../middlewares/middlewares.js';

const productosRouter = new Router();

const productosApi = productosDao;

productosRouter.get('/', async (req, res) => {
	res.json(await productosApi.getAll());
});

productosRouter.get('/:id', async (req, res) => {
	res.json(await productosApi.get(req.params.id));
});

productosRouter.post('/', onlyAdm, async (req, res) => {
	res.json(await productosApi.save(req.body));
});

productosRouter.put('/:id', onlyAdm, async (req, res) => {
	res.json(await productosApi.update(req.body, req.params.id));
});

productosRouter.delete('/:id', onlyAdm, async (req, res) => {
	res.json(await productosApi.delete(req.params.id));
});

export { productosApi };

export default productosRouter;
