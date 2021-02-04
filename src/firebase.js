import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAJEvL-4DqvDyZzfO4JPT2bXxAcilnQEvM",
    authDomain: "mail-app-8ff02.firebaseapp.com",
    projectId: "mail-app-8ff02",
    storageBucket: "mail-app-8ff02.appspot.com",
    messagingSenderId: "549575581433",
    appId: "1:549575581433:web:ecc76650a42c6e81864c28"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;