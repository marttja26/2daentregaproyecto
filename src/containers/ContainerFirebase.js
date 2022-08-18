import config from '../config.js';
import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

initializeApp({ credential: cert(config.firebase) });

export default class ContainerFirebase {
	constructor(collection) {
		const db = getFirestore();
		this.collectionRef = db.collection(collection);
	}

	async getAll() {
		try {
			const collection = await this.collectionRef.get();
			const objetos = [];
			collection.forEach((doc) => {
				objetos.push({ ...doc.data(), id: doc.id });
			});
			console.log(objetos);
			return objetos;
		} catch (error) {
			console.log(error);
			return [];
		}
	}

	async get(id) {
		try {
			const objeto = await this.collectionRef.doc(id).get();
			if (objeto.data() === undefined) {
				throw new Error(`Ocurrio un error, no se encontro el id ${id}`);
			} else {
				return objeto.data();
			}
		} catch (error) {
			throw new Error(`Hubo un error al leer el archivo ${error}`);
		}
	}

	async save(objeto) {
		try {
			const timestamp = new Date().toLocaleString('es-AR');
			const res = await this.collectionRef.add({ ...objeto, timestamp });
			await this.collectionRef.doc(res.id).update({ id: res.id });
		} catch (error) {
			throw new Error(`Hubo un error al guardar el archivo ${error}`);
		}
	}

	async update(objeto, id) {
		console.log(objeto, id);
		try {
			const timestamp = new Date().toLocaleString('es-AR');
			await this.collectionRef.doc(id).update({ ...objeto, timestamp });
		} catch (error) {
			throw new Error(`Hubo un error al editar el archivo ${error}`);
		}
	}

	async delete(id) {
		try {
			await this.collectionRef.doc(id).delete();
		} catch (error) {
			throw new Error(`Hubo un error al borrar el archivo ${error}`);
		}
	}

	async deleteAll() {
		try {
			this.collectionRef.get().then((querySnapshot) => {
				querySnapshot.docs.forEach((snapshot) => {
					snapshot.ref.delete();
				});
			});
		} catch (error) {
			throw new Error(`Hubo un error al borrar todos los archivos ${error}`);
		}
	}
}
