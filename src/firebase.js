import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB_r5W4sjHPqyWNjedxRxiXskvA86ABgfs",
    authDomain: "linkedin-clone-43011.firebaseapp.com",
    projectId: "linkedin-clone-43011",
    storageBucket: "linkedin-clone-43011.appspot.com",
    messagingSenderId: "238217977509",
    appId: "1:238217977509:web:ba1a21394835fb6aeb774c"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth();
  export {db,auth};

