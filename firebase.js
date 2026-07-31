import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBtqpYmWIp4Zn2-dcWzwf1syGPOW63n-s8",
  authDomain: "breyn-rinq.firebaseapp.com",
  databaseURL: "https://breyn-rinq-default-rtdb.firebaseio.com/",
  projectId: "breyn-rinq",
  storageBucket: "breyn-rinq.firebasestorage.app",
  messagingSenderId: "1033792059576",
  appId: "1:1033792059576:web:8f832f5bf5c7e34e579c4d",
  measurementId: "G-EHEGPPRGNP"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
