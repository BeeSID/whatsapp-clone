import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBTcxArDdM7XEQkzv8-Yk0-Xao8qckCCSQ",
    authDomain: "mern-whatsapp-a8b99.firebaseapp.com",
    projectId: "mern-whatsapp-a8b99",
    storageBucket: "mern-whatsapp-a8b99.appspot.com",
    messagingSenderId: "932677268860",
    appId: "1:932677268860:web:9d9a36ff9ac4f2bc5160f9"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export {app, auth, provider};
