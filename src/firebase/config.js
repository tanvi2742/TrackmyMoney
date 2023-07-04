import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKHQEucVy5dk7DsUT9-34lZAn31YiesNw",
  authDomain: "track-my-money-c8642.firebaseapp.com",
  projectId: "track-my-money-c8642",
  storageBucket: "track-my-money-c8642.appspot.com",
  messagingSenderId: "947423039547",
  appId: "1:947423039547:web:8d5ae45daf1b4ef9a64c1e",
};
// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
