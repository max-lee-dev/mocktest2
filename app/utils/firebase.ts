// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {connectAuthEmulator, getAuth} from "firebase/auth";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDgXfv851X-LCcER8MdF7V0i47n06R3DBs",
  authDomain: "mocktest-946ec.firebaseapp.com",
  projectId: "mocktest-946ec",
  storageBucket: "mocktest-946ec.firebasestorage.app",
  messagingSenderId: "165470783924",
  appId: "1:165470783924:web:78ca6aa68b5975ebbe0ae1",
  measurementId: "G-24HVNXF9C2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
// Firestore Emulator
if (process.env.NODE_ENV === "development") {
  connectFirestoreEmulator(db, "localhost", 8080);
}
// Auth Emulator
if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
}

export {auth, db};
export default app;