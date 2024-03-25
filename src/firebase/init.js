// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpWJr-vcfNiQRpNNH3lYNGZV4Ego5qRvQ",
  authDomain: "test-3b4f1.firebaseapp.com",
  projectId: "test-3b4f1",
  storageBucket: "test-3b4f1.appspot.com",
  messagingSenderId: "131030931772",
  appId: "1:131030931772:web:17ab237dd8eca45cd1e639",
  measurementId: "G-QZY7MW2NYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//init firestore service 
const db = getFirestore()
export default db

