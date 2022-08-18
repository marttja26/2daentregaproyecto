import ContenedorMongoDB from '../../containers/ContainerMongoDb.js';

class ProductosDaoMongoDb extends ContenedorMongoDB {
	constructor() {
		super('productos', {
			code: { type: String, require: true },
			description: { type: String, require: true },
			price: { type: Number, require: true },
			stock: { type: Number, require: true },
			thumbnail: { type: String, require: true },
			timestamp: { type: String, require: true },
			title: { type: String, require: true },
			id: false,
		});
	}
}

export default ProductosDaoMongoDb;
