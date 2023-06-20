import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCPfR7ez98lyH3nsuPFvD_lw9Vs-9K40dY",
    authDomain: "test-e584f.firebaseapp.com",
    projectId: "test-e584f",
    storageBucket: "test-e584f.appspot.com",
    messagingSenderId: "1057570455871",
    appId: "1:1057570455871:web:2020cdb433916ed599138a",
    measurementId: "G-2XKJ9R05VY"
  };
  const app = initializeApp(firebaseConfig)

  export const signwithGoogle = async () =>{
    const auth = getAuth()
    try {
       const result=  await signInWithPopup(auth, new GoogleAuthProvider())
    } catch (error) {
        console.log(error)
    }
  }