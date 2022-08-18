export default class ContainerMem {
	constructor(objetos) {
		this.objetos = objetos;
	}

	getAll() {
		return this.objetos;
	}

	get(id) {
		const objeto = this.objetos.find((obj) => obj.id == id);
		if (objeto == undefined) {
			throw new Error(`Ocurrio un error, no se encontro el id ${id}`);
		} else {
			return objeto;
		}
	}

	async save(objeto) {
		const idList = this.objetos.map((a) => a.id);
		const largestId = idList.reduce((a, b) => {
			return Math.max(a, b);
		}, 0);
		const newId = largestId + 1;
		const timestamp = new Date().toLocaleString('es-AR');
		this.objetos.push({ ...objeto, timestamp, id: newId || 1 });
		return newId;
	}

	async update(objeto, id) {
		const index = this.objetos.findIndex((obj) => obj.id == id);
		const hora = new Date().toLocaleString('es-AR');
		if (index == -1) {
			throw new Error(
				`Hubo un error al actualizar, no se encontro el id ${id}`
			);
		} else {
			this.objetos[index] = { ...objeto, id, hora };
		}
	}

	async delete(id) {
		const index = this.objetos.findIndex((obj) => obj.id == id);
		if (index == -1) {
			throw new Error(
				`Hubo un error al borrar el archivo, no se encontro el id ${id}`
			);
		} else {
			this.objetos.splice(index, 1);
		}
	}

	async deleteAll() {
		this.objetos = [];
	}
}
