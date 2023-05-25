import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNa5rkn1RyasrOlALBz10eJjBTFgEfA3s",
    authDomain: "alt-f4-55899.firebaseapp.com",
    projectId: "alt-f4-55899",
    storageBucket: "alt-f4-55899.appspot.com",
    messagingSenderId: "23440007041",
    appId: "1:23440007041:web:bcec97412d8ccd4025d280"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)