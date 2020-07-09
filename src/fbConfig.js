import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOKD7nD1FTZql9PCFGl6fi_ddSL_O3EJc",
  authDomain: "mec-projects.firebaseapp.com",
  databaseURL: "https://mec-projects.firebaseio.com",
  projectId: "mec-projects",
  storageBucket: "mec-projects.appspot.com",
  messagingSenderId: "399057926703",
  appId: "1:399057926703:web:da27c91e4a15c2f28ba4da",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };

