import ContainerFs from '../../containers/ContainerFs.js';

class ProductosDaoFs extends ContainerFs {
	constructor() {
		super('products.json');
	}
}

export default ProductosDaoFs;
