import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAssO7uEfJFnB-MoKi18G9_82f4pxlJj2Y",
  authDomain: "cursoreactfirebase-ef591.firebaseapp.com",
  projectId: "cursoreactfirebase-ef591",
  storageBucket: "cursoreactfirebase-ef591.appspot.com",
  messagingSenderId: "1000124326157",
  appId: "1:1000124326157:web:a02cf94e20e8758a5c5044",
  measurementId: "G-24PWSVQYKF"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };