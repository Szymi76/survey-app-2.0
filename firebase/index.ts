// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBsxNG67-QpD1XpOs9sHVYv12oY0e_ZAIg",
  authDomain: "survey-app-6c566.firebaseapp.com",
  projectId: "survey-app-6c566",
  storageBucket: "survey-app-6c566.appspot.com",
  messagingSenderId: "440002586178",
  appId: "1:440002586178:web:30278a96e5915df727efdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
