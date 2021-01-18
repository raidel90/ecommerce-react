  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  
  const config = {
    apiKey: 'AIzaSyCLzuvL4lOmSMKm0NirxENyEJT1qRlxj-M',
        authDomain: 'react-shop-db-7fb04.firebaseapp.com',
        projectId: 'react-shop-db-7fb04',
        storageBucket: 'react-shop-db-7fb04.appspot.com',
        messagingSenderId: '883343838368',
        appId: '1:883343838368:web:d4b1c087af98d642cecdc5',
        measurementId: 'G-S9PD5QZ4LV'
    };

    firebase.initializeApp(config);
    
    export const auth = firebase.auth();
    export const firestore =firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider(); 
    provider.setCustomParameters({prompt:'select_account'});
    export const signInwithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;