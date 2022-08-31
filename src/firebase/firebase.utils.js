import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config={
    apiKey: "AIzaSyAG3t9YBfbK-LuWYRZARPrU2MxEZ90UZ40",
    authDomain: "crwn-db-f08fc.firebaseapp.com",
    projectId: "crwn-db-f08fc",
    storageBucket: "crwn-db-f08fc.appspot.com",
    messagingSenderId: "890178714391",
    appId: "1:890178714391:web:8bcf6ede118e3c7e2c9552",
    measurementId: "G-7EEL4YTVQT"
  };
export const createUserProfileDocument=async(userAuth,additionData) =>{
    if(!userAuth) return;
    const userRef=firestore.doc(`user/${userAuth.uid}`);
    const snapShot= await userRef.get();
    
    if(!snapShot.exists){
const {displayName,email}=userAuth;
const createdAt=new Date().getFullYear();
try{await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionData
})

}catch(error){
console.log("error creating user",error.message);
}
}console.log(snapShot);
return userRef;
}
  firebase.initializeApp(config);

  export const auth=firebase.auth();

  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:"select_account"});

  export const signInWithGoogle= ()=> auth.signInWithPopup(provider);

  export default firebase;

