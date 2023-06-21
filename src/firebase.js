import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB14XoOWFzhS3gcTsUKoqgq2qwZlN3-A40",
  authDomain: "netflix-clone-2a87f.firebaseapp.com",
  projectId: "netflix-clone-2a87f",
  storageBucket: "netflix-clone-2a87f.appspot.com",
  messagingSenderId: "1077527748871",
  appId: "1:1077527748871:web:2a782d1a04dac8537be5a2",
  measurementId: "G-08RLG4SXET"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;