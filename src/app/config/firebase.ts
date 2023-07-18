
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1oBQY3iF9p4fwKfR6KyKwYedbR5Oy99Q",
  authDomain: "santanagames.firebaseapp.com",
  projectId: "santanagames",
  storageBucket: "santanagames.appspot.com",
  messagingSenderId: "766585952638",
  appId: "1:766585952638:web:843e8d541a7b632c8cfb2f",
  measurementId: "G-31354105QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
