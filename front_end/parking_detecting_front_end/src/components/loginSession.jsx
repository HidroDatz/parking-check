import React, { useState } from "react";
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


async function LoginSession() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginFailed, setLoginFailed] = useState(false); // New state variable

    const userCollection = collection(firestore, "user");

    const querySnapshot = await getDocs(userCollection);

    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
    const handleLogin = async () => {
        // try {
        //     const response = await fetch("http://127.0.0.1:5000/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({ username, password }),
        //     });
        //     if (response.ok) {
        //         const data = await response.json(); // Parse the response data
        //         if (!data?.ok){
        //             setLoginFailed(true)
        //         }
        //         else{
        //     }
        //     } else {
        //         setLoginFailed(true); // Set loginFailed to true if login fails
        //     }
        // } catch (error) {
        //     // Handle network error
        // }
    };

    return (
        <div style={{marginTop:'40px'}}>
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                style={{
                    marginBottom: "10px",
                    marginRight: "10px",
                    padding: "5px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    height: "25px",
                    width: "250px",
                }}
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{
                    marginBottom: "10px",
                    padding: "5px",
                    border: "1px solid gray",
                    borderRadius: "5px",
                    height: "25px",
                    width: "250px",
                }}
            />
            
            {loginFailed && <h3 style={{color:"red"}}>Login failed, please try again.</h3>} {/* Display login failed message */}
            </div>
        <button onClick={handleLogin}>Login</button>
                </div>
        );
}

export default LoginSession;
