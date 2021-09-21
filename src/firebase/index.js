import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDPpEOdFPgSxpp9JxYyxWj_uE4cihmYIH0",
    authDomain: "ceyntra-project.firebaseapp.com",
    projectId: "ceyntra-project",
    storageBucket: "ceyntra-project.appspot.com",
    messagingSenderId: "1081262731288",
    appId: "1:1081262731288:web:c3b532446b3efc1c79536d"
  };

  
firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();

export { storage , firebase as default };