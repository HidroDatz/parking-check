import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpl3usEWQBmwsz2ncr8VQL5FwdRs42e_M",
  authDomain: "module-7-realtime-db.firebaseapp.com",
  databaseURL:
    "https://module-7-realtime-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "module-7-realtime-db",
  storageBucket: "module-7-realtime-db.appspot.com",
  messagingSenderId: "844850635767",
  appId: "1:844850635767:web:66c0aee572c095f9f5c4f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "app");
// Get a Firestore instance
const firestore = getFirestore(app);

function LoginSession() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false); // New state variable

  const handleLogin = async () => {
    try {
      const userCollection = collection(firestore, "user");
      console.log(userCollection);
      const dataSnapshot = await getDocs(userCollection);

      const dataList = dataSnapshot.docs.map((doc) => doc.data());
      dataList.forEach((data) => {
        if (data?.user_name === username && data?.pass === password) {
            localStorage.setItem("isLoggedIn", true);
            // Redirect to the desired path
          window.location.href = "/";
        } else {
          setLoginFailed(true);
        }
      });
    } catch (error) {
      console.log(error);
      setLoginFailed(true);
    }
  };

  return (
    <div style={{ marginTop: "40px" }}>
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

        {loginFailed && (
          <h3 style={{ color: "red" }}>Login failed, please try again.</h3>
        )}
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginSession;
