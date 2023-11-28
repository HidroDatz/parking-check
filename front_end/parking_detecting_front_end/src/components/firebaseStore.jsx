import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCpl3usEWQBmwsz2ncr8VQL5FwdRs42e_M",
  authDomain: "module-7-realtime-db.firebaseapp.com",
  databaseURL: "https://module-7-realtime-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "module-7-realtime-db",
  storageBucket: "module-7-realtime-db.appspot.com",
  messagingSenderId: "844850635767",
  appId: "1:844850635767:web:66c0aee572c095f9f5c4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "app");
// Get a Firestore instance
const firestore = getFirestore(app);

// Get the "user" collection
const userCollection = collection(firestore, "user");

// Get all documents in the "user" collection
const querySnapshot = await getDocs(userCollection);

// Iterate over the documents and access the data
querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
});