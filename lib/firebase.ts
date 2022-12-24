import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseCredentials = {
  apiKey: "AIzaSyA0pEqFzeCFx8Z8UncXeNqg-ZnB3rxsqCA",
  authDomain: "lpu-cse.firebaseapp.com",
  projectId: "lpu-cse",
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

//If an firebase app hasn't already been created

firebase.initializeApp(firebaseCredentials)
export const auth = firebase.auth();
export default firebase;