// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT4kDwMxtWMIVBQ25qiJ-G3csqdLJ9s4A",
  authDomain: "porishodh-web.firebaseapp.com",
  projectId: "porishodh-web",
  storageBucket: "porishodh-web.firebasestorage.app",
  messagingSenderId: "1007048122574",
  appId: "1:1007048122574:web:babc8be6d69cb4cdf3709f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;