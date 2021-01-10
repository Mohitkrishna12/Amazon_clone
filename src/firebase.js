import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCL_qG8eGb5qgnX0JmM9eQprVFcb9OYJHg",
  authDomain: "clone-c5f41.firebaseapp.com",
  projectId: "clone-c5f41",
  storageBucket: "clone-c5f41.appspot.com",
  messagingSenderId: "886340877394",
  appId: "1:886340877394:web:abe759bfd6f5198d19f38b",
  measurementId: "G-0LSL4L6P7R"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};