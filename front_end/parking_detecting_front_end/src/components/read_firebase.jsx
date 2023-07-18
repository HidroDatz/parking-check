import { getDatabase,ref,onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

import { useState, useEffect } from "react";
import Page2 from "./Page2";
const firebaseConfig = {
    apiKey: "AIzaSyDO1FpVtQNZWvfpr_S20Nb9muSAgb_mzAw",
    authDomain: "fir-firebase-4a9b5.firebaseapp.com",
    databaseURL: "https://fir-firebase-4a9b5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-firebase-4a9b5",
    storageBucket: "fir-firebase-4a9b5.appspot.com",
    messagingSenderId: "358028421082",
    appId: "1:358028421082:web:c35cd6c1e19aa0d236c2e3",
    measurementId: "G-KP1JMC5TJ6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const ParkingCheck = () => {
    const [jsonData, setJsonData] = useState(null);
    const [zone1, setZone1] = useState([]);
    const [zone2, setZone2] = useState([]);

    useEffect(() => {
        // Đọc dữ liệu từ tệp JSON (hoặc từ API) bằng cách import tệp JSON hoặc sử dụng fetch
        const dataRef = ref(db, '/');

        onValue(dataRef, (snapshot) => {
            setJsonData(snapshot.val());
        });
        console.log(jsonData);
        // Xử lý dữ liệu để phân loại thành "zone1" và "zone2" với các slot và status tương ứng
        const zone1Data = [];
        const zone2Data = [];

        for (const key in jsonData) {
            if (key.startsWith("Zone1")) {
                zone1Data.push({
                    stt: key.replace("Zone1_A", ""),
                    slot: key.replace("Zone1_", ""),
                    slotStatus: jsonData[key],
                });
            } else if (key.startsWith("Zone2")) {
                zone2Data.push({
                    stt: key.replace("Zone2_B", ""),
                    slot: key.replace("Zone2_", ""),
                    slotStatus: jsonData[key],
                });
            }
        }

        // Cập nhật giá trị của "zone1" và "zone2" bằng dữ liệu phân loại
        setZone1(zone1Data);
        setZone2(zone2Data);
    }, []);
    return Page2(zone1, zone2);
}

export default ParkingCheck;
