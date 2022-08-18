import mongoose from 'mongoose';
import config from '../config.js';

await mongoose.connect(config.mongodb.cnxStr);

class ContenedorMongoDB {
	constructor(nombreCollection, schema) {
		this.collection = mongoose.model(nombreCollection, schema);
	}

	async getAll() {
		try {
			const docs = await this.collection.find({});
			return docs;
		} catch (error) {
			console.log(`Hubo un error : ${error}`);
		}
	}

	async get(id) {
		try {
			const docs = await this.collection.findOne({ id: parseInt(id) });
			return docs;
		} catch (error) {
			console.log(`Hubo un error : ${error}`);
		}
	}

	async save(objeto) {
		const timestamp = new Date().toLocaleString('es-AR');
		const objetos = await this.getAll();
		const idList = objetos.map((a) => a.id);
		const largestId = idList.reduce((a, b) => {
			return Math.max(a, b);
		}, 0);
		const newId = largestId + 1;
		objetos.push({ ...objeto, timestamp, id: newId || 1 });
		try {
			await this.collection.create(objetos);
			return newId;
		} catch (error) {
			throw new Error(`Hubo un error al guardar el archivo ${error}`);
		}
	}

	async update(objeto, id) {
		const objetos = await this.getAll();
		const object = objetos.find((obj) => obj.id === parseInt(id));
		const timestamp = new Date().toLocaleString('es-AR');
		if (object === undefined) {
			throw new Error(
				`Hubo un error al actualizar, no se encontro el id ${id}`
			);
		} else {
			Object.assign(object, objeto);
		}
		try {
			await this.collection.replaceOne(
				{ id: parseInt(id) },
				{ ...object.toObject(), timestamp }
			);
		} catch (error) {
			throw new Error(`Hubo un error al editar el archivo ${error}`);
		}
	}

	async delete(id) {
		try {
			const { deletedCount } = await this.collection.deleteOne({
				id: parseInt(id),
			});
			if (deletedCount < 1) {
				console.log(`Ocurrio un error, no se encontro el id ${id}`);
			}
		} catch (error) {
			throw new Error(`Hubo un error al borrar el archivo ${error}`);
		}
	}
}

export default ContenedorMongoDB;
