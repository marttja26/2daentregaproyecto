import ContainerMem from '../../containers/ContainerMem.js';

class ProductosDaoMem extends ContainerMem {
	constructor() {
		super([
			{
				title: 'Harry Poter Y El Prisionero De Azkaban',
				price: 13,
				thumbnail:
					'https://images-na.ssl-images-amazon.com/images/I/8103uoOEY9L.jpg',
				id: 2,
				description: 'alto libro',
				code: '23DB',
				stock: 24,
			},
			{
				title: 'Harry Poter Y La Piedra Filosofal',
				price: 12,
				thumbnail:
					'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
				id: 1,
				description: 'alto libro',
				code: '23DA',
				stock: 50,
			},
			{
				title: 'Harry Poter Y La Piedra aaa',
				price: 12,
				thumbnail:
					'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
				id: 3,
				description: 'alto libro',
				code: '23DA',
				stock: 50,
				timestamp: '17/8/2022 20:50:42',
			},
		]);
	}
}

export default ProductosDaoMem;