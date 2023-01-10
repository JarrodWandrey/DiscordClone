import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdk_Z59G31o_2UWmuPK-6s5fdwh5bNlPs",
  authDomain: "discordclone-af46d.firebaseapp.com",
  projectId: "discordclone-af46d",
  storageBucket: "discordclone-af46d.appspot.com",
  messagingSenderId: "536911289164",
  appId: "1:536911289164:web:9cf46319ec84b7c8bccde9",
  measurementId: "G-QJ3SVKXQMF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;