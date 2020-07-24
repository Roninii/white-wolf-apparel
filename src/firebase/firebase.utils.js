import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBY0P7rOKCeMKg7F-uFV5exISBN3Ccmxmc",
    authDomain: "white-wolf-apparel.firebaseapp.com",
    databaseURL: "https://white-wolf-apparel.firebaseio.com",
    projectId: "white-wolf-apparel",
    storageBucket: "white-wolf-apparel.appspot.com",
    messagingSenderId: "828820581776",
    appId: "1:828820581776:web:74af7ac7f5e7fc7361d715"
};

// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase