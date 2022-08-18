import ContainerFs from '../../containers/ContainerFs.js';

class CarritosDaoFs extends ContainerFs {
	constructor() {
		super('cart.json');
	}
}

export default CarritosDaoFs;
