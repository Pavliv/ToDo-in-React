import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyDl5_Mu-ga-Udb6OLzHxoXHjcdubFpl2FI",
  authDomain: "phone-list-c853f.firebaseapp.com",
  databaseURL: "https://phone-list-c853f.firebaseio.com",
  projectId: "phone-list-c853f",
  storageBucket: "phone-list-c853f.appspot.com",
  messagingSenderId: "42016865175"
};

const devConfig = {
  apiKey: "AIzaSyDl5_Mu-ga-Udb6OLzHxoXHjcdubFpl2FI",
  authDomain: "phone-list-c853f.firebaseapp.com",
  databaseURL: "https://phone-list-c853f.firebaseio.com",
  projectId: "phone-list-c853f",
  storageBucket: "phone-list-c853f.appspot.com",
  messagingSenderId: "42016865175"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
