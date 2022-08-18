import ContenedorMongoDB from '../../containers/ContainerMongoDb.js';

class CarritoDaoMongoDb extends ContenedorMongoDB {
	constructor() {
		super('carritos', {
			productos: { type: Array, require: true },
			timestamp: { type: String, require: true },
			id: false,
		});
	}
}

export default CarritoDaoMongoDb;
