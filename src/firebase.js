import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAfnu212-XgisAOox38GIue0MByo9dLDF4",
    authDomain: "gotmclub-f8973.firebaseapp.com",
    projectId: "gotmclub-f8973",
    storageBucket: "gotmclub-f8973.appspot.com",
    messagingSenderId: "11943177391",
    appId: "1:11943177391:web:0b817a30f21787b062f85a",
    measurementId: "G-HTEYYK25CG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;