import fs from 'fs';

export default class ContainerFs {
	constructor(ruta) {
		this.ruta = ruta;
	}

	async getAll() {
		try {
			const objetos = JSON.parse(
				await fs.promises.readFile(this.ruta, 'utf-8')
			);
			return objetos;
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	async get(id) {
		const objetos = await this.getAll();
		const objeto = objetos.find((obj) => obj.id == parseInt(id));
		if (objeto == undefined) {
			throw new Error(`Ocurrio un error, no se encontro el id ${id}`);
		} else {
			return objeto;
		}
	}

	async save(objeto) {
		const objetos = await this.getAll();
		const idList = objetos.map((a) => a.id);
		const largestId = idList.reduce((a, b) => {
			return Math.max(a, b);
		}, 0);
		const newId = largestId + 1;
		const timestamp = new Date().toLocaleString('es-AR');
		objetos.push({ ...objeto, timestamp, id: newId || 1 });
		try {
			await fs.promises.writeFile(this.ruta, JSON.stringify(objetos));
			return newId;
		} catch (error) {
			throw new Error(`Hubo un error al guardar el archivo ${error}`);
		}
	}

	async update(objeto, id) {
		const objetos = await this.getAll();
		const index = objetos.findIndex((obj) => obj.id == parseInt(id));
		const timestamp = new Date().toLocaleString('es-AR');
		if (index == -1) {
			throw new Error(
				`Hubo un error al actualizar, no se encontro el id ${id}`
			);
		} else {
			objetos[index] = { ...objeto, id, timestamp };
		}
		try {
			await fs.promises.writeFile(this.ruta, JSON.stringify(objetos));
		} catch (error) {
			throw new Error(`Hubo un error al editar el archivo ${error}`);
		}
	}

	async delete(id) {
		const objetos = await this.getAll();
		const index = objetos.findIndex((obj) => obj.id == parseInt(id));
		if (index == -1) {
			throw new Error(
				`Hubo un error al borrar el archivo, no se encontro el id ${id}`
			);
		} else {
			objetos.splice(index, 1);
		}
		try {
			await fs.promises.writeFile(this.ruta, JSON.stringify(objetos));
		} catch (error) {
			throw new Error(`Hubo un error al borrar el archivo ${error}`);
		}
	}

	async deleteAll() {
		try {
			await fs.promises.writeFile(this.ruta, JSON.stringify([]));
		} catch (error) {
			throw new Error(`Hubo un error al borrar todo los archivos ${error}`);
		}
	}
}
