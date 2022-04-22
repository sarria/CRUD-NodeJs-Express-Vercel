import { collection, doc, getDocs, deleteDoc, addDoc, getDoc, updateDoc } from 'firebase/firestore';
import db from '../firebase'
import coord from '../openweathermap'
// API
// https://cloud.google.com/firestore/docs/query-data/get-data
// https://firebase.google.cn/docs/firestore/query-data/queries?hl=en&%3Bauthuser=2&authuser=2

export const addUser = async (req, res, next) => {
	try {
        let data = req.body;
		if (data.name && data.zipCode) {
			// console.log('addUser ::', data);

			const extra = await coord(data.zipCode);
			data = {...data, ...extra};
			const docRef = await addDoc(collection(db, "users"), data);

			res.send({id:docRef.id, ...data});
		} else {
			res.send({error:`Please provide name and zipcoe`});
		}
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const getUsers = async (req, res) => {
	try {
		const querySnapshot = await getDocs(collection(db, "users"));
		const list = querySnapshot.docs.map(doc => {
			return {
				id: doc.id, 
				...doc.data()
			}
		});
		res.send(list);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const getUserById = async (req, res) => {
	try {
		const id = req.params.id;
		const docRef = doc(db, "users", id);
		const docSnap = await getDoc(docRef);
		
		if (docSnap.exists()) {
			console.log("Document data:", docSnap.data());
			res.send({
					id: docSnap.id,
				...docSnap.data()
			})
		} else {
			res.send({})
		}
	} catch (error) {
        res.status(400).send(error.message);
    }		
}

export const updateUser = async (req, res) => {
	try {
		let data = req.body;
		const id = req.params.id;
		const extra = data.zipCode ? await coord(data.zipCode) : {};
		const docRef = doc(db, "users", id);
		data = {id, ...data, ...extra}

		await updateDoc(docRef, data);

		res.send(data);
	} catch (error) {
		res.status(400).send(error.message);
	}
}

export const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		await deleteDoc(doc(db, "users", id));
		res.send({cod: 200, message:`User with id ${id} has benn deleted`})
	} catch (error) {
        res.status(400).send(error.message);
    }
}


