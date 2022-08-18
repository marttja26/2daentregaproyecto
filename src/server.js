import 'dotenv/config';
import express from 'express';
import productosRouter from './routes/productosRouter.js';
import carritoRouter from './routes/carritosRouter.js';
import { urlCheck } from './middlewares/middlewares.js';
const app = express();

// Server

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(urlCheck);

app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
	console.log(`Servidor Http escuchando en el puerto ${server.address().port}`);
});
server.on('error', (error) => console.log(`Error en servidor ${error}`));
