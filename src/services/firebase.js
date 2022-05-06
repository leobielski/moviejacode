import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAg-Jn3WmL13N-HsnR9hSoCO1L064h3AfA',
  authDomain: 'movie-now-e9de5.firebaseapp.com',
  projectId: 'movie-now-e9de5',
  storageBucket: 'movie-now-e9de5.appspot.com',
  messagingSenderId: '1019596011698',
  appId: '1:1019596011698:web:345e967ec052634d9c31ab',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export default db;
