import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBsFc0F5wHleSkgpPdLQyV_0XMJPpjsWRg",
  authDomain: "projeto-desenvolvimento-de-app.firebaseapp.com",
  databaseURL: "https://projeto-desenvolvimento-de-app-default-rtdb.firebaseio.com",
  projectId: "projeto-desenvolvimento-de-app",
  storageBucket: "projeto-desenvolvimento-de-app.firebasestorage.app",
  messagingSenderId: "300066722483",
  appId: "1:300066722483:web:2adffeb900f78bc56a56c6"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
