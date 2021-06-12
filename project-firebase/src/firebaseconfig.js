  import firebase from 'firebase';
  import 'firebase/auth';
  import 'firebase/firestore';

  const firebaseConfig = {
    // put your data here
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  //const fireanalytics = firebase.analytics();
  const auth = fire.auth();
  const store = fire.firestore();

  export { auth }
  export { store }
