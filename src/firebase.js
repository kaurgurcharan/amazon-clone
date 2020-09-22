import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBE10GDQ2bUFgP22nmQvLC5iluv1fMHBxY",
  authDomain: "clone-7e1cf.firebaseapp.com",
  databaseURL: "https://clone-7e1cf.firebaseio.com",
  projectId: "clone-7e1cf",
  storageBucket: "clone-7e1cf.appspot.com",
  messagingSenderId: "1063483876670",
  appId: "1:1063483876670:web:f6fa1ea64a1ab42756b86f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };