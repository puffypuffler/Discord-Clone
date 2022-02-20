import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQVJOsUcoo0aluGud5oM7wFVUm32fzork",
    authDomain: "discord-clone-30772.firebaseapp.com",
    projectId: "discord-clone-30772",
    storageBucket: "discord-clone-30772.appspot.com",
    messagingSenderId: "241833952690",
    appId: "1:241833952690:web:0b431a803af7c9e198d0ab",
    measurementId: "G-7MZ5G03KE7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;