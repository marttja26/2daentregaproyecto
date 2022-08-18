import ContainerMem from '../../containers/ContainerMem.js';

class CarritosDaoMem extends ContainerMem {
	constructor() {
		super([
			{
				productos: [
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
						title: 'Harry Poter Y El Prisionero De Azkaban',
						price: 13,
						thumbnail:
							'https://images-na.ssl-images-amazon.com/images/I/8103uoOEY9L.jpg',
						id: 2,
						description: 'alto libro',
						code: '23DB',
						stock: 24,
					},
				],
				timestamp: '29/7/2022 03:05:41',
				id: 1,
				hora: '17/8/2022 21:44:36',
			},
		]);
	}
}

export default CarritosDaoMem;
