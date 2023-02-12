import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCq1SMGnctU3-xcGaH3-UOH2qO66ZDahbA",
    authDomain: "fb-crud-react-ileza.firebaseapp.com",
    projectId: "fb-crud-react-ileza",
    storageBucket: "fb-crud-react-ileza.appspot.com",
    messagingSenderId: "686945637893",
    appId: "1:686945637893:web:220d65a2c9a3f80a5e6e6c",
    measurementId: "G-Z98X5FVZPQ"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

