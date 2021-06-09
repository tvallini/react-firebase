  import firebase from 'firebase';
  import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyDeDiGPH_Yr9-SUSosG4t3WCSEVckVLw_M",
    authDomain: "react-project-95cec.firebaseapp.com",
    projectId: "react-project-95cec",
    storageBucket: "react-project-95cec.appspot.com",
    messagingSenderId: "20588306844",
    appId: "1:20588306844:web:7234a7c7034c24b1692859",
    measurementId: "G-01ZF5E4267"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //const fireanalytics = firebase.analytics();
  const auth = fire.auth();

  export {auth}