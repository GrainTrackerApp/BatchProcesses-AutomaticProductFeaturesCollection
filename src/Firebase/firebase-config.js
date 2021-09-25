import firebase from 'firebase';
import "firebase/auth";
import "firebase/storage";

const app = firebase.initializeApp( {
    apiKey: "AIzaSyDYg_0mSiDhneXuruEKmpNyn3f-AcSgh_I",
    authDomain: "tracker-2baa0.firebaseapp.com",
    projectId: "tracker-2baa0",
    storageBucket: "tracker-2baa0.appspot.com",
    messagingSenderId: "499483603485",
    appId: "1:499483603485:web:25e46770acf6b11e27ccf4",
    measurementId: "G-B7YK1NPRC6"
  });
  

  export default app;
  