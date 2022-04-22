import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
require('dotenv').config()

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_APIKEY,
	authDomain: process.env.FIREBASE_AUTHDOMAIN,
	databaseURL: process.env.FIREBASE_DATABASEURL,
	projectId: process.env.FIREBASE_PROJECTID,
	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
	appId: process.env.FIREBASE_APPID	
};

// console.log('firebaseConfig', firebaseConfig)

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;