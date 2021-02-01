  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  //My Project 65265

  const config = {
          apiKey: "AIzaSyAAGZzbXEC30WbpIJbDWe33AYodxgfYbFA",
          authDomain: "prime-force-302216.firebaseapp.com",
          projectId: "prime-force-302216",
          storageBucket: "prime-force-302216.appspot.com",
          messagingSenderId: "989887129351",
          appId: "1:989887129351:web:f6d91785e1e82258df47a2",
          measurementId: "G-RBZ0MEDEW1"
    };

    export const createUserProfileDocument = async( userAuth, additionalData ) => {
     
       if(!userAuth) return;
     
    

       const userRef=firestore.doc(`users/${userAuth.uid}`);

       const snapShot = await userRef.get();

        if(!snapShot.exists){

          const {displayName, email}=userAuth;
      
          const createdAt =new Date();

          try{

            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });

          }catch(error){
            console.log('error creando usuario', error.message)
          }

        }
         
        return userRef;
    }

    firebase.initializeApp(config);
    
    //funcion para guardar datos automaticamente
    export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef= firestore.collection(collectionKey);
      const batch = firestore.batch();

      objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
      });

      return await batch.commit();
    }

    export const convertCollectionsSnapshotToMap = (collections) => {

      const transformCollection=collections.docs.map(doc => {
        
         const {title, items} = doc.data();

          return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
          };

          });    

          return transformCollection.reduce((accumulator, collection) => {
                accumulator[collection.title.toLowerCase()] = collection; 
                return accumulator;
              }, {});
    };
    
    export const auth = firebase.auth();
    export const firestore =firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider(); 


    provider.setCustomParameters({prompt:'select_account'});
    export const signInwithGoogle = () => auth.signInWithPopup(provider);

    export default firebase;